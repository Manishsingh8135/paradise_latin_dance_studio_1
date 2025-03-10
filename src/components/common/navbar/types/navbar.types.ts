export interface NavMenuItem {
    id: string;
    label: string;
    href: string;
    features?: NavFeature[];
    isDynamic?: boolean;
  }
  
  export interface NavFeature {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
  }
  
  export interface NavAction {
    id: string;
    label: string;
    href: string;
    variant: 'primary' | 'secondary' | 'ghost';
    icon?: string;
  }
  
  export interface NavbarBrandProps {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    name: string;
    tagline?: string;
  }
  
  export interface NavbarProps {
    variant?: 'transparent' | 'solid' | 'glass';
    position?: 'fixed' | 'sticky' | 'relative';
    className?: string;
  }