import { BlogCategory } from "../types/blog-types";
import { Music, Heart, Brain, Target, Sunrise, Trophy, Users, Sparkles, Calendar, Globe, LucideIcon } from "lucide-react";

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
    category: "Dance",
    icon: Music,
    description: "Latin dance techniques, styles, and choreography",
    color: {
      light: "from-red-400 to-red-600",
      dark: "from-red-500/20 to-red-700/20"
    }
  },
  {
    category: "Salsa",
    icon: Sparkles,
    description: "Salsa tips, history, and techniques",
    color: {
      light: "from-orange-400 to-orange-600",
      dark: "from-orange-500/20 to-orange-700/20"
    }
  },
  {
    category: "Bachata",
    icon: Heart,
    description: "Bachata styles, musicality, and partner work",
    color: {
      light: "from-purple-400 to-purple-600",
      dark: "from-purple-500/20 to-purple-700/20"
    }
  },
  {
    category: "Latin Culture",
    icon: Globe,
    description: "Latin music, culture, and dance history",
    color: {
      light: "from-yellow-400 to-yellow-600",
      dark: "from-yellow-500/20 to-yellow-700/20"
    }
  },
  {
    category: "Tips & Technique",
    icon: Target,
    description: "Improve your footwork, styling, and partner connection",
    color: {
      light: "from-blue-400 to-blue-600",
      dark: "from-blue-500/20 to-blue-700/20"
    }
  },
  {
    category: "Wellness",
    icon: Brain,
    description: "Mind-body wellness, healthy living, and the benefits of dance",
    color: {
      light: "from-green-400 to-green-600",
      dark: "from-green-500/20 to-green-700/20"
    }
  },
  {
    category: "Lifestyle",
    icon: Sunrise,
    description: "Dance lifestyle, social dancing, and daily inspiration",
    color: {
      light: "from-pink-400 to-pink-600",
      dark: "from-pink-500/20 to-pink-700/20"
    }
  },
  {
    category: "Success Stories",
    icon: Trophy,
    description: "Student journeys, transformations, and achievements",
    color: {
      light: "from-amber-400 to-amber-600",
      dark: "from-amber-500/20 to-amber-700/20"
    }
  },
  {
    category: "Community",
    icon: Users,
    description: "Events, socials, and community updates",
    color: {
      light: "from-teal-400 to-teal-600",
      dark: "from-teal-500/20 to-teal-700/20"
    }
  },
  {
    category: "Events",
    icon: Calendar,
    description: "Upcoming events, workshops, and social dance nights",
    color: {
      light: "from-indigo-400 to-indigo-600",
      dark: "from-indigo-500/20 to-indigo-700/20"
    }
  }
];
