import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../components/Widget';
import { GridCarouselWidgetData, ProductWidgetData } from '../../components/Widget/types';
import { Box } from '../../components/Box';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';

const meta: Meta<typeof Widget> = {
  title: 'Widgets/GridCarouselWidget',
  component: Widget,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    config: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Widget>;

// ========================================================================
// PRODUCT THEME EXAMPLES
// ========================================================================

const sampleProducts: ProductWidgetData[] = [
  {
    id: 'product-1',
    name: 'Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    imageAlt: 'Wireless Headphones',
    discount: '25% OFF',
    featured: true,
    featuredText: 'Bestseller',
    href: '/products/wireless-headphones',
  },
  {
    id: 'product-2',
    name: 'Smart Watch Pro',
    price: 449.99,
    category: 'Wearables',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    imageAlt: 'Smart Watch Pro',
    href: '/products/smart-watch-pro',
  },
  {
    id: 'product-3',
    name: 'Laptop Backpack',
    price: 89.99,
    originalPrice: 129.99,
    category: 'Accessories',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    imageAlt: 'Laptop Backpack',
    discount: '30% OFF',
    href: '/products/laptop-backpack',
  },
  {
    id: 'product-4',
    name: 'Bluetooth Speaker',
    price: 79.99,
    category: 'Audio',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    imageAlt: 'Bluetooth Speaker',
    featured: true,
    featuredText: 'New',
    href: '/products/bluetooth-speaker',
  },
  {
    id: 'product-5',
    name: 'USB-C Hub',
    price: 49.99,
    category: 'Accessories',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    imageAlt: 'USB-C Hub',
    href: '/products/usb-c-hub',
  },
  {
    id: 'product-6',
    name: 'Wireless Mouse',
    price: 39.99,
    originalPrice: 59.99,
    category: 'Accessories',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    imageAlt: 'Wireless Mouse',
    discount: '33% OFF',
    href: '/products/wireless-mouse',
  },
  {
    id: 'product-7',
    name: 'Mechanical Keyboard',
    price: 149.99,
    category: 'Accessories',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
    imageAlt: 'Mechanical Keyboard',
    featured: true,
    featuredText: 'Popular',
    href: '/products/mechanical-keyboard',
  },
  {
    id: 'product-8',
    name: 'HD Webcam',
    price: 99.99,
    category: 'Electronics',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&h=500&fit=crop',
    imageAlt: 'HD Webcam',
    href: '/products/hd-webcam',
  },
];

/**
 * Product Theme - Default carousel with product widgets
 */
export const ProductTheme: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'product',
        products: sampleProducts,
      } as GridCarouselWidgetData,
      settings: {
        theme: 'modern',
        variant: 'primary',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 4,
        },
        gap: 20,
        autoplay: false,
        showNavigation: true,
        showPagination: true,
        scrollBehavior: 'page',
        borderRadius: true,
        productSettings: {
          showWishlist: true,
          onAddToCart: (id?: string, quantity?: number) => {
            console.log(`Added product ${id} to cart with quantity ${quantity}`);
          },
          onWishlist: () => {
            console.log('Added to wishlist');
          },
        },
      },
    },
  },
};

/**
 * Product Theme with Autoplay
 */
export const ProductThemeAutoplay: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'product',
        products: sampleProducts,
      } as GridCarouselWidgetData,
      settings: {
        theme: 'modern',
        variant: 'primary',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
        gap: 24,
        autoplay: true,
        autoplayDelay: 3000,
        showNavigation: true,
        showPagination: true,
        scrollBehavior: 'page',
        borderRadius: true,
        productSettings: {
          showWishlist: true,
        },
      },
    },
  },
};

/**
 * Product Theme - Single Item Scroll
 */
export const ProductThemeSingleScroll: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'product',
        products: sampleProducts,
      } as GridCarouselWidgetData,
      settings: {
        theme: 'modern',
        variant: 'primary',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 4,
        },
        gap: 16,
        autoplay: false,
        showNavigation: true,
        showPagination: true,
        scrollBehavior: 'item',
        borderRadius: true,
        hideNavigationOnMobile: true,
        productSettings: {
          showWishlist: false,
        },
      },
    },
  },
};

// ========================================================================
// BASE THEME EXAMPLES
// ========================================================================

