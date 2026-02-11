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
    id: "drop-in",
    name: "Drop-In Class",
    price: "$35",
    duration: "per class",
    description: "Perfect for trying out a class or occasional visits",
    features: [
      { name: "Single Class Access", included: true },
      { name: "No Commitment Required", included: true },
      { name: "Any Class Type", included: true },
      { name: "Flexible Schedule", included: true },
      { name: "Community Events Access", included: false },
      { name: "Member-Only Events", included: false },
      { name: "Priority Class Booking", included: false }
    ],
    ctaText: "Book a Class"
  },
  {
    id: "bundle",
    name: "12 Class Package",
    price: "$250",
    duration: "12 credits",
    description: "Best value for regular dancers - credits never expire!",
    highlight: true,
    popularChoice: true,
    features: [
      { name: "12 Class Credits", included: true },
      { name: "Credits Never Expire", included: true },
      { name: "Book Any Class Type", included: true },
      { name: "Flexible Schedule", included: true },
      { name: "Online Class Booking", included: true },
      { name: "Community Events Access", included: true },
      { name: "No Monthly Commitment", included: true },
      { name: "Member-Only Events", included: true }
    ],
    ctaText: "Get Started"
  },
  {
    id: "unlimited",
    name: "Unlimited Monthly",
    price: "$225",
    duration: "per month",
    description: "Unlimited classes for dedicated dance enthusiasts",
    features: [
      { name: "Unlimited Classes per Month", included: true },
      { name: "Access to All Class Types", included: true },
      { name: "Priority Class Booking", included: true },
      { name: "Member-Only Events", included: true },
      { name: "Free Practice Sessions", included: true },
      { name: "Community Events Access", included: true },
      { name: "Flexible Class Times", included: true },
      { name: "Online Class Booking", included: true }
    ],
    ctaText: "Get Started"
  }
];

export const membershipSection = {
  title: "Royal Dance Membership Options",
  description: "At Paradise Latin Dance Studio, we're committed to your dance journey. We offer flexible membership options to fit your schedule and budget. Join our community of passionate dancers and start your transformation today!"
};
