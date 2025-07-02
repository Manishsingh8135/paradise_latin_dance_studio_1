import { DanceEvent, EventType } from "../types/events-types";

export const eventTypes: Array<"All" | EventType> = ["All", "Social", "Workshop", "Performance", "Camp", "Package"];

export const danceEvents: DanceEvent[] = [
  {
    id: "july-paradise-latin-dance-social",
    title: "PARADISE LATIN DANCE SOCIAL",
    description: "Join us for an unforgettable summer night of social dancing featuring a complimentary dance lesson from Rico & Mike, followed by social dancing with DJ EVER playing the hottest Salsa & Bachata tracks. Experience the vibrant Paradise dance community!",
    image: "https://res.cloudinary.com/dyop38nwj/image/upload/v1741750730/Ripfitness/Dance-studio/events/Dance_social_nxi3nh.jpg",
    date: "July 5, 2025",
    time: "20:30 - 00:00",
    location: "Paradise Latin Dance Studio, 94-111 Leokane St, Waipahu, HI",
    capacity: "150 people",
    price: "$20 Online / $25 At Door",
    type: "Social",
    instructors: ["Rico", "Mike"],
    highlights: [
      "Complimentary dance lesson at 8:30pm",
      "Social dancing from 9:00pm to 12:00am",
      "DJ EVER spinning the best Latin hits",
      "Vibrant community atmosphere",
      "Professional photography included"
    ],
    registrationUrl: "https://www.r1pfitness.com/products/social-ticket?srsltid=AfmBOor1OYB5F-NAaXueStmgMuCLf-_YaWT9TBnX6wvlpN0YK51IrdDa&fbclid=PAQ0xDSwLOixJleHRuA2FlbQIxMQABp4k0KaIsdWB9JfySfw-mAvZa9rZmHM5mqZLFNuLx7o7koUuo1oQG2yCL8GPR_aem_Kuqn6ljxrN4jJY0QN2JKSA",
    featured: true
  },
  {
    id: "paso-a-paso-date-night",
    title: "RSVP PASO A PASO: DATE NIGHT",
    description: "Experience an intimate and romantic evening of partner dancing with our exclusive Paso a Paso Date Night workshop. Perfect for couples looking to connect through the art of Latin dance. Learn together, grow together, and create beautiful memories on the dance floor.",
    image: "https://www.r1pfitness.com/cdn/shop/files/7632EDD4-CD89-4F59-A236-31DB11B7D24B.jpg?v=1741341095&width=700",
    date: "July 19, 2025",
    time: "19:00 - 22:00",
    location: "Paradise Latin Dance Studio, 94-111 Leokane St, Waipahu, HI",
    capacity: "20 couples",
    price: "$200.00 per couple",
    type: "Workshop",
    instructors: ["Rico", "Mike"],
    highlights: [
      "Exclusive couples-only workshop",
      "Step-by-step partner dance instruction",
      "Romantic atmosphere with candlelit setting",
      "Complimentary refreshments included",
      "4 interest-free installments available",
      "Payment plans from $18.05/mo available"
    ],
    registrationUrl: "https://www.r1pfitness.com/products/date-night?pr_prod_strat=e5_desc&pr_rec_id=d59421441&pr_rec_pid=7478070902867&pr_ref_pid=7161387515987&pr_seq=uniform",
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
    price: "$240.00 (Regular $349.00)",
    type: "Package",
    instructors: ["Rico", "Mike"],
    highlights: [
      "12 Dance Class Credits (Never Expire)",
      "Save $124 off regular price",
      "4 interest-free installments available",
      "Flexible scheduling options"
    ],
    registrationUrl: "https://www.r1pfitness.com/products/early-bird-social?pr_prod_strat=e5_desc&pr_rec_id=53f2dafcc&pr_rec_pid=7161387515987&pr_ref_pid=7359436652627&pr_seq=uniform",
    featured: false
  }
];

export const eventsSection = {
  title: "Events",
  subtitle: "Upcoming Events",
  description: "Join our vibrant dance community at these exciting events and workshops.",
  ctaText: "View All Events"
}; 