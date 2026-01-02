# Widget Data/Settings Architecture

## Overview

The Widget components have been refactored to separate **data** (content) from **settings** (configuration/styling). This provides a cleaner, more professional API that makes it easier to understand what's content versus what's configuration.

## Core Concept

- **`data`**: The actual content to display (values, text, images, items, etc.)
- **`settings`**: How to display and configure the widget (theme, size, behavior, etc.)

## Benefits

✅ **Clear separation of concerns**: Content vs. presentation
✅ **Easier maintenance**: Settings can be changed without touching data
✅ **Better reusability**: Same data can be displayed with different settings
✅ **Type safety**: Separate interfaces for data and settings
✅ **Backward compatible**: Legacy props still work

## Basic Usage

### New Way (Recommended)

```tsx
import { Widget, WidgetConfig } from 'vertex-ui-react';

const widgetConfig: WidgetConfig = {
  type: 'metric',
  data: {
    // Content only
    value: '$12,345',
    label: 'Total Revenue',
    trend: { direction: 'up', value: 12.5 }
  },
  settings: {
    // Configuration only
    theme: 'modern',
    variant: 'success',
    size: 'lg',
    showTrend: true,
    animateValue: true,
    className: 'my-custom-class'
  }
};

<Widget config={widgetConfig} />
```

### Old Way (Still Supported)

```tsx
const widgetConfig: WidgetConfig = {
  type: 'metric',
  theme: 'modern',
  variant: 'success',
  size: 'lg',
  data: {
    value: '$12,345',
    label: 'Total Revenue',
    trend: { direction: 'up', value: 12.5 }
  }
};

<Widget config={widgetConfig} />
```

## Examples by Widget Type

### 1. Metric Widget

```tsx
const metricWidget: WidgetConfig = {
  type: 'metric',
  data: {
    // DATA: The metric values
    value: '$45,231',
    label: 'Monthly Revenue',
    trend: {
      direction: 'up',
      value: 12.5,
      label: 'vs last month'
    },
    progress: 75,
    badge: {
      text: 'Goal: $60,000',
      variant: 'info'
    }
  },
  settings: {
    // SETTINGS: Display configuration
    theme: 'modern',
    variant: 'success',
    size: 'lg',
    showTrend: true,
    showProgress: true,
    progressType: 'bar',
    animateValue: true,
    className: 'revenue-metric'
  }
};
```

### 2. Header Widget

```tsx
const headerWidget: WidgetConfig = {
  type: 'header',
  data: {
    // DATA: Header content
    title: 'User Dashboard',
    subtitle: 'Welcome back, John',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard', href: '/dashboard' }
    ],
    avatar: '/images/user.jpg',
    badges: [
      { text: 'Pro', variant: 'success' },
      { text: 'Verified', variant: 'info' }
    ],
    actions: [
      { label: 'Settings', href: '/settings', type: 'link' },
      { label: 'Logout', onClick: () => {}, variant: 'danger', type: 'button' }
    ]
  },
  settings: {
    // SETTINGS: Layout and styling
    theme: 'professional',
    variant: 'primary',
    size: 'lg',
    showBreadcrumbs: true,
    showAvatar: true,
    layout: 'default',
    sticky: true,
    backgroundColor: '#f8f9fa'
  }
};
```

### 3. List Widget

```tsx
const listWidget: WidgetConfig = {
  type: 'list',
  data: {
    // DATA: List items
    title: 'Recent Orders',
    items: [
      {
        id: '1',
        title: 'Order #1234',
        subtitle: 'Completed',
        description: 'Delivered on Jan 5, 2026',
        avatar: '/images/order.png',
        badge: { text: 'Paid', variant: 'success' },
        actions: [
          { label: 'View', href: '/orders/1234' },
          { label: 'Invoice', onClick: () => {} }
        ]
      },
      {
        id: '2',
        title: 'Order #1235',
        subtitle: 'Processing',
        description: 'Expected delivery: Jan 10, 2026',
        badge: { text: 'Pending', variant: 'warning' }
      }
    ]
  },
  settings: {
    // SETTINGS: List display options
    theme: 'modern',
    variant: 'neutral',
    size: 'md',
    showDividers: true,
    maxItems: 10,
    layout: 'comfortable',
    showPagination: false
  }
};
```

### 4. Product Widget

```tsx
const productWidget: WidgetConfig = {
  type: 'product',
  data: {
    // DATA: Product information
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    tags: ['New', 'Popular', 'Sale'],
    image: '/images/headphones.jpg',
    description: 'High-quality audio with noise cancellation'
  },
  settings: {
    // SETTINGS: Display preferences
    theme: 'modern',
    variant: 'primary',
    size: 'md',
    showRating: true,
    showCategory: true,
    showTags: true,
    imagePosition: 'top',
    cardStyle: 'elevated'
  }
};
```

### 5. Order Widget

```tsx
const orderWidget: WidgetConfig = {
  type: 'order',
  data: {
    // DATA: Order details
    id: 'ORD-2024-001',
    total: 1234.56,
    status: 'Shipped',
    date: new Date('2026-01-02'),
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890'
    },
    items: [
      { name: 'Product A', quantity: 2, price: 500 },
      { name: 'Product B', quantity: 1, price: 234.56 }
    ],
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    subtotal: 1234.56,
    tax: 98.76,
    shipping: 15.00
  },
  settings: {
    // SETTINGS: Display configuration
    theme: 'professional',
    size: 'md',
    showCustomer: true,
    showItems: true,
    showAddress: true,
    showBreakdown: true,
    compact: false
  }
};
```

### 6. Text Widget

