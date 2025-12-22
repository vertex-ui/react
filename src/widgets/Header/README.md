# Header Widget

A comprehensive, responsive header component for building navigation bars with desktop and mobile variants.

## Features

- 🖥️ **Separate Desktop & Mobile Components** - Optimized for each viewport
- 📱 **Responsive Utility** - Automatically switches based on breakpoint
- 🎨 **Multiple Theme Variants** - 6 built-in styles (primary, secondary, dark, light, transparent, gradient)
- 🌲 **Nested Navigation** - Support for dropdown menus and multi-level navigation
- 🔍 **Built-in Search** - Optional search functionality
- 🎯 **Highly Customizable** - Logo, actions, icons, badges, and more
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 🎭 **Different Themes per Device** - Use different variants for desktop vs mobile

## Installation

```tsx
import { Header } from '@vtx-ui/react';
```

## Components

### Header.Desktop

Full-featured desktop navigation header with horizontal menu, dropdowns, and search.

### Header.Mobile

Mobile-optimized header with hamburger menu, slide-out drawer, and expandable sections.

### Header.Responsive

Utility component that automatically switches between Desktop and Mobile based on screen size.

## Basic Usage

### Desktop Header

```tsx
import { Header } from '@vtx-ui/react';

function App() {
  const navItems = [
    { id: '1', label: 'Home', href: '/', active: true },
    { id: '2', label: 'About', href: '/about' },
    { id: '3', label: 'Services', href: '/services' },
    { id: '4', label: 'Contact', href: '/contact' },
  ];

  return (
    <Header.Desktop
      logo={<img src="/logo.svg" alt="Company" />}
      navItems={navItems}
      variant="primary"
      sticky
      elevated
    />
  );
}
```

### Mobile Header

```tsx
import { Header } from '@vtx-ui/react';

function App() {
  const navItems = [
    { id: '1', label: 'Home', href: '/', active: true },
    { id: '2', label: 'About', href: '/about' },
    { id: '3', label: 'Services', href: '/services' },
    { id: '4', label: 'Contact', href: '/contact' },
  ];

  return (
    <Header.Mobile
      logo={<img src="/logo.svg" alt="Company" />}
      navItems={navItems}
      variant="dark"
      sticky
      elevated
    />
  );
}
```

### Responsive Header (Different Themes)

```tsx
import { Header } from '@vtx-ui/react';
import { BellIcon, UserIcon } from 'react-icons/fi';

function App() {
  const navItems = [
    { id: '1', label: 'Home', href: '/', active: true },
    { 
      id: '2', 
      label: 'Products', 
      children: [
        { id: '2-1', label: 'Category 1', href: '/products/cat1' },
        { id: '2-2', label: 'Category 2', href: '/products/cat2' },
        { id: '2-3', label: 'Category 3', href: '/products/cat3' },
      ]
    },
    { id: '3', label: 'About', href: '/about' },
    { id: '4', label: 'Contact', href: '/contact' },
  ];

  const actions = (
    <>
      <Button variant="ghost" iconOnly>
        <BellIcon />
      </Button>
      <Button variant="ghost" iconOnly>
        <UserIcon />
      </Button>
      <Button variant="primary" size="sm">Sign In</Button>
    </>
  );

  return (
    <Header.Responsive
      desktopProps={{
        variant: 'primary',
        logo: <img src="/logo.svg" alt="Company" />,
        navItems,
        actions,
        searchEnabled: true,
        sticky: true,
        elevated: true,
      }}
      mobileProps={{
        variant: 'dark', // Different theme for mobile!
        logo: <img src="/logo-mobile.svg" alt="Company" />,
        navItems,
        actions: <Button variant="primary" fullWidth>Sign In</Button>,
        searchEnabled: true,
        sticky: true,
      }}
      breakpoint={768}
    />
  );
}
```

## Advanced Examples

### Nested Navigation with Icons and Badges

