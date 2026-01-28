/**
 * Beautiful User Welcome Email Template
 * Clean, elegant, and welcoming design
 */

import React from 'react';
import { Html, Head, Body, Container, Section, Text, Button } from '@react-email/components';
import { render } from '@react-email/render';
import { TrialSignupData, EmailTemplate } from '../core/types';

interface UserWelcomeProps {
  data: TrialSignupData;
}

function UserWelcome({ data }: UserWelcomeProps) {
  const { user, trial } = data;

  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
          }
        `}</style>
      </Head>
      <Body style={styles.body}>
        <Container style={styles.container}>
          
          {/* Header */}
          <Section style={styles.header}>
            <div style={styles.headerContent}>
              <Text style={styles.logo}>💃 Paradise Dance</Text>
              <Text style={styles.tagline}>Where Dreams Take Flight</Text>
            </div>
          </Section>

          {/* Hero Section */}
          <Section style={styles.hero}>
            <Text style={styles.heroEmoji}>🌟</Text>
            <Text style={styles.heroTitle}>
              Welcome to Paradise, {user.firstName}!
            </Text>
            <Text style={styles.heroSubtitle}>
              Your dance journey begins here. We&apos;re thrilled to have you join our family!
            </Text>
          </Section>

          {/* Confirmation Box */}
          <Section style={styles.confirmationBox}>
            <Text style={styles.confirmationTitle}>✨ Trial Class Confirmed</Text>
            
            <div style={styles.detailsContainer}>
              <div style={styles.detailRow}>
                <Text style={styles.detailLabel}>Dance Style</Text>
                <Text style={styles.detailValue}>{trial.selectedClass}</Text>
              </div>
              
              <div style={styles.detailRow}>
                <Text style={styles.detailLabel}>Experience Level</Text>
                <Text style={styles.detailValue}>
                  {trial.experience === 'beginner' ? 'Complete Beginner' : 
                   trial.experience === 'some_experience' ? 'Some Experience' : 'Experienced Dancer'}
                </Text>
              </div>
              
              <div style={styles.detailRow}>
                <Text style={styles.detailLabel}>Your Goals</Text>
                <Text style={styles.detailValue}>
                  {trial.goals.length > 0 ? trial.goals.join(', ') : 'Experience the joy of dance'}
                </Text>
              </div>
            </div>
          </Section>

          {/* Next Steps */}
          <Section style={styles.stepsSection}>
            <Text style={styles.stepsTitle}>What happens next?</Text>
            
            <div style={styles.stepsList}>
              <div style={styles.step}>
                <div style={styles.stepNumber}>1</div>
                <div>
                  <Text style={styles.stepTitle}>We&apos;ll reach out soon</Text>
                  <Text style={styles.stepText}>Our team will contact you within 24 hours to schedule your perfect time</Text>
                </div>
              </div>
              
              <div style={styles.step}>
                <div style={styles.stepNumber}>2</div>
                <div>
                  <Text style={styles.stepTitle}>Come as you are</Text>
                  <Text style={styles.stepText}>Just bring comfortable clothes and your enthusiasm - we&apos;ll handle everything else!</Text>
                </div>
              </div>
              
              <div style={styles.step}>
                <div style={styles.stepNumber}>3</div>
                <div>
                  <Text style={styles.stepTitle}>Fall in love with dance</Text>
                  <Text style={styles.stepText}>Experience the magic, meet amazing people, and discover your passion</Text>
                </div>
              </div>
            </div>
          </Section>

          {/* Contact Section */}
          <Section style={styles.contactSection}>
            <Text style={styles.contactTitle}>Questions? We&apos;re here to help!</Text>
            
            <div style={styles.contactButtons}>
              <div style={{ marginBottom: '12px' }}>
                <Button href="tel:+18088409926" style={styles.phoneButton}>
                  📞 Call Us
                </Button>
              </div>
              <div>
                <Button href="mailto:paradiselatindance@gmail.com" style={styles.emailButton}>
                  💌 Send Message
                </Button>
              </div>
            </div>
            
            <Text style={styles.contactNote}>
              We typically respond within 2-4 hours during business hours
            </Text>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerMessage}>
              Thank you for choosing Paradise Latin Dance Studio. 
              We can&apos;t wait to welcome you into our dance family! 💃
            </Text>
            
            <Text style={styles.footerAddress}>
              Paradise Latin Dance Studio<br />
              94-111 Leokane St #150A, Waipahu, HI 96797<br />
              (808) 840-9926 | paradiselatindance@gmail.com
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// Render function
export async function renderUserWelcome(data: TrialSignupData): Promise<EmailTemplate> {
  const html = await render(<UserWelcome data={data} />);
  
  const text = `Welcome to Paradise, ${data.user.firstName}!

