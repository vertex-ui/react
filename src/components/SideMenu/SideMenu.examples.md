# SideMenu Examples

## Basic Usage

A vertical navigation menu.

```tsx
import { SideMenu } from 'src/components/SideMenu';

const BasicExample = () => (
  <SideMenu
    items={[
      { label: 'Dashboard', onClick: () => {} },
      { label: 'Settings', onClick: () => {} }
    ]}
  />
);
```

## Customization Examples

### Collapsible with Icons

Admin sidebar style.

```tsx
import { SideMenu } from 'src/components/SideMenu';
import { HomeIcon, UserIcon } from 'src/icons';

const Sidebar = () => (
  <SideMenu
    width="250px"
    collapsedWidth="60px"
    items={[
      { label: 'Home', icon: <HomeIcon /> },
      { label: 'Users', icon: <UserIcon /> }
    ]}
  />
);
```

## Enterprise Scenarios

### Nested Navigation

Multi-level menu structure.

```tsx
import { SideMenu } from 'src/components/SideMenu';

const AdminMenu = () => (
  <SideMenu
    items={[
      {
        label: 'Management',
        items: [
          { label: 'Users', onClick: navToUsers },
          { label: 'Roles', onClick: navToRoles }
        ]
      }
    ]}
  />
);
```

## Accessibility Example

Uses semantic navigation roles.

```tsx
import { SideMenu } from 'src/components/SideMenu';

const A11yExample = () => (
  <SideMenu
    aria-label="Main Sidebar"
    items={items}
  />
);
```


## States Example

Demonstrating different states of the SideMenu.

```tsx
import { SideMenu } from 'src/components/SideMenu';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <SideMenu items={[{ id: '1', label: 'Dashboard', icon: 'home' }]} />
    </div>
    <div>
      <h3>Disabled State</h3>
      <SideMenu items={[{ id: '1', label: 'Dashboard', icon: 'home' }]} disabled />
    </div>
  </div>
);
```
