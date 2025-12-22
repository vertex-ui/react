# SideMenu Component

Professional, fully responsive sidebar navigation component for React applications. Automatically adapts between desktop push mode and mobile overlay mode.

## Features

### 🎨 Design System Integration
- **Theme-aware**: Uses design tokens from your theme system
- **Multiple variants**: Default, Compact, Modern, Enterprise, Minimal
- **Color themes**: Light, Dark, Primary, Gradient
- **Customizable**: Override any token or style

### 📱 Responsive Behavior
- **Desktop (≥768px)**: Push mode - sidebar pushes content
- **Mobile (<768px)**: Overlay mode - sidebar overlays content with backdrop
- **Customizable breakpoint**: Set your own mobile threshold
- **Touch gestures**: Swipe to close on mobile
- **Keyboard support**: ESC key closes mobile menu

### ♿ Accessibility
- Proper ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader friendly
- High contrast mode support

### 💡 Advanced Features
- Collapsible sidebar (desktop)
- Nested menu items (multi-level)
- Badges and notifications
- Item icons and descriptions
- Body scroll lock (mobile)
- Auto-close on item click (mobile)
- Touch-friendly targets (mobile)

## Installation

```bash
npm install @vtx-ui/react
```

## Basic Usage

### Simple Sidebar

```tsx
import { SideMenu } from '@vtx-ui/react';

function App() {
  const menuItems = [
    { id: '1', label: 'Dashboard', icon: <DashboardIcon />, active: true },
    { id: '2', label: 'Products', icon: <ProductIcon /> },
    { id: '3', label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <SideMenu.Default items={menuItems} />
      <main>Your content here</main>
    </div>
  );
}
```

### Responsive Layout (Recommended)

```tsx
import { useState } from 'react';
import { SideMenu, MobileMenuButton } from '@vtx-ui/react';

function ResponsiveApp() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardIcon />,
      active: true,
      onClick: () => console.log('Dashboard'),
    },
    {
      id: 'products',
      label: 'Products',
      icon: <ProductIcon />,
      badge: '12',
      items: [
        { id: 'all', label: 'All Products' },
        { id: 'categories', label: 'Categories' },
      ],
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar - Desktop: push, Mobile: overlay */}
      <SideMenu.Default
        items={menuItems}
        collapsed={collapsed}
        onCollapseToggle={setCollapsed}
        mobileOpen={mobileOpen}
        onMobileToggle={setMobileOpen}
        header={<Logo />}
        footer={<UserProfile />}
        variant="modern"
        theme="light"
        collapsible
      />

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        {/* Mobile Menu Button - Hidden on desktop */}
        <MobileMenuButton 
          onClick={() => setMobileOpen(true)}
          label="Open menu"
        />
        
        <h1>Dashboard</h1>
        <p>Your content here...</p>
      </main>
    </div>
  );
}
```

## API Reference

### SideMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SideMenuItemProps[]` | **Required** | Menu items configuration |
| `collapsed` | `boolean` | `false` | Desktop: collapse sidebar |
| `onCollapseToggle` | `(collapsed: boolean) => void` | - | Desktop: collapse handler |
| `mobileOpen` | `boolean` | `false` | Mobile: overlay open state |
| `onMobileToggle` | `(open: boolean) => void` | - | Mobile: overlay handler |
| `mobileBreakpoint` | `number` | `768` | Breakpoint for mobile mode (px) |
| `showBackdrop` | `boolean` | `true` | Show backdrop on mobile |
| `closeOnItemClick` | `boolean` | `true` | Auto-close mobile menu on click |
| `width` | `string \| number` | `'280px'` | Sidebar width when expanded |
| `collapsedWidth` | `string \| number` | `'72px'` | Sidebar width when collapsed |
| `header` | `ReactNode` | - | Header content (logo, title) |
| `footer` | `ReactNode` | - | Footer content (user profile) |
| `variant` | `'default' \| 'compact' \| 'modern' \| 'enterprise' \| 'minimal'` | `'default'` | Visual style variant |
| `theme` | `'light' \| 'dark' \| 'primary' \| 'gradient'` | `'light'` | Color theme |
| `position` | `'left' \| 'right'` | `'left'` | Sidebar position |
| `elevated` | `boolean` | `true` | Show shadow elevation |
| `bordered` | `boolean` | `false` | Show border |
| `collapsible` | `boolean` | `true` | Show collapse toggle button |
| `collapseButtonPosition` | `'top' \| 'bottom' \| 'header'` | `'bottom'` | Collapse button placement |
| `showTooltipsWhenCollapsed` | `boolean` | `true` | Show tooltips on collapsed items |
| `onItemClick` | `(item: SideMenuItemProps) => void` | - | Item click handler |

