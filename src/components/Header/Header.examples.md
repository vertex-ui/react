# Header Examples

## Basic Usage

A simple header.

```tsx
import { Header } from 'src/components/Header';

const BasicExample = () => (
  <Header title="My App" />
);
```

## Customization Examples

### With User and Notifications

Standard app header features.

```tsx
import { Header } from 'src/components/Header';

const AppHeader = () => (
  <Header
    title="Dashboard"
    userName="Jane Doe"
    notifications={[
      { id: '1', title: 'Welcome', time: 'Just now' }
    ]}
  />
);
```

## Enterprise Scenarios

### Admin Panel Header

Sidebar toggle and actions.

```tsx
import { Header } from 'src/components/Header';

const AdminPanelHeader = ({ toggleSidebar }) => (
  <Header
    logo={<img src="/logo.png" alt="Logo" />}
    onToggleSidebar={toggleSidebar}
    userMenuItems={[
      { label: 'Profile', onClick: () => {} },
      { label: 'Logout', variant: 'danger' }
    ]}
  />
);
```

## Accessibility Example

Header uses `<header>` tag.

```tsx
import { Header } from 'src/components/Header';

const A11yExample = () => (
  <Header
    title="Accessible Header"
    aria-label="Application Header"
  />
);
```
