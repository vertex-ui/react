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
}

export interface MegaMenuColumn {
  title?: string;
  items: NavigationItem[];
}

export interface TopBarConfig {
  left?: React.ReactNode | NavigationItem[];
  right?: React.ReactNode | NavigationItem[];
  backgroundColor?: string;
  textColor?: string;
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
  topBar?: TopBarConfig;
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
  onlyDesktop?: boolean;
  onlyMobile?: boolean;
  transparent?: boolean;
}

export interface NavbarDesktopProps extends NavbarBaseProps {
  layout?: 'single-row' | 'two-row' | 'centered';
}

export interface NavbarMobileProps extends NavbarBaseProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface NavbarResponsiveProps extends NavbarBaseProps {
  desktopLayout?: 'single-row' | 'two-row' | 'centered';
  mobileBreakpoint?: number;
}
