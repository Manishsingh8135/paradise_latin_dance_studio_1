/**
 * Beautiful Admin Alert Email Template
 * Professional white and yellowish theme for admin notifications
 */

import React from 'react';
import { Html, Head, Body, Container, Section, Text, Button } from '@react-email/components';
import { render } from '@react-email/render';
import { TrialSignupData, EmailTemplate } from '../core/types';

interface AdminAlertProps {
  data: TrialSignupData;
}

function AdminAlert({ data }: AdminAlertProps) {
  const { user, trial, metadata } = data;

  const experienceMap = {
    beginner: 'Complete Beginner',
    some_experience: 'Some Experience',
    experienced: 'Experienced Dancer',
  };

  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.5;
            color: #1f2937;
            background-color: #fffbeb;
          }
        `}</style>
      </Head>
      <Body style={styles.body}>
        <Container style={styles.container}>
          
          {/* Alert Header */}
          <Section style={styles.alertHeader}>
            <Text style={styles.alertIcon}>🚨</Text>
            <Text style={styles.alertTitle}>NEW TRIAL SIGNUP</Text>
            <Text style={styles.alertSubtitle}>
              {user.firstName} {user.lastName} • {trial.selectedClass}
            </Text>
            <Text style={styles.alertTimestamp}>
              {metadata.timestamp.toLocaleString()}
            </Text>
          </Section>

          {/* Priority Actions */}
          <Section style={styles.prioritySection}>
            <Text style={styles.sectionTitle}>⚡ Priority Actions</Text>
            
            <div style={styles.actionsList}>
              <div style={styles.actionItem}>
                <div style={styles.actionBadge}>24H</div>
                <Text style={styles.actionText}>
                  <strong>Contact within 24 hours</strong> to schedule trial class
                </Text>
              </div>
              
              <div style={styles.actionItem}>
                <div style={styles.actionBadge}>PREP</div>
                <Text style={styles.actionText}>
                  <strong>Prepare for {experienceMap[trial.experience]}</strong> skill level
                </Text>
              </div>
              
              <div style={styles.actionItem}>
                <div style={styles.actionBadge}>FOLLOW</div>
                <Text style={styles.actionText}>
                  <strong>Follow up</strong> if no response within 48 hours
                </Text>
              </div>
            </div>
          </Section>

          {/* Contact Information */}
          <Section style={styles.infoSection}>
            <Text style={styles.sectionTitle}>👤 Contact Information</Text>
            
            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <Text style={styles.infoLabel}>Full Name</Text>
                <Text style={styles.infoValue}>{user.firstName} {user.lastName}</Text>
              </div>
              
              <div style={styles.infoCard}>
                <Text style={styles.infoLabel}>Email Address</Text>
                <Text style={styles.infoValueEmail}>{user.email}</Text>
              </div>
              
              <div style={styles.infoCard}>
                <Text style={styles.infoLabel}>Phone Number</Text>
                <Text style={styles.infoValue}>{user.phone || 'Not provided'}</Text>
              </div>
              
              <div style={styles.infoCard}>
                <Text style={styles.infoLabel}>Registration Date</Text>
                <Text style={styles.infoValue}>{metadata.timestamp.toLocaleDateString()}</Text>
              </div>
            </div>
          </Section>

          {/* Trial Details */}
          <Section style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>💃 Trial Details</Text>
            
            <div style={styles.detailsList}>
              <div style={styles.detailRow}>
                <Text style={styles.detailIcon}>🎯</Text>
                <div style={styles.detailContent}>
                  <Text style={styles.detailLabel}>Selected Class</Text>
                  <Text style={styles.detailValue}>{trial.selectedClass}</Text>
                </div>
              </div>
              
              <div style={styles.detailRow}>
                <Text style={styles.detailIcon}>📈</Text>
                <div style={styles.detailContent}>
                  <Text style={styles.detailLabel}>Experience Level</Text>
                  <Text style={styles.detailValue}>{experienceMap[trial.experience]}</Text>
                </div>
              </div>
              
              <div style={styles.detailRow}>
                <Text style={styles.detailIcon}>✨</Text>
                <div style={styles.detailContent}>
                  <Text style={styles.detailLabel}>Goals</Text>
                  <Text style={styles.detailValue}>
                    {trial.goals.length > 0 ? trial.goals.join(', ') : 'Not specified'}
                  </Text>
                </div>
              </div>
              
              <div style={styles.detailRow}>
                <Text style={styles.detailIcon}>📢</Text>
                <div style={styles.detailContent}>
                  <Text style={styles.detailLabel}>How They Found Us</Text>
                  <Text style={styles.detailValue}>{trial.hearAbout || 'Not specified'}</Text>
                </div>
              </div>
            </div>
          </Section>

          {/* Quick Actions */}
          <Section style={styles.actionsSection}>
            <Text style={styles.sectionTitle}>🚀 Quick Contact</Text>
            
            <div style={styles.buttonContainer}>
              <Button 
                href={`mailto:${user.email}?subject=Welcome to Paradise Dance! Let's schedule your ${trial.selectedClass} trial class&body=Hi ${user.firstName},%0A%0AThank you for signing up for our ${trial.selectedClass} trial class! We're excited to welcome you to Paradise Dance Studio.%0A%0AI'd love to schedule your first lesson and answer any questions you might have. What day and time works best for you this week?%0A%0ALooking forward to dancing with you!%0A%0ABest regards,%0A[Your Name]%0AParadise Latin Dance Studio`}
                style={styles.emailButton}
              >
                ✉️ Email {user.firstName}
              </Button>
              
              {user.phone && (
                <Button 
                  href={`tel:${user.phone.replace(/[^\d+]/g, '')}`}
                  style={styles.phoneButton}
                >
                  📞 Call {user.firstName}
                </Button>
              )}
            </div>
          </Section>

          {/* Contact Script */}
          <Section style={styles.scriptSection}>
            <Text style={styles.sectionTitle}>💬 Suggested Contact Script</Text>
            
            <div style={styles.scriptBox}>
              <Text style={styles.scriptText}>
                &ldquo;Hi {user.firstName}! This is [Your Name] from Paradise Latin Dance Studio. 
                Thank you for signing up for our {trial.selectedClass} trial class! 
                <br /><br />
                I&apos;d love to schedule your first lesson and answer any questions you might have. 
                What day and time works best for you this week?&rdquo;
              </Text>
            </div>
            
            <Text style={styles.scriptTip}>
              💡 <strong>Tip:</strong> Mention their {experienceMap[trial.experience]} level and personalize based on their goals.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              Paradise Latin Dance Studio - Admin Notification System
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// Render function
export async function renderAdminAlert(data: TrialSignupData): Promise<EmailTemplate> {
  const html = await render(<AdminAlert data={data} />);
  
  const text = `🚨 NEW TRIAL SIGNUP - ACTION REQUIRED

${data.user.firstName} ${data.user.lastName} signed up for ${data.trial.selectedClass}
Registration: ${data.metadata.timestamp.toLocaleString()}

PRIORITY ACTIONS:
• Contact within 24 hours to schedule trial class
• Prepare for ${data.trial.experience} experience level
• Follow up if no response within 48 hours

CONTACT INFORMATION:
Name: ${data.user.firstName} ${data.user.lastName}
Email: ${data.user.email}
Phone: ${data.user.phone || 'Not provided'}

TRIAL DETAILS:
Class: ${data.trial.selectedClass}
Experience: ${data.trial.experience}
Goals: ${data.trial.goals.join(', ') || 'Not specified'}
Found us via: ${data.trial.hearAbout || 'Not specified'}

QUICK ACTIONS:
Email: ${data.user.email}
${data.user.phone ? `Phone: ${data.user.phone}` : ''}

SUGGESTED SCRIPT:
"Hi ${data.user.firstName}! This is [Your Name] from Paradise Latin Dance Studio. Thank you for signing up for our ${data.trial.selectedClass} trial class! I'd love to schedule your first lesson and answer any questions you might have. What day and time works best for you this week?"

Paradise Latin Dance Studio - Admin Notification System`;

  return {
    subject: `🚨 New Trial: ${data.user.firstName} ${data.user.lastName} - ${data.trial.selectedClass} | Action Required`,
    html,
    text,
  };
}

