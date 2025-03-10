export const THEME_CONFIG = {
    colors: {
      primary: {
        gold: '#FFD700',
        darkGold: '#C6930A',
        warmGold: '#FDB931',
        royalGold: '#DAA520',
      },
      background: {
        pure: '#000000',
        rich: '#111111',
        deep: '#0A0A0A',
      },
      text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.8)',
        tertiary: 'rgba(255, 255, 255, 0.6)',
        accent: '#FFD700',
      }
    },
  
    gradients: {
      primary: 'linear-gradient(to right, #FFD700, #FDB931, #C6930A)',
      text: 'linear-gradient(to right, #FFD700, #FDB931, #FFD700)',
      overlay: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
      navbarBackground: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.8))',
    },
  
    effects: {
      borders: {
        regular: 'border border-white/10',
        premium: 'border border-[#FFD700]/20',
        interactive: 'border-[#FFD700]/40',
      },
      shadows: {
        basicGlow: 'shadow-[0_0_20px_rgba(218,165,32,0.2)]',
        hoverGlow: 'shadow-[0_0_30px_rgba(218,165,32,0.3)]',
        textGlow: 'drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]',
      }
    },
  
    typography: {
      headings: {
        h1: 'text-4xl md:text-6xl lg:text-7xl font-bold',
        h2: 'text-3xl md:text-5xl lg:text-6xl font-bold',
        h3: 'text-2xl md:text-4xl lg:text-5xl font-bold',
      },
      body: {
        large: 'text-lg md:text-xl text-white/80',
        base: 'text-base text-white/70',
        small: 'text-sm text-white/60',
      },
      special: {
        gradient: 'bg-gradient-to-r from-[#FFD700] to-[#C6930A] bg-clip-text text-transparent',
        glow: 'drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]',
      }
    },
  
    spacing: {
      container: 'px-4 md:px-6 lg:px-8',
      section: 'py-20 md:py-32',
      component: 'gap-4 md:gap-6 lg:gap-8',
      content: 'space-y-4 md:space-y-6',
    },
  
    borderRadius: {
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-3xl',
      full: 'rounded-full',
    },
  
    transitions: {
      base: 'transition-all duration-300',
      smooth: 'duration-500 ease-out',
      premium: 'duration-800 ease-out-cubic',
    },
  
    hover: {
      scale: {
        hover: 'hover:scale-102',
        active: 'active:scale-98',
      },
      glow: {
        hover: 'hover:shadow-[0_0_30px_rgba(218,165,32,0.3)]',
      },
      lift: {
        hover: 'hover:translate-y-[-5px]',
      }
    },
  
    animation: {
      fadeUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
      }
    },
  
    zIndex: {
      background: 'z-0',
      overlay: 'z-10',
      content: 'z-20',
      modal: 'z-50',
    }
  };