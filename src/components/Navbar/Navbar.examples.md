# Navbar Examples

## Basic Usage

A responsive navigation bar.

```tsx
import { Navbar } from 'src/components/Navbar';

const BasicExample = () => (
  <Navbar
    logo={<span>MyLogo</span>}
    items={[
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' }
    ]}
  />
);
```

## Customization Examples

### With Search and CTA

Desktop navbar with extra elements.

```tsx
import { Navbar } from 'src/components/Navbar';
import { Button } from 'src/components/Button';

const FullNavbar = () => (
  <Navbar
    search={{
      placeholder: 'Search...',
      onSearch: (q) => console.log(q)
    }}
    actions={
      <Button variant="primary">Sign In</Button>
    }
    items={menuItems}
  />
);
```

## Enterprise Scenarios

### Complex Mega Menu

(Assuming Navbar supports mega menu structure or custom children).

```tsx
import { Navbar } from 'src/components/Navbar';

const EnterpriseNav = () => (
  <Navbar
    desktopLayout="double-row"
    items={[
      {
        label: 'Products',
        children: [
          { label: 'SaaS', href: '/products/saas' },
          { label: 'On-Prem', href: '/products/on-prem' }
        ]
      }
    ]}
  />
);
```

## Accessibility Example

Semantic navigation landmark.

```tsx
import { Navbar } from 'src/components/Navbar';

const A11yExample = () => (
  <Navbar
    aria-label="Main Navigation"
    items={items}
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-navbar.css`**
```css
.custom-navbar {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Navbar } from 'src/components/Navbar';
import './custom-navbar.css';

const StyledExample = () => (
  <Navbar className="custom-navbar">
    Custom Styled Content
  </Navbar>
);
```
