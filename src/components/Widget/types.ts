import React from 'react';
import type { InfoWidgetTheme } from './renderers/InfoWidget';

// Widget Configuration Types
export type WidgetType = 
  | 'metric'
  | 'info'
  | 'product'
  | 'order'
  | 'list'
  | 'text'
  | 'header'
  | 'carousel'
  | 'image'
  | 'testimonial'
  | 'gridCarousel'
  | 'navbar'
  | 'contentBlock';

/**
 * WidgetTheme now also accepts InfoWidgetTheme values for unified theme typing
 */
export type WidgetTheme =
  | 'minimal'
  | 'modern'
  | 'professional'
  | 'compact'
  | 'detailed'
  | 'card'
  | 'inline'
  | 'hero'
  | 'base'
  | 'two-row'
  | 'centered'
  | 'editorial'
  | 'ecommerce'
  | 'creative'
  | 'luxury'
  | InfoWidgetTheme;

export type GridConfig = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  auto?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
};

export type WidgetVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger'
  | 'error' 
  | 'warning' 
  | 'info'
  | 'neutral';

// ========================================================================
// BASE TYPES - Data (content) vs Settings (configuration/appearance)
// ========================================================================

/**
 * Base Widget Data - Contains actual content/information to display
 */
export interface BaseWidgetData {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  badge?: {
    text: React.ReactNode;
    variant?: WidgetVariant;
  };
  action?: {
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'outline';
  };
  metadata?: Record<string, React.ReactNode>;
}

/**
 * Base Widget Settings - Contains configuration options and appearance settings
 */
export interface BaseWidgetSettings {
  theme?: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  showDividers?: boolean;
  showIcon?: boolean;
  showBadge?: boolean;
  showActions?: boolean;
}

// ========================================================================
// METRIC WIDGET - Data and Settings
// ========================================================================

/**
 * Metric Widget Data - The actual metric values and content
 */
export interface MetricWidgetData extends BaseWidgetData {
  value: React.ReactNode;
  label?: React.ReactNode;
  trend?: {
    direction: 'up' | 'down' | 'stable';
    value: number;
    label?: string;
  };
  target?: {
    value: React.ReactNode;
    label?: React.ReactNode;
  };
  progress?: number;
}

/**
 * Metric Widget Settings - Display and behavior options
 */
export interface MetricWidgetSettings extends BaseWidgetSettings {
  showTrend?: boolean;
  showTarget?: boolean;
  showProgress?: boolean;
  progressType?: 'bar' | 'circular' | 'none';
  animateValue?: boolean;
}

// ========================================================================
// INFO WIDGET - Data and Settings
// ========================================================================

/**
 * Info Widget Data - Information content to display
 */
export interface InfoWidgetData extends BaseWidgetData {
  text: React.ReactNode;
  subText?: React.ReactNode;
}

/**
 * Info Widget Settings - Display options
 */
export interface InfoWidgetSettings extends BaseWidgetSettings {
  iconVariant?: WidgetVariant;
  layout?: 'horizontal' | 'vertical';
  alignment?: 'left' | 'center' | 'right';
}

// ========================================================================
// PRODUCT WIDGET - Data and Settings
// ========================================================================

/**
 * Product Widget Data - Product information
 */
export interface ProductWidgetData extends BaseWidgetData {
  name: string;
  price: number | string;
  originalPrice?: number | string;
  category?: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  tags?: string[];
}

/**
 * Product Widget Settings - Display and layout options
 */
export interface ProductWidgetSettings extends BaseWidgetSettings {
  showRating?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  imagePosition?: 'top' | 'left' | 'right';
  cardStyle?: 'elevated' | 'outlined' | 'flat';
}

// ========================================================================
// ORDER WIDGET - Data and Settings
// ========================================================================

/**
 * Order Widget Data - Order information
 */
export interface OrderWidgetData extends BaseWidgetData {
  id: string;
  total: number | string;
  status: string;
  date?: string | Date;
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  items?: Array<{
    name: string;
    quantity?: number;
    price?: number | string;
  }>;
  shippingAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string;
  };
  subtotal?: number | string;
  tax?: number | string;
  shipping?: number | string;
  actions?: Array<{
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outlined';
  }>;
}

/**
 * Order Widget Settings - Display configuration
 */
export interface OrderWidgetSettings extends BaseWidgetSettings {
  showCustomer?: boolean;
  showItems?: boolean;
  showAddress?: boolean;
  showBreakdown?: boolean;
  compact?: boolean;
}

// ========================================================================
// LIST WIDGET - Data and Settings
// ========================================================================

