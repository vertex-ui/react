import React from 'react';

export interface NavigationItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeVariant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  active?: boolean;
  disabled?: boolean;
  children?: NavigationItem[];
  megaMenu?: MegaMenuColumn[];
  component?: React.ElementType;
  componentProps?: Record<string, any>;
  // Enhanced mega menu properties
  description?: string;
  image?: string;
  featured?: boolean;
  tag?: string;
  tagVariant?: 'new' | 'hot' | 'sale' | 'beta';
  hoverColor?: string;
  /**
   * Color variant for active state styling.
   * Supports theme color tokens or custom CSS color values.
   */
  activeColor?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | string;
}

export interface MegaMenuColumn {
  title?: string;
  description?: string;
  items: NavigationItem[];
  featured?: boolean;
  span?: number; // Grid column span (1-4)
  image?: string;
  cta?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
    hoverColor?: string;
  };
}

export interface TopBarConfig {
  left?: React.ReactNode | NavigationItem[];
  right?: React.ReactNode | NavigationItem[];
  /**
   * Background color of the top bar.
   * - 'primary': Uses theme primary color
   * - 'secondary': Uses theme secondary color
   * - 'dark': Uses a dark background
   * - string: Custom CSS color value
   */
  backgroundColor?: 'primary' | 'secondary' | 'dark' | string;
  /**
   * Text color of content in the top bar.
   * - 'light': White text (best for dark/primary backgrounds)
   * - 'dark': Dark text (best for light backgrounds)
   * - string: Custom CSS color value
   */
  textColor?: 'light' | 'dark' | string;
  /**
   * Hide TopBar on specific devices
   */
  hideOn?: Array<'mobile' | 'tablet' | 'desktop'>;
  /**
   * Custom padding for the TopBar content when not containerized.
   * Only applies when containerized={false}.
   */
  padding?: string | number;
}

export interface NavbarBaseProps {
  logo?: string;
  logoAlt?: string;
  onLogoClick?: () => void;
  brandText?: string;
  navigationItems?: NavigationItem[];
  sticky?: boolean;
  shadow?: boolean;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Custom padding for the Navbar content when not containerized.
   * Only applies when containerized={false}.
   */
  padding?: string | number;
  topBar?: TopBarConfig;
  /**
   * Hover style for navigation items:
   * - 'text': Only text color and weight change (minimal)
   * - 'background': Background color + text changes (default)
   */
  hoverStyle?: 'text' | 'background';
  /**
   * Default hover color for all navigation items.
   * Can be 'primary', 'secondary', 'neutral', 'inherit' or any valid CSS color string.
   */
  hoverColor?: string;
  /**
   * Default active color for all navigation items.
   * Individual items can override this with their activeColor prop.
   */
  activeColor?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | string;
  /**
   * Controls the visual style of active navigation items.
   * - 'underline': Shows bottom border (default)
   * - 'background': Shows background highlight
   * - 'none': No special styling (only color/weight change)
   */
  activeIndicatorStyle?: 'underline' | 'background' | 'none';
  /**
   * Controls when the active indicator appears.
   * - 'always': Shows for active items only
   * - 'hover': Shows on hover and for active items
   * - 'never': Never shows underline/background
   */
  activeIndicatorBehavior?: 'always' | 'hover' | 'never';
  user?: {
    name?: string;
    email?: string;
    avatar?: string;
    menuItems?: NavigationItem[];
  };
  search?: {
    placeholder?: string;
    onSearch?: (query: string) => void;
  };
  /**
   * If true, the search input will take up remaining available width.
   * @default true
   */
  searchFullWidth?: boolean;
  searchOptions?: any[];
  searchGetOptionLabel?: string | ((option: any) => string);
  searchGetOptionValue?: string | ((option: any) => string);
  searchGetOptionDescription?: string | ((option: any) => string | undefined);
  searchGetOptionIcon?: string | ((option: any) => React.ReactNode);
  searchNoOptionsMessage?: string;
  searchLoading?: boolean;
  onSearchSelect?: (value: string, option: any) => void;
  notificationCount?: number;
  onNotificationClick?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
  actions?: React.ReactNode;
  contentNodes?: React.ReactNode[];
  containerized?: boolean;
  variant?: 'single-row' | 'two-row' | 'centered' | 'transparent';
  transparent?: boolean;
  /**
   * Custom link component (e.g., Next.js Link)
   * @default undefined (uses standard HTML anchor)
   */
  linkComponent?: React.ElementType;
  /**
   * If true, navigation items in second row spread full width with separators
   * @default false
   */
  fullWidthSubMenu?: boolean;
  /**
   * If true, displays vertical separators between navigation items
   * @default false
   */
  showNavSeparators?: boolean;
  /**
   * If true, navigation items text is displayed in uppercase
   * @default false
   */
  uppercaseNavItems?: boolean;
  /**
   * If true, second row background uses primary color with contrast text
   * @default false
   */
  secondRowPrimaryBackground?: boolean;
}

export interface NavbarDesktopProps extends NavbarBaseProps {
  layout?: 'single-row' | 'two-row' | 'centered';
  /**
   * Layout variation for single-row navbar:
   * - standard: Logo | Nav | ... | Actions (Default)
   * - balanced: Logo | ... | Nav | ... | Actions
   * - search-centered: Logo | Nav | Search (Flex) | Actions
   */
  singleRowVariant?: 'standard' | 'balanced' | 'search-centered';
}

export interface NavbarMobileProps extends NavbarBaseProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface NavbarResponsiveProps extends NavbarBaseProps {
  desktopLayout?: 'single-row' | 'two-row' | 'centered';
  mobileBreakpoint?: number;
}
