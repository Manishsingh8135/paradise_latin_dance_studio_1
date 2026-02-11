/**
 * Multi-Provider Email Service for Paradise Dance Studio
 * Orchestrates email sending using multiple providers with automatic failover
 */

import { ProviderFactory, getProviderFactoryConfig } from '../core/provider-factory';
import { ResendProvider } from '../providers/resend-provider';
import { GmailProvider } from '../providers/gmail-provider';
import { TrialSignupData, EmailResult } from '../core/types';
import { renderUserWelcome, renderAdminAlert } from '../templates';
import {
  multiProviderConfig,
  getMultiProviderConfigForLogging,
  getAvailableProviders,
  getLeadRecipients,
  shouldSendEmails,
  isTestMode,
} from '../core/multi-provider-config';
import { sanitizeForLogging } from '../utils/validator';

export class MultiProviderEmailService {
  private factory: ProviderFactory;
  private config: ReturnType<typeof multiProviderConfig>;

  constructor() {
    this.config = multiProviderConfig();
    
    // Initialize provider factory
    const factoryConfig = getProviderFactoryConfig();
    this.factory = new ProviderFactory(factoryConfig);
    
    // Register available providers
    this.registerAvailableProviders();
    
    console.log('📧 Multi-provider email service initialized:', getMultiProviderConfigForLogging());
  }

  /**
   * Register providers based on available configuration
   */
  private registerAvailableProviders(): void {
    const availableProviders = getAvailableProviders();
    
    // Register Resend if configured
    if (availableProviders.includes('resend')) {
      try {
        const resendProvider = new ResendProvider();
        this.factory.registerProvider(resendProvider);
      } catch (error) {
        console.warn('⚠️ Failed to register Resend provider:', error);
      }
    }
    
    // Register Gmail if configured
    if (availableProviders.includes('gmail')) {
      try {
        const gmailProvider = new GmailProvider();
        this.factory.registerProvider(gmailProvider);
      } catch (error) {
        console.warn('⚠️ Failed to register Gmail provider:', error);
      }
    }
    
    if (availableProviders.length === 0) {
      throw new Error('No email providers are configured. Please check your environment variables.');
    }
    
    console.log(`✅ Registered ${availableProviders.length} email provider(s): ${availableProviders.join(', ')}`);
  }

  /**
   * Send trial confirmation email to user
   */
  async sendTrialConfirmation(data: TrialSignupData): Promise<EmailResult & { provider: string }> {
    try {
      // Check if emails should be suppressed
      if (!shouldSendEmails()) {
        console.log('📧 Email sending is suppressed - skipping user confirmation');
        return {
          success: true,
          provider: 'suppressed',
          messageId: 'suppressed',
        };
      }

      const testModeLabel = isTestMode() ? ' (TEST MODE)' : '';
      console.log(`📨 Sending trial confirmation email${testModeLabel}...`);

      const template = await renderUserWelcome(data);
      const result = await this.factory.sendEmail(data.user.email, template);

      if (result.success) {
        console.log(`✅ Trial confirmation email sent successfully via ${result.provider}`);
      } else {
        console.error(`❌ Trial confirmation email failed via ${result.provider}:`, result.error);
      }

      return result;
    } catch (error: unknown) {
      console.error('❌ Trial confirmation template error:', error);
      return {
        success: false,
        error: 'Failed to generate confirmation email template',
        provider: 'none',
      };
    }
  }

  /**
   * Send admin/lead notification email about new trial signup
   * Sends to ALL configured lead recipients
   */
  async sendAdminNotification(data: TrialSignupData): Promise<EmailResult & { provider: string }> {
    try {
      // Check if emails should be suppressed
      if (!shouldSendEmails()) {
        console.log('📧 Email sending is suppressed - skipping admin notification');
        return {
          success: true,
          provider: 'suppressed',
          messageId: 'suppressed',
        };
      }

      // Get all lead recipients
      const recipients = getLeadRecipients();

      if (recipients.length === 0) {
        console.warn('⚠️ No lead recipients configured - skipping admin notification');
        return {
          success: false,
          error: 'No lead recipients configured',
          provider: 'none',
        };
      }

      const testModeLabel = isTestMode() ? ' (TEST MODE)' : '';
      console.log(`📨 Sending admin notification to ${recipients.length} recipient(s)${testModeLabel}...`);

      const template = await renderAdminAlert(data);

      // Send to all recipients
      const results: Array<EmailResult & { provider: string; recipient: string }> = [];

      for (const recipient of recipients) {
        const result = await this.factory.sendEmail(recipient, template);
        results.push({ ...result, recipient });

        if (result.success) {
          console.log(`  ✅ Sent to ${recipient.replace(/(.{3}).*@/, '$1***@')} via ${result.provider}`);
        } else {
          console.error(`  ❌ Failed for ${recipient.replace(/(.{3}).*@/, '$1***@')}: ${result.error}`);
        }
      }

      // Aggregate results
      const successCount = results.filter(r => r.success).length;
      const allSuccess = successCount === recipients.length;
      const anySuccess = successCount > 0;

      if (allSuccess) {
        console.log(`✅ Admin notification sent to all ${recipients.length} recipient(s)`);
      } else if (anySuccess) {
        console.warn(`⚠️ Admin notification partially delivered: ${successCount}/${recipients.length}`);
      } else {
        console.error(`❌ Admin notification failed for all recipients`);
      }

      return {
        success: anySuccess,
        provider: results[0]?.provider || 'none',
        messageId: results.filter(r => r.messageId).map(r => r.messageId).join(','),
        error: allSuccess ? undefined : `Delivered to ${successCount}/${recipients.length} recipients`,
      };
    } catch (error: unknown) {
      console.error('❌ Admin notification template error:', error);
      return {
        success: false,
        error: 'Failed to generate admin notification template',
        provider: 'none',
      };
    }
  }

