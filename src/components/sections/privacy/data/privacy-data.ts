import { PrivacySection, PrivacyHighlight, PrivacyContact } from "../types/privacy-types";

export const privacyHighlights: PrivacyHighlight[] = [
  {
    id: "data-security",
    icon: "Shield",
    title: "Military-Grade Security",
    description: "Your data is protected with the same level of security we provide to our military members.",
    isPrimary: true
  },
  {
    id: "transparency",
    icon: "Eye",
    title: "Full Transparency",
    description: "We clearly explain how your information is collected, used, and protected."
  },
  {
    id: "control",
    icon: "Lock",
    title: "You're in Control",
    description: "Manage your privacy preferences and data sharing options at any time."
  },
  {
    id: "compliance",
    icon: "FileText",
    title: "Legal Compliance",
    description: "We adhere to all relevant data protection laws and regulations."
  }
];

export const privacySections: PrivacySection[] = [
  {
    id: "information-collection",
    title: "Information We Collect",
    description: "We collect various types of information to provide you with the best possible fitness experience while ensuring your privacy.",
    icon: "UserCheck",
    subsections: [
      {
        id: "personal-info",
        title: "Personal Information",
        content: [
          "Name, email address, and contact details",
          "Date of birth and gender",
          "Emergency contact information",
          "Military status and service details (if applicable)",
          "Payment information (processed securely through our payment providers)"
        ],
        isImportant: true
      },
      {
        id: "fitness-info",
        title: "Fitness & Health Information",
        content: [
          "Physical fitness assessments and measurements",
          "Exercise preferences and history",
          "Health conditions and limitations",
          "Fitness goals and progress tracking",
          "Workout and attendance history"
        ]
      },
      {
        id: "technical-info",
        title: "Technical Information",
        content: [
          "Device and browser information",
          "IP address and location data",
          "Website usage and interaction data",
          "Cookies and similar technologies"
        ]
      }
    ]
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    description: "Your information helps us provide and improve our services while maintaining the highest standards of privacy.",
    icon: "Server",
    subsections: [
      {
        id: "service-provision",
        title: "Service Provision",
        content: [
          "Personalize your fitness experience",
          "Track your progress and achievements",
          "Process payments and manage memberships",
          "Provide customer support and assistance",
          "Send important updates about our services"
        ]
      },
      {
        id: "communication",
        title: "Communication",
        content: [
          "Send workout schedules and reminders",
          "Provide important facility updates",
          "Share promotional offers and events",
          "Respond to your inquiries and feedback"
        ]
      }
    ]
  },
  {
    id: "data-protection",
    title: "How We Protect Your Data",
    description: "We implement strict security measures to protect your personal information.",
    icon: "Lock",
    subsections: [
      {
        id: "security-measures",
        title: "Security Measures",
        content: [
          "Encryption of sensitive data",
          "Regular security audits and updates",
          "Strict access controls and authentication",
          "Secure data backup and recovery systems"
        ],
        isImportant: true
      },
      {
        id: "data-retention",
        title: "Data Retention",
        content: [
          "We retain your data only as long as necessary",
          "You can request data deletion at any time",
          "Automated data cleanup for inactive accounts",
          "Secure disposal of outdated information"
        ]
      }
    ]
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    description: "You have full control over your personal information and how it's used.",
    icon: "UserCheck",
    subsections: [
      {
        id: "access-rights",
        title: "Your Rights Include",
        content: [
          "Access your personal information",
          "Request corrections to your data",
          "Download a copy of your data",
          "Request data deletion",
          "Opt-out of marketing communications"
        ],
        isImportant: true
      }
    ]
  }
];

export const privacyContact: PrivacyContact = {
  title: "Privacy Inquiries",
  email: "privacy@ripfitness.com",
  phone: "(808) 123-4567",
  address: "94-111 Leokane St #150A, Waipahu, HI 96797",
  hours: [
    "Monday-Friday: 6 AM - 9 PM",
    "Saturday: 7 AM - 4 PM",
    "Sunday: 7 AM - 1 PM"
  ]
};
