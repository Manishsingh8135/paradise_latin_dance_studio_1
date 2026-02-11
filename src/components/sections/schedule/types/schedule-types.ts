export interface DanceClass {
  id: string;
  style: string;
  level: DanceLevel;
  instructor: string;
  day: DayOfWeek;
  time: string;
  duration: string;
  capacity: string;
  room: string;
  available?: boolean;
}

export type DanceLevel = "Dance Foundations" | "Dance Rhythm" | "Dance Dynamics" | "All Levels";
export type DanceStyle = "Salsa" | "Bachata" | "Salsa & Bachata";
export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface ScheduleFilter {
  days: DayOfWeek[];
  styles: Array<DanceStyle | "All Styles">;
  levels: Array<DanceLevel | "All Levels">;
}

export interface ScheduleSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export interface ScheduleCardProps {
  danceClass: DanceClass;
  onClick?: () => void;
  featured?: boolean;
}

export interface ScheduleFilterProps {
  selectedDay: DayOfWeek;
  selectedStyle: string;
  selectedLevel: string;
  onDayChange: (day: DayOfWeek) => void;
  onStyleChange: (style: string) => void;
  onLevelChange: (level: string) => void;
} 