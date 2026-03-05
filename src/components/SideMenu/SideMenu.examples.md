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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-sidemenu.css`**
```css
.custom-sidemenu {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { SideMenu } from 'src/components/SideMenu';
import './custom-sidemenu.css';

const StyledExample = () => (
  <SideMenu className="custom-sidemenu">
    Custom Styled Content
  </SideMenu>
);
```