```tsx
import { Header } from '@vtx-ui/react';
import { 
  HomeIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  SettingsIcon 
} from 'react-icons/fi';

const navItems = [
  { 
    id: '1', 
    label: 'Home', 
    href: '/', 
    icon: <HomeIcon />,
    active: true 
  },
  { 
    id: '2', 
    label: 'Shop', 
    icon: <ShoppingCartIcon />,
    children: [
      { id: '2-1', label: 'New Arrivals', href: '/shop/new' },
      { id: '2-2', label: 'Best Sellers', href: '/shop/best-sellers' },
      { 
        id: '2-3', 
        label: 'Categories',
        children: [
          { id: '2-3-1', label: 'Electronics', href: '/shop/electronics' },
          { id: '2-3-2', label: 'Clothing', href: '/shop/clothing' },
          { id: '2-3-3', label: 'Home & Garden', href: '/shop/home' },
        ]
      },
      { id: '2-4', label: 'Sale', href: '/shop/sale', badge: '50% OFF' },
    ]
  },
  { 
    id: '3', 
    label: 'Profile', 
    href: '/profile',
    icon: <UserIcon />,
    badge: 3, // Notification badge
  },
  { 
    id: '4', 
    label: 'Settings', 
    href: '/settings',
    icon: <SettingsIcon />,
  },
];

function App() {
  return (
    <Header.Desktop
      logo={<h1>MyStore</h1>}
      navItems={navItems}
      variant="gradient"
      elevated
      sticky
    />
  );
}
```

### With Search and Custom Actions

```tsx
import { Header, Button } from '@vtx-ui/react';
import { BellIcon, MessageIcon, ShoppingCartIcon } from 'react-icons/fi';

function App() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Perform search logic
  };

  return (
    <Header.Desktop
      logo={<img src="/logo.svg" alt="Brand" />}
      navItems={navItems}
      variant="light"
      searchEnabled
      searchPlaceholder="Search products..."
      onSearch={handleSearch}
      actions={
        <>
          <Button variant="ghost" iconOnly>
            <MessageIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <BellIcon />
          </Button>
          <Button variant="ghost" iconOnly>
            <ShoppingCartIcon />
          </Button>
          <Button variant="primary">Get Started</Button>
        </>
      }
      sticky
      elevated
    />
  );
}
```

### Controlled Mobile Menu

```tsx
import { Header } from '@vtx-ui/react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    // Close menu when item is clicked
    setMobileMenuOpen(false);
    // Navigate or perform action
  };

  const navItems = [
    { 
      id: '1', 
      label: 'Dashboard', 
      href: '/dashboard',
      onClick: handleItemClick 
    },
    { 
      id: '2', 
      label: 'Products', 
      children: [
        { id: '2-1', label: 'All Products', href: '/products', onClick: handleItemClick },
        { id: '2-2', label: 'Add New', href: '/products/new', onClick: handleItemClick },
      ]
    },
  ];

  return (
    <Header.Mobile
      logo="MyApp"
      navItems={navItems}
      variant="dark"
      menuOpen={mobileMenuOpen}
      onMenuOpenChange={setMobileMenuOpen}
      sticky
    />
  );
}
```

### Full-Width Header with Transparent Variant

```tsx
import { Header } from '@vtx-ui/react';

function HeroSection() {
  return (
    <div style={{ 
      backgroundImage: 'url(/hero.jpg)', 
      minHeight: '100vh',
      position: 'relative' 
    }}>
      <Header.Desktop
        logo={<h1 style={{ color: 'white' }}>Brand</h1>}
        navItems={navItems}
        variant="transparent"
        fullWidth
        sticky
        actions={
          <Button variant="outline" style={{ borderColor: 'white', color: 'white' }}>
            Sign Up
          </Button>
        }
      />
      <div>{/* Hero content */}</div>
    </div>
  );
}
```

### E-commerce Header Example

```tsx
import { Header, Button } from '@vtx-ui/react';
import { 
  SearchIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  HeartIcon 
} from 'react-icons/fi';

function EcommerceHeader() {
  const navItems = [
    { id: '1', label: 'New Arrivals', href: '/new' },
    { 
      id: '2', 
      label: 'Women', 
      children: [
        { id: '2-1', label: 'Dresses', href: '/women/dresses' },
        { id: '2-2', label: 'Tops', href: '/women/tops' },
        { id: '2-3', label: 'Bottoms', href: '/women/bottoms' },
        { id: '2-4', label: 'Shoes', href: '/women/shoes' },
      ]
    },
    { 
      id: '3', 
      label: 'Men', 
      children: [
        { id: '3-1', label: 'Shirts', href: '/men/shirts' },
        { id: '3-2', label: 'Pants', href: '/men/pants' },
        { id: '3-3', label: 'Shoes', href: '/men/shoes' },
      ]
    },
    { id: '4', label: 'Sale', href: '/sale', badge: 'HOT' },
  ];

  return (
    <Header.Desktop
      logo={<h1>FASHION</h1>}
      navItems={navItems}
      variant="light"
      searchEnabled
      searchPlaceholder="Search for products..."
      actions={
        <>
          <Button variant="ghost" iconOnly aria-label="Wishlist">
            <HeartIcon />
          </Button>
          <Button variant="ghost" iconOnly aria-label="Shopping cart">
            <ShoppingCartIcon />
          </Button>
          <Button variant="ghost" iconOnly aria-label="Account">
            <UserIcon />
          </Button>
        </>
      }
      sticky
      elevated
    />
  );
}
```

