# Header Two-Row Professional Layout Guide

## Overview

The Header component now features enhanced professional two-row layout with multiple styling variants, full-width menu distribution, and modern visual design improvements.

## Key Features

### 1. Full-Width Menu Distribution
- Navigation items spread evenly across the available width
- Professional spacing using `justify-content: space-evenly`
- Maximum width constraint of 1400px for optimal readability

### 2. Pipe Separators
- Visual separators (|) between navigation items
- Subtle color: `rgba(0, 0, 0, 0.15)`
- Automatically added via CSS `::after` pseudo-elements
- Consistent spacing with `margin: 0 16px`

### 3. Active State Indicator
- Bottom border indicator for active navigation items
- 3px colored bar at the bottom of active links
- Smooth animations with cubic-bezier easing
- Hover state with subtle lift effect (`translateY(-1px)`)

## Two-Row Bottom Style Variants

### Default Style
```tsx
<Header.Desktop
  layout="two-row"
  twoRowBottomStyle="default"
  // ... other props
/>
```

**Features:**
- Light background: `rgba(0, 0, 0, 0.03)`
- Inset highlight: `inset 0 1px 0 rgba(255, 255, 255, 0.5)`
- Subtle border on top row: `1px solid rgba(0, 0, 0, 0.08)`

### Divider Style
```tsx
<Header.Desktop
  layout="two-row"
  twoRowBottomStyle="divider"
  // ... other props
/>
```

**Features:**
- Transparent bottom row background
- Stronger top border: `2px solid rgba(0, 0, 0, 0.12)`
- Bottom border for visual separation: `1px solid rgba(0, 0, 0, 0.06)`
- Clean, minimal aesthetic

### Dark Bottom Style
```tsx
<Header.Desktop
  layout="two-row"
  twoRowBottomStyle="dark-bottom"
  // ... other props
/>
```

**Features:**
- Darker background: `rgba(0, 0, 0, 0.08)`
- Inset shadow for depth: `inset 0 1px 2px rgba(0, 0, 0, 0.05)`
- Enhanced text color: `rgba(0, 0, 0, 0.85)`
- Professional, bold appearance

### Gradient Bottom Style
```tsx
<Header.Desktop
  layout="two-row"
  twoRowBottomStyle="gradient-bottom"
  // ... other props
/>
```

**Features:**
- Gradient background: `linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)`
- Subtle inset highlight: `inset 0 1px 0 rgba(255, 255, 255, 0.6)`
- Smooth color transition
- Modern, polished look

### Elevated Bottom Style
```tsx
<Header.Desktop
  layout="two-row"
  twoRowBottomStyle="elevated-bottom"
  // ... other props
/>
```

**Features:**
- White background: `#ffffff`
- Drop shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`
- No top border
- Floating appearance

## Typography & Spacing Enhancements

### Navigation Links
- **Font size:** 0.875rem (14px)
- **Font weight:** 500 (medium), 600 (semibold for active)
- **Letter spacing:** 0.01em for improved readability
- **Padding:** 8px vertical, 24px horizontal
- **Transition:** cubic-bezier(0.4, 0, 0.2, 1) for smooth animations

### Hover Effects
- Background color: `rgba(0, 0, 0, 0.04)`
- Transform: `translateY(-1px)` for subtle lift
- Smooth transition: 0.2s

### Active State
- Background color: `rgba(0, 0, 0, 0.06)`
- Font weight: 600 (semibold)
- Bottom border indicator (3px height, 60% width)

## Layout Specifications

### Top Row
- **Height:** 64px (default header height)
- **Contains:** Logo, Search Bar, Action Buttons
- **Border:** 1px solid rgba(0, 0, 0, 0.08)
- **Padding:** 0 32px

### Bottom Row
- **Height:** 56px
- **Contains:** Navigation Menu
- **Padding:** 0 32px
- **Alignment:** Centered with space-evenly distribution

### Search Bar
- **Max width:** 600px
- **Flex:** 1 (expands to fill available space)
- **Margins:** 0 32px

## Complete Example

```tsx
import { Header } from '@vtx-ui/react';
import { Button } from '@vtx-ui/react';
import { BellIcon, UserIcon, SettingsIcon } from '@vtx-ui/react/icons';

const navItems = [
  { id: '1', label: 'Dashboard', href: '/', active: true },
  { id: '2', label: 'Analytics', href: '/analytics' },
  { id: '3', label: 'Reports', href: '/reports' },
  { id: '4', label: 'Team', href: '/team' },
  { id: '5', label: 'Settings', href: '/settings' },
  { id: '6', label: 'Support', href: '/support' },
];

function App() {
  return (
    <Header.Desktop
      logo={<h1>Enterprise</h1>}
      layout="two-row"
      twoRowBottomStyle="dark-bottom"
      variant="primary"
      elevated={true}
      navItems={navItems}
      searchEnabled={true}
      searchPlaceholder="Search..."
      actions={
        <>
          <Button variant="ghost" iconOnly><BellIcon /></Button>
          <Button variant="ghost" iconOnly><SettingsIcon /></Button>
          <Button variant="ghost" iconOnly><UserIcon /></Button>
          <Button variant="primary" size="sm">Console</Button>
        </>
      }
    />
  );
}
```

## Mega Menu Support

Two-row layout fully supports mega menus with all styling variants:

```tsx
const navItems = [
  { id: '1', label: 'Home', href: '/', active: true },
  {
    id: '2',
    label: 'Products',
    megaMenu: true,
    megaMenuColumns: [
      {
        title: 'Cloud Services',
        items: [
          { 
            id: '2-1', 
            label: 'Compute', 
            href: '/products/compute',
            description: 'Scalable compute power',
            icon: <ServerIcon size={16} />
          },
          // ... more items
        ]
      },
      // ... more columns
    ]
  },
  // ... more items
];
```

## Responsive Behavior

The two-row layout automatically adapts to the mobile menu when used with `Header.Responsive`:

```tsx
<Header.Responsive
  desktopProps={{
    layout: 'two-row',
    twoRowBottomStyle: 'dark-bottom',
    // ... desktop props
  }}
  mobileProps={{
    // ... mobile props
  }}
  breakpoint={768}
/>
```

## Best Practices

1. **Use divider style** for clean, minimal interfaces
2. **Use dark-bottom style** for bold, professional applications
3. **Use gradient-bottom style** for modern, polished designs
4. **Use elevated-bottom style** for floating, card-like headers
5. **Keep navigation items between 4-8** for optimal full-width distribution
6. **Enable search** for better UX in enterprise applications
7. **Use mega menus** for complex navigation hierarchies

## Browser Compatibility

All features work in:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Accessibility

- All navigation items are keyboard accessible
- ARIA labels for icon-only buttons
- Focus visible styles included
- Screen reader friendly markup

## Performance

- CSS-only animations (no JavaScript)
- Optimized pseudo-elements
- Minimal repaints and reflows
- Hardware-accelerated transforms
