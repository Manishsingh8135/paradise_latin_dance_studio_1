/**
 * Paradise Dance Studio Email Service - Main Exports
 * Provides both single-provider (legacy) and multi-provider (new) email services
 */

// Legacy single-provider service (existing code compatibility)
export { EmailService, getEmailService } from './services/email-service';

// New multi-provider service (recommended for new usage)
export { 
  MultiProviderEmailService, 
  getMultiProviderEmailService 
} from './services/multi-provider-email-service';

// Provider implementations
export { ResendProvider } from './providers/resend-provider';
export { GmailProvider } from './providers/gmail-provider';

// Configuration
export { 
  multiProviderConfig,
  getMultiProviderConfigForLogging,
  getAvailableProviders 
} from './core/multi-provider-config';

// Types and interfaces
export type { 
  IEmailProvider,
  BaseEmailProvider 
} from './core/provider-interface';

export type {
  ProviderType,
  ProviderFactoryConfig
} from './core/provider-factory';

export type {
  EmailResult,
  EmailTemplate,
  TrialSignupData,
  EmailBatchResult,
  ProviderConfig
} from './core/types';

// Easy switching utility
export const switchEmailProvider = async (providerName: 'resend' | 'gmail') => {
  console.log(`🔄 Switching email provider to: ${providerName}`);
  console.log(`💡 Update your .env file: EMAIL_PROVIDER=${providerName}`);
  console.log('⚠️  Remember to restart your application after changing environment variables');
  
  return {
    provider: providerName,
    envVariable: `EMAIL_PROVIDER=${providerName}`,
    restartRequired: true,
  };
}; 