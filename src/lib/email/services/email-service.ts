/**
 * Main Email Service for Paradise Dance Studio
 * Orchestrates email sending, error handling, and provides high-level interface
 */

import { ResendProvider } from '../providers/resend-provider';
import { TrialSignupData, EmailResult, EmailBatchResult } from '../core/types';
import { renderUserWelcome, renderAdminAlert } from '../templates';
import { emailConfig, getConfigForLogging } from '../core/config';

export class EmailService {
  private provider: ResendProvider;
  private config: ReturnType<typeof emailConfig>;

  constructor() {
    this.config = emailConfig();
    this.provider = new ResendProvider();
  }

  /**
   * Send trial confirmation email to user
   */
  async sendTrialConfirmation(data: TrialSignupData): Promise<EmailResult> {
    try {
      const template = await renderUserWelcome(data);
      const result = await this.provider.sendEmail(data.user.email, template);

      if (!result.success) {
        console.error('❌ User welcome email failed:', result.error);
      }

      return result;
    } catch (error: unknown) {
      console.error('❌ User welcome template error:', error);
      return {
        success: false,
        error: 'Failed to generate user welcome email template',
      };
    }
  }

  /**
   * Send admin notification email about new trial signup
   */
  async sendAdminNotification(data: TrialSignupData): Promise<EmailResult> {
    try {
      const template = await renderAdminAlert(data);
      const result = await this.provider.sendEmail(this.config.adminEmail, template);

      if (!result.success) {
        console.error('❌ Admin alert email failed:', result.error);
      }

      return result;
    } catch (error: unknown) {
      console.error('❌ Admin alert template error:', error);
      return {
        success: false,
        error: 'Failed to generate admin alert email template',
      };
    }
  }

  /**
   * Send both trial confirmation and admin notification emails
   * This is the main method used by the trial signup API
   */
  async sendTrialSignupEmails(data: TrialSignupData): Promise<{
    userEmail: EmailResult;
    adminEmail: EmailResult;
  }> {
    // Send both emails in parallel for better performance
    const [userEmail, adminEmail] = await Promise.all([
      this.sendTrialConfirmation(data),
      this.sendAdminNotification(data),
    ]);

    // Check results for monitoring
    const successCount = [userEmail, adminEmail].filter(r => r.success).length;
    const totalCount = 2;

    if (successCount === totalCount) {
      // All emails sent successfully
    } else if (successCount > 0) {
      console.warn('⚠️ Partial email delivery success');
    } else {
      console.error('❌ All trial signup emails failed');
    }

    return { userEmail, adminEmail };
  }

  /**
   * Send multiple emails (future enhancement)
   */
  async sendBulkEmails(emails: Array<{
    to: string;
    templateId: string;
    data: TrialSignupData;
  }>): Promise<EmailBatchResult> {
    const results: EmailResult[] = [];
    
    // Process emails sequentially to respect rate limits
    for (const email of emails) {
      // This is a placeholder - would need template routing logic
      // For now, we only support trial confirmation
      try {
        if (email.templateId === 'trial-confirmation' || email.templateId === 'user-welcome') {
          const result = await this.sendTrialConfirmation(email.data);
          results.push(result);
        } else {
          results.push({
            success: false,
            error: `Unknown template: ${email.templateId}`,
          });
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Bulk email processing failed';
        results.push({
          success: false,
          error: errorMessage,
        });
      }
    }
    
    const successful = results.filter(r => r.success).length;
    const failed = results.length - successful;

    return {
      total: results.length,
      successful,
      failed,
      results,
    };
  }

  /**
   * Health check for the email service
   */
  async healthCheck(): Promise<{
    healthy: boolean;
    provider: string;
    config: boolean;
    details?: string;
  }> {
    try {
      const providerHealthy = await this.provider.isHealthy();
      const configValid = !!this.config.resendApiKey;
      
      const healthy = providerHealthy && configValid;
      
      const result = {
        healthy,
        provider: this.provider.name,
        config: configValid,
        details: healthy ? 'All systems operational' : 'Service degraded',
      };
      
      return result;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Health check failed';
      console.error('❌ Email service health check error:', error);
      return {
        healthy: false,
        provider: this.provider.name,
        config: false,
        details: errorMessage,
      };
    }
  }

  /**
   * Test email delivery (for development/testing)
   */
  async sendTestEmail(testEmail: string): Promise<EmailResult> {
    const testData: TrialSignupData = {
      user: {
        firstName: 'Test',
        lastName: 'User',
        email: testEmail,
        phone: '(808) 555-0123',
      },
      trial: {
        selectedClass: 'Salsa',
        experience: 'beginner',
        goals: ['Learn to dance', 'Have fun', 'Meet people'],
        hearAbout: 'Website test',
      },
      metadata: {
        timestamp: new Date(),
        userAgent: 'Test Environment',
        ipAddress: '127.0.0.1',
      },
    };
    
    return this.sendTrialConfirmation(testData);
  }

  /**
   * Get email service statistics
   */
  async getStats(): Promise<{
    provider: string;
    healthy: boolean;
    config: ReturnType<typeof getConfigForLogging>;
  }> {
    const health = await this.healthCheck();
    
    return {
      provider: this.provider.name,
      healthy: health.healthy,
      config: getConfigForLogging(),
    };
  }
}

/**
 * Singleton email service instance
 */
let emailServiceInstance: EmailService | null = null;

export const getEmailService = (): EmailService => {
  if (!emailServiceInstance) {
    emailServiceInstance = new EmailService();
  }
  return emailServiceInstance;
};

/**
 * Export singleton instance for convenience
 */
export const emailService = getEmailService(); 