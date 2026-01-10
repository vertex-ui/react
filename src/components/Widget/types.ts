import React from 'react';

// Widget Configuration Types
export type WidgetType = 
  | 'metric'
  | 'info'
  | 'product'
  | 'order'
  | 'order-confirmation'
  | 'order-details'
  | 'list'
  | 'text'
  | 'header'
  | 'carousel'
  | 'image'
  | 'testimonial'
  | 'gridCarousel'
  | 'navbar'
  | 'contentBlock'
  | 'errorPage'
  | 'emptyState'
  | 'stat'
  | 'progress'
  | 'comparison';

/**
 * WidgetTheme - all available theme options
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
  | 'playful'
  | 'technical'
  | 'elegant';

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
  categoryHref?: string;
  categoryUrl?: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  tags?: string[];
  imageAlt?: string;
  weight?: number;
  units?: string;
  discount?: string;
  initialQuantity?: number;
  featured?: boolean;
  featuredText?: string;
  href?: string;
  url?: string;
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
  showWishlist?: boolean;
  isWishlisted?: boolean;
  cartIcon?: React.ReactNode;
  wishlistIcon?: React.ReactNode;
  wishlistFilledIcon?: React.ReactNode;
  quickViewIcon?: React.ReactNode;
  linkComponent?: React.ComponentType<any>;
  onAddToCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onIncrementCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onDecrementCart?: (id?: string, quantity?: number) => void | Promise<void>;
  onWishlist?: () => void;
  onQuickView?: () => void;
  onClick?: () => void;
  onCategoryClick?: () => void;
  loading?: boolean;
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
      image?: string;
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
    discount?: number | string;
    currency?: string;
    trackingNumber?: string;
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
  /**
   * If true, shows skeleton loading state
   * @default false
   */
  loading?: boolean;
}

// ========================================================================
// ORDER CONFIRMATION WIDGET - Data and Settings
// ========================================================================

/**
 * Order Confirmation Widget Data - Complete order confirmation information
 */
export interface OrderConfirmationWidgetData {
  orderId: string;
  orderNumber?: string;
  orderDate?: string;
  status?: 'pending' | 'processing' | 'confirmed' | 'delivered' | 'cancelled';
  statusText?: string;
  
  headerText?: string;
  headerSubtitle?: string;
  
  customerEmail?: string;
  customerPhone?: string;
  
  shippingAddress: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
  };
  billingAddress?: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
  };
  
  items: Array<{
    id: string;
    name: string;
    image?: string;
    quantity: number;
    price: number;
    variant?: string;
  }>;
  
  subtotal: number;
  shippingCost?: number;
  tax?: number;
  discount?: number;
  total: number;
  currency?: string;
  
  paymentMethod?: string;
  transactionId?: string;
  
  estimatedDelivery?: string;
  trackingNumber?: string;
  
  actions?: {
    onDownloadInvoice?: (orderId: string) => void;
    onContinueShopping?: () => void;
    onTrackOrder?: (orderId: string) => void;
    onViewDetails?: (orderId: string) => void;
    onContactSupport?: (orderId: string) => void;
    onShareOrder?: (orderId: string) => void;
  };
}

/**
 * Order Confirmation Widget Settings - Display configuration
 */
export interface OrderConfirmationWidgetSettings extends BaseWidgetSettings {
  showActions?: boolean;
  hideDownloadInvoice?: boolean;
  hideContinueShopping?: boolean;
  hideTrackOrder?: boolean;
  hideContactSupport?: boolean;
  loading?: boolean;
}

// ========================================================================
// ORDER DETAILS WIDGET - Data and Settings
// ========================================================================

/**
 * Order Details Widget Data - Complete order details information
 */