```tsx
const textWidget: WidgetConfig = {
  type: 'text',
  data: {
    // DATA: Text content
    title: 'Welcome to Our Platform',
    content: 'Discover amazing features and tools to boost your productivity.',
    caption: 'Getting Started',
    actions: [
      { label: 'Learn More', href: '/docs', type: 'link' },
      { label: 'Get Started', onClick: () => {}, type: 'button', variant: 'primary' }
    ]
  },
  settings: {
    // SETTINGS: Typography and styling
    theme: 'modern',
    variant: 'h2',
    alignment: 'center',
    size: 'lg',
    titleColor: '#1a1a1a',
    contentColor: '#666666',
    captionColor: '#999999',
    backgroundColor: '#ffffff'
  }
};
```

### 7. Carousel Widget

```tsx
const carouselWidget: WidgetConfig = {
  type: 'carousel',
  data: {
    // DATA: Slides content
    slides: [
      {
        id: '1',
        image: { src: '/images/slide1.jpg', alt: 'Slide 1' },
        caption: {
          heading: 'Welcome',
          subheading: 'To our platform',
          description: 'Explore amazing features',
          buttonText: 'Get Started',
          buttonUrl: '/signup'
        }
      },
      {
        id: '2',
        image: { src: '/images/slide2.jpg', alt: 'Slide 2' },
        caption: {
          heading: 'Discover',
          subheading: 'New possibilities'
        }
      }
    ]
  },
  settings: {
    // SETTINGS: Carousel behavior
    theme: 'hero',
    size: 'lg',
    swiperConfig: {
      navigation: { enabled: true },
      pagination: { enabled: true, type: 'bullets' },
      autoplay: { enabled: true, delay: 5000 },
      loop: true,
      effect: 'fade'
    },
    overlayTheme: 'dark',
    height: '500px',
    showOverlay: true
  }
};
```

### 8. Navbar Widget

```tsx
const navbarWidget: WidgetConfig = {
  type: 'navbar',
  data: {
    // DATA: Navigation items and content
    logo: <img src="/logo.png" alt="Logo" />,
    navItems: [
      { id: '1', label: 'Home', href: '/', active: true },
      { id: '2', label: 'Products', href: '/products' },
      { id: '3', label: 'About', href: '/about' }
    ],
    actions: <button>Sign In</button>,
    topBar: {
      content: 'Free shipping on orders over $50',
      variant: 'accent'
    }
  },
  settings: {
    // SETTINGS: Layout and behavior
    theme: 'modern',
    size: 'md',
    searchEnabled: true,
    searchPlaceholder: 'Search...',
    elevated: true,
    sticky: true,
    fullWidth: true,
    layout: 'single-row',
    scrollBehavior: 'transparent-to-solid',
    responsive: true
  }
};
```

## Grid Layout Example

```tsx
const gridWidget: WidgetConfig = {
  type: 'grid',
  data: {
    widgets: [
      {
        type: 'metric',
        data: { value: '$12,345', label: 'Revenue' },
        settings: { theme: 'modern', variant: 'success' }
      },
      {
        type: 'metric',
        data: { value: '1,234', label: 'Users' },
        settings: { theme: 'modern', variant: 'info' }
      },
      {
        type: 'list',
        data: {
          title: 'Recent Activity',
          items: [/* ... */]
        },
        settings: { theme: 'modern', showDividers: true }
      }
    ]
  },
  settings: {
    gap: 'md',
    grid: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
      spacing: 'lg'
    }
  }
};
```

## TypeScript Support

All widgets have separate interfaces for data and settings:

```typescript
// Data interfaces (content)
interface MetricWidgetData extends BaseWidgetData { /* ... */ }
interface HeaderWidgetData extends BaseWidgetData { /* ... */ }
interface ListWidgetData extends BaseWidgetData { /* ... */ }

// Settings interfaces (configuration)
interface MetricWidgetSettings extends BaseWidgetSettings { /* ... */ }
interface HeaderWidgetSettings extends BaseWidgetSettings { /* ... */ }
interface ListWidgetSettings extends BaseWidgetSettings { /* ... */ }

// Union types
type WidgetData = MetricWidgetData | HeaderWidgetData | ListWidgetData | ...;
type WidgetSettings = MetricWidgetSettings | HeaderWidgetSettings | ListWidgetSettings | ...;
```

## Migration Guide

### Before (Old API)

```tsx
const config = {
  type: 'metric',
  theme: 'modern',
  variant: 'success',
  size: 'lg',
  data: {
    value: '$12,345',
    label: 'Revenue',
    iconVariant: 'success',  // Mixed: setting in data
    showTrend: true          // Mixed: setting in data
  }
};
```

### After (New API)

```tsx
const config = {
  type: 'metric',
  data: {
    // Only content
    value: '$12,345',
    label: 'Revenue'
  },
  settings: {
    // All configuration
    theme: 'modern',
    variant: 'success',
    size: 'lg',
    iconVariant: 'success',
    showTrend: true
  }
};
```

## Best Practices

1. **Keep data pure**: Only include actual content/values in `data`
2. **Use settings for UI control**: All display options go in `settings`
3. **Leverage TypeScript**: Use typed interfaces for better autocomplete
4. **Stay consistent**: Follow the same pattern across all widgets
5. **Backward compatible**: Old code still works during migration

## Summary

The new data/settings architecture provides:
- ✨ **Professional separation** of content and configuration
- 📦 **Easy reusability** across different contexts
- 🔒 **Type-safe** with dedicated interfaces
- 🔄 **Backward compatible** for smooth migration
- 🎯 **Clear intent** for developers using your components
