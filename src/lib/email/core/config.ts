/**
 * Email Service Configuration for Paradise Dance Studio
 * Handles environment variables with validation and type safety
 */

import { z } from 'zod';

// Configuration schema with validation
const EmailConfigSchema = z.object({
  resendApiKey: z.string().min(1, 'Resend API key is required'),
  fromEmail: z.string().email('Valid from email is required'),
  fromName: z.string().min(1, 'From name is required'),
  adminEmail: z.string().email('Admin email is required'),
  retryAttempts: z.number().min(1).max(10).default(3),
  retryDelay: z.number().min(1000).default(5000),
  timeout: z.number().min(5000).default(30000),
});

export type EmailConfig = z.infer<typeof EmailConfigSchema>;

/**
 * Get and validate email configuration from environment variables
 * Throws error if configuration is invalid
 */
export const getEmailConfig = (): EmailConfig => {
  try {
    return EmailConfigSchema.parse({
      resendApiKey: process.env.RESEND_API_KEY,
      fromEmail: process.env.RESEND_FROM_EMAIL,
      fromName: process.env.RESEND_FROM_NAME,
      adminEmail: process.env.EMAIL_ADMIN_RECIPIENT,
      retryAttempts: parseInt(process.env.EMAIL_RETRY_ATTEMPTS || '3'),
      retryDelay: parseInt(process.env.EMAIL_RETRY_DELAY || '5000'),
      timeout: parseInt(process.env.EMAIL_TIMEOUT || '30000'),
    });
  } catch (error) {
    console.error('❌ Email configuration error:', error);
    throw new Error('Email service configuration is invalid. Please check your environment variables.');
  }
};

/**
 * Singleton email configuration instance
 * Validates configuration once at startup
 */
let cachedConfig: EmailConfig | null = null;

export const emailConfig = (): EmailConfig => {
  if (!cachedConfig) {
    cachedConfig = getEmailConfig();
    console.log('✅ Email service configuration loaded successfully');
  }
  return cachedConfig;
};

/**
 * Validate configuration without throwing errors
 * Useful for health checks
 */
export const validateEmailConfig = (): { valid: boolean; errors?: string[] } => {
  try {
    getEmailConfig();
    return { valid: true };
  } catch (error: unknown) {
    const errors = error instanceof z.ZodError 
      ? error.issues.map((issue) => issue.message)
      : [error instanceof Error ? error.message : 'Unknown validation error'];
    return { valid: false, errors };
  }
};

/**
 * Check if we're in development mode
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

/**
 * Get configuration for logging (without sensitive data)
 */
export const getConfigForLogging = () => {
  const config = emailConfig();
  return {
    fromEmail: config.fromEmail,
    fromName: config.fromName,
    adminEmail: config.adminEmail,
    retryAttempts: config.retryAttempts,
    retryDelay: config.retryDelay,
    timeout: config.timeout,
    hasApiKey: !!config.resendApiKey,
    isDev: isDevelopment(),
  };
}; 