## API Reference

### NavigationItem Interface

```tsx
interface NavigationItem {
  id: string;                    // Unique identifier
  label: React.ReactNode;        // Display text
  href?: string;                 // Navigation URL
  icon?: React.ReactNode;        // Icon element
  children?: NavigationItem[];   // Nested items
  onClick?: () => void;          // Click handler
  active?: boolean;              // Active state
  disabled?: boolean;            // Disabled state
  badge?: React.ReactNode;       // Badge content
}
```

### Header.Desktop Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `React.ReactNode` | - | Logo element or brand name |
| `navItems` | `NavigationItem[]` | `[]` | Navigation items array |
| `actions` | `React.ReactNode` | - | Action buttons/elements on right |
| `variant` | `'primary' \| 'secondary' \| 'dark' \| 'light' \| 'transparent' \| 'gradient'` | `'primary'` | Theme variant |
| `elevated` | `boolean` | `false` | Shadow effect |
| `sticky` | `boolean` | `false` | Stick to top on scroll |
| `fullWidth` | `boolean` | `false` | Full bleed, no max-width |
| `searchEnabled` | `boolean` | `false` | Enable search |
| `searchPlaceholder` | `string` | `'Search...'` | Search placeholder |
| `onSearch` | `(query: string) => void` | - | Search handler |
| `onLogoClick` | `() => void` | - | Logo click handler |

### Header.Mobile Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `React.ReactNode` | - | Logo element or brand name |
| `navItems` | `NavigationItem[]` | `[]` | Navigation items array |
| `actions` | `React.ReactNode` | - | Action buttons/elements |
| `variant` | `'primary' \| 'secondary' \| 'dark' \| 'light' \| 'transparent' \| 'gradient'` | `'primary'` | Theme variant |
| `elevated` | `boolean` | `false` | Shadow effect |
| `sticky` | `boolean` | `false` | Stick to top on scroll |
| `searchEnabled` | `boolean` | `false` | Enable search in drawer |
| `searchPlaceholder` | `string` | `'Search...'` | Search placeholder |
| `onSearch` | `(query: string) => void` | - | Search handler |
| `onLogoClick` | `() => void` | - | Logo click handler |
| `menuOpen` | `boolean` | - | Controlled menu state |
| `onMenuOpenChange` | `(open: boolean) => void` | - | Menu state handler |

### Header.Responsive Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `desktopProps` | `HeaderDesktopProps` | - | Props for desktop header |
| `mobileProps` | `HeaderMobileProps` | - | Props for mobile header |
| `breakpoint` | `number` | `768` | Breakpoint in pixels |

## Theme Variants

### Primary
Blue gradient, perfect for modern applications.

### Secondary
Purple/indigo theme for creative brands.

### Dark
Dark mode header with light text.

### Light
Clean white header with subtle border.

### Transparent
No background, ideal for hero sections.

### Gradient
Vibrant gradient from purple to violet.

## Customization

### CSS Custom Properties

```css
:root {
  --vtx-header-height: 64px;
  --vtx-header-logo-height: 40px;
  --vtx-header-max-width: 1440px;
}
```

### Custom Styling

```tsx
<Header.Desktop
  className="custom-header"
  style={{
    backgroundColor: '#custom-color',
    borderBottom: '2px solid gold'
  }}
  // ... other props
/>
```

## Accessibility

- Semantic HTML (`<header>`, `<nav>`)
- ARIA labels for icons and controls
- Keyboard navigation support
- `aria-current` for active items
- `aria-expanded` for dropdowns
- Focus management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