Your dance journey begins here. We're thrilled to have you join our family!

TRIAL CLASS CONFIRMED:
- Dance Style: ${data.trial.selectedClass}
- Experience Level: ${data.trial.experience}
- Goals: ${data.trial.goals.join(', ') || 'Experience the joy of dance'}

WHAT HAPPENS NEXT:
1. We'll reach out soon - Our team will contact you within 24 hours
2. Come as you are - Bring comfortable clothes and enthusiasm
3. Fall in love with dance - Experience the magic and meet amazing people

CONTACT US:
Phone: (808) 840-9926
Email: paradiselatindance@gmail.com

Thank you for choosing Paradise Latin Dance Studio!

Paradise Latin Dance Studio
94-111 Leokane St #150A, Waipahu, HI 96797`;

  return {
    subject: `🌟 Welcome to Paradise, ${data.user.firstName}! Your dance journey begins now`,
    html,
    text,
  };
}

// Beautiful, modern styles
const styles = {
  body: {
    backgroundColor: '#f8fafc',
    margin: '0',
    padding: '20px 0',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 30px',
    textAlign: 'center' as const,
  },
  headerContent: {
    color: '#ffffff',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#ffffff',
  },
  tagline: {
    fontSize: '14px',
    opacity: 0.9,
    margin: '0',
    color: '#ffffff',
  },
  
  hero: {
    padding: '50px 30px',
    textAlign: 'center' as const,
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#ffffff',
  },
  heroEmoji: {
    fontSize: '48px',
    margin: '0 0 20px 0',
  },
  heroTitle: {
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    color: '#ffffff',
  },
  heroSubtitle: {
    fontSize: '18px',
    margin: '0',
    opacity: 0.95,
    color: '#ffffff',
  },
  
  confirmationBox: {
    margin: '40px 30px',
    padding: '30px',
    backgroundColor: '#f0f9ff',
    borderRadius: '12px',
    border: '2px solid #0ea5e9',
  },
  confirmationTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#0c4a6e',
    textAlign: 'center' as const,
    margin: '0 0 25px 0',
  },
  detailsContainer: {
    width: '100%',
  },
  detailRow: {
    width: '100%',
    padding: '12px 15px',
    borderBottom: '1px solid #e0f2fe',
    marginBottom: '8px',
  },
  detailLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748b',
    margin: '0 0 4px 0',
    display: 'block',
  },
  detailValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0f172a',
    margin: '0',
    display: 'block',
    wordWrap: 'break-word' as const,
    maxWidth: '100%',
  },
  
  stepsSection: {
    padding: '40px 30px',
  },
  stepsTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center' as const,
    margin: '0 0 30px 0',
  },
  stepsList: {
    width: '100%',
  },
  step: {
    width: '100%',
    marginBottom: '25px',
    paddingLeft: '70px',
    position: 'relative' as const,
  },
  stepNumber: {
    position: 'absolute' as const,
    left: '0',
    top: '0',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'center' as const,
    lineHeight: '40px',
    display: 'inline-block',
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 8px 0',
  },
  stepText: {
    fontSize: '15px',
    color: '#64748b',
    margin: '0',
    lineHeight: '1.5',
  },
  
  contactSection: {
    padding: '40px 30px',
    backgroundColor: '#fafafa',
    textAlign: 'center' as const,
  },
  contactTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 25px 0',
  },
  contactButtons: {
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  },
  phoneButton: {
    backgroundColor: '#10b981',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    display: 'inline-block',
    boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.3)',
    minWidth: '140px',
    textAlign: 'center' as const,
  },
  emailButton: {
    backgroundColor: '#ffffff',
    color: '#10b981',
    padding: '16px 32px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    border: '2px solid #10b981',
    display: 'inline-block',
    minWidth: '140px',
    textAlign: 'center' as const,
  },
  contactNote: {
    fontSize: '14px',
    color: '#64748b',
    fontStyle: 'italic' as const,
    margin: '0',
  },
  
  footer: {
    padding: '40px 30px',
    backgroundColor: '#1e293b',
    color: '#ffffff',
    textAlign: 'center' as const,
  },
  footerMessage: {
    fontSize: '16px',
    margin: '0 0 25px 0',
    lineHeight: '1.6',
  },
  footerAddress: {
    fontSize: '14px',
    opacity: 0.8,
    margin: '0',
    lineHeight: '1.5',
  },
}; 