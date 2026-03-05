# Breadcrumb Examples

## Basic Usage

Display navigation hierarchy.

```tsx
import { Breadcrumb } from 'src/components/Breadcrumb';

const BasicExample = () => (
  <Breadcrumb
    items={[
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Product', active: true }
    ]}
  />
);
```

## Customization Examples

### With Icons

Add icons to breadcrumb items.

```tsx
import { Breadcrumb } from 'src/components/Breadcrumb';
import { HomeIcon } from 'src/icons';

const IconExample = () => (
  <Breadcrumb
    items={[
      { label: 'Home', href: '/', icon: <HomeIcon /> },
      { label: 'Settings', active: true }
    ]}
  />
);
```

## Enterprise Scenarios

### Collapsed View

Handle deep hierarchies by collapsing items.

```tsx
import { Breadcrumb } from 'src/components/Breadcrumb';

const DeepNav = () => (
  <Breadcrumb
    maxItems={4}
    items={[
      { label: 'Home', href: '/' },
      { label: 'Level 1', href: '/1' },
      { label: 'Level 2', href: '/2' },
      { label: 'Level 3', href: '/3' },
      { label: 'Current', active: true }
    ]}
  />
);
```

## Accessibility Example

The component uses semantic `<nav>` and `<ol>` tags.

```tsx
import { Breadcrumb } from 'src/components/Breadcrumb';

const A11yExample = () => (
  <Breadcrumb
    aria-label="Breadcrumb"
    items={items}
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-breadcrumb.css`**
```css
.custom-breadcrumb {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Breadcrumb } from 'src/components/Breadcrumb';
import './custom-breadcrumb.css';

const StyledExample = () => (
  <Breadcrumb className="custom-breadcrumb">
    Custom Styled Content
  </Breadcrumb>
);
```