/**
 * List Widget Data - List content
 */
export interface ListWidgetData extends BaseWidgetData {
  items: Array<{
    id?: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    avatar?: string | {
      src: string;
      alt?: string;
      variant?: 'circular' | 'square' | 'rounded';
    };
    badge?: {
      text: React.ReactNode;
      variant?: WidgetVariant;
    };
    metadata?: Record<string, React.ReactNode>;
    actions?: Array<{
      label: React.ReactNode;
      onClick?: () => void;
      href?: string;
      variant?: 'primary' | 'secondary' | 'ghost' | 'outlined';
    }>;
  }>;
}

/**
 * List Widget Settings - Display and layout configuration
 */
export interface ListWidgetSettings extends BaseWidgetSettings {
  showDividers?: boolean;
  maxItems?: number;
  itemsPerPage?: number;
  showPagination?: boolean;
  layout?: 'default' | 'compact' | 'comfortable';
}

// ========================================================================
// TEXT WIDGET - Data and Settings
// ========================================================================

/**
 * Text Widget Data - Text content
 */
export interface TextWidgetData extends BaseWidgetData {
  content?: React.ReactNode;
  caption?: React.ReactNode;
  actions?: Array<{
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: WidgetVariant;
    type?: 'button' | 'link';
  }>;
}

/**
 * Text Widget Settings - Typography and styling options
 */
export interface TextWidgetSettings extends BaseWidgetSettings {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
  contentColor?: string;
  captionColor?: string;
  backgroundColor?: string;
}

// ========================================================================
// HEADER WIDGET - Data and Settings
// ========================================================================

/**
 * Header Widget Data - Header content
 */
export interface HeaderWidgetData extends BaseWidgetData {
  breadcrumbs?: Array<{
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }>;
  avatar?: string | {
    src: string;
    alt?: string;
    variant?: 'circular' | 'square' | 'rounded';
  };
  badges?: Array<{
    text: React.ReactNode;
    variant?: WidgetVariant;
  }>;
  actions?: Array<{
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: WidgetVariant;
    type?: 'button' | 'link';
  }>;
}

/**
 * Header Widget Settings - Layout and styling options
 */
export interface HeaderWidgetSettings extends BaseWidgetSettings {
  showBreadcrumbs?: boolean;
  showAvatar?: boolean;
  layout?: 'default' | 'centered' | 'split';
  sticky?: boolean;
  backgroundColor?: string;
}

// ========================================================================
// CAROUSEL WIDGET - Data and Settings
// ========================================================================

/**
 * Carousel Widget Data - Slide content
 */
export interface CarouselWidgetData extends BaseWidgetData {
  slides: Array<{
    id: string;
    image: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
      priority?: boolean;
    };
    caption?: {
      heading?: string;
      subheading?: string;
      description?: string;
      buttonText?: string;
      buttonUrl?: string;
      position?: 'left' | 'center' | 'right';
    };
    seo?: {
      structuredData?: Record<string, any>;
    };
  }>;
}

/**
 * Carousel Widget Settings - Carousel behavior and appearance
 */
export interface CarouselWidgetSettings extends BaseWidgetSettings {
  swiperConfig?: {
    navigation?: {
      enabled: boolean;
      prevEl?: string;
      nextEl?: string;
    };
    pagination?: {
      enabled: boolean;
      clickable?: boolean;
      type?: 'bullets' | 'fraction' | 'progressbar';
    };
    autoplay?: {
      enabled: boolean;
      delay?: number;
      disableOnInteraction?: boolean;
      pauseOnMouseEnter?: boolean;
    };
    loop?: boolean;
    effect?: 'slide' | 'fade' | 'cube' | 'flip' | 'coverflow';
    speed?: number;
  };
  overlayTheme?: 'dark' | 'light';
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  showOverlay?: boolean;
  loadingPlaceholder?: boolean;
  hideNavigationOnMobile?: boolean;
  buttonSize?: 'sm' | 'md' | 'lg';
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
}

// ========================================================================
// IMAGE WIDGET - Data and Settings
// ========================================================================

// Image Widget Data
import type { ButtonProps } from '../Button/Button';

/**
 * Image Widget Data - Image content
 */
export interface ImageWidgetData extends BaseWidgetData {
  src: string;
  alt: string;
  heading?: string;
  subHeading?: string;
  description?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  onCtaClick?: () => void;
}

/**
 * Image Widget Settings - Display options
 */
