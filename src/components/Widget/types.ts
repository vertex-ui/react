import React from 'react';

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
  | 'testimonial'
  | 'gridCarousel';

export type WidgetTheme =
  | 'minimal'
  | 'modern'
  | 'professional'
  | 'compact'
  | 'detailed'
  | 'card'
  | 'inline'
  | 'hero';

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
  | 'error' 
  | 'warning' 
  | 'info'
  | 'neutral';

// Base Widget Data
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

// Metric Widget Data
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

// Info Widget Data
export interface InfoWidgetData extends BaseWidgetData {
  text: React.ReactNode;
  subText?: React.ReactNode;
  status?: WidgetVariant;
}

// Product Widget Data
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

// Order Widget Data
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

// List Widget Data
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
  showDividers?: boolean;
  maxItems?: number;
}

// Text Widget Data
export interface TextWidgetData extends BaseWidgetData {
  content?: React.ReactNode;
  caption?: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
  contentColor?: string;
  captionColor?: string;
  backgroundColor?: string;
  actions?: Array<{
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: WidgetVariant;
    type?: 'button' | 'link';
  }>;
}

// Header Widget Data
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
  backgroundColor?: string;
}

// Carousel Widget Data
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
}

// Testimonial Widget Data
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

// Grid Carousel Widget Data
export interface GridCarouselWidgetData {
  items: React.ReactNode[];
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
}

// Grid Widget Data
export interface GridWidgetData {
  widgets: WidgetConfig[];
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

export type WidgetData = 
  | MetricWidgetData
  | InfoWidgetData
  | ProductWidgetData
  | OrderWidgetData
  | ListWidgetData
  | TextWidgetData
  | HeaderWidgetData
  | CarouselWidgetData
  | TestimonialWidgetData
  | GridCarouselWidgetData;

// Widget Configuration
export interface WidgetConfig {
  type: WidgetType | 'grid';
  theme: WidgetTheme;
  variant?: WidgetVariant;
  size?: 'sm' | 'md' | 'lg';
  data: WidgetData | GridWidgetData | WidgetData[];
  grid?: GridConfig;
  className?: string;
  style?: React.CSSProperties;
}