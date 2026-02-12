/**
 * Multi-Provider Email Configuration for Paradise Latin Dance Studio
 * Supports Resend (primary), Gmail (fallback), multiple recipients, and test mode
 */

import { z } from 'zod';
import { ProviderType, ProviderFactoryConfig } from './provider-factory';

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Parse comma-separated email list into array
 * Handles whitespace and empty values
 */
const parseEmailList = (emailString: string | undefined): string[] => {
  if (!emailString) return [];
  return emailString
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length > 0 && email.includes('@'));
};

// =============================================================================
// CONFIGURATION SCHEMAS
// =============================================================================

// Resend provider configuration
const ResendConfigSchema = z.object({
  apiKey: z.string().min(1, 'Resend API key is required').optional(),
  fromEmail: z.string().email('Valid from email is required').optional(),
  fromName: z.string().min(1, 'From name is required').optional(),
  replyTo: z.string().email('Valid reply-to email').optional(),
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

// Recipients configuration - supports multiple emails per category
const RecipientsConfigSchema = z.object({
  admin: z.array(z.string().email()).default([]),
  leads: z.array(z.string().email()).default([]),
  contact: z.array(z.string().email()).default([]),
  test: z.array(z.string().email()).default([]),
});

// Test mode configuration
const TestModeConfigSchema = z.object({
  enabled: z.boolean().default(false),
  suppressEmails: z.boolean().default(false),
});

// Complete multi-provider configuration schema
const MultiProviderConfigSchema = z.object({
  // Provider configurations
  resend: ResendConfigSchema,
  gmail: GmailConfigSchema,

  // Provider selection
  provider: ProviderSelectionSchema,

  // Recipients (multiple per category)
  recipients: RecipientsConfigSchema,

  // Test mode
  testMode: TestModeConfigSchema,

  // Legacy support - adminEmail (deprecated, use recipients.admin)
  adminEmail: z.string().email().optional(),

  // Common settings
  retryAttempts: z.number().min(1).max(10).default(3),
  retryDelay: z.number().min(1000).default(5000),
  timeout: z.number().min(5000).default(30000),
});

export type MultiProviderConfig = z.infer<typeof MultiProviderConfigSchema>;

// =============================================================================
// CONFIGURATION LOADING
// =============================================================================

/**
 * Get and validate multi-provider email configuration from environment variables
 */
export const getMultiProviderConfig = (): MultiProviderConfig => {
  try {
    // Parse recipient lists from env
    const adminRecipients = parseEmailList(process.env.EMAIL_ADMIN_RECIPIENTS);
    const leadRecipients = parseEmailList(process.env.EMAIL_LEAD_RECIPIENTS);
    const contactRecipients = parseEmailList(process.env.EMAIL_CONTACT_RECIPIENTS);
    const testRecipients = parseEmailList(process.env.EMAIL_TEST_RECIPIENTS);

    // Legacy support: if EMAIL_ADMIN_RECIPIENT (singular) is set, add to admin list
    const legacyAdmin = process.env.EMAIL_ADMIN_RECIPIENT;
    if (legacyAdmin && !adminRecipients.includes(legacyAdmin)) {
      adminRecipients.push(legacyAdmin);
    }

    const config = MultiProviderConfigSchema.parse({
      // Resend configuration
      resend: {
        apiKey: process.env.RESEND_API_KEY,
        fromEmail: process.env.EMAIL_FROM_ADDRESS || process.env.RESEND_FROM_EMAIL,
        fromName: process.env.EMAIL_FROM_NAME || process.env.RESEND_FROM_NAME,
        replyTo: process.env.EMAIL_REPLY_TO,
      },

      // Gmail configuration
      gmail: {
        user: process.env.GMAIL_USER,
        appPassword: process.env.GMAIL_APP_PASSWORD,
        fromEmail: process.env.GMAIL_FROM_EMAIL || process.env.GMAIL_USER,
        fromName: process.env.GMAIL_FROM_NAME || process.env.EMAIL_FROM_NAME,
      },

      // Provider selection
      provider: {
        primaryProvider: (process.env.EMAIL_PROVIDER as ProviderType) || 'resend',
        fallbackEnabled: process.env.EMAIL_FALLBACK_ENABLED === 'true',
        fallbackProvider: process.env.EMAIL_FALLBACK_PROVIDER as ProviderType,
        healthCheckInterval: parseInt(process.env.EMAIL_HEALTH_CHECK_INTERVAL || '300000'),
      },

      // Recipients
      recipients: {
        admin: adminRecipients,
        leads: leadRecipients.length > 0 ? leadRecipients : adminRecipients, // Default to admin if no leads
        contact: contactRecipients.length > 0 ? contactRecipients : adminRecipients, // Default to admin
        test: testRecipients,
      },

      // Test mode
      testMode: {
        enabled: process.env.EMAIL_TEST_MODE === 'true',
        suppressEmails: process.env.EMAIL_SUPPRESS === 'true',
      },

      // Legacy support
      adminEmail: adminRecipients[0],

      // Common settings
      retryAttempts: parseInt(process.env.EMAIL_RETRY_ATTEMPTS || '3'),
      retryDelay: parseInt(process.env.EMAIL_RETRY_DELAY || '5000'),
      timeout: parseInt(process.env.EMAIL_TIMEOUT || '30000'),
    });

    // Validate that at least one provider is configured
    const hasResend = !!(config.resend.apiKey && config.resend.fromEmail);
    const hasGmail = !!(config.gmail.user && config.gmail.appPassword);

    if (!hasResend && !hasGmail) {
      console.warn('⚠️ No email provider configured. Emails will be disabled.');
    }

    // Validate primary provider is configured
    if (config.provider.primaryProvider === 'resend' && !hasResend) {
      if (hasGmail) {
        console.warn('⚠️ Resend not configured, will use Gmail');
      }
    }

    if (config.provider.primaryProvider === 'gmail' && !hasGmail) {
      if (hasResend) {
        console.warn('⚠️ Gmail not configured, will use Resend');
      }
    }

    return config;
  } catch (error) {
    console.error('❌ Multi-provider email configuration error:', error);
    // Return a default config that disables emails rather than crashing
    return {
      resend: {},
      gmail: {},
      provider: {
        primaryProvider: 'resend',
        fallbackEnabled: false,
        healthCheckInterval: 300000,
      },
      recipients: {
        admin: [],
        leads: [],
        contact: [],
        test: [],
      },
      testMode: {
        enabled: false,
        suppressEmails: true, // Suppress emails if config is invalid
      },
      adminEmail: undefined,
      retryAttempts: 3,
      retryDelay: 5000,
      timeout: 30000,
    };
  }
};

// =============================================================================
// SINGLETON & HELPERS
// =============================================================================

/**
 * Singleton multi-provider configuration instance
 */
let cachedMultiConfig: MultiProviderConfig | null = null;

export const multiProviderConfig = (): MultiProviderConfig => {
  if (!cachedMultiConfig) {
    cachedMultiConfig = getMultiProviderConfig();
  }
  return cachedMultiConfig;
};

/**
 * Clear cached config (useful for testing)
 */
export const clearConfigCache = (): void => {
  cachedMultiConfig = null;
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

  if (config.resend.apiKey && config.resend.fromEmail) {
    available.push('resend');
  }

  if (config.gmail.user && config.gmail.appPassword) {
    available.push('gmail');
  }

  return available;
};

// =============================================================================
// RECIPIENT HELPERS
// =============================================================================

export type RecipientType = 'admin' | 'leads' | 'contact';

/**
 * Get recipients for a specific notification type
 * Handles test mode by returning test recipients instead
 */
export const getRecipients = (type: RecipientType): string[] => {
  const config = multiProviderConfig();

  // If test mode is enabled, return test recipients
  if (config.testMode.enabled && config.recipients.test.length > 0) {
    return config.recipients.test;
  }

  return config.recipients[type];
};

/**
 * Get all lead notification recipients
 */
export const getLeadRecipients = (): string[] => getRecipients('leads');

/**
 * Get all admin notification recipients
 */
export const getAdminRecipients = (): string[] => getRecipients('admin');

/**
 * Get all contact form recipients
 */
export const getContactRecipients = (): string[] => getRecipients('contact');

/**
 * Check if emails should be sent (not suppressed)
 */
export const shouldSendEmails = (): boolean => {
  const config = multiProviderConfig();
  return !config.testMode.suppressEmails;
};

/**
 * Check if test mode is enabled
 */
export const isTestMode = (): boolean => {
  const config = multiProviderConfig();
  return config.testMode.enabled;
};

/**
 * Get sender configuration
 */
export const getSenderConfig = (): { email: string; name: string; replyTo?: string } => {
  const config = multiProviderConfig();
  return {
    email: config.resend.fromEmail || 'noreply@paradiselatindance.com',
    name: config.resend.fromName || 'Paradise Latin Dance Studio',
    replyTo: config.resend.replyTo,
  };
};

// =============================================================================
// LOGGING & DEBUGGING
// =============================================================================

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
    recipients: {
      admin: config.recipients.admin.length,
      leads: config.recipients.leads.length,
      contact: config.recipients.contact.length,
      test: config.recipients.test.length,
    },
    testMode: config.testMode.enabled,
    emailsSuppressed: config.testMode.suppressEmails,
    retryAttempts: config.retryAttempts,
    hasResendKey: !!config.resend.apiKey,
    hasGmailAuth: !!(config.gmail.user && config.gmail.appPassword),
    isDev: process.env.NODE_ENV === 'development',
  };
};

/**
 * Validate multi-provider configuration without throwing errors
 */
export const validateMultiProviderConfig = (): { valid: boolean; errors?: string[]; warnings?: string[] } => {
  const warnings: string[] = [];

  try {
    const config = getMultiProviderConfig();

    // Check for warnings
    if (config.recipients.leads.length === 0) {
      warnings.push('No lead recipients configured - trial signups will not be notified');
    }

    if (config.recipients.admin.length === 0) {
      warnings.push('No admin recipients configured - admin alerts will not be sent');
    }

    if (!config.resend.apiKey && !config.gmail.user) {
      warnings.push('No email provider configured - emails are disabled');
    }

    return { valid: true, warnings: warnings.length > 0 ? warnings : undefined };
  } catch (error: unknown) {
    const errors = error instanceof z.ZodError
      ? error.issues.map((issue) => issue.message)
      : [error instanceof Error ? error.message : 'Unknown validation error'];
    return { valid: false, errors, warnings };
  }
};
