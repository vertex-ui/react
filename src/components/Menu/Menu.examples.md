# Menu Examples

## Basic Usage

A dropdown menu.

```tsx
import { Menu } from 'src/components/Menu';

const BasicExample = () => (
  <Menu
    items={[
      { label: 'Profile', onClick: () => {} },
      { label: 'Settings', onClick: () => {} }
    ]}
  />
);
```

## Customization Examples

### Horizontal Menu

Top navigation style.

```tsx
import { Menu } from 'src/components/Menu';

const TopNav = () => (
  <Menu
    orientation="horizontal"
    items={[
      { label: 'Home', active: true },
      { label: 'Products' },
      { label: 'Contact' }
    ]}
  />
);
```

## Enterprise Scenarios

### Nested Menus

Multi-level navigation.

```tsx
import { Menu } from 'src/components/Menu';

const NestedMenu = () => (
  <Menu
    items={[
      { label: 'File', items: [
        { label: 'New', shortcut: 'Ctrl+N' },
        { label: 'Open' }
      ]},
      { label: 'Edit', items: [
        { label: 'Copy' },
        { label: 'Paste' }
      ]}
    ]}
  />
);
```

## Accessibility Example

Component manages focus and ARIA roles.

```tsx
import { Menu } from 'src/components/Menu';

const A11yExample = () => (
  <nav aria-label="Main Menu">
    <Menu items={items} />
  </nav>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-menu.css`**
```css
.custom-menu {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Menu } from 'src/components/Menu';
import './custom-menu.css';

const StyledExample = () => (
  <Menu className="custom-menu">
    Custom Styled Content
  </Menu>
);
```
