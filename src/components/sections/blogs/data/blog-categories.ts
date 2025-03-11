import { BlogCategory } from "../types/blog-types";
import { Dumbbell, Utensils, Brain, Target, Heart, Sunrise, Trophy, Shield, Music, Users, LucideIcon } from "lucide-react";

interface CategoryMetadata {
  category: BlogCategory;
  icon: LucideIcon;
  description: string;
  color: {
    light: string;
    dark: string;
  };
}

export const categoryMetadata: CategoryMetadata[] = [
  {
    category: "Fitness",
    icon: Dumbbell,
    description: "Workout tips, exercise guides, and fitness advice",
    color: {
      light: "from-red-400 to-red-600",
      dark: "from-red-500/20 to-red-700/20"
    }
  },
  {
    category: "Nutrition",
    icon: Utensils,
    description: "Healthy eating, meal plans, and dietary advice",
    color: {
      light: "from-green-400 to-green-600",
      dark: "from-green-500/20 to-green-700/20"
    }
  },
  {
    category: "Mental Health",
    icon: Brain,
    description: "Mental wellness, stress management, and mindfulness",
    color: {
      light: "from-purple-400 to-purple-600",
      dark: "from-purple-500/20 to-purple-700/20"
    }
  },
  {
    category: "Training",
    icon: Target,
    description: "Training programs, techniques, and methodologies",
    color: {
      light: "from-blue-400 to-blue-600",
      dark: "from-blue-500/20 to-blue-700/20"
    }
  },
  {
    category: "Recovery",
    icon: Heart,
    description: "Rest, rehabilitation, and injury prevention",
    color: {
      light: "from-pink-400 to-pink-600",
      dark: "from-pink-500/20 to-pink-700/20"
    }
  },
  {
    category: "Lifestyle",
    icon: Sunrise,
    description: "Healthy living, wellness tips, and daily habits",
    color: {
      light: "from-orange-400 to-orange-600",
      dark: "from-orange-500/20 to-orange-700/20"
    }
  },
  {
    category: "Success Stories",
    icon: Trophy,
    description: "Transformation journeys and member achievements",
    color: {
      light: "from-yellow-400 to-yellow-600",
      dark: "from-yellow-500/20 to-yellow-700/20"
    }
  },
  {
    category: "Military Fitness",
    icon: Shield,
    description: "Military-style training and discipline",
    color: {
      light: "from-slate-400 to-slate-600",
      dark: "from-slate-500/20 to-slate-700/20"
    }
  },
  {
    category: "Dance",
    icon: Music,
    description: "Dance fitness, styles, and choreography",
    color: {
      light: "from-indigo-400 to-indigo-600",
      dark: "from-indigo-500/20 to-indigo-700/20"
    }
  },
  {
    category: "Community",
    icon: Users,
    description: "Events, meetups, and community updates",
    color: {
      light: "from-teal-400 to-teal-600",
      dark: "from-teal-500/20 to-teal-700/20"
    }
  }
]; 