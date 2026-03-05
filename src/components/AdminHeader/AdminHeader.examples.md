# AdminHeader Examples

## Basic Usage

A standard admin header with user profile.

```tsx
import { AdminHeader } from 'src/components/AdminHeader';

const BasicExample = () => (
  <AdminHeader
    title="Dashboard"
    userName="Admin User"
    userRole="Super Admin"
  />
);
```

## Customization Examples

### With Search and Notifications

Add search capability and notifications dropdown.

```tsx
import { AdminHeader } from 'src/components/AdminHeader';

const RichHeader = () => (
  <AdminHeader
    showSearch
    showNotifications
    notifications={[
      { id: '1', title: 'New Order', time: '2m ago' }
    ]}
    onSearchSubmit={(val) => console.log(val)}
  />
);
```

## Enterprise Scenarios

### Role-Based Actions

Show different actions based on user role.

```tsx
import { AdminHeader } from 'src/components/AdminHeader';

const EnterpriseHeader = ({ user }) => (
  <AdminHeader
    title="Enterprise Portal"
    userName={user.name}
    userRole={user.role}
    quickActions={
      user.role === 'admin'
        ? [{ id: 'settings', label: 'Settings', onClick: openSettings }]
        : []
    }
  />
);
```

## Accessibility Example

Ensure all interactive elements have labels. The component manages focus for dropdowns.

```tsx
import { AdminHeader } from 'src/components/AdminHeader';

const A11yExample = () => (
  <AdminHeader
    title="Accessible Dashboard"
    toggleIcon={<span aria-label="Menu">☰</span>}
  />
);
```