const customCards = [
  <Card key="card-1" variant="elevated" style={{ height: '100%', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" textColor="primary" noMargin>
        Feature One
      </Typography>
      <Typography variant="body1" textColor="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
      </Typography>
    </div>
  </Card>,
  <Card key="card-2" variant="elevated" style={{ height: '100%', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" textColor="success" noMargin>
        Feature Two
      </Typography>
      <Typography variant="body1" textColor="secondary">
        Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </Typography>
    </div>
  </Card>,
  <Card key="card-3" variant="elevated" style={{ height: '100%', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" textColor="warning" noMargin>
        Feature Three
      </Typography>
      <Typography variant="body1" textColor="secondary">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
      </Typography>
    </div>
  </Card>,
  <Card key="card-4" variant="elevated" style={{ height: '100%', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" textColor="info" noMargin>
        Feature Four
      </Typography>
      <Typography variant="body1" textColor="secondary">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </Typography>
    </div>
  </Card>,
  <Card key="card-5" variant="elevated" style={{ height: '100%', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" textColor="danger" noMargin>
        Feature Five
      </Typography>
      <Typography variant="body1" textColor="secondary">
        Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
      </Typography>
    </div>
  </Card>,
  <Card key="card-6" variant="elevated" style={{ height: '100%', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" textColor="secondary" noMargin>
        Feature Six
      </Typography>
      <Typography variant="body1" textColor="secondary">
        Sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.
      </Typography>
    </div>
  </Card>,
];

/**
 * Base Theme - Custom React Nodes
 * Renders any custom React components in a carousel grid
 */
export const BaseTheme: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'base',
        items: customCards,
      } as GridCarouselWidgetData,
      settings: {
        theme: 'modern',
        variant: 'primary',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
        gap: 24,
        autoplay: false,
        showNavigation: true,
        showPagination: true,
        scrollBehavior: 'page',
        borderRadius: true,
      },
    },
  },
};

/**
 * Base Theme - Image Grid
 */
const imageCards = [
  <Box key="img-1" style={{ height: '300px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
    <img
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
      alt="Mountain"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <Box
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }}
    >
      <Typography variant="h4" textColor="#fff" noMargin>
        Mountain Peaks
      </Typography>
    </Box>
  </Box>,
  <Box key="img-2" style={{ height: '300px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
      alt="Beach"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <Box
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }}
    >
      <Typography variant="h4" textColor="#fff" noMargin>
        Beach Paradise
      </Typography>
    </Box>
  </Box>,
  <Box key="img-3" style={{ height: '300px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
    <img
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
      alt="Forest"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <Box
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }}
    >
      <Typography variant="h4" textColor="#fff" noMargin>
        Deep Forest
      </Typography>
    </Box>
  </Box>,
  <Box key="img-4" style={{ height: '300px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
    <img
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
      alt="Desert"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <Box
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }}
    >
      <Typography variant="h4" textColor="#fff" noMargin>
        Desert Dunes
      </Typography>
    </Box>
  </Box>,
];

export const BaseThemeImages: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'base',
        items: imageCards,
      } as GridCarouselWidgetData,
      settings: {
        theme: 'modern',
        variant: 'primary',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
        gap: 20,
        autoplay: true,
        autoplayDelay: 4000,
        showNavigation: true,
        showPagination: true,
        scrollBehavior: 'page',
        borderRadius: true,
      },
    },
  },
};

/**
 * Base Theme - Minimal Layout
 */
export const BaseThemeMinimal: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'base',
        items: customCards.slice(0, 4),
      } as GridCarouselWidgetData,
      settings: {
        theme: 'minimal',
        variant: 'neutral',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 4,
        },
        gap: 16,
        autoplay: false,
        showNavigation: true,
        showPagination: false,
        scrollBehavior: 'page',
        borderRadius: false,
        backgroundColor: 'transparent',
      },
    },
  },
};

/**
 * Responsive Showcase - Shows different layouts at breakpoints
 */
export const ResponsiveShowcase: Story = {
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'product',
        products: sampleProducts.slice(0, 6),
      } as GridCarouselWidgetData,
      settings: {
        theme: 'modern',
        variant: 'primary',
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
        gap: 20,
        autoplay: false,
        showNavigation: true,
        showPagination: true,
        scrollBehavior: 'page',
        borderRadius: true,
        hideNavigationOnMobile: true,
        productSettings: {
          showWishlist: true,
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive behavior: 1 item on mobile, 2 on tablet, 3 on desktop. Navigation arrows hide on mobile devices.',
      },
    },
  },
};

/**
 * Usage Example Documentation
 */
export const UsageExamples: Story = {
  parameters: {
    docs: {
      description: {
        story: `
# GridCarouselWidget Usage

The GridCarouselWidget supports two themes: **product** and **base**.

## Product Theme

Display product widgets with automatic rendering and interactions:

\`\`\`tsx
<Widget
  config={{
    type: 'gridCarousel',
    data: {
      theme: 'product',
      products: [
        {
          id: 'prod-1',
          name: 'Product Name',
          price: 99.99,
          image: 'https://...',
          category: 'Electronics',
          rating: 4.5,
          // ... other product data
        },
        // ... more products
      ],
    },
    settings: {
      itemsPerView: {
        mobile: 1,
        tablet: 2,
        desktop: 4,
      },
      gap: 20,
      autoplay: true,
      autoplayDelay: 3000,
      showNavigation: true,
      showPagination: true,
      scrollBehavior: 'page',
      productSettings: {
        showWishlist: true,
        onAddToCart: (id, quantity) => {...},
        onWishlist: () => {...},
      },
    },
  }}
/>
\`\`\`

## Base Theme

Display any custom React nodes (cards, images, components):

\`\`\`tsx
<Widget
  config={{
    type: 'gridCarousel',
    data: {
      theme: 'base',
      items: [
        <Card>...</Card>,
        <CustomComponent />,
        <div>Custom HTML</div>,
        // ... any React nodes
      ],
    },
    settings: {
      itemsPerView: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
      },
      gap: 24,
      autoplay: false,
      showNavigation: true,
      showPagination: true,
    },
  }}
/>
\`\`\`

## Settings Options

- **itemsPerView**: Responsive breakpoints for items per view
- **gap**: Spacing between items (number or CSS value)
- **autoplay**: Enable automatic sliding
- **autoplayDelay**: Delay between slides in milliseconds
- **showNavigation**: Show/hide navigation arrows
- **showPagination**: Show/hide pagination dots
- **scrollBehavior**: 'page' (full page scroll) or 'item' (single item)
- **borderRadius**: Apply border radius to container
- **hideNavigationOnMobile**: Hide arrows on mobile devices
- **backgroundColor**: Custom background color
- **productSettings**: Additional settings for product widgets (only for product theme)
        `,
      },
    },
  },
  args: {
    config: {
      type: 'gridCarousel',
      data: {
        theme: 'product',
        products: sampleProducts.slice(0, 4),
      } as GridCarouselWidgetData,
      settings: {
        itemsPerView: {
          mobile: 1,
          tablet: 2,
          desktop: 4,
        },
        gap: 20,
        showNavigation: true,
        showPagination: true,
      },
    },
  },
};
