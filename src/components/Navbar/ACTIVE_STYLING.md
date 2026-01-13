# Navbar Active State Styling

This document describes the new active state customization features for the Navbar component.

## Overview

The Navbar now supports **meaningful, user-controlled active state styling** with support for multiple color variants beyond just the primary color.

## New Props

### Navbar-Level Props

These props set defaults for all navigation items:

#### `activeColor`
- **Type**: `'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | string`
- **Default**: `'primary'`
- **Description**: Default active color for all navigation items. Individual items can override this with their own `activeColor` prop.

#### `activeIndicatorStyle`
- **Type**: `'underline' | 'background' | 'none'`
- **Default**: `'underline'`
- **Description**: Controls the visual style of active navigation items:
  - `'underline'`: Shows bottom border indicator (default)
  - `'background'`: Shows background highlight
  - `'none'`: No special styling (only color/weight change)

#### `activeIndicatorBehavior`
- **Type**: `'always' | 'hover' | 'never'`
- **Default**: `'always'`
- **Description**: Controls when the active indicator appears:
  - `'always'`: Shows for active items only
  - `'hover'`: Shows on hover and for active items
  - `'never'`: Never shows underline/background

### NavigationItem-Level Props

#### `activeColor`
- **Type**: `'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | string`
- **Description**: Color variant for active state styling. Individual items can override the navbar default.

## Usage Examples

### Basic Usage with Theme Colors

```tsx
import { Navbar, NavigationItem } from '@vertex-ui/react';

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    active: true,
    activeColor: 'primary' // Blue theme color
  },
  {
    label: 'Products',
    href: '/products',
    activeColor: 'secondary' // Purple theme color
  },
  {
    label: 'About',
    href: '/about',
    activeColor: 'success' // Green theme color
  }
];

<Navbar
  brandText="My App"
  navigationItems={navigationItems}
  activeColor="primary" // Default for items without specific activeColor
  activeIndicatorStyle="underline"
  activeIndicatorBehavior="always"
/>
```

### Background Style Active Indicators

```tsx
<Navbar
  brandText="My App"
  navigationItems={navigationItems}
  activeColor="secondary"
  activeIndicatorStyle="background" // Shows background instead of underline
  activeIndicatorBehavior="always"
/>
```

### Custom Colors

```tsx
const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    active: true,
    activeColor: '#e74c3c' // Custom red color
  },
  {
    label: 'Products',
    href: '/products',
    activeColor: '#3498db' // Custom blue color
  },
  {
    label: 'Services',
    href: '/services'
    // Will use navbar's activeColor default
  }
];

<Navbar
  brandText="My App"
  navigationItems={navigationItems}
  activeColor="#2ecc71" // Custom green default
  activeIndicatorStyle="underline"
/>
```

### Hover-Only Indicators

```tsx
<Navbar
  brandText="My App"
  navigationItems={navigationItems}
  activeColor="info"
  activeIndicatorStyle="underline"
  activeIndicatorBehavior="hover" // Only shows on hover
/>
```

### Clean Style (No Indicators)

```tsx
<Navbar
  brandText="My App"
  navigationItems={navigationItems}
  activeColor="neutral"
  activeIndicatorStyle="none" // No visual indicator
  activeIndicatorBehavior="never"
/>
```

## Theme Color Support

The following theme color variants are supported:

- `primary`: Blue (default)
- `secondary`: Purple
- `neutral`: Gray
- `success`: Green
- `warning`: Orange/Yellow
- `error`: Red
- `info`: Blue (lighter shade)

## CSS Classes

The following CSS classes are generated based on the configuration:

### Base Classes
- `.vtx-navbar__nav-item--active`: Base active styling
- `.vtx-navbar__nav-item--active-underline`: Underline indicator style
- `.vtx-navbar__nav-item--active-background`: Background indicator style

### Color Variant Classes
- `.vtx-navbar__nav-item--active-primary`
- `.vtx-navbar__nav-item--active-secondary`
- `.vtx-navbar__nav-item--active-neutral`
- `.vtx-navbar__nav-item--active-success`
- `.vtx-navbar__nav-item--active-warning`
- `.vtx-navbar__nav-item--active-error`
- `.vtx-navbar__nav-item--active-info`
- `.vtx-navbar__nav-item--active-custom`: For custom colors

### Behavior Classes
- `.vtx-navbar__nav-item--indicator-hover`: Shows indicator on hover
- `.vtx-navbar__nav-item--indicator-never`: Never shows indicator

## CSS Variables

New CSS variables for customization:

```css
:root {
  /* Active indicator colors - support for all theme variants */
  --nav-active-primary: var(--vtx-color-primary-600, #2563eb);
  --nav-active-secondary: var(--vtx-color-secondary-600, #7c3aed);
  --nav-active-neutral: var(--vtx-color-neutral-600, #525252);
  --nav-active-success: var(--vtx-color-success-600, #16a34a);
  --nav-active-warning: var(--vtx-color-warning-600, #d97706);
  --nav-active-error: var(--vtx-color-error-600, #dc2626);
  --nav-active-info: var(--vtx-color-info-600, #2563eb);
  --nav-active-current: var(--nav-active-primary); /* Changes based on activeColor */
}
```

## Migration from Previous Version

### Before (Old Way)
```css
/* Only supported primary color and always showed underline */
.vtx-navbar__nav-item--active::after {
  width: 100%;
  background: var(--nav-primary);
}
```

### After (New Way)
```tsx
// Now configurable with meaningful props
<Navbar 
  activeColor="secondary" 
  activeIndicatorStyle="background"
  activeIndicatorBehavior="hover"
/>
```

## Responsive Behavior

All active styling features work consistently across:
- Desktop navigation
- Mobile navigation drawer
- Submenu items
- Mega menu items

The styling adapts appropriately for mobile drawer navigation while maintaining the same visual language.