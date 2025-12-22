# AdminHeader Component

Professional, full-featured admin panel header component with search, notifications, user menu, and complete theme support.

## Features

### 🎨 Complete Design System
- **Theme Integration**: Uses design tokens from your theme system
- **Multiple Variants**: Default, Elevated, Bordered, Minimal, Transparent
- **Color Themes**: Light, Dark, Primary, Gradient
- **Fully Customizable**: Override any token or prop

### 📱 Fully Responsive
- **Mobile Optimized**: Toggle button for mobile menu
- **Adaptive Layout**: Components hide/show based on screen size
- **Touch-Friendly**: Larger touch targets on mobile devices
- **Fluid Design**: Works beautifully from 320px to 4K displays

### 🔍 Advanced Search
- **Live Search**: Real-time search with suggestions
- **Categorized Results**: Grouped suggestions by category
- **Keyboard Support**: Full keyboard navigation
- **Loading States**: Built-in loading spinner

### 🔔 Notification System
- **Badge Counts**: Unread notification badges
- **Rich Notifications**: Icons, avatars, descriptions, timestamps
- **Type Variants**: Info, Success, Warning, Error
- **Batch Actions**: Mark all read, clear all
- **Pagination**: View more functionality

### 👤 User Menu
- **Avatar Support**: Image or initials fallback
- **Rich Menu Items**: Icons, badges, shortcuts, dividers
- **Action Variants**: Default, Danger, Success
- **Dropdown**: Smooth dropdown with proper positioning

### ⚡ Quick Actions
- **Icon Buttons**: Quick access to common actions
- **Badge Support**: Show counts or indicators
- **Tooltips**: Helpful hover descriptions
- **Customizable**: Add any action you need

### ♿ Accessibility
- ARIA labels and roles
- Keyboard navigation (Tab, Enter, ESC)
- Focus management
- Screen reader friendly
- High contrast mode support

## Installation

```bash
npm install @vtx-ui/react
```

## Basic Usage

### Simple Header

```tsx
import { AdminHeader } from '@vtx-ui/react';

function App() {
  return (
    <AdminHeader
      logo={<Logo />}
      title="Admin Dashboard"
      onToggleSidebar={() => console.log('Toggle sidebar')}
      userName="John Doe"
      userRole="Administrator"
      userMenuItems={[
        { label: 'Profile', icon: <UserIcon />, onClick: () => {} },
        { label: 'Logout', icon: <LogoutIcon />, variant: 'danger', onClick: () => {} }
      ]}
    />
  );
}
```

### Complete Feature-Rich Header

```tsx
import { useState } from 'react';
import { AdminHeader } from '@vtx-ui/react';

function AdminApp() {
  const [searchValue, setSearchValue] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const notifications = [
    {
      id: '1',
      title: 'New order received',
      description: 'Order #12345 from John Doe',
      time: '2 minutes ago',
      read: false,
      type: 'success',
      icon: <OrderIcon />,
    },
    {
      id: '2',
      title: 'Server maintenance',
      description: 'Scheduled for tonight at 2 AM',
      time: '1 hour ago',
      read: false,
      type: 'warning',
    },
  ];

  const quickActions = [
    { id: '1', label: 'New Order', icon: <PlusIcon />, onClick: () => {} },
    { id: '2', label: 'Messages', icon: <InboxIcon />, badge: '5' },
  ];

  const userMenuItems = [
    { label: 'Profile', icon: <UserIcon />, onClick: () => {}, shortcut: '⌘P' },
    { label: 'Settings', icon: <SettingsIcon />, onClick: () => {} },
    { label: 'Billing', icon: <CardIcon />, badge: 'Pro' },
    { divider: true },
    { label: 'Logout', icon: <LogoutIcon />, variant: 'danger', onClick: () => {} },
  ];

  return (
    <div>
      <AdminHeader
        logo={<Logo />}
        title="Dashboard"
        subtitle="v2.0.0"
        onToggleSidebar={() => setMobileOpen(!mobileOpen)}
        showSearch
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        searchPlaceholder="Search anything..."
        notifications={notifications}
        onNotificationClick={(notif) => console.log(notif)}
        onMarkAllAsRead={() => console.log('Mark all read')}
        quickActions={quickActions}
        userName="John Doe"
        userRole="Administrator"
        userAvatar="/avatar.jpg"
        userMenuItems={userMenuItems}
        variant="elevated"
        sticky
      />
      
      <main>Your content here</main>
    </div>
  );
}
```

