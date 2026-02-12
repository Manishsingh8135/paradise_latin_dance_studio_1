/**
 * Gmail Email Provider for Paradise Dance Studio
 * Handles email delivery through Gmail SMTP using Nodemailer
 */

import nodemailer from 'nodemailer';
import { BaseEmailProvider } from '../core/provider-interface';
import { EmailResult, EmailTemplate, ProviderConfig } from '../core/types';
import { multiProviderConfig } from '../core/multi-provider-config';

export class GmailProvider extends BaseEmailProvider {
  readonly name = 'gmail';
  readonly priority = 2; // Lower priority than Resend (higher number = lower priority)
  
  private transporter: nodemailer.Transporter;
  private config: ReturnType<typeof multiProviderConfig>;

  constructor() {
    super();
    this.config = multiProviderConfig();
    
    if (!this.config.gmail.user || !this.config.gmail.appPassword) {
      throw new Error('Gmail configuration is incomplete. Please check GMAIL_USER and GMAIL_APP_PASSWORD environment variables.');
    }

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.gmail.user,
        pass: this.config.gmail.appPassword,
      },
      // Additional configuration for better reliability
      pool: true, // Use SMTP connection pooling
      maxConnections: 3, // Limit concurrent connections
      maxMessages: 100, // Limit messages per connection
      rateDelta: 60000, // 1 minute
      rateLimit: 5, // 5 emails per minute to stay within Gmail limits
    });

  }

  /**
   * Send email through Gmail SMTP
   */
  async sendEmail(to: string, template: EmailTemplate): Promise<EmailResult> {
    try {
      const fromAddress = this.config.gmail.fromEmail || this.config.gmail.user;
      const fromName = this.config.gmail.fromName || 'Paradise Latin Dance Studio';
      
      const mailOptions = {
        from: `${fromName} <${fromAddress}>`,
        to: to,
        subject: template.subject,
        html: template.html,
        text: template.text,
        // Additional headers for better deliverability
        headers: {
          'X-Mailer': 'Paradise Dance Studio Email Service (Gmail)',
          'X-Priority': '3',
        },
      };

      const result = await this.transporter.sendMail(mailOptions);

      return {
        success: true,
        messageId: result.messageId,
      };
    } catch (error: unknown) {
      console.error('❌ Gmail provider error:', error);
      
      return {
        success: false,
        error: this.formatGmailError(error),
      };
    }
  }

  /**
   * Check if Gmail SMTP service is healthy
   */
  async isHealthy(): Promise<boolean> {
    try {
      // Verify SMTP connection
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.warn('⚠️ Gmail health check failed:', error);
      return false;
    }
  }

  /**
   * Get provider configuration for monitoring
   */
  getConfig(): ProviderConfig {
    return {
      enabled: !!(this.config.gmail.user && this.config.gmail.appPassword),
      timeout: this.config.timeout,
      rateLimit: {
        requests: 100, // Gmail daily limit for personal accounts
        window: 24 * 60 * 60, // 24 hours in seconds
      },
    };
  }

  /**
   * Test email delivery with Gmail-specific test template
   */
  async testDelivery(testEmail: string): Promise<EmailResult> {
    const testTemplate: EmailTemplate = {
      subject: '✅ Paradise Dance Studio Gmail Test',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">🌺 Gmail Email Service Test</h2>
          <p>This is a test email from Paradise Dance Studio email service.</p>
          <p><strong>Provider:</strong> Gmail SMTP</p>
          <p><strong>From:</strong> ${this.config.gmail.fromEmail || this.config.gmail.user}</p>
          <p>If you received this, the Gmail email provider is working correctly!</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Test Details:</strong></p>
            <ul>
              <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
              <li><strong>Gmail User:</strong> ${this.config.gmail.user?.replace(/.(?=.{4})/g, '*')}</li>
              <li><strong>Test Email:</strong> ${testEmail}</li>
            </ul>
          </div>
          <p style="color: #059669;">🎉 Gmail provider is operational!</p>
        </div>
      `,
      text: `Gmail Email Service Test
      
This is a test email from Paradise Dance Studio email service.
Provider: Gmail SMTP
From: ${this.config.gmail.fromEmail || this.config.gmail.user}
If you received this, the Gmail email provider is working correctly!

Test Details:
- Timestamp: ${new Date().toISOString()}
- Gmail User: ${this.config.gmail.user?.replace(/.(?=.{4})/g, '*')}
- Test Email: ${testEmail}

🎉 Gmail provider is operational!`,
    };

    return this.sendEmail(testEmail, testTemplate);
  }

  /**
   * Format Gmail-specific error messages
   */
  private formatGmailError(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error && typeof error === 'object' && 'message' in error) {
      const errorMessage = (error as { message: string }).message;
      
      // Handle common Gmail SMTP errors
      if (errorMessage.includes('Invalid login')) {
        return 'Gmail authentication failed. Please check your email and app password.';
      }
      if (errorMessage.includes('rate limit') || errorMessage.includes('too many')) {
        return 'Gmail rate limit exceeded. Please wait before sending more emails.';
      }
      if (errorMessage.includes('quota') || errorMessage.includes('limit')) {
        return 'Gmail daily sending limit reached. Try again tomorrow or use a different provider.';
      }
      if (errorMessage.includes('Authentication')) {
        return 'Gmail authentication error. Please verify your app password and 2FA settings.';
      }
      if (errorMessage.includes('ECONNECTION') || errorMessage.includes('ETIMEDOUT')) {
        return 'Connection error to Gmail servers. Please check your internet connection.';
      }
      
      return errorMessage;
    }

    if (error && typeof error === 'object' && 'code' in error) {
      const errorCode = (error as { code: string; message?: string }).code;
      const errorMessage = (error as { code: string; message?: string }).message;
      
      switch (errorCode) {
        case 'ESOCKET':
          return 'Network connection error to Gmail servers';
        case 'EAUTH':
          return 'Gmail authentication failed';
        case 'EMESSAGE':
          return 'Invalid email message format';
        default:
          return `Gmail error (${errorCode}): ${errorMessage || 'Unknown error'}`;
      }
    }

    return 'Gmail email delivery failed';
  }

  /**
   * Get Gmail-specific delivery statistics (limited for personal accounts)
   */
  async getDeliveryStats(): Promise<{
    sent: number;
    delivered: number;
    bounced: number;
    complained: number;
  }> {
    // Gmail personal accounts don't provide detailed stats
    // This is a placeholder for consistency with other providers
    console.warn('ℹ️ Gmail personal accounts do not provide detailed delivery statistics');
    return {
      sent: 0,
      delivered: 0,
      bounced: 0,
      complained: 0,
    };
  }

  /**
   * Close the SMTP connection pool (useful for cleanup)
   */
  async close(): Promise<void> {
    try {
      this.transporter.close();
    } catch (error) {
      console.warn('⚠️ Error closing Gmail provider connection:', error);
    }
  }
} 