import { DanceEvent, EventType } from "../types/events-types";

export const eventTypes: Array<"All" | EventType> = ["All", "Social", "Workshop", "Performance", "Camp", "Package"];

export const danceEvents: DanceEvent[] = [
  {
    id: "march-paradise-latin-dance-social",
    title: "PARADISE LATIN DANCE SOCIAL",
    description: "Join us for an unforgettable night of social dancing featuring a free dance lesson from Rico & Mike, followed by social dancing with DJ EVER playing the best Salsa & Bachata. Perfect for dancers of all levels!",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1741750730/Ripfitness/Dance-studio/events/Dance_social_nxi3nh.jpg",
    date: "March 29, 2025",
    time: "20:30 - 00:00",
    location: "94-111 Leokane St, Waipahu, HI",
    capacity: "150 people",
    price: "$20 Online",
    type: "Social",
    instructors: ["Rico", "Mike"],
    highlights: [
      "FREE dance lesson at 8:30pm",
      "Social Dancing from 9pm - 12pm",
      "DJ EVER playing the best Salsa & Bachata",
      "Secure your tickets online"
    ],
    registrationUrl: "https://www.r1pfitness.com/products/social-ticket?fbclid=PAZXh0bgNhZW0CMTEAAaYrY0QWYWmDqhQyQ3GWLVXA5eeeqBvd8mpf02ophMgrKpKcsu44g4zbZiY_aem_Vf0XHYruN-S5oU3kj6pyHg",
    featured: true
  },
  {
    id: "salsa-beginner-cycle-2025",
    title: "Reborn 1n Paradise - 2025 Salsa Cycle Special",
    description: "Start your salsa journey with our special 12-credit dance class package. Perfect for beginners and those looking to establish a regular practice. Credits never expire!",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1738826480/Ripfitness/Dance-studio/lds-3_jlnuvb.jpg",
    date: "February 10, 2025",
    time: "Flexible Schedule",
    location: "Paradise Latin Dance Studio, 94-111 Leokane St, Waipahu, Hawaii 96797",
    capacity: "Limited Spots",
    price: "$225.00 (Regular $349.00)",
    type: "Package",
    instructors: ["Rico", "Mike"],
    highlights: [
      "12 Dance Class Credits (Never Expire)",
      "Save $124 off regular price",
      "4 interest-free installments available",
      "Flexible scheduling options"
    ],
    registrationUrl: "https://www.r1pfitness.com/products/early-bird-social?pr_prod_strat=e5_desc&pr_rec_id=53f2dafcc&pr_rec_pid=7161387515987&pr_ref_pid=7359436652627&pr_seq=uniform"
  }
];

export const eventsSection = {
  title: "Events",
  subtitle: "Upcoming Events",
  description: "Join our vibrant dance community at these exciting events and workshops.",
  ctaText: "View All Events"
}; 