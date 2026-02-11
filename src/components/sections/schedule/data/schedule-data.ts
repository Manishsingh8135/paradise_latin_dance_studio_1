import { DanceClass, DanceLevel, DanceStyle, DayOfWeek } from "../types/schedule-types";

export const danceClasses: DanceClass[] = [
  // Monday Classes
  {
    id: "rhythm-mon",
    style: "Salsa & Bachata",
    level: "Dance Rhythm",
    instructor: "Rico & Mike Lorenzo",
    day: "Monday",
    time: "19:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Main Studio",
    available: true
  },
  {
    id: "foundations-mon",
    style: "Salsa & Bachata",
    level: "Dance Foundations",
    instructor: "Rico & Mike Lorenzo",
    day: "Monday",
    time: "20:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Main Studio",
    available: true
  },
  // Tuesday Classes
  {
    id: "dynamics-tue",
    style: "Salsa & Bachata",
    level: "Dance Dynamics",
    instructor: "Rico & Mike Lorenzo",
    day: "Tuesday",
    time: "19:00",
    duration: "90 min",
    capacity: "15 spots",
    room: "Main Studio",
    available: true
  },
  // Wednesday Classes
  {
    id: "rhythm-wed",
    style: "Salsa & Bachata",
    level: "Dance Rhythm",
    instructor: "Rico & Mike Lorenzo",
    day: "Wednesday",
    time: "19:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Main Studio",
    available: true
  },
  {
    id: "foundations-wed",
    style: "Salsa & Bachata",
    level: "Dance Foundations",
    instructor: "Rico & Mike Lorenzo",
    day: "Wednesday",
    time: "20:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Main Studio",
    available: true
  },
  // Thursday Classes
  {
    id: "dynamics-thu",
    style: "Salsa & Bachata",
    level: "Dance Dynamics",
    instructor: "Rico & Mike Lorenzo",
    day: "Thursday",
    time: "19:00",
    duration: "90 min",
    capacity: "15 spots",
    room: "Main Studio",
    available: true
  },
  // Friday Classes
  {
    id: "rhythm-fri",
    style: "Salsa & Bachata",
    level: "Dance Rhythm",
    instructor: "Rico & Mike Lorenzo",
    day: "Friday",
    time: "19:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Main Studio",
    available: true
  },
  {
    id: "foundations-fri",
    style: "Salsa & Bachata",
    level: "Dance Foundations",
    instructor: "Rico & Mike Lorenzo",
    day: "Friday",
    time: "20:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Main Studio",
    available: true
  }
];

export const days: DayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export const styles: Array<DanceStyle | "All Styles"> = [
  "All Styles",
  "Salsa & Bachata"
];

export const levels: Array<DanceLevel | "All Levels"> = [
  "All Levels",
  "Dance Foundations",
  "Dance Rhythm",
  "Dance Dynamics"
];

export const levelDescriptions = {
  "Dance Foundations": "Best for new dancers - learn the basics",
  "Dance Rhythm": "For experienced dancers ready to level up",
  "Dance Dynamics": "Advanced dancers mastering complex moves"
};

export const scheduleSection = {
  title: "Class Schedule",
  description: "Find the perfect class that fits your schedule and skill level.",
  ctaText: "Book Class"
};