export interface OrderDetailsWidgetData {
  orderId: string;
  orderNumber?: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  statusText?: string;
  
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  
  shippingAddress: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
  };
  billingAddress?: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipCode: string;
    phone?: string;
  };
  
  items: Array<{
    id: string;
    name: string;
    image?: string;
    quantity: number;
    price: number;
    variant?: string;
  }>;
  
  subtotal: number;
  shippingCost?: number;
  tax?: number;
  discount?: number;
  total: number;
  currency?: string;
  couponCode?: string;
  
  paymentMethod?: string;
  paymentStatus?: 'pending' | 'paid' | 'failed' | 'refunded';
  transactionId?: string;
  
  estimatedDelivery?: string;
  deliveredDate?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  carrier?: string;
  
  actions?: {
    onDownloadInvoice?: (orderId: string) => void;
    onTrackOrder?: (orderId: string) => void;
    onCancelOrder?: (orderId: string) => void;
    onReturnOrder?: (orderId: string) => void;
    onReorder?: (orderId: string) => void;
    onContactSupport?: (orderId: string) => void;
    onWriteReview?: (orderId: string) => void;
  };
}

/**
 * Order Details Widget Settings - Display configuration
 */
export interface OrderDetailsWidgetSettings extends BaseWidgetSettings {
  showActions?: boolean;
  allowCancel?: boolean;
  allowReturn?: boolean;
  allowReorder?: boolean;
  loading?: boolean;
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
export interface TextWidgetSettings extends Omit<BaseWidgetSettings, 'variant'> {
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
import {
  StatCardData, StatCardSettings,
  ProgressCardData, ProgressCardSettings,
  ComparisonCardData, ComparisonCardSettings
} from '../../widgets/DashboardCard';

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
  showNavigation?: boolean;
  showDots?: boolean;
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
 * Grid Carousel Widget Data - Theme-based carousel items
 * 
 * @theme 'product' - Displays array of product widgets
 * @theme 'base' - Displays array of custom React nodes (children)
 */
export interface GridCarouselWidgetData {
  /**
   * Theme determines the type of items displayed
   * - 'product': Display product widgets from products array
   * - 'base': Display custom React nodes from items array
   */
  theme: 'product' | 'base';
  
  /**
   * Product data array (used when theme='product')
   */
  products?: ProductWidgetData[];
  
  /**
   * Custom React nodes array (used when theme='base')
   */
  items?: React.ReactNode[];
}

/**
 * Grid Carousel Widget Settings - Carousel configuration and appearance
 */
export interface GridCarouselWidgetSettings extends BaseWidgetSettings {
  /**
   * Number of items to show per view at different breakpoints
   */
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  
  /**
   * Gap between grid items (px or CSS value)
   */
  gap?: number | string;
  
  /**
   * Enable automatic sliding
   */
  autoplay?: boolean;
  
  /**
   * Delay between auto-slides in milliseconds
   */
  autoplayDelay?: number;
  
  /**
   * Show navigation arrows
   */
  showNavigation?: boolean;
  
  /**
   * Show pagination dots
   */
  showPagination?: boolean;
  
  /**
   * Scroll behavior: 'page' scrolls by full page, 'item' scrolls by one item
   */
  scrollBehavior?: 'page' | 'item';
  
  /**
   * Apply border radius to container
   */
  borderRadius?: boolean;
  
  /**
   * Hide navigation on mobile devices
   */
  hideNavigationOnMobile?: boolean;
  
  /**
   * Container background color
   */
  backgroundColor?: string;
  
  /**
   * Product widget settings (used when theme='product')
   */
  productSettings?: Omit<ProductWidgetSettings, 'className' | 'style'>;
}

// Content Block Widget Data
export interface ContentBlockWidgetData extends Omit<BaseWidgetData, 'metadata'> {
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

// Content Block Widget Settings
export interface ContentBlockWidgetSettings extends Omit<BaseWidgetSettings, 'variant'> {
  // Layout-specific variant (overrides base variant)
  variant?: 'minimal' | 'card' | 'elevated' | 'outlined' | 'bordered';
  
  // Layout
  layout?: 
    | 'media-left'           // Media 40%, Content 60%
    | 'media-right'          // Content 60%, Media 40%
    | 'split-equal'          // 50/50 split
    | 'media-top'            // Media above content
    | 'media-bottom'         // Content above media
    | 'media-background'     // Full background with overlay
    | 'centered'             // All centered
    | 'centered-media-top'   // Centered with media on top
    | 'grid-2col'            // 2 column grid
    | 'grid-3col'            // 3 column grid
    | 'sidebar-left'         // Narrow sidebar (30%) left
    | 'sidebar-right';       // Narrow sidebar (30%) right
  