## API Reference

### AdminHeaderProps

#### Branding

| Prop | Type | Description |
|------|------|-------------|
| `logo` | `ReactNode` | Logo element (image, SVG, component) |
| `title` | `string` | Application/brand title |
| `subtitle` | `string` | Subtitle or tagline |
| `onLogoClick` | `() => void` | Logo click handler |

#### Mobile Menu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onToggleSidebar` | `() => void` | - | Opens mobile sidebar |
| `showToggleButton` | `boolean` | `true` | Show/hide toggle button |
| `toggleIcon` | `ReactNode` | - | Custom toggle icon |

#### Search

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showSearch` | `boolean` | `false` | Enable search |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder text |
| `searchValue` | `string` | - | Controlled search value |
| `onSearchChange` | `(value: string) => void` | - | Search change handler |
| `onSearchSubmit` | `(value: string) => void` | - | Search submit handler |
| `onSearchFocus` | `() => void` | - | Search focus handler |
| `searchSuggestions` | `SearchSuggestion[]` | - | Search suggestions/results |
| `searchLoading` | `boolean` | - | Show loading spinner |
| `searchIcon` | `ReactNode` | - | Custom search icon |

#### Notifications

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notifications` | `NotificationItem[]` | `[]` | Notifications array |
| `onNotificationClick` | `(notif: NotificationItem) => void` | - | Notification click handler |
| `onMarkAllAsRead` | `() => void` | - | Mark all as read handler |
| `onClearAllNotifications` | `() => void` | - | Clear all handler |
| `onViewAllNotifications` | `() => void` | - | View all handler |
| `showNotifications` | `boolean` | `true` | Show/hide notifications |
| `notificationIcon` | `ReactNode` | - | Custom notification icon |
| `maxNotifications` | `number` | `5` | Max displayed notifications |

#### Quick Actions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quickActions` | `QuickAction[]` | `[]` | Quick action buttons |

#### User Menu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `userName` | `string` | - | User's display name |
| `userRole` | `string` | - | User's role or email |
| `userAvatar` | `string` | - | Avatar image URL |
| `userAvatarFallback` | `string` | - | Fallback text (initials) |
| `userMenuItems` | `UserMenuItem[]` | `[]` | User menu items |
| `showUserMenu` | `boolean` | `true` | Show/hide user menu |
| `onUserAvatarClick` | `() => void` | - | Avatar click (no menu) |

#### Custom Content

| Prop | Type | Description |
|------|------|-------------|
| `actions` | `ReactNode` | Custom actions/content before user |
| `leftContent` | `ReactNode` | Custom content in left section |
| `centerContent` | `ReactNode` | Custom content in center |
| `rightContent` | `ReactNode` | Custom content in right section |

#### Styling

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'bordered' \| 'minimal' \| 'transparent'` | `'default'` | Visual variant |
| `theme` | `'light' \| 'dark' \| 'primary' \| 'gradient'` | `'light'` | Color theme |
| `sticky` | `boolean` | `true` | Sticky positioning |
| `height` | `string \| number` | `'64px'` | Header height |
| `blur` | `boolean` | `false` | Blur backdrop effect |
| `className` | `string` | - | Custom class |
| `style` | `CSSProperties` | - | Custom styles |

#### Behavior

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showBreadcrumbs` | `boolean` | `false` | Show breadcrumbs row |
| `breadcrumbs` | `Breadcrumb[]` | `[]` | Breadcrumb items |

### Type Definitions

#### NotificationItem

```typescript
interface NotificationItem {
  id: string;
  title: string;
  description?: string;
  time: string;
  read?: boolean;
  icon?: ReactNode;
  avatar?: string;
  onClick?: () => void;
  type?: 'info' | 'success' | 'warning' | 'error';
  href?: string;
}
```

#### UserMenuItem

