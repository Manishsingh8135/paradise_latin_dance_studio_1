/**
 * Beautiful Email Templates for Paradise Dance Studio
 * Simple, elegant, and clean designs
 */

// Export user welcome template
export { renderUserWelcome } from './user-welcome';

// Export admin alert template  
export { renderAdminAlert } from './admin-alert';

// Default exports for backward compatibility
export { renderUserWelcome as renderTrialConfirmation } from './user-welcome';
export { renderAdminAlert as renderAdminNotification } from './admin-alert';

// Template configuration
export const emailTemplates = {
  userWelcome: 'Beautiful welcome email with purple/pink gradients',
  adminAlert: 'Professional admin notification with white/yellow theme',
} as const; 