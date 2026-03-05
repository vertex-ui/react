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


## States Example

Demonstrating different states of the Menu.

```tsx
import { Menu } from 'src/components/Menu';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <Menu trigger={<button>Open Menu</button>} items={[{ id: '1', label: 'Item 1' }]} />
    </div>
    <div>
      <h3>Disabled State</h3>
      <Menu trigger={<button>Open Menu</button>} items={[{ id: '1', label: 'Item 1' }]} disabled />
    </div>
  </div>
);
```