### SideMenuItemProps

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | **Required** - Unique identifier |
| `label` | `string` | **Required** - Item label text |
| `icon` | `ReactNode` | Icon element |
| `onClick` | `() => void` | Click handler |
| `href` | `string` | Link URL |
| `active` | `boolean` | Active/selected state |
| `disabled` | `boolean` | Disabled state |
| `badge` | `ReactNode` | Badge content (number/text) |
| `description` | `string` | Subtitle/description |
| `items` | `SideMenuItemProps[]` | Nested submenu items |
| `dataAttributes` | `Record<string, string>` | Custom data attributes |

### MobileMenuButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `() => void` | - | Click handler |
| `label` | `string` | `'Open menu'` | Accessibility label |
| `variant` | `'default' \| 'ghost' \| 'minimal'` | `'default'` | Button style |
| `className` | `string` | - | Custom class |
| `style` | `CSSProperties` | - | Custom styles |

## Variants

### Default
Standard professional sidebar

```tsx
<SideMenu.Default items={items} />
```

### Compact
Space-efficient with reduced padding

```tsx
<SideMenu.Compact items={items} />
```

### Modern
Contemporary design with gradients and smooth animations

```tsx
<SideMenu.Modern items={items} theme="gradient" />
```

### Enterprise
Professional enterprise-grade styling

```tsx
<SideMenu.Enterprise items={items} bordered />
```

### Minimal
Clean, minimalist design

```tsx
<SideMenu.Minimal items={items} />
```

## Themes

- **Light**: Default light theme
- **Dark**: Dark theme for dark mode apps
- **Primary**: Uses primary brand colors
- **Gradient**: Beautiful gradient background

```tsx
<SideMenu.Default items={items} theme="dark" />
```

## Advanced Examples

### Multi-level Navigation

```tsx
const menuItems = [
  {
    id: 'products',
    label: 'Products',
    icon: <BoxIcon />,
    items: [
      {
        id: 'electronics',
        label: 'Electronics',
        items: [
          { id: 'phones', label: 'Phones' },
          { id: 'laptops', label: 'Laptops' },
        ],
      },
      { id: 'clothing', label: 'Clothing' },
    ],
  },
];
```

### With Badges and Descriptions

```tsx
const menuItems = [
  {
    id: 'orders',
    label: 'Orders',
    description: 'Manage orders',
    icon: <OrderIcon />,
    badge: '3 new',
  },
];
```

### Custom Header and Footer

```tsx
<SideMenu.Default
  items={items}
  header={
    <div>
      <img src="/logo.png" alt="Logo" />
      <h3>MyApp</h3>
    </div>
  }
  footer={
    <div>
      <Avatar src="/user.jpg" />
      <span>John Doe</span>
      <button>Logout</button>
    </div>
  }
/>
```

## Responsive Behavior Details

### Desktop Mode (≥768px)
- **Type**: Push mode
- **Behavior**: Sidebar pushes main content
- **Collapsible**: Yes, toggle button shown
- **Transitions**: Smooth width animation
- **Tooltips**: Shown when collapsed

### Mobile Mode (<768px)
- **Type**: Overlay mode
- **Behavior**: Sidebar overlays content
- **Backdrop**: Semi-transparent with blur
- **Position**: Fixed, slides in from side
- **Touch Gestures**: Swipe to close
- **Keyboard**: ESC to close
- **Body Scroll**: Locked when open
- **Auto-close**: On item click (configurable)
- **Touch Targets**: Larger (48px minimum)

## Accessibility

- ✅ Semantic HTML (`<aside>`, `<nav>`)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Space, ESC)
- ✅ Focus management
- ✅ Screen reader announcements
- ✅ High contrast mode support
- ✅ Reduced motion support

## Customization

### Override Theme Tokens

```tsx
import { ThemeProvider } from '@vtx-ui/react';

<ThemeProvider
  customTokens={{
    colors: {
      primary: { 500: '#your-color' },
    },
  }}
>
  <SideMenu.Default items={items} />
</ThemeProvider>
```

### Custom Styles

```tsx
<SideMenu.Default
  items={items}
  style={{ 
    borderRadius: '12px',
    margin: '10px',
  }}
  className="my-custom-sidebar"
/>
```

## Best Practices

1. **Always provide `mobileOpen` and `onMobileToggle`** for responsive behavior
2. **Use `MobileMenuButton`** in your header/navbar for mobile access
3. **Keep menu items focused** - avoid too many top-level items
4. **Use icons consistently** - all items should have icons or none
5. **Provide meaningful labels** for accessibility
6. **Test on actual devices** - not just browser resize
7. **Consider touch targets** - items are automatically larger on mobile
8. **Handle navigation properly** - close mobile menu after navigation

## Troubleshooting

### Mobile menu not showing
- Ensure `mobileOpen` prop is set to `true`
- Check `onMobileToggle` is provided
- Verify z-index isn't being overridden

### Sidebar not collapsing on desktop
- Provide both `collapsed` and `onCollapseToggle` props
- Ensure `collapsible={true}` is set

### Layout issues
- Wrap sidebar and content in flex container
- Set main content to `flex: 1`
- Check for conflicting CSS

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT
