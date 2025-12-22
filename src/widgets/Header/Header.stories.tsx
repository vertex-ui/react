import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '../../components/Button';
import { 
  HomeIcon, 
  ShoppingCartIcon,
  HeartIcon,
  BellIcon, 
  UserIcon, 
  SettingsIcon,
  TrendingUpIcon,
  LayersIcon,
  ServerIcon,
  CodeIcon,
  ZapIcon
} from '../../icons/IconComponents';
import type { NavigationItem } from './Header';

const meta = {
  title: 'Widgets/Header',
  component: Header.Responsive,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header.Responsive>;

export default meta;

type Story = StoryObj<typeof Header.Responsive>;
type MobileStory = StoryObj<typeof Header.Mobile>;
type ResponsiveStory = StoryObj<typeof Header.Responsive>;

// ============================================================
// Sample Navigation Data
// ============================================================

const basicNavItems: NavigationItem[] = [
  { id: '1', label: 'Home', href: '/', active: true },
  { id: '2', label: 'About', href: '/about' },
  { id: '3', label: 'Services', href: '/services' },
  { id: '4', label: 'Contact', href: '/contact' },
];

const nestedNavItems: NavigationItem[] = [
  { 
    id: '1', 
    label: 'Home', 
    href: '/', 
    icon: <HomeIcon size={18} />,
    active: true 
  },
  { 
    id: '2', 
    label: 'Products', 
    children: [
      { id: '2-1', label: 'All Products', href: '/products' },
      { id: '2-2', label: 'Featured', href: '/products/featured', badge: 'New' },
      { id: '2-3', label: 'Best Sellers', href: '/products/bestsellers' },
      { id: '2-4', label: 'Sale', href: '/products/sale', badge: '50%' },
    ]
  },
  { 
    id: '3', 
    label: 'Services', 
    children: [
      { id: '3-1', label: 'Consulting', href: '/services/consulting' },
      { id: '3-2', label: 'Development', href: '/services/development' },
      { id: '3-3', label: 'Design', href: '/services/design' },
    ]
  },
  { id: '4', label: 'About', href: '/about' },
  { id: '5', label: 'Contact', href: '/contact' },
];

const megaMenuNavItems: NavigationItem[] = [
  { id: '1', label: 'Home', href: '/', active: true },
  {
    id: '2',
    label: 'Products',
    megaMenu: true,
    megaMenuColumns: [
      {
        title: 'Electronics',
        items: [
          {
            id: '2-1-1',
            label: 'Laptops',
            description: 'High-performance computing',
            href: '/products/laptops',
            icon: <LayersIcon size={20} />,
          },
          {
            id: '2-1-2',
            label: 'Smartphones',
            description: 'Latest mobile technology',
            href: '/products/phones',
            icon: <ServerIcon size={20} />,
          },
          {
            id: '2-1-3',
            label: 'Tablets',
            description: 'Portable devices',
            href: '/products/tablets',
            icon: <CodeIcon size={20} />,
          },
        ],
      },
      {
        title: 'Accessories',
        items: [
          {
            id: '2-2-1',
            label: 'Headphones',
            description: 'Premium audio experience',
            href: '/products/headphones',
          },
          {
            id: '2-2-2',
            label: 'Cases & Covers',
            description: 'Protect your devices',
            href: '/products/cases',
          },
          {
            id: '2-2-3',
            label: 'Chargers',
            description: 'Fast charging solutions',
            href: '/products/chargers',
            badge: 'New',
          },
        ],
      },
      {
        title: 'Featured',
        items: [
          {
            id: '2-3-1',
            label: 'Best Sellers',
            description: 'Most popular items',
            href: '/products/bestsellers',
            icon: <TrendingUpIcon size={20} />,
            badge: 'Hot',
          },
          {
            id: '2-3-2',
            label: 'New Arrivals',
            description: 'Just launched',
            href: '/products/new',
            icon: <ZapIcon size={20} />,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'Services',
    children: [
      { id: '3-1', label: 'Consulting', href: '/services/consulting' },
      { id: '3-2', label: 'Support', href: '/services/support' },
    ],
  },
  { id: '4', label: 'About', href: '/about' },
  { id: '5', label: 'Contact', href: '/contact' },
];

// ============================================================
// Main Responsive Stories (Default)
// ============================================================

export const Primary: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
    },
    breakpoint: 768,
  },
};

export const WithSearch: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
      searchEnabled: true,
      searchPlaceholder: 'Search anything...',
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
      searchEnabled: true,
      searchPlaceholder: 'Search...',
    },
    breakpoint: 768,
  },
};

export const WithActions: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <BellIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <UserIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
      actions: (
        <Button variant="primary" size="sm">
          Sign In
        </Button>
      ),
    },
    breakpoint: 768,
  },
};

export const NestedMenu: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
    },
    breakpoint: 768,
  },
};

export const FullFeatured: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
      elevated: true,
      sticky: true,
      topBar: {
        variant: 'subtle',
        content: (
          <span style={{ fontSize: '0.8125rem' }}>
            🎉 Limited Time: Save 30% on annual plans - Ends Dec 31st
          </span>
        ),
        dismissible: true,
      },
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <HeartIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <ShoppingCartIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <UserIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
      elevated: true,
      sticky: true,
      actions: (
        <>
          <Button variant="ghost" iconOnly size="sm">
            <ShoppingCartIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    breakpoint: 768,
  },
};

export const TwoRowLayout: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      layout: 'two-row',
      searchEnabled: true,
      elevated: true,
      topBar: {
        variant: 'subtle',
        leftContent: <span style={{ fontSize: '0.8125rem' }}>📧 support@brand.com</span>,
        rightContent: (
          <div style={{ display: 'flex', gap: '12px', fontSize: '0.8125rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Help</a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Support</a>
          </div>
        ),
      },
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <BellIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <SettingsIcon />
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
      elevated: true,
      actions: (
        <Button variant="primary" size="sm">
          Get Started
        </Button>
      ),
    },
    breakpoint: 768,
  },
};

export const WithMegaMenu: Story = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>TechStore</h1>,
      navItems: megaMenuNavItems,
      variant: 'primary',
      layout: 'two-row',
      twoRowBottomStyle: 'dark-bottom',
      searchEnabled: true,
      elevated: true,
      topBar: {
        variant: 'accent',
        content: (
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>
            🎁 Free Shipping on all orders this weekend!
          </span>
        ),
        dismissible: true,
      },
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <HeartIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <ShoppingCartIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <UserIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>TechStore</h1>,
      navItems: megaMenuNavItems,
      variant: 'primary',
      searchEnabled: true,
      elevated: true,
      actions: (
        <>
          <Button variant="ghost" iconOnly size="sm">
            <ShoppingCartIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    breakpoint: 768,
  },
};
// ============================================================
// Mobile Stories
// ============================================================

