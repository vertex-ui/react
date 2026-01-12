# Professional Enterprise Mega Menu - Feature Guide

## Overview

The Navbar component now features a **professional, enterprise-grade mega menu** system with advanced features including icons, descriptions, featured items, images, tags, and flexible layouts.

## 🎨 Key Features

### 1. **Icons & Descriptions**
Each menu item can now include:
- **Icon**: Visual identifier for quick recognition
- **Description**: Contextual information about the link
- **Badge**: Counters or notifications
- **Tags**: Labels like "NEW", "HOT", "SALE", "BETA"

### 2. **Featured Items**
Highlight important menu items with:
- Special styling and background gradients
- Elevated prominence in the menu
- Enhanced hover effects

### 3. **Featured Columns**
Entire columns can be marked as featured with:
- Card-style presentation
- Background gradients
- Optional images
- Call-to-action buttons

### 4. **Flexible Grid Layout**
- Automatic responsive grid
- Custom column spans (1-4 columns)
- Adapts to different screen sizes

### 5. **Rich Content**
- Column header images
- Item thumbnail images
- Column descriptions
- Call-to-action links

## 📝 Usage Examples

### Basic Mega Menu

```tsx
const basicMegaMenu = [
  {
    title: 'Products',
    items: [
      { label: 'Item 1', href: '/item-1' },
      { label: 'Item 2', href: '/item-2' },
      { label: 'Item 3', href: '/item-3' },
    ],
  },
];

<Navbar
  navigationItems={[
    { label: 'Shop', megaMenu: basicMegaMenu },
  ]}
/>
```

### Professional Mega Menu with Icons

```tsx
import { ShoppingBagIcon, TruckIcon, UserIcon } from '@vtx-ui/react/icons';

const proMegaMenu = [
  {
    title: 'Quick Actions',
    items: [
      {
        label: 'Browse Products',
        href: '/products',
        icon: <ShoppingBagIcon size={20} />,
        description: 'Explore our full catalog',
      },
      {
        label: 'Track Order',
        href: '/track',
        icon: <TruckIcon size={20} />,
        description: 'Real-time order tracking',
      },
      {
        label: 'My Account',
        href: '/account',
        icon: <UserIcon size={20} />,
        description: 'Manage your profile',
      },
    ],
  },
];
```

### Featured Items & Tags

```tsx
const featuredMegaMenu = [
  {
    title: 'Popular',
    items: [
      {
        label: 'New Collection',
        href: '/new',
        tagVariant: 'new',
        featured: true,
        description: 'Just launched this week',
      },
      {
        label: 'Hot Deals',
        href: '/deals',
        tagVariant: 'hot',
        description: 'Limited time offers',
      },
      {
        label: 'Sale Items',
        href: '/sale',
        tagVariant: 'sale',
        badge: '50% OFF',
        description: 'Up to 50% discount',
      },
    ],
  },
];
```

### Featured Column with Image

```tsx
const imageMegaMenu = [
  {
    title: 'Featured Collection',
    description: 'Handpicked seasonal favorites',
    featured: true,
    span: 2, // Takes 2 columns
    image: 'https://example.com/featured.jpg',
    items: [
      {
        label: 'Summer Collection',
        href: '/summer',
        featured: true,
      },
      {
        label: 'Limited Edition',
        href: '/limited',
      },
    ],
    cta: {
      label: 'View All Collections',
      href: '/collections',
    },
  },
];
```

### Complete Professional Example

```tsx
import { 
  ShoppingBagIcon,
  TruckIcon,
  UserIcon,
  SparklesIcon,
} from '@vtx-ui/react/icons';

const enterpriseMegaMenu = [
  // Regular Column with Icons
  {
    title: 'Shop by Category',
    description: 'Browse our complete catalog',
    items: [
      {
        label: 'Fresh Vegetables',
        href: '/vegetables',
        icon: <SparklesIcon size={20} />,
        description: 'Farm-fresh organic produce',
        tagVariant: 'new',
      },
      {
        label: 'Exotic Fruits',
        href: '/fruits',
        icon: <ShoppingBagIcon size={20} />,
        description: 'Premium quality fruits',
        badge: '50+',
      },
    ],
  },
  
  // Featured Column with Image
  {
    title: 'Featured Collection',
    description: 'Handpicked seasonal favorites',
    featured: true,
    span: 2,
    image: 'https://images.unsplash.com/photo-example',
    items: [
      {
        label: 'Summer Harvest Box',
        href: '/summer-box',
        featured: true,
        description: 'Curated summer selection',
      },
    ],
    cta: {
      label: 'View All Collections',
      href: '/collections',
    },
  },
  
  // Service Links
  {
    title: 'Customer Service',
    items: [
      {
        label: 'Track Order',
        href: '/track',
        icon: <TruckIcon size={20} />,
        description: 'Real-time tracking',
      },
      {
        label: 'My Account',
        href: '/account',
        icon: <UserIcon size={20} />,
        description: 'Manage profile',
      },
    ],
    cta: {
      label: 'Contact Support',
      href: '/support',
    },
  },
];

<Navbar
  variant="two-row"
  sticky
  logo="https://example.com/logo.png"
  navigationItems={[
    { label: 'Home', href: '/' },
    { 
      label: 'Shop', 
      href: '/shop',
      megaMenu: enterpriseMegaMenu,
      active: true,
    },
    { label: 'About', href: '/about' },
  ]}
/>
```

