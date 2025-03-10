import { cva } from "class-variance-authority";
import { THEME_CONFIG } from './navbar.theme';

// Tailwind variants for styling
export const navbarVariants = cva(
  [
    "fixed top-0 left-0 right-0",
    "w-full backdrop-blur-lg",
    THEME_CONFIG.transitions.base,
    "z-50",
  ],
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        glass: [
          "bg-black/40",
          "border-b",
          THEME_CONFIG.effects.borders.regular,
        ],
        solid: [
          "bg-black/95",
          "border-b",
          THEME_CONFIG.effects.borders.premium,
        ],
      },
      scrolled: {
        true: [
          "bg-black/95",
          "border-b",
          THEME_CONFIG.effects.borders.premium,
          THEME_CONFIG.effects.shadows.basicGlow,
        ],
        false: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "transparent",
      scrolled: false,
    }
  }
);

// Framer Motion variants for animations
export const navbarMotionVariants = {
  transparent: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  glass: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  solid: {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  },
};

export const navButtonVariants = cva(
  [
    "relative inline-flex items-center gap-2",
    "px-6 py-2",
    THEME_CONFIG.transitions.base,
    THEME_CONFIG.borderRadius.full,
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A]",
          "text-black font-semibold",
          THEME_CONFIG.effects.shadows.basicGlow,
          "hover:shadow-[0_0_30px_rgba(218,165,32,0.3)]",
          "active:scale-95",
        ],
        secondary: [
          "bg-black/10",
          "backdrop-blur-sm",
          "text-white",
          "border-2 border-[#FFD700]/50",
          "hover:border-[#FFD700]/80",
          "hover:bg-black/20",
          "active:scale-95",
        ],
        ghost: [
          "text-white/80",
          "hover:text-white",
          "hover:bg-white/5",
        ],
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    }
  }
);

export const navMenuItemVariants = cva(
  [
    "relative",
    "flex items-center gap-2",
    "px-4 py-2",
    THEME_CONFIG.transitions.base,
    THEME_CONFIG.typography.body.base,
    "whitespace-nowrap",
  ],
  {
    variants: {
      active: {
        true: [
          "text-[#FFD700]",
          THEME_CONFIG.effects.shadows.textGlow,
        ],
        false: [
          "text-white/80",
          "hover:text-white",
        ],
      },
    },
    defaultVariants: {
      active: false,
    }
  }
);

export const navFeatureCardVariants = cva(
  [
    "relative p-4",
    "flex items-start gap-4",
    THEME_CONFIG.transitions.base,
    THEME_CONFIG.borderRadius.lg,
  ],
  {
    variants: {
      interactive: {
        true: [
          "hover:bg-white/5",
          "cursor-pointer",
        ],
        false: "",
      },
    },
    defaultVariants: {
      interactive: true,
    }
  }
);

export const NAVBAR_DIMENSIONS = {
  height: {
    desktop: 'h-20',
    mobile: 'h-16',
  },
  width: {
    container: 'max-w-7xl',
    logo: 'w-12 h-12',
  },
  padding: {
    container: 'px-4 md:px-6 lg:px-8',
    menu: 'px-4 py-2',
  },
};