export const MobilePrimary: MobileStory = {
  render: (args: any) => <Header.Mobile {...args} />,
  args: {
    logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
    navItems: basicNavItems,
    variant: 'primary',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileDark: MobileStory = {
  render: (args: any) => <Header.Mobile {...args} />,
  args: {
    logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600, color: 'white' }}>Brand</h1>,
    navItems: basicNavItems,
    variant: 'dark',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileNested: MobileStory = {
  render: (args: any) => <Header.Mobile {...args} />,
  args: {
    logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
    navItems: nestedNavItems,
    variant: 'primary',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileWithSearch: MobileStory = {
  render: (args: any) => <Header.Mobile {...args} />,
  args: {
    logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
    navItems: nestedNavItems,
    variant: 'primary',
    searchEnabled: true,
    searchPlaceholder: 'Search...',
    onSearch: (query: string) => console.log('Searching:', query),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileWithActions: MobileStory = {
  render: (args: any) => <Header.Mobile {...args} />,
  args: {
    logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
    navItems: nestedNavItems,
    variant: 'primary',
    searchEnabled: true,
    actions: (
      <Button variant="ghost" iconOnly size="sm">
        <UserIcon />
      </Button>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// ============================================================
// Responsive Stories
// ============================================================

export const ResponsiveBasic: ResponsiveStory = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
      elevated: true,
      sticky: true,
      layout: 'single-row',
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <BellIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
      actions: (
        <Button variant="ghost" iconOnly size="sm">
          <UserIcon />
        </Button>
      ),
    },
    breakpoint: 768,
  },
};

export const ResponsiveTwoRowWithMegaMenu: ResponsiveStory = {
  render: (args: any) => <Header.Responsive {...args} />,
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>ShopHub</h1>,
      navItems: megaMenuNavItems,
      variant: 'light',
      searchEnabled: true,
      searchPlaceholder: 'Search products...',
      elevated: true,
      sticky: true,
      layout: 'two-row',
      topBar: {
        variant: 'accent',
        content: (
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>
            🎁 Free Shipping on all orders this weekend! Limited time offer
          </span>
        ),
        dismissible: true,
      },
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <HeartIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <ShoppingCartIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <UserIcon />
          </Button>
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>ShopHub</h1>,
      navItems: megaMenuNavItems,
      variant: 'light',
      searchEnabled: true,
      searchPlaceholder: 'Search...',
      actions: (
        <>
          <Button variant="ghost" iconOnly size="sm">
            <ShoppingCartIcon />
          </Button>
          <Button variant="ghost" iconOnly size="sm">
            <UserIcon />
          </Button>
        </>
      ),
    },
    breakpoint: 768,
  },
};

// ============================================================
// Scroll Behavior Stories
// ============================================================

export const ScrollTransparentToSolid: Story = {
  render: (args: any) => (
    <>
      <Header.Responsive {...args} />
      <div style={{ 
        padding: '40px 24px', 
        minHeight: '200vh',
        background: 'linear-gradient(180deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          color: 'white',
          fontSize: '1.125rem',
          lineHeight: '1.8'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Scroll Down to See the Effect</h2>
          <p style={{ marginBottom: '16px' }}>
            The header starts with a transparent background, allowing the content behind it to show through.
            As you scroll down the page, the header smoothly transitions to a white background with a subtle shadow.
          </p>
          <p style={{ marginBottom: '16px' }}>
            This creates a modern, professional look that's popular in contemporary web design. 
            The header remains functional and readable at all times while adapting to the scroll position.
          </p>
          <p>
            Keep scrolling to see the smooth transition effect in action! The header will automatically 
            adjust its appearance based on your scroll position.
          </p>
          <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>✨ Beautiful Scroll Effect</h3>
              <p>Notice how the header has transformed!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems.map(item => ({
        ...item,
        active: item.id === '1'
      })),
      variant: 'primary',
      sticky: true,
      scrollBehavior: 'transparent-to-solid',
      scrollThreshold: 50,
      onScrollStateChange: (scrolled: boolean) => {
        console.log('Scroll state changed:', scrolled ? 'User has scrolled' : 'User at top');
      },
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <BellIcon />
          </Button>
          <Button variant="ghost">
            Sign In
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: basicNavItems,
      variant: 'primary',
      actions: (
        <Button variant="ghost">
          Sign In
        </Button>
      ),
    },
    breakpoint: 768,
  },
};

export const ScrollTwoRowTransparent: Story = {
  render: (args: any) => (
    <>
      <Header.Responsive {...args} />
      <div style={{ 
        padding: '40px 24px', 
        minHeight: '200vh',
        background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          color: 'white',
          fontSize: '1.125rem',
          lineHeight: '1.8'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Two-Row Header with Scroll Effect</h2>
          <p style={{ marginBottom: '16px' }}>
            This demonstrates the scroll behavior with a two-row layout. The header seamlessly 
            transitions from transparent to white as you scroll, while maintaining the professional 
            two-row structure.
          </p>
          <p>
            Scroll down to see the transformation!
          </p>
          <div style={{ height: '120vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>🎯 Perfect Combination</h3>
              <p>Two-row layout + Scroll effect = Professional design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
  args: {
    desktopProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems.map(item => ({
        ...item,
        active: item.id === '1'
      })),
      variant: 'primary',
      layout: 'two-row',
      twoRowBottomStyle: 'elevated-bottom',
      sticky: true,
      searchEnabled: true,
      scrollBehavior: 'transparent-to-solid',
      scrollThreshold: 50,
      onScrollStateChange: (scrolled: boolean) => {
        console.log('Two-row scroll state:', scrolled);
        // You can perform actions here, like:
        // - Showing/hiding elements
        // - Changing theme
        // - Triggering analytics
        // - Updating app state
      },
      actions: (
        <>
          <Button variant="ghost" iconOnly>
            <SettingsIcon />
          </Button>
          <Button variant="ghost">
            Get Started
          </Button>
        </>
      ),
    },
    mobileProps: {
      logo: <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Brand</h1>,
      navItems: nestedNavItems,
      variant: 'primary',
      searchEnabled: true,
      actions: (
        <Button variant="primary" size="sm">
          Get Started
        </Button>
      ),
    },
    breakpoint: 768,
  },
};
