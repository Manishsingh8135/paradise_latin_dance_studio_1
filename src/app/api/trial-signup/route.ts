/**
 * Trial Signup API Endpoint for Paradise Dance Studio
 * Handles trial class signups and sends confirmation emails using multi-provider service
 */

import { NextRequest, NextResponse } from 'next/server';
import { getMultiProviderEmailService } from '@/lib/email/services/multi-provider-email-service';
import { validateTrialSignupSafe } from '@/lib/email/utils/validator';
import { sanitizeUserAgent, sanitizeIpAddress } from '@/lib/email/utils/validator';
import { TrialSignupData } from '@/lib/email/core/types';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const rawData = await request.json();

    // Validate input data
    const validation = validateTrialSignupSafe(rawData);
    
    if (!validation.success) {
      console.warn('❌ Validation failed:', validation.errors);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const formData = validation.data!;

    // Extract request metadata
    const userAgent = sanitizeUserAgent(request.headers.get('user-agent') || undefined);
    const ipAddress = sanitizeIpAddress(
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      undefined
    );

    // Create trial signup data structure
    const trialSignupData: TrialSignupData = {
      user: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
      },
      trial: {
        selectedClass: formData.selectedClass,
        experience: formData.experience,
        goals: formData.goals,
        hearAbout: formData.hearAbout || undefined,
      },
      metadata: {
        timestamp: new Date(),
        userAgent,
        ipAddress,
      },
    };

    // Get multi-provider email service
    const emailService = getMultiProviderEmailService();

    // Send emails (both user confirmation and admin notification)
    const emailResults = await emailService.sendTrialSignupEmails(trialSignupData);

    // Check email results
    const userEmailSuccess = emailResults.userEmail.success;
    const adminEmailSuccess = emailResults.adminEmail.success;

    // Determine overall success
    // Trial signup is considered successful even if emails fail (graceful degradation)
    const trialSignupSuccess = true;
    const allEmailsSuccess = userEmailSuccess && adminEmailSuccess;

    // Prepare response with provider information
    const response = {
      success: trialSignupSuccess,
      message: 'Trial signup completed successfully!',
      emailDelivery: {
        userEmail: {
          success: userEmailSuccess,
          provider: emailResults.userEmail.provider,
          messageId: emailResults.userEmail.messageId,
          error: emailResults.userEmail.error,
        },
        adminEmail: {
          success: adminEmailSuccess,
          provider: emailResults.adminEmail.provider,
          messageId: emailResults.adminEmail.messageId,
          error: emailResults.adminEmail.error,
        },
        allEmailsDelivered: allEmailsSuccess,
      },
      trialDetails: {
        name: `${formData.firstName} ${formData.lastName}`,
        class: formData.selectedClass,
        experience: formData.experience,
        timestamp: trialSignupData.metadata.timestamp.toISOString(),
      },
    };

    // Different status codes based on email delivery
    if (allEmailsSuccess) {
      return NextResponse.json(response, { status: 201 });
    } else if (userEmailSuccess) {
      console.warn(`⚠️ Trial signup successful, but admin email failed. User provider: ${emailResults.userEmail.provider}`);
      return NextResponse.json(response, { status: 201 });
    } else {
      console.warn(`⚠️ Trial signup successful, but user email failed. Admin provider: ${emailResults.adminEmail.provider}`);
      return NextResponse.json(response, { status: 201 });
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('❌ Trial signup API error:', error);

    // Return user-friendly error
    return NextResponse.json(
      {
        success: false,
        error: 'We experienced a technical issue processing your signup. Please try again or contact us directly.',
        technical: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}

// Health check endpoint - now shows multi-provider status
export async function GET() {
  try {
    const emailService = getMultiProviderEmailService();
    const healthCheck = await emailService.healthCheck();
    
    return NextResponse.json({
      api: 'trial-signup',
      status: healthCheck.healthy ? 'operational' : 'degraded',
      emailService: {
        type: 'multi-provider',
        healthy: healthCheck.healthy,
        primaryProvider: healthCheck.primaryProvider,
        availableProviders: healthCheck.availableProviders,
        providerHealth: healthCheck.providerHealth,
        details: healthCheck.details,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Health check failed';
    console.error('❌ Multi-provider health check failed:', error);
    
    return NextResponse.json(
      {
        api: 'trial-signup',
        status: 'degraded',
        emailService: {
          type: 'multi-provider',
          healthy: false,
          error: errorMessage,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}

// Handle unsupported methods
export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 