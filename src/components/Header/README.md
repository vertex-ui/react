# Header Component

A responsive top-level navigation header component typically used in admin dashboards and web applications. It supports branding, search/actions slots, notifications, and user profiles.

## Features

- **Branding**: Logo and title support.
- **Sidebar Toggle**: Built-in toggle button for sidebar navigation.
- **Notifications**: Integrated notification center with unread badges, dropdowns, and read status.
- **User Menu**: User profile display with avatar, name, subtitle, and a dropdown menu.
- **Custom Actions**: Slot for injecting custom search inputs or action buttons.
- **Sticky**: Option to keep the header fixed at the top of the viewport.

## Installation

```tsx
import { Header } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Header
  title="My Dashboard"
  userName="Jane Doe"
/>
```

## With Sidebar Toggle

Connect to your sidebar visibility state.

```tsx
<Header
  title="App"
  onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
/>
```

## Notifications

Pass a list of notification objects to render the notification bell and dropdown.

```tsx
const notifications = [
  {
    id: '1',
    title: 'New Message',
    description: 'You received a message from Support.',
    time: '5m ago',
    read: false,
    type: 'info'
  },
  {
    id: '2',
    title: 'Update Failed',
    time: '1h ago',
    read: true,
    type: 'error'
  }
];

<Header
  notifications={notifications}
  onNotificationClick={(n) => console.log('Clicked', n)}
  onMarkAllAsRead={() => console.log('Mark all read')}
/>
```

## User Menu

Configure the user profile dropdown.

```tsx
const menuItems = [
  { label: 'Profile', onClick: () => navigate('/profile') },
  { label: 'Settings', onClick: () => navigate('/settings') },
  { label: 'Logout', onClick: logout, variant: 'danger', divider: true }
];

<Header
  userName="John Smith"
  userSubtitle="Administrator"
  userAvatar="https://example.com/avatar.jpg"
  userMenuItems={menuItems}
/>
```

## Custom Actions

Inject elements like a search bar into the middle section.

```tsx
<Header
  actions={
    <input type="search" placeholder="Search..." className="search-bar" />
  }
/>
```

## API Reference

### HeaderProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | - | Brand logo element |
| `title` | `string` | - | Header title |
| `onToggleSidebar` | `() => void` | - | Sidebar toggle handler |
| `showToggle` | `boolean` | `true` | Show toggle button |
| `sticky` | `boolean` | `true` | Sticky positioning |
| `notifications` | `NotificationItem[]` | `[]` | Notification data |
| `onNotificationClick` | `(item) => void` | - | Notification click handler |
| `onMarkAllAsRead` | `() => void` | - | Handler for mark all read |
| `userName` | `string` | - | User display name |
| `userSubtitle` | `string` | - | User role/email |
| `userAvatar` | `string` | - | Avatar URL |
| `userMenuItems` | `MenuItem[]` | `[]` | User dropdown items |
| `actions` | `ReactNode` | - | Custom center content |

### NotificationItem

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique ID |
| `title` | `string` | Notification title |
| `description` | `string` | Optional detail text |
| `time` | `string` | Timestamp string |
| `read` | `boolean` | Read status |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | Visual type |

## Accessibility

- Navigation landmarks used where appropriate.
- Buttons have `aria-label` attributes (e.g., "Toggle sidebar", "Notifications").
- Dropdowns manage focus and visibility.
