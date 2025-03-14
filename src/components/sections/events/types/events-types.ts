export type EventType = "Social" | "Workshop" | "Performance" | "Camp" | "Package";

export interface EventHighlight {
  text: string;
}

export interface DanceEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  price: string;
  type: EventType;
  instructors: string[];
  highlights: string[];
  registrationUrl: string;
  featured?: boolean;
}

export interface EventsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
} 