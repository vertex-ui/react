# Breadcrumb Component

A flexible navigation breadcrumb component that works with native anchors, React Router, Next.js, or any custom routing library.

## Features

- ✅ Native HTML anchor support
- ✅ React Router DOM compatibility
- ✅ Next.js Link compatibility
- ✅ Custom separators
- ✅ Icon support for items
- ✅ Auto-collapse with maxItems
- ✅ Active/current item styling
- ✅ Size variants (sm, md, lg)
- ✅ Theme-aware colors
- ✅ Accessible (ARIA labels)

## Usage

### Basic Usage
```tsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops', active: true }
  ]}
/>
```

### With React Router
```tsx
import { Link as RouterLink } from 'react-router-dom';

<Breadcrumb
  linkComponent={RouterLink}
  items={[
    { label: 'Home', linkProps: { to: '/' } },
    { label: 'Dashboard', linkProps: { to: '/dashboard' } },
    { label: 'Settings', active: true }
  ]}
/>
```

### With Next.js
```tsx
import NextLink from 'next/link';

<Breadcrumb
  linkComponent={NextLink}
  items={[
    { label: 'Home', linkProps: { href: '/' } },
    { label: 'About', linkProps: { href: '/about' } },
    { label: 'Team', active: true }
  ]}
/>
```

### With Icons
```tsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/', icon: <HomeIcon /> },
    { label: 'Products', href: '/products', icon: <PackageIcon /> },
    { label: 'Details', active: true }
  ]}
/>
```

### Custom Separator
```tsx
<Breadcrumb
  separator="/"
  items={breadcrumbItems}
/>

// Or with icon
<Breadcrumb
  separator={<ArrowRightIcon size={14} />}
  items={breadcrumbItems}
/>
```

### With Collapse (maxItems)
```tsx
<Breadcrumb
  maxItems={4}
  items={[
    { label: 'Level 1', href: '/1' },
    { label: 'Level 2', href: '/2' },
    { label: 'Level 3', href: '/3' },
    { label: 'Level 4', href: '/4' },
    { label: 'Level 5', href: '/5' },
    { label: 'Current', active: true }
  ]}
/>
// Renders: Level 1 > ... > Level 4 > Level 5 > Current
```

### Size Variants
```tsx
<Breadcrumb size="sm" items={items} />
<Breadcrumb size="md" items={items} />
<Breadcrumb size="lg" items={items} />
```

## Props

### Breadcrumb Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | - | Array of breadcrumb items |
| `separator` | `ReactNode` | `<ChevronRightIcon />` | Custom separator between items |
| `linkComponent` | `ElementType` | - | Custom Link component (React Router, Next.js, etc.) |
| `maxItems` | `number` | - | Max items before collapsing |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `className` | `string` | - | Custom class name |
| `separatorClassName` | `string` | - | Custom separator class name |

### BreadcrumbItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `href` | `string` | - | URL (for native links) |
| `icon` | `ReactNode` | - | Icon before label |
| `active` | `boolean` | `false` | Current/active item |
| `linkProps` | `object` | - | Props for custom link component |

## Accessibility

- Uses semantic `<nav>` and `<ol>` elements
- Includes `aria-label="Breadcrumb"` on nav
- Active item has `aria-current="page"`
- Separators are `aria-hidden="true"`
