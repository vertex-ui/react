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
