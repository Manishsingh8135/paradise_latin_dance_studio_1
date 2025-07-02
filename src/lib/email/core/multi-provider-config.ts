/**
 * Multi-Provider Email Configuration for Paradise Dance Studio
 * Supports Resend, Gmail, and easy switching between providers
 */

import { z } from 'zod';
import { ProviderType, ProviderFactoryConfig } from './provider-factory';

// Resend provider configuration
const ResendConfigSchema = z.object({
  apiKey: z.string().min(1, 'Resend API key is required').optional(),
  fromEmail: z.string().email('Valid from email is required').optional(),
  fromName: z.string().min(1, 'From name is required').optional(),
});

// Gmail provider configuration  
const GmailConfigSchema = z.object({
  user: z.string().email('Gmail user email is required').optional(),
  appPassword: z.string().min(16, 'Gmail app password must be 16 characters').optional(),
  fromEmail: z.string().email('Valid from email is required').optional(),
  fromName: z.string().min(1, 'From name is required').optional(),
});

// Provider selection configuration
const ProviderSelectionSchema = z.object({
  primaryProvider: z.enum(['resend', 'gmail', 'auto']).default('resend'),
  fallbackEnabled: z.boolean().default(false),
  fallbackProvider: z.enum(['resend', 'gmail']).optional(),
  healthCheckInterval: z.number().min(60000).default(5 * 60 * 1000), // 5 minutes
});

// Complete multi-provider configuration schema
const MultiProviderConfigSchema = z.object({
  // Provider configurations
  resend: ResendConfigSchema,
  gmail: GmailConfigSchema,
  
  // Provider selection
  provider: ProviderSelectionSchema,
  
  // Common settings
  adminEmail: z.string().email('Admin email is required'),
  retryAttempts: z.number().min(1).max(10).default(3),
  retryDelay: z.number().min(1000).default(5000),
  timeout: z.number().min(5000).default(30000),
});

export type MultiProviderConfig = z.infer<typeof MultiProviderConfigSchema>;

/**
 * Get and validate multi-provider email configuration from environment variables
 */
export const getMultiProviderConfig = (): MultiProviderConfig => {
  try {
    const config = MultiProviderConfigSchema.parse({
      // Resend configuration
      resend: {
        apiKey: process.env.RESEND_API_KEY,
        fromEmail: process.env.RESEND_FROM_EMAIL,
        fromName: process.env.RESEND_FROM_NAME,
      },
      
      // Gmail configuration
      gmail: {
        user: process.env.GMAIL_USER,
        appPassword: process.env.GMAIL_APP_PASSWORD,
        fromEmail: process.env.GMAIL_FROM_EMAIL || process.env.GMAIL_USER,
        fromName: process.env.GMAIL_FROM_NAME || process.env.RESEND_FROM_NAME,
      },
      
      // Provider selection
      provider: {
        primaryProvider: (process.env.EMAIL_PROVIDER as ProviderType) || 'resend',
        fallbackEnabled: process.env.EMAIL_FALLBACK_ENABLED === 'true',
        fallbackProvider: process.env.EMAIL_FALLBACK_PROVIDER as ProviderType,
        healthCheckInterval: parseInt(process.env.EMAIL_HEALTH_CHECK_INTERVAL || '300000'),
      },
      
      // Common settings
      adminEmail: process.env.EMAIL_ADMIN_RECIPIENT,
      retryAttempts: parseInt(process.env.EMAIL_RETRY_ATTEMPTS || '3'),
      retryDelay: parseInt(process.env.EMAIL_RETRY_DELAY || '5000'),
      timeout: parseInt(process.env.EMAIL_TIMEOUT || '30000'),
    });

    // Validate that at least one provider is configured
    const hasResend = !!(config.resend.apiKey && config.resend.fromEmail);
    const hasGmail = !!(config.gmail.user && config.gmail.appPassword);
    
    if (!hasResend && !hasGmail) {
      throw new Error('At least one email provider (Resend or Gmail) must be configured');
    }

    // Validate primary provider is configured
    if (config.provider.primaryProvider === 'resend' && !hasResend) {
      throw new Error('Resend is set as primary provider but not configured');
    }
    
    if (config.provider.primaryProvider === 'gmail' && !hasGmail) {
      throw new Error('Gmail is set as primary provider but not configured');
    }

    // Validate fallback provider if enabled
    if (config.provider.fallbackEnabled && config.provider.fallbackProvider) {
      if (config.provider.fallbackProvider === 'resend' && !hasResend) {
        throw new Error('Resend is set as fallback provider but not configured');
      }
      
      if (config.provider.fallbackProvider === 'gmail' && !hasGmail) {
        throw new Error('Gmail is set as fallback provider but not configured');
      }
    }

    return config;
  } catch (error) {
    console.error('❌ Multi-provider email configuration error:', error);
    throw new Error('Multi-provider email service configuration is invalid. Please check your environment variables.');
  }
};

/**
 * Singleton multi-provider configuration instance
 */
let cachedMultiConfig: MultiProviderConfig | null = null;

export const multiProviderConfig = (): MultiProviderConfig => {
  if (!cachedMultiConfig) {
    cachedMultiConfig = getMultiProviderConfig();
    console.log(`✅ Multi-provider email configuration loaded - Primary: ${cachedMultiConfig.provider.primaryProvider}`);
  }
  return cachedMultiConfig;
};

/**
 * Get provider factory configuration from multi-provider config
 */
export const getProviderFactoryConfig = (): ProviderFactoryConfig => {
  const config = multiProviderConfig();
  return {
    primaryProvider: config.provider.primaryProvider,
    fallbackEnabled: config.provider.fallbackEnabled,
    fallbackProvider: config.provider.fallbackProvider,
    healthCheckInterval: config.provider.healthCheckInterval,
  };
};

/**
 * Check which providers are configured and available
 */
export const getAvailableProviders = (): string[] => {
  const config = multiProviderConfig();
  const available: string[] = [];
  
  // Check Resend
  if (config.resend.apiKey && config.resend.fromEmail) {
    available.push('resend');
  }
  
  // Check Gmail
  if (config.gmail.user && config.gmail.appPassword) {
    available.push('gmail');
  }
  
  return available;
};

/**
 * Get configuration for logging (without sensitive data)
 */
export const getMultiProviderConfigForLogging = () => {
  const config = multiProviderConfig();
  const availableProviders = getAvailableProviders();
  
  return {
    primaryProvider: config.provider.primaryProvider,
    fallbackEnabled: config.provider.fallbackEnabled,
    fallbackProvider: config.provider.fallbackProvider,
    availableProviders,
    adminEmail: config.adminEmail,
    retryAttempts: config.retryAttempts,
    retryDelay: config.retryDelay,
    timeout: config.timeout,
    hasResendKey: !!config.resend.apiKey,
    hasGmailAuth: !!(config.gmail.user && config.gmail.appPassword),
    isDev: process.env.NODE_ENV === 'development',
  };
};

/**
 * Validate multi-provider configuration without throwing errors
 */
export const validateMultiProviderConfig = (): { valid: boolean; errors?: string[] } => {
  try {
    getMultiProviderConfig();
    return { valid: true };
  } catch (error: unknown) {
    const errors = error instanceof z.ZodError 
      ? error.issues.map((issue) => issue.message)
      : [error instanceof Error ? error.message : 'Unknown validation error'];
    return { valid: false, errors };
  }
}; 