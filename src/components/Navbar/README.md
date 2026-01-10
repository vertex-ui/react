# Navbar Component

A comprehensive responsive navigation bar that handles branding, navigation links, search, user profiles, and mobile behavior.

## Features

- **Responsive**: Automatically switches between Desktop and Mobile layouts based on breakpoint.
- **Desktop Layouts**: Single row, Two row, or Centered layouts.
- **Mobile Drawer**: Slide-out menu for mobile devices.
- **Mega Menus**: Support for large dropdowns with columns.
- **Search**: Integrated `Autocomplete` search field.
- **Top Bar**: Optional secondary bar for announcements or utility links.
- **User Profile**: User avatar and dropdown menu.
- **Cart & Notifications**: Built-in support for ecommerce and notification indicators.

## Installation

```tsx
import { Navbar } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Navbar
  brandText="My App"
  navigationItems={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' }
  ]}
/>
```

## Layouts (Desktop)

Choose from different structural layouts.

```tsx
<Navbar.Desktop layout="single-row" {...props} />
<Navbar.Desktop layout="two-row" {...props} />
<Navbar.Desktop layout="centered" {...props} />
```

## Navigation Structure

Define navigation with nested children for dropdowns or mega menus.

```tsx
const navItems = [
  {
    label: 'Products',
    children: [
      { label: 'Electronics', href: '/electronics' },
      { label: 'Clothing', href: '/clothing' }
    ]
  },
  {
    label: 'Services',
    megaMenu: [
      { title: 'Consulting', items: [{ label: 'Strategy', href: '/strategy' }] },
      { title: 'Development', items: [{ label: 'Web', href: '/web' }] }
    ]
  }
];

<Navbar navigationItems={navItems} />
```

## Search

Integrate search functionality.

```tsx
<Navbar
  search={{
    placeholder: 'Search products...',
    onSearch: (query) => fetchResults(query)
  }}
  searchOptions={searchResults}
  onSearchSelect={(val) => navigateTo(val)}
/>
```

## User & Actions

Add user profile and custom action buttons.

```tsx
<Navbar
  user={{
    name: 'Jane Doe',
    avatar: 'https://example.com/jane.jpg',
    menuItems: [{ label: 'Profile', onClick: goToProfile }]
  }}
  actions={<Button>Sign Out</Button>}
  notificationCount={3}
  cartCount={2}
/>
```

## Top Bar

Add a top bar for supplementary info.

```tsx
<Navbar
  topBar={{
    left: 'Free Shipping on orders over $50',
    right: [{ label: 'Support', href: '/support' }],
    backgroundColor: '#333',
    textColor: '#fff'
  }}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `string` | - | Logo URL |
| `brandText` | `string` | - | Text branding |
| `navigationItems` | `NavigationItem[]` | `[]` | Links structure |
| `sticky` | `boolean` | `false` | Sticky positioning |
| `layout` | `'single-row' \| ...` | `'single-row'` | Desktop layout |
| `mobileBreakpoint` | `number` | `768` | Mobile switch width |
| `search` | `Object` | - | Search config |
| `user` | `Object` | - | User profile config |
| `notificationCount` | `number` | - | Badge count |
| `cartCount` | `number` | - | Badge count |
| `topBar` | `TopBarConfig` | - | Top bar content |

## Accessibility

- Navigation uses semantic `<nav>` elements.
- Dropdowns and drawers handle focus management and keyboard interaction (Enter/Space/Escape).
- Mobile menu button has `aria-label` and toggles state correctly.
