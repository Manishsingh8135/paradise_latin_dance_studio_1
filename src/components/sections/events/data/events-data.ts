import { DanceEvent, EventType } from "../types/events-types";
import { OPTIMIZED_URLS } from "@/lib/cloudinary";

export const eventTypes: Array<"All" | EventType> = ["All", "Social", "Workshop", "Performance", "Camp", "Package"];

export const danceEvents: DanceEvent[] = [
  {
    id: "class-package-special",
    title: "12 Class Package - Best Value!",
    description: "Get started with our best-value 12-credit dance class package. Perfect for new dancers and those looking to establish a regular practice. Credits never expire!",
    image: OPTIMIZED_URLS.lds3,
    date: "Available Now",
    time: "Flexible Schedule",
    location: "Paradise Latin Dance Studio, 94-111 Leokane St, Waipahu, Hawaii 96797",
    capacity: "Limited Spots",
    price: "$250.00",
    type: "Package",
    instructors: ["Rico", "Mike"],
    highlights: [
      "12 Dance Class Credits",
      "Credits Never Expire",
      "Book Any Class (Foundations, Rhythm, or Dynamics)",
      "Flexible scheduling options"
    ],
    registrationUrl: "/trial",
    featured: false
  }
];

export const eventsSection = {
  title: "Events",
  subtitle: "Upcoming Events",
  description: "Join our vibrant dance community at these exciting events and workshops.",
  ctaText: "View All Events"
}; 