  /**
   * Send both trial confirmation and admin notification emails
   * This is the main method used by the trial signup API
   */
  async sendTrialSignupEmails(data: TrialSignupData): Promise<{
    userEmail: EmailResult & { provider: string };
    adminEmail: EmailResult & { provider: string };
  }> {
    console.log('🚀 Starting multi-provider trial signup email flow for:', sanitizeForLogging(data.user));
    
    // Send both emails in parallel for better performance
    const [userEmail, adminEmail] = await Promise.all([
      this.sendTrialConfirmation(data),
      this.sendAdminNotification(data),
    ]);

    // Log results for monitoring
    const successCount = [userEmail, adminEmail].filter(r => r.success).length;
    const totalCount = 2;
    
    console.log(`📊 Email batch complete: ${successCount}/${totalCount} successful`);
    console.log(`📊 Providers used: User=${userEmail.provider}, Admin=${adminEmail.provider}`);
    
    if (successCount === totalCount) {
      console.log('🎉 All trial signup emails sent successfully!');
    } else if (successCount > 0) {
      console.warn('⚠️ Partial email delivery success');
    } else {
      console.error('❌ All trial signup emails failed');
    }

    return { userEmail, adminEmail };
  }

  /**
   * Send test email using current provider configuration
   */
  async sendTestEmail(testEmail: string): Promise<EmailResult & { provider: string }> {
    console.log(`🧪 Sending test email to ${testEmail.replace(/.(?=.{4})/g, '*')}`);
    
    const provider = await this.factory.getPrimaryProvider();
    if (!provider) {
      return {
        success: false,
        error: 'No providers available for testing',
        provider: 'none',
      };
    }

    try {
      const result = await provider.testDelivery!(testEmail);
      return {
        ...result,
        provider: provider.name,
      };
    } catch (error: unknown) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Test email failed',
        provider: provider.name,
      };
    }
  }

  /**
   * Health check for the multi-provider email service
   */
  async healthCheck(): Promise<{
    healthy: boolean;
    primaryProvider: string;
    availableProviders: string[];
    providerHealth: Record<string, boolean>;
    config: unknown;
    details?: string;
  }> {
    try {
      const status = await this.factory.getStatus();
      const healthyProvidersCount = status.providers.filter(p => p.healthy).length;
      const healthy = healthyProvidersCount > 0;
      
      const providerHealth: Record<string, boolean> = {};
      status.providers.forEach(p => {
        providerHealth[p.name] = p.healthy;
      });
      
      const result = {
        healthy,
        primaryProvider: status.primaryProvider,
        availableProviders: getAvailableProviders(),
        providerHealth,
        config: getMultiProviderConfigForLogging(),
        details: healthy 
          ? `${healthyProvidersCount}/${status.totalProviders} providers operational`
          : 'No healthy providers available',
      };
      
      if (healthy) {
        console.log('✅ Multi-provider email service health check passed');
      } else {
        console.warn('⚠️ Multi-provider email service health check failed:', result);
      }
      
      return result;
    } catch (error: unknown) {
      console.error('❌ Multi-provider email service health check error:', error);
      return {
        healthy: false,
        primaryProvider: 'unknown',
        availableProviders: [],
        providerHealth: {},
        config: {},
        details: error instanceof Error ? error.message : 'Health check failed',
      };
    }
  }

  /**
   * Switch primary provider (useful for testing and temporary changes)
   */
  async switchPrimaryProvider(providerName: 'resend' | 'gmail'): Promise<{
    success: boolean;
    message: string;
    previousProvider: string;
    newProvider: string;
  }> {
    const previousProvider = this.config.provider.primaryProvider;
    
    try {
      // Check if the requested provider is available
      const availableProviders = getAvailableProviders();
      if (!availableProviders.includes(providerName)) {
        return {
          success: false,
          message: `Provider '${providerName}' is not configured or available`,
          previousProvider,
          newProvider: previousProvider,
        };
      }

      // Update the factory configuration
      this.factory.updateConfig({ primaryProvider: providerName });
      this.config.provider.primaryProvider = providerName;
      
      console.log(`🔄 Switched primary email provider: ${previousProvider} → ${providerName}`);
      
      return {
        success: true,
        message: `Successfully switched primary provider to ${providerName}`,
        previousProvider,
        newProvider: providerName,
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to switch provider';
      console.error('❌ Failed to switch primary provider:', error);
      return {
        success: false,
        message: errorMessage,
        previousProvider,
        newProvider: previousProvider,
      };
    }
  }

  /**
   * Get comprehensive service statistics
   */
  async getStats(): Promise<{
    service: string;
    status: unknown;
    providers: unknown[];
    config: unknown;
  }> {
    const status = await this.factory.getStatus();
    
    return {
      service: 'multi-provider',
      status,
      providers: status.providers,
      config: getMultiProviderConfigForLogging(),
    };
  }
}

/**
 * Singleton instance of the multi-provider email service
 */
let multiProviderEmailServiceInstance: MultiProviderEmailService | null = null;

export const getMultiProviderEmailService = (): MultiProviderEmailService => {
  if (!multiProviderEmailServiceInstance) {
    multiProviderEmailServiceInstance = new MultiProviderEmailService();
  }
  return multiProviderEmailServiceInstance;
}; 