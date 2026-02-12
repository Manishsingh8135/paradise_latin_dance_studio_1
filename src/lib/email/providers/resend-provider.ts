/**
 * Resend Email Provider for Paradise Dance Studio
 * Handles email delivery through Resend API with error handling and health checks
 */

import { Resend } from 'resend';
import { BaseEmailProvider } from '../core/provider-interface';
import { EmailResult, EmailTemplate, ProviderConfig } from '../core/types';
import { multiProviderConfig } from '../core/multi-provider-config';

export class ResendProvider extends BaseEmailProvider {
  readonly name = 'resend';
  readonly priority = 1; // Highest priority (lower number = higher priority)
  
  private client: Resend;
  private config: ReturnType<typeof multiProviderConfig>;

  constructor() {
    super();
    this.config = multiProviderConfig();
    
    if (!this.config.resend.apiKey) {
      throw new Error('Resend configuration is incomplete. Please check RESEND_API_KEY environment variable.');
    }
    
    this.client = new Resend(this.config.resend.apiKey);
  }

  /**
   * Send email through Resend
   */
  async sendEmail(to: string, template: EmailTemplate): Promise<EmailResult> {
    try {
      const fromAddress = this.config.resend.fromEmail;
      const fromName = this.config.resend.fromName;
      
      const result = await this.client.emails.send({
        from: `${fromName} <${fromAddress}>`,
        to: [to],
        subject: template.subject,
        html: template.html,
        text: template.text,
      });

      // Handle Resend API errors
      if (result.error) {
        console.error('❌ Resend API error:', result.error);
        return {
          success: false,
          error: this.formatError(result.error),
        };
      }

      return {
        success: true,
        messageId: result.data?.id,
      };
    } catch (error: unknown) {
      console.error('❌ Resend provider error:', error);
      
      return {
        success: false,
        error: this.formatError(error),
      };
    }
  }

  /**
   * Check if Resend service is healthy
   */
  async isHealthy(): Promise<boolean> {
    try {
      // Simple health check - list domains (lightweight API call)
      await this.client.domains.list();
      return true;
    } catch (error) {
      console.warn('⚠️ Resend health check failed:', error);
      return false;
    }
  }

  /**
   * Get provider configuration for monitoring
   */
  getConfig(): ProviderConfig {
    return {
      enabled: !!this.config.resend.apiKey,
      timeout: this.config.timeout,
      rateLimit: {
        requests: 100, // Resend free tier: 100 emails/day, 10/min
        window: 60, // 1 minute window
      },
    };
  }

  /**
   * Test email delivery with a simple test
   */
  async testDelivery(testEmail: string): Promise<EmailResult> {
    const testTemplate: EmailTemplate = {
      subject: '✅ Paradise Dance Studio Resend Test',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">🌺 Resend Email Service Test</h2>
          <p>This is a test email from Paradise Dance Studio email service.</p>
          <p><strong>Provider:</strong> Resend API</p>
          <p><strong>From:</strong> ${this.config.resend.fromEmail}</p>
          <p>If you received this, the Resend email provider is working correctly!</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Test Details:</strong></p>
            <ul>
              <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
              <li><strong>API Key:</strong> ${this.config.resend.apiKey?.substring(0, 10)}...</li>
              <li><strong>Test Email:</strong> ${testEmail}</li>
            </ul>
          </div>
          <p style="color: #059669;">🎉 Resend provider is operational!</p>
        </div>
      `,
      text: `Resend Email Service Test
      
This is a test email from Paradise Dance Studio email service.
Provider: Resend API
From: ${this.config.resend.fromEmail}
If you received this, the Resend email provider is working correctly!

Test Details:
- Timestamp: ${new Date().toISOString()}
- API Key: ${this.config.resend.apiKey?.substring(0, 10)}...
- Test Email: ${testEmail}

🎉 Resend provider is operational!`,
    };

    return this.sendEmail(testEmail, testTemplate);
  }

  /**
   * Format error messages for consistent handling
   */
  protected formatError(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error && typeof error === 'object' && 'message' in error) {
      const errorObj = error as { message: string; name?: string };
      // Handle common Resend errors
      if (errorObj.message.includes('API key')) {
        return 'Invalid API key configuration';
      }
      if (errorObj.message.includes('rate limit')) {
        return 'Rate limit exceeded, please try again later';
      }
      if (errorObj.message.includes('invalid email')) {
        return 'Invalid email address';
      }
      
      return errorObj.message;
    }

    if (error && typeof error === 'object' && 'name' in error) {
      const namedError = error as { name: string; message?: string };
      return `${namedError.name}: ${namedError.message || 'Unknown error'}`;
    }

    return 'Email delivery failed';
  }

  /**
   * Get delivery statistics (placeholder for future implementation)
   */
  async getDeliveryStats(): Promise<{
    sent: number;
    delivered: number;
    bounced: number;
    complained: number;
  }> {
    // Placeholder - Resend doesn't provide historical stats in free tier
    // This could be enhanced with webhook tracking
    return {
      sent: 0,
      delivered: 0,
      bounced: 0,
      complained: 0,
    };
  }
} 