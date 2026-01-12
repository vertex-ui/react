import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../components/Widget';
import type { WidgetConfig } from '../../components/Widget/types';

const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A unified, flexible widget system for building CMS-configurable dashboards and interfaces. Replace fragmented components with a single Widget that adapts to any data and theme.',
      },
    },
  },
  argTypes: {
    config: {
      description: 'Widget configuration object',
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Widget>;

// Metric Widget Examples
const sampleMetricConfigs: WidgetConfig[] = [
  {
    type: 'metric',
    data: {
      value: '1,234',
      label: 'Total Sales',
      trend: { direction: 'up', value: 12, label: 'vs last month' },
      icon: 'TrendingUp',
    },
    settings: {
      theme: 'modern',
      variant: 'primary',
      showTrend: true,
    },
  },
  {
    type: 'metric',
    data: {
      value: '$45,678',
      label: 'Revenue',
      trend: { direction: 'up', value: 5.3, label: 'vs last quarter' },
      target: { value: '$50,000', label: 'Target' },
      progress: 91,
    },
    settings: {
      theme: 'professional',
      variant: 'success',
      showTrend: true,
      showTarget: true,
      showProgress: true,
    },
  },
  {
    type: 'metric',
    data: {
      value: '89',
      label: 'Active Users',
      trend: { direction: 'down', value: -3, label: 'vs yesterday' },
    },
    settings: {
      theme: 'minimal',
      variant: 'info',
      showTrend: true,
    },
  },
];

export const MetricWidgets: Story = {
  args: {
    config: {
      type: 'grid',
      data: {
        widgets: sampleMetricConfigs,
      },
      settings: {
        theme: 'modern',
        gap: 'lg',
        grid: { mobile: 1, tablet: 2, desktop: 3 },
      },
    },
  },
};

// Info Widget Examples
const sampleInfoConfigs: WidgetConfig[] = [
  {
    type: 'info',
    data: {
      title: 'Server Status',
      text: 'All systems operational',
      badge: { text: 'Online', variant: 'success' },
      metadata: {
        'Uptime': '99.9%',
        'Last Check': '2 minutes ago',
      },
    },
    settings: {
      theme: 'modern',
      variant: 'success',
    },
  },
  {
    type: 'info',
    data: {
      title: 'Database Performance',
      text: 'Query response time within acceptable limits',
      icon: 'Database',
      badge: { text: 'Healthy', variant: 'success' },
      metadata: {
        'Avg Response': '45ms',
        'Connections': '23/100',
        'CPU Usage': '12%',
      },
      actions: [
        { label: 'View Details', variant: 'primary' },
        { label: 'Optimize', variant: 'secondary' },
      ],
    },
    settings: {
      theme: 'professional',
      variant: 'info',
    },
  },
];

export const InfoWidgets: Story = {
  args: {
    config: {
      type: 'grid',
      data: {
        widgets: sampleInfoConfigs,
      },
      settings: {
        theme: 'modern',
        gap: 'lg',
        grid: { mobile: 1, tablet: 1, desktop: 2 },
      },
    },
  },
};

// Auto Grid Example
export const AutoGrid: Story = {
  args: {
    config: {
      type: 'metric',
      data: {
        value: '1,234',
        label: 'Total Sales',
        trend: { direction: 'up' as const, value: 12 },
      },
      settings: {
        theme: 'modern',
        grid: { mobile: 1, tablet: 2, desktop: 3, spacing: 'md' },
      },
    },
  },
};

// Theme Comparison
export const ThemeComparison: Story = {
  render: () => {
    const themes: Array<{ theme: string; label: string }> = [
      { theme: 'minimal', label: 'Minimal' },
      { theme: 'modern', label: 'Modern' },
      { theme: 'professional', label: 'Professional' },
      { theme: 'compact', label: 'Compact' },
      { theme: 'inline', label: 'Inline' },
    ];

    const sampleData = {
      value: '1,234',
      label: 'Total Sales',
      trend: { direction: 'up' as const, value: 12 },
    };

    return (
      <div style={{ display: 'grid', gap: '2rem' }}>
        {themes.map(({ theme, label }) => (
          <div key={theme}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
              {label} Theme
            </h3>
            <Widget
              config={{
                type: 'metric',
                data: sampleData,
                settings: {
                  theme: theme as any,
                },
              }}
            />
          </div>
        ))}
      </div>
    );
  },
};

// Product Widget Examples
const sampleProductConfigs: WidgetConfig[] = [
  {
    type: 'product',
    data: {
      id: 'prod-1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      category: 'Electronics',
      categoryHref: '/category/electronics',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      discount: '-25%',
      featured: true,
      featuredText: 'Best Seller',
      weight: 250,
      units: 'g',
      initialQuantity: 0,
      href: '/products/wireless-headphones',
      isWishlisted: false,
    },
    settings: {
      showWishlist: true,
      onAddToCart: (data, qty) => console.log('Added to cart:', data, qty),
      onIncrementCart: (data, qty) => console.log('Incremented:', data, qty),
      onDecrementCart: (data, qty) => console.log('Decremented:', data, qty),
      onWishlist: () => console.log('Wishlist toggled'),
      onQuickView: () => console.log('Quick view clicked'),
      onCategoryClick: () => console.log('Category clicked: Electronics'),
    },
  },
  {
    type: 'product',
    data: {
      id: 'prod-2',
      name: 'Organic Coffee Beans',
      price: 24.99,
      originalPrice: 29.99,
      category: 'Food & Beverage',
      categoryHref: '/category/food',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      discount: '-17%',
      weight: 500,
      units: 'g',
      initialQuantity: 2,
      href: '/products/coffee-beans',
      isWishlisted: true,
    },
    settings: {
      showWishlist: true,
      onAddToCart: (data, qty) => console.log('Added to cart:', data, qty),
      onIncrementCart: (data, qty) => console.log('Incremented:', data, qty),
      onDecrementCart: (data, qty) => console.log('Decremented:', data, qty),
      onWishlist: () => console.log('Wishlist toggled'),
      onCategoryClick: () => console.log('Category clicked: Food & Beverage'),
    },
  },
  {
    type: 'product',
    data: {
      id: 'prod-3',
      name: 'Yoga Mat Pro',
      price: 49.99,
      category: 'Fitness',
      categoryHref: '/category/fitness',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
      featured: true,
      featuredText: 'New Arrival',
      weight: 1.2,
      units: 'kg',
      initialQuantity: 0,
      href: '/products/yoga-mat',
    },
    settings: {
      showWishlist: false,
      onAddToCart: (data, qty) => console.log('Added to cart:', data, qty),
      onIncrementCart: (data, qty) => console.log('Incremented:', data, qty),
      onDecrementCart: (data, qty) => console.log('Decremented:', data, qty),
      onCategoryClick: () => console.log('Category clicked: Fitness'),
    },
  },
];

export const ProductWidgets: Story = {
  args: {
    config: {
      type: 'grid',
      data: {
        widgets: sampleProductConfigs,
      },
      settings: {
        gap: 'lg',
        grid: { mobile: 1, tablet: 2, desktop: 3 },
      },
    },
  },
};

export const SingleProduct: Story = {
  args: {
    config: {
      type: 'product',
      data: {
        id: 'prod-single',
        name: 'Smart Watch Series 5',
        price: 399.99,
        originalPrice: 499.99,
        category: 'Wearables',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
        discount: '-20%',
        featured: true,
        featuredText: 'Limited Edition',
        weight: 45,
        units: 'g',
        initialQuantity: 0,
        isWishlisted: false,
      },
      settings: {
        showWishlist: true,
        onAddToCart: (_data, qty) => alert(`Added ${qty} item(s) to cart`),
        onIncrementCart: (data, qty) => console.log('Incremented:', data, qty),
        onDecrementCart: (data, qty) => console.log('Decremented:', data, qty),
        onWishlist: () => alert('Added to wishlist!'),
        onQuickView: () => alert('Opening quick view...'),
        onClick: () => alert('Viewing product details...'),
      },
    },
  },
};

export const ProductVariants: Story = {
  render: () => {
    const commonData = {
      id: 'prod-variant',
      name: 'Designer Sunglasses',
      price: 159.99,
      originalPrice: 199.99,
      category: 'Accessories',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
      featured: true,
      weight: 150,
      units: 'g',
      initialQuantity: 0,
    };

    const commonSettings = {
      showWishlist: true,
      onAddToCart: (data: any, qty: number) => console.log('Added:', data.name, qty),
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Minimal Variant</h3>
          <div style={{ maxWidth: '300px' }}>
            <Widget
              config={{
                type: 'product',
                data: commonData,
                settings: { ...commonSettings, theme: 'minimal' },
              }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>List Variant</h3>
          <Widget
            config={{
              type: 'product',
              data: commonData,
              settings: { ...commonSettings, theme: 'list' },
            }}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Wide Variant (Image Left)</h3>
          <Widget
            config={{
              type: 'product',
              data: commonData,
              settings: { ...commonSettings, imagePosition: 'left' },
            }}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Wide Variant (Image Right)</h3>
          <Widget
            config={{
              type: 'product',
              data: commonData,
              settings: { ...commonSettings, imagePosition: 'right' },
            }}
          />
        </div>
      </div>
    );
  },
};

export const ProductWithCustomImage: Story = {
  args: {
    config: {
      type: 'product',
      data: {
        id: 'prod-custom-img',
        name: 'Custom Image Component',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
        category: 'Shoes',
        rating: 4.9,
      },
      settings: {
        priority: true, // Eager loading
        imageComponent: (props: any) => (
          <div style={{ border: '2px solid red', position: 'relative', width: '100%', height: '100%' }}>
            <span style={{ position: 'absolute', top: 5, left: 5, background: 'red', color: 'white', padding: '2px 5px', fontSize: '10px', zIndex: 1 }}>
              Custom Img
            </span>
            <img {...props} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ),
      },
    },
  },
};

export const ProductWithLoading: Story = {
  args: {
    config: {
      type: 'product',
      data: {
        id: 'prod-loading',
        name: 'Loading Product',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
        category: 'Fashion',
        rating: 4.3,
      },
      settings: {
        loading: true,
        showWishlist: true,
      },
    },
  },
};

export const ProductWithAllFeatures: Story = {
  args: {
    config: {
      type: 'product',
      data: {
        id: 'prod-full',
        name: 'Premium Laptop Backpack',
        price: 89.99,
        originalPrice: 129.99,
        category: 'Accessories',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        imageAlt: 'Premium laptop backpack with multiple compartments',
        discount: '-31%',
        featured: true,
        featuredText: 'Editor\'s Choice',
        weight: 800,
        units: 'g',
        initialQuantity: 1,
        isWishlisted: true,
      },
      settings: {
        showWishlist: true,
        cartIcon: '🛒',
        wishlistIcon: '🤍',
        wishlistFilledIcon: '❤️',
        quickViewIcon: '👁️',
        onAddToCart: async (data, qty) => {
          console.log('Adding to cart...', data, qty);
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Added successfully!');
        },
        onIncrementCart: async (data, qty) => {
          console.log('Incrementing...', data, qty);
          await new Promise(resolve => setTimeout(resolve, 500));
        },
        onDecrementCart: async (data, qty) => {
          console.log('Decrementing...', data, qty);
          await new Promise(resolve => setTimeout(resolve, 500));
        },
        onWishlist: () => console.log('Wishlist toggled'),
        onQuickView: () => console.log('Quick view opened'),
        onClick: () => console.log('Product page opened'),
      },
    },
  },
};