export interface ImageWidgetSettings extends BaseWidgetSettings {
  overlayTheme?: 'dark' | 'light';
  ctaVariant?: ButtonProps['variant'];
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

// ========================================================================
// TESTIMONIAL WIDGET - Data and Settings
// ========================================================================

/**
 * Testimonial Widget Data - Testimonial content
 */
export interface TestimonialWidgetData extends BaseWidgetData {
  testimonials: Array<{
    id?: string;
    content: React.ReactNode;
    author: {
      name: string;
      role?: string;
      company?: string;
      avatar?: string;
    };
    rating?: number;
    date?: string;
  }>;
}

/**
 * Testimonial Widget Settings - Display configuration
 */
export interface TestimonialWidgetSettings extends BaseWidgetSettings {
  showNavigation?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  slidesPerView?: number;
}

// ========================================================================
// NAVBAR WIDGET - Data and Settings
// ========================================================================

/**
 * Navbar Widget Data - Navigation content
 */
export interface NavbarWidgetData extends BaseWidgetData {
  logo?: React.ReactNode;
  navItems?: Array<{
    id: string;
    label: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    children?: Array<{
      id: string;
      label: React.ReactNode;
      href?: string;
      badge?: React.ReactNode;
      onClick?: () => void;
      active?: boolean;
      disabled?: boolean;
      description?: React.ReactNode;
      icon?: React.ReactNode;
    }>;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    badge?: React.ReactNode;
    megaMenu?: boolean;
    megaMenuColumns?: Array<{
      title?: React.ReactNode;
      items: Array<{
        id: string;
        label: React.ReactNode;
        description?: React.ReactNode;
        href?: string;
        icon?: React.ReactNode;
        badge?: React.ReactNode;
        onClick?: () => void;
        active?: boolean;
      }>;
    }>;
  }>;
  actions?: React.ReactNode;
  topBar?: {
    content?: React.ReactNode;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    variant?: 'subtle' | 'bold' | 'accent' | 'dark' | 'gradient';
    dismissible?: boolean;
    onDismiss?: () => void;
  };
}

/**
 * Navbar Widget Settings - Layout and behavior options
 */
export interface NavbarWidgetSettings extends BaseWidgetSettings {
  searchEnabled?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  onLogoClick?: () => void;
  elevated?: boolean;
  sticky?: boolean;
  fullWidth?: boolean;
  layout?: 'single-row' | 'two-row' | 'centered';
  twoRowBottomStyle?: 'default' | 'divider' | 'dark-bottom' | 'gradient-bottom' | 'elevated-bottom';
  scrollBehavior?: 'transparent-to-solid';
  scrollThreshold?: number;
  onScrollStateChange?: (scrolled: boolean) => void;
  responsive?: boolean;
  mobileOnly?: boolean;
}

// ========================================================================
// GRID CAROUSEL WIDGET - Data and Settings
// ========================================================================

/**
 * Grid Carousel Widget Data - Carousel items
 */
export interface GridCarouselWidgetData {
  items: React.ReactNode[];
}

/**
 * Grid Carousel Widget Settings - Carousel configuration
 */
export interface GridCarouselWidgetSettings {
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: number | string;
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  scrollBehavior?: 'page' | 'item';
  borderRadius?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Content Block Widget Data
export interface ContentBlockWidgetData extends BaseWidgetData {
  // Media Configuration (Multi-type support)
  media?: {
    type?: 'image' | 'avatar' | 'icon' | 'video' | 'gallery' | 'logo' | 'illustration';
    
    // Single media
    src?: string;
    alt?: string;
    
    // Multiple media (for gallery layouts)
    items?: Array<{
      src: string;
      alt: string;
      caption?: React.ReactNode;
    }>;
    
    // Icon/Logo
    icon?: React.ReactNode;
    iconSize?: 'sm' | 'md' | 'lg' | 'xl';
    
    // Video
    videoUrl?: string;
    poster?: string;
    
    // Styling
    aspectRatio?: '1:1' | '4:3' | '16:9' | '3:2' | '21:9' | 'auto';
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl';
    border?: boolean | 'sm' | 'md' | 'lg';
    zoom?: boolean; // Hover zoom effect
  };

  // Content Configuration
  content?: {
    // Text elements
    eyebrow?: React.ReactNode;      // Small text above heading
    heading?: React.ReactNode;
    subheading?: React.ReactNode;
    body?: React.ReactNode;
    caption?: React.ReactNode;       // Small text below body
    footnote?: React.ReactNode;      // Even smaller, at bottom
    
    // Typography variants
    eyebrowVariant?: 'overline' | 'caption' | 'body2';
    headingVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    subheadingVariant?: 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
    bodyVariant?: 'body1' | 'body2';
    
    // Lists (for features, specs, benefits)
    list?: Array<{
      text: React.ReactNode;
      icon?: React.ReactNode;
      checked?: boolean; // For checkmark lists
    }>;
    listType?: 'bullet' | 'number' | 'check' | 'icon' | 'none';
  };

