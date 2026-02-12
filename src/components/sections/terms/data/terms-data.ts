import type { TermsContent } from "../types/terms-types";

export const termsContent: TermsContent[] = [
  {
    id: "membership-timeline",
    type: "timeline",
    content: {
      title: "Your Membership Journey",
      items: [
        {
          id: "signup",
          title: "Sign Up",
          description: "Complete your membership registration and choose your preferred plan.",
          date: "Day 1",
          icon: "UserPlus",
          status: "completed"
        },
        {
          id: "orientation",
          title: "Welcome Session",
          description: "Attend your complimentary intro class and meet our instructors.",
          date: "Day 2-3",
          icon: "Clipboard",
          status: "active"
        },
        {
          id: "training",
          title: "Start Dancing",
          description: "Begin your dance journey with full access to all classes and studio facilities.",
          date: "Day 4+",
          icon: "Music",
          status: "upcoming"
        }
      ]
    }
  },
  {
    id: "membership-tiers",
    type: "interactive",
    content: {
      type: "comparison",
      title: "Membership Plans",
      data: [
        {
          id: "drop-in",
          name: "Drop-In",
          price: 35,
          duration: "class",
          features: [
            "Single class access",
            "All dance styles available",
            "No commitment required",
            "Great for trying us out"
          ],
          restrictions: [
            "One class per purchase",
            "No social event access"
          ],
          cancellationPolicy: "No cancellation needed — pay per class"
        },
        {
          id: "class-package",
          name: "12 Class Package",
          price: 250,
          duration: "package",
          features: [
            "12 classes at a discounted rate",
            "Credits never expire",
            "All dance styles included",
            "Social event access",
            "Flexible scheduling",
            "Best value per class"
          ],
          restrictions: [
            "Non-transferable",
            "Private lessons not included"
          ],
          cancellationPolicy: "Non-refundable, credits never expire"
        },
        {
          id: "unlimited",
          name: "Unlimited Monthly",
          price: 225,
          duration: "month",
          features: [
            "Unlimited classes per month",
            "All dance styles and levels",
            "Priority class booking",
            "Social event access",
            "Practice session access",
            "Exclusive member events"
          ],
          restrictions: [
            "Private lessons at member rate"
          ],
          cancellationPolicy: "Cancel anytime with 14-day notice"
        }
      ]
    }
  },
  {
    id: "facility-rules",
    type: "interactive",
    content: {
      type: "tabs",
      title: "Facility Rules",
      data: [
        {
          id: "general",
          category: "General Conduct",
          rules: [
            "Respectful behavior towards staff, instructors, and fellow dancers",
            "Proper dance attire and clean footwear required",
            "No offensive language or behavior",
            "Follow all posted studio guidelines"
          ],
          consequences: [
            "Verbal warning",
            "Written warning",
            "Membership suspension",
            "Membership termination"
          ]
        },
        {
          id: "studio-care",
          category: "Studio Care",
          rules: [
            "No street shoes on the dance floor",
            "Keep personal belongings in designated areas",
            "No food or colored drinks in the studio",
            "Report any floor damage or safety concerns"
          ],
          consequences: [
            "Verbal warning",
            "Written warning",
            "Cleaning fee if applicable"
          ]
        },
        {
          id: "safety",
          category: "Safety & Etiquette",
          rules: [
            "Warm up before class — arrive on time",
            "Respect your partner and maintain appropriate contact",
            "No unauthorized instruction during classes",
            "Report injuries or accidents immediately"
          ],
          consequences: [
            "Immediate intervention",
            "Safety review required",
            "Possible suspension"
          ]
        }
      ]
    }
  },
  {
    id: "liability-notice",
    type: "callout",
    style: "warning",
    content: {
      title: "Important Notice",
      message: "By using our facilities, you acknowledge and accept the inherent risks associated with dance activities and agree to follow all studio safety protocols. Paradise Latin Dance Studio is not liable for injuries resulting from failure to follow instructor guidelines or studio rules."
    }
  }
];
