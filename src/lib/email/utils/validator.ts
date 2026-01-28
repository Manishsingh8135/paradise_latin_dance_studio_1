/**
 * Input Validation for Paradise Dance Studio Email Service
 * Uses Zod for type-safe validation and security
 */

import { z } from 'zod';

// Trial signup form validation schema
export const TrialSignupSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),
  
  phone: z
    .string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  
  selectedClass: z.enum(['Salsa', 'Bachata'], {
    errorMap: () => ({ message: 'Please select a valid dance class' }),
  }),
  
  experience: z.enum(['beginner', 'some_experience', 'experienced'], {
    errorMap: () => ({ message: 'Please select your experience level' }),
  }),
  
  goals: z
    .array(z.string().max(100, 'Goal description too long'))
    .max(10, 'Too many goals selected')
    .default([]),
  
  hearAbout: z
    .string()
    .max(100, 'Response too long')
    .optional()
    .or(z.literal('')),
});

export type TrialSignupFormData = z.infer<typeof TrialSignupSchema>;

/**
 * Validate trial signup form data
 * Throws ZodError if validation fails
 */
export function validateTrialSignup(data: unknown): TrialSignupFormData {
  return TrialSignupSchema.parse(data);
}

/**
 * Safe validation that returns validation result
 * Does not throw errors
 */
export function validateTrialSignupSafe(data: unknown): {
  success: boolean;
  data?: TrialSignupFormData;
  errors?: string[];
} {
  const result = TrialSignupSchema.safeParse(data);
  
  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }
  
  return {
    success: false,
    errors: result.error.issues.map(issue => issue.message),
  };
}

/**
 * Validate email address format
 */
export function isValidEmail(email: string): boolean {
  return z.string().email().safeParse(email).success;
}

/**
 * Sanitize user input for safe logging
 * Removes sensitive information and limits length
 */
export function sanitizeForLogging(data: unknown): unknown {
  if (typeof data === 'string') {
    return data.slice(0, 100); // Limit string length
  }
  
  if (Array.isArray(data)) {
    return data.slice(0, 10).map(sanitizeForLogging); // Limit array size
  }
  
  if (data && typeof data === 'object') {
    const sanitized: Record<string, unknown> = {};
    
    for (const [key, value] of Object.entries(data)) {
      // Don't log sensitive fields in full
      if (key.toLowerCase().includes('email')) {
        sanitized[key] = typeof value === 'string' ? value.replace(/.(?=.{4})/g, '*') : value;
      } else if (key.toLowerCase().includes('phone')) {
        sanitized[key] = typeof value === 'string' ? value.replace(/.(?=.{4})/g, '*') : value;
      } else {
        sanitized[key] = sanitizeForLogging(value);
      }
    }
    
    return sanitized;
  }
  
  return data;
}

/**
 * Validate user agent string for logging
 */
export function sanitizeUserAgent(userAgent?: string): string {
  if (!userAgent) return 'unknown';
  
  // Remove potentially sensitive information but keep useful data
  return userAgent
    .replace(/\([^)]*\)/g, '') // Remove parenthetical info
    .slice(0, 200) // Limit length
    .trim();
}

/**
 * Validate and sanitize IP address
 */
export function sanitizeIpAddress(ip?: string): string {
  if (!ip) return 'unknown';
  
  // Basic IP validation and sanitization
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  if (ipv4Regex.test(ip) || ipv6Regex.test(ip)) {
    return ip;
  }
  
  return 'invalid';
} 