  // E-commerce Specific
  product?: {
    price?: number | string;
    comparePrice?: number | string;  // Original/crossed-out price
    currency?: string;
    sku?: string;
    stock?: number | 'in-stock' | 'out-of-stock' | 'limited';
    rating?: number;
    reviewCount?: number;
    discount?: string; // e.g., "20% OFF"
  };

  // Tags & Labels
  tags?: Array<{
    text: string;
    variant?: WidgetVariant;
    icon?: React.ReactNode;
    href?: string;
  }>;

  // Stats/Metrics (For highlights, achievements, numbers)
  stats?: Array<{
    value: React.ReactNode;
    label: React.ReactNode;
    icon?: React.ReactNode;
    variant?: WidgetVariant;
  }>;

  // Author/Attribution (Blog, testimonial, team)
  author?: {
    name: string;
    role?: string;
    company?: string;
    avatar?: string;
    social?: Array<{
      platform: string;
      url: string;
      icon?: React.ReactNode;
    }>;
  };

  // Metadata (Flexible key-value pairs)
  metadata?: Array<{
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
  }>;

  // Actions/CTAs
  actions?: Array<{
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: WidgetVariant | 'outline' | 'ghost';
    type?: 'button' | 'link' | 'icon';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
  }>;

  // Color Customization
  colors?: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    body?: string;
    caption?: string;
    background?: string;
    accent?: string; // For borders, highlights
  };

  // Additional Elements
  quote?: {
    text: React.ReactNode;
    author?: string;
  };

  timeline?: {
    date?: string;
    icon?: React.ReactNode;
  };
}

// ========================================================================
// GRID WIDGET - Data and Settings
// ========================================================================

/**
 * Grid Widget Data - Collection of widgets
 */
export interface GridWidgetData {
  widgets: WidgetConfig[];
}

/**
 * Grid Widget Settings - Grid layout configuration
 */
export interface GridWidgetSettings {
  gap?: 'none' | 'sm' | 'md' | 'lg';
  grid?: GridConfig;
}

// ========================================================================
// UNION TYPES
// ========================================================================

export type WidgetData = 
  | MetricWidgetData
  | InfoWidgetData
  | ProductWidgetData
  | OrderWidgetData
  | ListWidgetData
  | TextWidgetData
  | HeaderWidgetData
  | CarouselWidgetData
  | ImageWidgetData
  | TestimonialWidgetData
  | GridCarouselWidgetData
  | NavbarWidgetData
  | ContentBlockWidgetData
  | GridWidgetData;

export type WidgetSettings =
  | MetricWidgetSettings
  | InfoWidgetSettings
  | ProductWidgetSettings
  | OrderWidgetSettings
  | ListWidgetSettings
  | TextWidgetSettings
  | HeaderWidgetSettings
  | CarouselWidgetSettings
  | ImageWidgetSettings
  | TestimonialWidgetSettings
  | GridCarouselWidgetSettings
  | NavbarWidgetSettings
  | GridWidgetSettings
  | BaseWidgetSettings;

// ========================================================================
// WIDGET CONFIGURATION
// ========================================================================

/**
 * Widget Configuration - Combines type, data, and settings
 * 
 * @example
 * // Metric widget with data and settings separated
 * const metricWidget: WidgetConfig = {
 *   type: 'metric',
 *   data: {
 *     value: '$12,345',
 *     label: 'Total Revenue',
 *     trend: { direction: 'up', value: 12.5 }
 *   },
 *   settings: {
 *     theme: 'modern',
 *     variant: 'success',
 *     size: 'lg',
 *     showTrend: true,
 *     animateValue: true
 *   }
 * };
 */
export interface WidgetConfig {
  type: WidgetType | 'grid';
  data: WidgetData;
  settings?: WidgetSettings;
  
  // Deprecated: Use settings instead
  /** @deprecated Use settings.theme */
  theme?: WidgetTheme;
  /** @deprecated Use settings.variant */
  variant?: WidgetVariant;
  /** @deprecated Use settings.size */
  size?: 'sm' | 'md' | 'lg';
  /** @deprecated Use settings.className */
  className?: string;
  /** @deprecated Use settings.style */
  style?: React.CSSProperties;
  /** @deprecated Use settings */
  grid?: GridConfig;
}