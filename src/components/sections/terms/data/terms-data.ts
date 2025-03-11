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
          title: "Fitness Assessment",
          description: "Schedule your complimentary fitness assessment with our certified trainers.",
          date: "Day 2-3",
          icon: "Clipboard",
          status: "active"
        },
        {
          id: "training",
          title: "Start Training",
          description: "Begin your fitness journey with full access to our premium facilities.",
          date: "Day 4+",
          icon: "Dumbbell",
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
          id: "basic",
          name: "Basic",
          price: 49.99,
          duration: "month",
          features: [
            "Access to main workout area",
            "Basic equipment usage",
            "Locker room access",
            "Online workout tracking"
          ],
          restrictions: [
            "No group classes",
            "No personal training",
            "Limited hours access"
          ],
          cancellationPolicy: "30-day notice required for cancellation"
        },
        {
          id: "premium",
          name: "Premium",
          price: 79.99,
          duration: "month",
          features: [
            "24/7 gym access",
            "All equipment access",
            "Group classes included",
            "Sauna & spa access",
            "Guest passes (2/month)",
            "Advanced workout tracking"
          ],
          restrictions: [
            "Personal training not included",
            "Premium classes extra"
          ],
          cancellationPolicy: "14-day notice required for cancellation"
        },
        {
          id: "elite",
          name: "Elite",
          price: 129.99,
          duration: "month",
          features: [
            "All Premium features",
            "Personal training sessions (2/month)",
            "Nutrition consultation",
            "Priority class booking",
            "Unlimited guest passes",
            "Exclusive events access"
          ],
          restrictions: [
            "Additional PT sessions at member rate"
          ],
          cancellationPolicy: "No minimum commitment required"
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
            "Respectful behavior towards staff and members",
            "Proper gym attire required",
            "No offensive language or behavior",
            "Follow all posted safety guidelines"
          ],
          consequences: [
            "Verbal warning",
            "Written warning",
            "Membership suspension",
            "Membership termination"
          ]
        },
        {
          id: "equipment",
          category: "Equipment Usage",
          rules: [
            "Re-rack weights after use",
            "Wipe down equipment",
            "No equipment monopolization",
            "Report damaged equipment"
          ],
          consequences: [
            "Verbal warning",
            "Written warning",
            "Usage restriction"
          ]
        },
        {
          id: "safety",
          category: "Safety Protocols",
          rules: [
            "Use spotters when necessary",
            "Follow proper form",
            "No unauthorized instruction",
            "Report accidents immediately"
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
      message: "By using our facilities, you acknowledge and accept the inherent risks of exercise and agree to follow all safety protocols. RIP FITNESS is not liable for injuries resulting from improper equipment use or failure to follow guidelines."
    }
  }
];
