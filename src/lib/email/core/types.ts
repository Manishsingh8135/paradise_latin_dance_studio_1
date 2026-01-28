/**
 * Core Email Service Types for Paradise Dance Studio
 * These types define the contracts for our email system
 */

export interface TrialSignupData {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  trial: {
    selectedClass: 'Salsa' | 'Bachata';
    experience: 'beginner' | 'some_experience' | 'experienced';
    goals: string[];
    hearAbout?: string;
  };
  metadata: {
    timestamp: Date;
    userAgent?: string;
    ipAddress?: string;
  };
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface EmailBatchResult {
  total: number;
  successful: number;
  failed: number;
  results: EmailResult[];
}

// Provider configuration types
export interface ProviderConfig {
  enabled: boolean;
  timeout: number;
  rateLimit: {
    requests: number;
    window: number; // seconds
  };
}

// Email priorities for future queue system
export enum EmailPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent'
}

// Error types for better error handling
export interface EmailError {
  code: string;
  message: string;
  provider?: string;
  retryable: boolean;
  details?: Record<string, unknown>;
} 