```typescript
interface UserMenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'danger' | 'success';
  divider?: boolean;
  shortcut?: string;
  badge?: ReactNode;
  disabled?: boolean;
  href?: string;
}
```

#### QuickAction

```typescript
interface QuickAction {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  tooltip?: string;
  badge?: ReactNode;
  disabled?: boolean;
}
```

#### SearchSuggestion

```typescript
interface SearchSuggestion {
  id: string;
  label: string;
  icon?: ReactNode;
  category?: string;
  onClick?: () => void;
  href?: string;
}
```

## Examples

### Dark Theme

```tsx
<AdminHeader
  logo={<Logo />}
  title="Dashboard"
  userName="John Doe"
  userRole="Admin"
  userMenuItems={menuItems}
  theme="dark"
  variant="elevated"
/>
```

### With Breadcrumbs

```tsx
<AdminHeader
  title="My App"
  showBreadcrumbs
  breadcrumbs={[
    { label: 'Dashboard', onClick: () => {} },
    { label: 'Projects', onClick: () => {} },
    { label: 'Website Redesign' },
  ]}
  userName="User"
  userMenuItems={menuItems}
/>
```

### Gradient Theme

```tsx
<AdminHeader
  logo={<Logo />}
  title="Modern App"
  subtitle="Dashboard"
  userName="John"
  userMenuItems={menuItems}
  theme="gradient"
  blur
  sticky
/>
```

### Minimal Header

```tsx
<AdminHeader
  title="Simple App"
  userName="User"
  userMenuItems={menuItems}
  variant="minimal"
  sticky={false}
/>
```

## Responsive Behavior

### Desktop (≥768px)
- Full layout with all sections visible
- Search bar in center
- Quick actions visible
- User info with name and role
- Desktop-optimized spacing

### Tablet (≥640px < 768px)
- Toggle button visible
- Search hidden (use search icon in quick actions)
- Quick actions visible
- User info with name only
- Compact spacing

### Mobile (<640px)
- Toggle button prominent
- All custom content hidden
- Only essential buttons visible
- Avatar only (no text)
- Minimal spacing
- Full-width notifications/menus

## Best Practices

1. **Always provide `onToggleSidebar`** for mobile menu integration
2. **Keep notifications concise** - use clear, actionable titles
3. **Limit quick actions** - 3-5 actions maximum for clarity
4. **Use semantic icons** - choose recognizable, consistent icons
5. **Provide keyboard shortcuts** - add shortcuts to frequently used menu items
6. **Handle loading states** - show search loading when fetching results
7. **Test responsiveness** - verify on actual mobile devices
8. **Consider theme** - ensure logo/icons work with all themes

## Integration with SideMenu

Perfect companion to the SideMenu component:

```tsx
function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <AdminHeader
        logo={<Logo />}
        title="Admin Panel"
        onToggleSidebar={() => setMobileOpen(true)}
        showSearch
        notifications={notifications}
        userName="John Doe"
        userMenuItems={userMenu}
      />
      
      <div style={{ display: 'flex', flex: 1 }}>
        <SideMenu
          items={menuItems}
          collapsed={collapsed}
          onCollapseToggle={setCollapsed}
          mobileOpen={mobileOpen}
          onMobileToggle={setMobileOpen}
        />
        
        <main style={{ flex: 1, padding: '24px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
```

## Customization

### Override Theme Tokens

```tsx
// In your theme provider
<ThemeProvider
  customTokens={{
    colors: {
      primary: { 500: '#your-color' },
    },
  }}
>
  <AdminHeader {...props} />
</ThemeProvider>
```

### Custom Styles

```tsx
<AdminHeader
  {...props}
  style={{
    borderBottom: '2px solid #3b82f6',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }}
  className="custom-header"
/>
```

## Troubleshooting

### Dropdowns not showing
- Check z-index conflicts
- Verify parent overflow settings
- Ensure proper positioning context

### Search not working
- Provide both `searchValue` and `onSearchChange`
- Check `showSearch={true}` is set
- Verify suggestions format

### Mobile menu not opening
- Ensure `onToggleSidebar` is provided
- Check responsive breakpoints
- Verify SideMenu integration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT
