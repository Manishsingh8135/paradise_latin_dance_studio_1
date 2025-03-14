import { DanceClass, DanceLevel, DanceStyle, DayOfWeek } from "../types/schedule-types";

export const danceClasses: DanceClass[] = [
  {
    id: "salsa-beg-mon",
    style: "Salsa",
    level: "Beginner",
    instructor: "Mike Lorenzo",
    day: "Monday",
    time: "18:00",
    duration: "60 min",
    capacity: "20 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "bachata-int-mon",
    style: "Bachata",
    level: "Intermediate",
    instructor: "Rico",
    day: "Monday",
    time: "19:30",
    duration: "60 min",
    capacity: "20 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "contemporary-beg-tue",
    style: "Contemporary",
    level: "Beginner",
    instructor: "James Chen",
    day: "Tuesday",
    time: "17:30",
    duration: "75 min",
    capacity: "15 spots",
    room: "Studio B",
    available: true
  },
  {
    id: "hiphop-all-tue",
    style: "Hip Hop",
    level: "All Levels",
    instructor: "Sophia Patel",
    day: "Tuesday",
    time: "19:00",
    duration: "60 min",
    capacity: "25 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "salsa-int-wed",
    style: "Salsa",
    level: "Intermediate",
    instructor: "Mike Lorenzo",
    day: "Wednesday",
    time: "18:00",
    duration: "60 min",
    capacity: "20 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "bachata-adv-wed",
    style: "Bachata",
    level: "Advanced",
    instructor: "Rico",
    day: "Wednesday",
    time: "19:30",
    duration: "60 min",
    capacity: "15 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "ballroom-beg-thu",
    style: "Ballroom",
    level: "Beginner",
    instructor: "Maria Lopez",
    day: "Thursday",
    time: "17:00",
    duration: "75 min",
    capacity: "12 spots",
    room: "Studio B",
    available: true
  },
  {
    id: "tango-int-thu",
    style: "Tango",
    level: "Intermediate",
    instructor: "Carlos Mendez",
    day: "Thursday",
    time: "19:00",
    duration: "75 min",
    capacity: "16 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "ballet-all-fri",
    style: "Ballet",
    level: "All Levels",
    instructor: "Emma Smith",
    day: "Friday",
    time: "17:30",
    duration: "90 min",
    capacity: "15 spots",
    room: "Studio B",
    available: true
  },
  {
    id: "salsa-bachata-social-fri",
    style: "Salsa",
    level: "All Levels",
    instructor: "Mike Lorenzo & Rico",
    day: "Friday",
    time: "20:00",
    duration: "180 min",
    capacity: "50 spots",
    room: "Main Hall",
    available: true
  },
  {
    id: "jazz-beg-sat",
    style: "Jazz",
    level: "Beginner",
    instructor: "Sophia Patel",
    day: "Saturday",
    time: "10:00",
    duration: "60 min",
    capacity: "20 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "hiphop-int-sat",
    style: "Hip Hop",
    level: "Intermediate",
    instructor: "Tyler Johnson",
    day: "Saturday",
    time: "12:00",
    duration: "60 min",
    capacity: "25 spots",
    room: "Studio A",
    available: true
  },
  {
    id: "salsa-adv-sat",
    style: "Salsa",
    level: "Advanced",
    instructor: "Mike Lorenzo",
    day: "Saturday",
    time: "14:00",
    duration: "90 min",
    capacity: "18 spots",
    room: "Studio B",
    available: true
  }
];

export const days: DayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const styles: Array<DanceStyle | "All Styles"> = [
  "All Styles", 
  "Salsa", 
  "Bachata", 
  "Contemporary", 
  "Hip Hop", 
  "Tango", 
  "Ballroom", 
  "Ballet", 
  "Jazz"
];

export const levels: Array<DanceLevel | "All Levels"> = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export const scheduleSection = {
  title: "Class Schedule",
  description: "Find the perfect class that fits your schedule and skill level.",
  ctaText: "Book Class"
}; 