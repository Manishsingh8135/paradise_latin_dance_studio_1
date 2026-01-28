/**
 * Provider Interface & Abstract Base for Paradise Dance Studio Email Service
 * Ensures consistent implementation across all email providers (Resend, Gmail, etc.)
 */

import { EmailTemplate, EmailResult, ProviderConfig } from './types';

/**
 * Interface that all email providers must implement
 */
export interface IEmailProvider {
  readonly name: string;
  readonly priority: number;
  
  sendEmail(to: string, template: EmailTemplate): Promise<EmailResult>;
  isHealthy(): Promise<boolean>;
  getConfig(): ProviderConfig;
  testDelivery?(testEmail: string): Promise<EmailResult>;
}

/**
 * Abstract base class with common provider functionality
 */
export abstract class BaseEmailProvider implements IEmailProvider {
  abstract readonly name: string;
  abstract readonly priority: number;
  
  abstract sendEmail(to: string, template: EmailTemplate): Promise<EmailResult>;
  abstract isHealthy(): Promise<boolean>;
  abstract getConfig(): ProviderConfig;
  
  /**
   * Format error messages consistently across providers
   */
  protected formatError(error: unknown): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error && typeof error === 'object' && 'message' in error) {
      return (error as { message: string }).message;
    }

    if (error && typeof error === 'object' && 'name' in error) {
      const errorObj = error as { name: string; message?: string };
      return `${errorObj.name}: ${errorObj.message || 'Unknown error'}`;
    }

    return 'Email delivery failed';
  }

  /**
   * Common test email template
   */
  protected getTestTemplate(): EmailTemplate {
    return {
      subject: '✅ Paradise Dance Studio Email Test',
      html: `
        <h2>Email Service Test</h2>
        <p>This is a test email from Paradise Dance Studio email service.</p>
        <p>Provider: <strong>${this.name}</strong></p>
        <p>If you received this, the ${this.name} email provider is working correctly!</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
      text: `Email Service Test
      
This is a test email from Paradise Dance Studio email service.
Provider: ${this.name}
If you received this, the ${this.name} email provider is working correctly!

Timestamp: ${new Date().toISOString()}`,
    };
  }

  /**
   * Default test delivery implementation
   */
  async testDelivery(testEmail: string): Promise<EmailResult> {
    console.log(`🧪 Testing ${this.name} provider with email: ${testEmail.replace(/.(?=.{4})/g, '*')}`);
    return this.sendEmail(testEmail, this.getTestTemplate());
  }
} 