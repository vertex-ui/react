# Menu Component

A responsive menu component with support for both vertical and horizontal orientations, mobile hamburger menu, and extensive customization options.

## Features

- **Multi-Level Menus**: Nested submenus with unlimited depth support
- **Responsive Design**: Automatically converts to hamburger menu on mobile devices
- **Two Orientations**: Vertical (default) and horizontal layouts
- **Keyboard Navigation**: Full keyboard support with Enter/Space/Arrow keys
- **Accessibility**: ARIA labels, focus management, and semantic HTML
- **Flexible API**: Use items array or custom MenuItem children
- **Rich Features**: Icons, shortcuts, dividers, disabled states, danger variants
- **Smart Positioning**: Automatic submenu positioning with smooth animations
- **Dark Mode Support**: Seamless theme integration
- **Mobile-Friendly**: Touch-optimized with outside click and escape key handling

## Installation

```tsx
import { Menu, MenuItem } from '@vtx-ui/react';
```

## Basic Usage

### Using Items Array

```tsx
<Menu
  items={[
    {
      label: 'Profile',
      icon: <UserIcon />,
      onClick: () => console.log('Profile'),
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => console.log('Settings'),
    },
    {
      label: 'Logout',
      icon: <LogoutIcon />,
      variant: 'danger',
      onClick: () => console.log('Logout'),
    },
  ]}
/>
```

### Using Custom Children

```tsx
<Menu>
  <MenuItem label="Dashboard" icon={<HomeIcon />} active />
  <MenuItem label="Profile" icon={<UserIcon />} />
  <MenuItem label="Settings" icon={<SettingsIcon />} />
  <MenuItem label="Logout" icon={<LogoutIcon />} variant="danger" />
</Menu>
```

## Orientations

### Vertical Menu (Default)

```tsx
<Menu orientation="vertical" items={menuItems} />
```

### Horizontal Menu

```tsx
<Menu orientation="horizontal" items={menuItems} />
```

## Responsive Behavior

By default, menus are responsive and convert to a hamburger menu on mobile:

```tsx
// Responsive (default)
<Menu responsive items={menuItems} />

// Disable responsive behavior
<Menu responsive={false} items={menuItems} />
```

On screens smaller than 768px, the menu:

- Shows a hamburger toggle button
- Hides menu items behind a collapsible panel
- Converts horizontal menus to vertical layout
- Closes on outside click or Escape key

## Menu Item Features

### With Icons

```tsx
<MenuItem label="Profile" icon={<UserIcon />} rightIcon={<ChevronRightIcon />} />
```

### With Keyboard Shortcuts

```tsx
<MenuItem label="Save" shortcut="Ctrl+S" onClick={handleSave} />
```

### Active State

```tsx
const [active, setActive] = useState('home');

<Menu>
  <MenuItem label="Home" active={active === 'home'} onClick={() => setActive('home')} />
  <MenuItem label="About" active={active === 'about'} onClick={() => setActive('about')} />
</Menu>;
```

### Disabled Items

```tsx
<MenuItem label="Disabled Action" disabled onClick={handleClick} />
```

### Danger Variant

```tsx
<MenuItem label="Delete" variant="danger" onClick={handleDelete} />
```

### With Dividers

```tsx
<Menu
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Duplicate', onClick: handleDuplicate, divider: true },
    { label: 'Delete', onClick: handleDelete, variant: 'danger' },
  ]}
/>
```

## Advanced Examples

### Multi-Level Menu

Nested submenus are created by adding an `items` array to any menu item:

```tsx
<Menu
  width={250}
  responsive={false}
  items={[
    { label: 'Dashboard', icon: <HomeIcon />, onClick: handleDashboard },
    {
      label: 'Account',
      icon: <UserIcon />,
      items: [
        { label: 'Profile', onClick: handleProfile },
        { label: 'Billing', onClick: handleBilling },
        {
          label: 'Security',
          items: [
            { label: 'Password', onClick: handlePassword },
            { label: '2FA', onClick: handle2FA },
            { label: 'Sessions', onClick: handleSessions },
          ],
        },
        { label: 'Notifications', onClick: handleNotifications },
      ],
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      items: [
        { label: 'General', onClick: handleGeneral },
        {
          label: 'Appearance',
          items: [
            { label: 'Theme', onClick: handleTheme },
            { label: 'Font Size', onClick: handleFontSize },
          ],
        },
      ],
    },
  ]}
/>
```

**Features:**

- Hover to reveal submenus (150ms delay)
- Click to toggle submenus on mobile
- Arrow keys (→/←) to open/close submenus
- Automatic chevron icon for items with submenus
- Smooth slide-in animations
- Unlimited nesting depth

### Sidebar Navigation

```tsx
const [activePage, setActivePage] = useState('dashboard');

<Menu
  width={250}
  responsive={false}
  items={[
    {
      label: 'Dashboard',
      icon: <HomeIcon />,
      active: activePage === 'dashboard',
      onClick: () => setActivePage('dashboard'),
    },
    {
      label: 'Users',
      icon: <UserIcon />,
      active: activePage === 'users',
      onClick: () => setActivePage('users'),
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      active: activePage === 'settings',
      onClick: () => setActivePage('settings'),
    },
  ]}
/>;
```