## 🎯 TypeScript Types

### NavigationItem (Enhanced)

```typescript
interface NavigationItem {
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
  
  // Enhanced properties
  description?: string;          // Item description
  image?: string;                // Item thumbnail
  featured?: boolean;            // Highlight item
  tag?: string;                  // Custom tag text
  tagVariant?: 'new' | 'hot' | 'sale' | 'beta';  // Predefined tag styles
}
```

### MegaMenuColumn (Enhanced)

```typescript
interface MegaMenuColumn {
  title?: string;                // Column header
  description?: string;          // Column description
  items: NavigationItem[];       // Menu items
  featured?: boolean;            // Featured column styling
  span?: number;                 // Grid column span (1-4)
  image?: string;                // Column header image
  cta?: {                        // Call-to-action link
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
}
```

## 🎨 Styling & Customization

### CSS Variables

The mega menu uses these CSS variables for theming:

```css
--nav-bg: Background color
--nav-border: Border color
--nav-text-main: Primary text color
--nav-text-muted: Secondary text color
--nav-primary: Accent/brand color
--nav-shadow-lg: Drop shadow
```

### Custom Styling

You can override styles using CSS:

```css
/* Custom mega menu background */
.vtx-navbar__megamenu {
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

/* Custom featured column */
.vtx-navbar__megamenu-column--featured {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}

/* Custom hover effects */
.vtx-navbar__megamenu-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## 📱 Responsive Behavior

The mega menu automatically adapts to different screen sizes:

- **Desktop (>1024px)**: Full grid layout with custom spans
- **Tablet (768-1024px)**: Reduced to 2-3 columns, spans ignored
- **Mobile (<768px)**: Single column, collapsible accordion

## ✨ Best Practices

### 1. **Keep It Organized**
- Group related items together
- Use clear, descriptive titles
- Limit to 4-6 columns maximum

### 2. **Use Icons Wisely**
- Icons should be meaningful and recognizable
- Keep icon sizes consistent (16-20px recommended)
- Not every item needs an icon

### 3. **Write Clear Descriptions**
- Keep descriptions concise (5-10 words)
- Provide context, not redundancy
- Make them scannable

### 4. **Highlight Strategically**
- Use featured items sparingly (1-2 per column)
- Featured columns should stand out (use images/CTAs)
- Don't overuse tags

### 5. **Performance**
- Lazy load images when possible
- Keep mega menu data size reasonable
- Use appropriate image sizes

## 🚀 Advanced Features

### Dynamic Content

```tsx
const [megaMenuData, setMegaMenuData] = useState([]);

useEffect(() => {
  // Fetch from API
  fetch('/api/menu')
    .then(res => res.json())
    .then(setMegaMenuData);
}, []);

<Navbar
  navigationItems={[
    { label: 'Shop', megaMenu: megaMenuData },
  ]}
/>
```

### Analytics Integration

```tsx
const handleItemClick = (itemLabel: string) => {
  analytics.track('Mega Menu Click', {
    item: itemLabel,
    timestamp: new Date(),
  });
};

const megaMenu = [{
  items: [
    {
      label: 'Products',
      href: '/products',
      onClick: () => handleItemClick('Products'),
    },
  ],
}];
```

## 🎉 Migration from Old Mega Menu

If you're upgrading from the previous mega menu:

**Old format:**
```tsx
megaMenu: [
  {
    title: 'Products',
    items: [
      { label: 'Item 1', href: '/1' },
    ],
  },
]
```

**New format (backward compatible):**
```tsx
megaMenu: [
  {
    title: 'Products',
    // Add new features gradually
    description: 'Browse our products',
    featured: true,
    items: [
      { 
        label: 'Item 1', 
        href: '/1',
        // Add enhancements
        icon: <Icon />,
        description: 'Description here',
      },
    ],
    // Add CTA
    cta: {
      label: 'View All',
      href: '/all',
    },
  },
]
```

All old configurations remain fully compatible!

## 📚 See Also

- [Navbar Component Documentation](./README.md)
- [Navbar Stories](../../stories/components/NavbarEnterprise.stories.tsx)
- [Live Examples in Storybook](http://localhost:6006/?path=/story/components-navbar-enterprise)