  // Size & Spacing
  mediaWidth?: '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | 'auto';
  contentWidth?: 'narrow' | 'medium' | 'wide' | 'full';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  
  // Media Dimensions (override data.media properties)
  imageWidth?: string;        // CSS value like '100%', '400px', 'auto'
  imageHeight?: string;       // CSS value like 'auto', '300px', '100%'
  imageMaxWidth?: string;     // Max width constraint
  imageMaxHeight?: string;    // Max height constraint
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';  // Override icon size
  customIconSize?: string;    // Custom icon size (e.g., '5rem', '80px')
  
  // Alignment
  contentAlign?: 'left' | 'center' | 'right' | 'justify';
  verticalAlign?: 'start' | 'center' | 'end' | 'stretch';
  
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'inner';
  border?: boolean | 'all' | 'left' | 'right' | 'top' | 'bottom';
  
  // Background
  background?: {
    color?: string;
    gradient?: string;
    opacity?: number;
  };

  // Overlay (for media-background layout)
  overlay?: {
    enabled: boolean;
    color?: string;
    opacity?: number;
    blur?: number;
    gradient?: 'top' | 'bottom' | 'center' | 'none';
  };

  // Grid Configuration (for grid layouts)
  grid?: {
    columns?: number;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    minItemWidth?: string;
  };

  // Responsive Behavior
  responsive?: {
    stackOnMobile?: boolean;
    stackOnTablet?: boolean;
    reverseOnMobile?: boolean;
    hideMediaOnMobile?: boolean;
  };

  // Interactions
  hover?: {
    enabled?: boolean;
    effect?: 'lift' | 'glow' | 'scale' | 'none';
    mediaZoom?: boolean;
  };

  // Animation
  animate?: boolean;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'none';
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
// ERROR PAGE WIDGET - Data and Settings
// ========================================================================

/**
 * Error Page Widget Data - Error page information
 */
export interface ErrorPageWidgetData {
  /**
   * Error code (e.g., '404', '500', '403', '401', '503', 'search')
   * @default '404'
   */
  errorCode?: string;
  
  /**
   * Main error title
   * @example 'Page Not Found'
   */
  title?: string;
  
  /**
   * Error message description
   * @example "Oops! The page you're looking for doesn't exist."
   */
  message?: string;
  
  /**
   * Helpful suggestion or next steps
   * @example 'Try checking the URL or return to the homepage.'
   */
  suggestion?: string;
  
  /**
   * Call-to-action buttons/links
   * @example
   * actions: [
   *   { variant: 'primary', label: 'Go Home', href: '/', icon: 'home' },
   *   { variant: 'outline', label: 'Go Back', onClick: () => history.back(), icon: 'back' }
   * ]
   */
  actions?: Array<{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning';
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'home' | 'back' | 'refresh';
    external?: boolean;
  }>;
  
  /**
   * @deprecated Use actions array instead
   */
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'home' | 'back' | 'refresh';
  };
  
  /**
   * @deprecated Use actions array instead
   */
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'home' | 'back' | 'refresh';
  };
  
  /**
   * Custom icon component to display
   */
  customIcon?: React.ReactNode;
  
  /**
   * Additional information or help text
   */
  additionalInfo?: string;
}

/**
 * Error Page Widget Settings - Display configuration
 */
export interface ErrorPageWidgetSettings extends BaseWidgetSettings {
  /**
   * Theme for the error page
   * - minimal: Clean, simple design
   * - modern: Gradient backgrounds, bold typography
   * - professional: Formal, business-appropriate
   * - playful: Fun, energetic design
   * - technical: Terminal/code-like appearance
   * - elegant: Sophisticated, refined design
   * @default 'modern'
   */
  theme?: 'minimal' | 'modern' | 'professional' | 'playful' | 'technical' | 'elegant';
  
  /**
   * Show illustration/icon
   * @default true
   */
  showIllustration?: boolean;
  
  /**
   * Center the content
   * @default true
   */
  centered?: boolean;
  