### Context Menu

```tsx
<Menu
  width={220}
  responsive={false}
  items={[
    { label: 'Open', shortcut: 'Enter', onClick: handleOpen },
    { label: 'Copy', shortcut: 'Ctrl+C', onClick: handleCopy, divider: true },
    { label: 'Delete', shortcut: 'Del', onClick: handleDelete, variant: 'danger' },
  ]}
/>
```

### Submenu Indicators

```tsx
<Menu
  items={[
    {
      label: 'Account',
      icon: <UserIcon />,
      rightIcon: <ChevronRightIcon />,
      onClick: () => openSubmenu('account'),
    },
    {
      label: 'Preferences',
      icon: <SettingsIcon />,
      rightIcon: <ChevronRightIcon />,
      onClick: () => openSubmenu('preferences'),
    },
  ]}
/>
```

## API Reference

### Menu Props

| Prop          | Type                         | Default      | Description                                |
| ------------- | ---------------------------- | ------------ | ------------------------------------------ |
| `items`       | `MenuItemProps[]`            | -            | Menu items configuration array             |
| `children`    | `React.ReactNode`            | -            | Custom MenuItem components                 |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Menu layout orientation                    |
| `responsive`  | `boolean`                    | `true`       | Enable responsive hamburger menu on mobile |
| `className`   | `string`                     | -            | Custom CSS class                           |
| `width`       | `string \| number`           | -            | Menu width (for vertical menus)            |

### MenuItem Props

| Prop        | Type                    | Default     | Description                                  |
| ----------- | ----------------------- | ----------- | -------------------------------------------- |
| `label`     | `string`                | -           | Menu item text (required)                    |
| `onClick`   | `() => void`            | -           | Click handler                                |
| `icon`      | `React.ReactNode`       | -           | Icon before label                            |
| `rightIcon` | `React.ReactNode`       | -           | Icon after label (auto chevron for submenus) |
| `disabled`  | `boolean`               | `false`     | Disable the item                             |
| `active`    | `boolean`               | `false`     | Active/selected state                        |
| `variant`   | `'default' \| 'danger'` | `'default'` | Visual variant                               |
| `shortcut`  | `string`                | -           | Keyboard shortcut to display                 |
| `divider`   | `boolean`               | `false`     | Show divider after item                      |
| `items`     | `MenuItemProps[]`       | -           | Submenu items for multi-level menus          |

## Styling & Theming

The Menu component uses CSS custom properties for theming:

```css
/* Spacing */
--vtx-spacing-1, --vtx-spacing-2, --vtx-spacing-3

/* Colors */
--vtx-text-primary
--vtx-background-primary
--vtx-background-hover
--vtx-background-active
--vtx-primary-50, --vtx-primary-100, --vtx-primary-600
--vtx-danger-50, --vtx-danger-100, --vtx-danger-400, --vtx-danger-600

/* Borders & Shadows */
--vtx-border-radius-md, --vtx-border-radius-lg
--vtx-border-color
--vtx-shadow-sm, --vtx-shadow-lg

/* Transitions */
--vtx-transition-normal
```

## Accessibility

- **Keyboard Navigation**:
  - Tab to focus items
  - Enter/Space to activate or toggle submenu
  - Arrow Right (→) to open submenu
  - Arrow Left (←) to close submenu
- **ARIA Labels**: Proper role="menu", role="menuitem", aria-haspopup, and aria-expanded attributes
- **Focus Management**: Visible focus indicators with outline
- **Screen Readers**: Descriptive labels and aria-disabled states
- **Reduced Motion**: Respects prefers-reduced-motion preference

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices

1. **Use icons consistently**: Add icons to all or none of the items
2. **Group related actions**: Use dividers to separate logical groups
3. **Limit menu size**: Keep vertical menus under 10 items when possible
4. **Logical nesting**: Keep submenu depth reasonable (2-3 levels max for usability)
5. **Clear labels**: Use descriptive labels that indicate submenu content
6. **Provide shortcuts**: Add keyboard shortcuts for frequently used actions
7. **Use danger variant**: Apply to destructive actions (delete, remove, etc.)
8. **Active state**: Highlight the current page/section in navigation menus
9. **Responsive consideration**: Test mobile hamburger menu behavior
10. **Custom width**: Set appropriate width for vertical menus based on content
11. **Submenu positioning**: Ensure submenus don't overflow screen edges

## Examples

See the [Storybook stories](../../stories/Menu.stories.tsx) for comprehensive examples including:

- Default vertical menu
- Multi-level nested menus (2-4 levels deep)
- Deep nested menu structures
- File explorer context menu
- Horizontal navigation
- Responsive behavior
- Keyboard shortcuts
- Disabled items
- Danger actions
- Sidebar navigation
- Context menus
- And more!
