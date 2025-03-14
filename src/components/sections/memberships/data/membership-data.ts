export interface MembershipFeature {
  name: string;
  included: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  highlight?: boolean;
  features: MembershipFeature[];
  ctaText: string;
  popularChoice?: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "bundle",
    name: "12 Class Bundle Pack",
    price: "$225",
    duration: "one-time",
    description: "Perfect for those who want flexibility with their dance schedule",
    features: [
      { name: "12 Classes to Use Within 6 Months", included: true },
      { name: "Book Any Class Type", included: true },
      { name: "Flexible Schedule", included: true },
      { name: "Access to Basic Classes", included: true },
      { name: "Online Class Booking", included: true },
      { name: "Community Events Access", included: true },
      { name: "No Monthly Commitment", included: true },
      { name: "Member-Only Events", included: false },
      { name: "Free Practice Sessions", included: false },
      { name: "Priority Class Booking", included: false },
      { name: "Unlimited Classes per Month", included: false }
    ],
    ctaText: "Get Started"
  },
  {
    id: "unlimited",
    name: "Unlimited Dance Classes",
    price: "$180",
    duration: "per month",
    description: "Best value for dedicated dance enthusiasts",
    highlight: true,
    popularChoice: true,
    features: [
      { name: "Unlimited Classes per Month", included: true },
      { name: "Access to All Class Types", included: true },
      { name: "Priority Class Booking", included: true },
      { name: "Member-Only Events", included: true },
      { name: "Free Practice Sessions", included: true },
      { name: "Community Events Access", included: true },
      { name: "Flexible Class Times", included: true },
      { name: "Monthly Payment Option", included: true },
      { name: "Online Class Booking", included: true },
      { name: "Book Any Class Type", included: true },
      { name: "Access to Basic Classes", included: true }
    ],
    ctaText: "Get Started"
  },
  {
    id: "unlimited-yearly",
    name: "Unlimited Annual Pass",
    price: "$1728",
    duration: "per year",
    description: "Save 20% with our annual commitment option",
    features: [
      { name: "All Unlimited Monthly Benefits", included: true },
      { name: "20% Savings Compared to Monthly", included: true },
      { name: "Unlimited Classes per Month", included: true },
      { name: "Access to All Class Types", included: true },
      { name: "Priority Class Booking", included: true },
      { name: "Member-Only Events", included: true },
      { name: "Free Practice Sessions", included: true },
      { name: "Community Events Access", included: true },
      { name: "Flexible Class Times", included: true },
      { name: "Online Class Booking", included: true },
      { name: "VIP Access to Special Workshops", included: true }
    ],
    ctaText: "Get Started"
  }
];

export const membershipSection = {
  title: "Royal Dance Membership Options",
  description: "At Paradise Latin Dance Studio, we're committed to your dance journey. We offer flexible membership options to fit your schedule and budget. Join our community of passionate dancers and start your transformation today!"
};