  /**
   * Take full viewport height
   * @default true
   */
  fullHeight?: boolean;
  
  /**
   * Custom background color or gradient
   * Overrides theme default background
   * @example 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
   * @example '#f5f5f5'
   */
  backgroundColor?: string;
}

// ========================================================================
// EMPTY STATE WIDGET
// ========================================================================

/**
 * Empty State Types - Different contexts for empty states
 */
export type EmptyStateType = 
  | 'general'
  | 'search'
  | 'data'
  | 'notification'
  | 'cart'
  | 'file';

/**
 * EmptyStateWidgetData - Data for empty state widget
 * 
 * @example
 * const emptyCartData: EmptyStateWidgetData = {
 *   type: 'cart',
 *   title: 'Your Cart is Empty',
 *   message: 'Add items to your cart to get started',
 *   actions: [
 *     { label: 'Browse Products', href: '/products', icon: 'search', variant: 'primary' },
 *     { label: 'View Wishlist', href: '/wishlist', variant: 'outline' }
 *   ]
 * };
 */
export interface EmptyStateWidgetData {
  /**
   * Type of empty state (affects default icon and messaging)
   * @default 'general'
   */
  type?: EmptyStateType;

  /**
   * Main title
   * If not provided, uses default based on type
   */
  title?: string;

  /**
   * Description message
   * If not provided, uses default based on type
   */
  message?: string;

  /**
   * Custom icon to display
   * If not provided, uses default icon based on type
   */
  customIcon?: React.ReactNode;

  /**
   * Action buttons
   */
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'add' | 'plus' | 'refresh' | 'search';
    variant?: 'primary' | 'outline' | 'ghost';
    external?: boolean;
  }>;

  /**
   * Additional information text (shown below actions)
   */
  additionalInfo?: string;
}

/**
 * EmptyStateWidgetSettings - Settings for empty state widget
 */
export interface EmptyStateWidgetSettings extends BaseWidgetSettings {
  /**
   * Visual theme
   * @default 'modern'
   */
  theme?: 'minimal' | 'modern' | 'professional' | 'playful' | 'technical' | 'elegant';

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: 'primary' | 'danger' | 'warning' | 'info';

  /**
   * Whether to show illustration/icon
   * @default true
   */
  showIllustration?: boolean;

  /**
   * Whether to center content
   * @default true
   */
  centered?: boolean;

  /**
   * Compact mode (smaller spacing and icons)
   * @default false
   */
  compact?: boolean;

  /**
   * Custom background color or gradient
   * Overrides theme default background
   * @example 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
   * @example '#f5f5f5'
   */
  backgroundColor?: string;
}

// ========================================================================
// UNION TYPES
// ========================================================================

export type WidgetData = 
  | MetricWidgetData
  | InfoWidgetData
  | ProductWidgetData
  | OrderWidgetData
  | OrderConfirmationWidgetData
  | OrderDetailsWidgetData
  | ListWidgetData
  | TextWidgetData
  | HeaderWidgetData
  | CarouselWidgetData
  | ImageWidgetData
  | TestimonialWidgetData
  | GridCarouselWidgetData
  | NavbarWidgetData
  | ContentBlockWidgetData
  | GridWidgetData
  | ErrorPageWidgetData
  | EmptyStateWidgetData
  | StatCardData
  | ProgressCardData
  | ComparisonCardData;

export type WidgetSettings =
  | MetricWidgetSettings
  | InfoWidgetSettings
  | ProductWidgetSettings
  | OrderWidgetSettings
  | OrderConfirmationWidgetSettings
  | OrderDetailsWidgetSettings
  | ListWidgetSettings
  | TextWidgetSettings
  | HeaderWidgetSettings
  | CarouselWidgetSettings
  | ImageWidgetSettings
  | TestimonialWidgetSettings
  | GridCarouselWidgetSettings
  | NavbarWidgetSettings
  | GridWidgetSettings
  | ContentBlockWidgetSettings
  | ErrorPageWidgetSettings
  | EmptyStateWidgetSettings
  | StatCardSettings
  | ProgressCardSettings
  | ComparisonCardSettings
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