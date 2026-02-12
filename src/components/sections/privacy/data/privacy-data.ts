import { PrivacySection, PrivacyHighlight, PrivacyContact } from "../types/privacy-types";

export const privacyHighlights: PrivacyHighlight[] = [
  {
    id: "data-security",
    icon: "Shield",
    title: "Industry-Leading Security",
    description: "Your data is protected with robust encryption and security protocols to keep your information safe.",
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
    description: "We collect various types of information to provide you with the best possible dance studio experience while ensuring your privacy.",
    icon: "UserCheck",
    subsections: [
      {
        id: "personal-info",
        title: "Personal Information",
        content: [
          "Name, email address, and contact details",
          "Date of birth and gender",
          "Emergency contact information",
          "Dance experience level and preferences",
          "Payment information (processed securely through our payment providers)"
        ],
        isImportant: true
      },
      {
        id: "dance-info",
        title: "Dance & Class Information",
        content: [
          "Dance skill level and assessments",
          "Class preferences and style interests",
          "Health conditions and physical limitations",
          "Dance goals and progress tracking",
          "Class attendance and booking history"
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
          "Personalize your dance class experience",
          "Track your dance progress and achievements",
          "Process payments and manage memberships",
          "Provide customer support and assistance",
          "Send important updates about our services"
        ]
      },
      {
        id: "communication",
        title: "Communication",
        content: [
          "Send class schedules and reminders",
          "Provide important studio updates",
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
  email: "paradiselatindance@gmail.com",
  phone: "(808) 840-9926",
  address: "94-111 Leokane St #150A, Waipahu, HI 96797",
  hours: [
    "Monday-Friday: 6 AM - 9 PM",
    "Saturday: 7 AM - 4 PM",
    "Sunday: 7 AM - 1 PM"
  ]
};
