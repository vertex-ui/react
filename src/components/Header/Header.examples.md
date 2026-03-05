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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-header.css`**
```css
.custom-header {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Header } from 'src/components/Header';
import './custom-header.css';

const StyledExample = () => (
  <Header className="custom-header">
    Custom Styled Content
  </Header>
);
```