// Professional white and yellow styles
const styles = {
  body: {
    backgroundColor: '#fffbeb',
    margin: '0',
    padding: '20px 0',
  },
  container: {
    maxWidth: '650px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '3px solid #fbbf24',
  },
  
  alertHeader: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    padding: '40px 30px',
    textAlign: 'center' as const,
    color: '#92400e',
  },
  alertIcon: {
    fontSize: '48px',
    margin: '0 0 15px 0',
  },
  alertTitle: {
    fontSize: '28px',
    fontWeight: '800',
    margin: '0 0 10px 0',
    letterSpacing: '1px',
  },
  alertSubtitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 10px 0',
  },
  alertTimestamp: {
    fontSize: '14px',
    opacity: 0.8,
    margin: '0',
  },
  
  prioritySection: {
    padding: '30px',
    backgroundColor: '#fef3c7',
    borderBottom: '2px solid #fbbf24',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#92400e',
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  },
  actionsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  actionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '2px solid #fbbf24',
  },
  actionBadge: {
    backgroundColor: '#f59e0b',
    color: '#ffffff',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '800',
    minWidth: '60px',
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
  },
  actionText: {
    fontSize: '15px',
    color: '#78350f',
    margin: '0',
  },
  
  infoSection: {
    padding: '30px',
    backgroundColor: '#ffffff',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  infoCard: {
    padding: '20px',
    backgroundColor: '#fffbeb',
    borderRadius: '12px',
    border: '1px solid #fed7aa',
  },
  infoLabel: {
    fontSize: '12px',
    color: '#92400e',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    margin: '0 0 8px 0',
  },
  infoValue: {
    fontSize: '16px',
    color: '#1f2937',
    fontWeight: '600',
    margin: '0',
  },
  infoValueEmail: {
    fontSize: '14px',
    color: '#3b82f6',
    fontWeight: '500',
    margin: '0',
    wordBreak: 'break-all' as const,
  },
  
  detailsSection: {
    padding: '30px',
    backgroundColor: '#fefce8',
  },
  detailsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  detailRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #facc15',
  },
  detailIcon: {
    fontSize: '24px',
    margin: '0',
    minWidth: '30px',
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: '13px',
    color: '#a16207',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    margin: '0 0 5px 0',
  },
  detailValue: {
    fontSize: '16px',
    color: '#1f2937',
    fontWeight: '500',
    margin: '0',
  },
  
  actionsSection: {
    padding: '30px',
    backgroundColor: '#ffffff',
    textAlign: 'center' as const,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
    alignItems: 'center',
  },
  emailButton: {
    backgroundColor: '#f59e0b',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    display: 'inline-block',
    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
    minWidth: '200px',
  },
  phoneButton: {
    backgroundColor: '#ffffff',
    color: '#f59e0b',
    padding: '16px 32px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    border: '2px solid #f59e0b',
    display: 'inline-block',
    minWidth: '200px',
  },
  
  scriptSection: {
    padding: '30px',
    backgroundColor: '#fef3c7',
  },
  scriptBox: {
    backgroundColor: '#ffffff',
    border: '3px solid #fbbf24',
    borderRadius: '12px',
    padding: '25px',
    margin: '0 0 15px 0',
  },
  scriptText: {
    fontSize: '15px',
    color: '#374151',
    lineHeight: '1.6',
    margin: '0',
    fontStyle: 'italic' as const,
  },
  scriptTip: {
    fontSize: '14px',
    color: '#92400e',
    backgroundColor: '#fffbeb',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #fed7aa',
    margin: '0',
  },
  
  footer: {
    padding: '25px',
    backgroundColor: '#78350f',
    textAlign: 'center' as const,
  },
  footerText: {
    fontSize: '14px',
    color: '#fbbf24',
    margin: '0',
    fontWeight: '500',
  },
}; 