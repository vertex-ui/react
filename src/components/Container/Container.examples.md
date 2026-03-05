# Container Examples

## Basic Usage

Center content with max-width.

```tsx
import { Container } from 'src/components/Container';

const BasicExample = () => (
  <Container>
    <h1>Page Content</h1>
  </Container>
);
```

## Customization Examples

### Fluid Width

Full width container.

```tsx
import { Container } from 'src/components/Container';

const FluidExample = () => (
  <Container fluid>
    <div style={{ background: '#eee' }}>Full Width Banner</div>
  </Container>
);
```

## Enterprise Scenarios

### Application Layout

Standard width for consistent page layouts.

```tsx
import { Container } from 'src/components/Container';

const AppLayout = ({ children }) => (
  <Container maxWidth="xl" disableGutters>
    <header>Header</header>
    <main>{children}</main>
  </Container>
);
```

## Accessibility Example

Containers are structural, often used with semantic tags.

```tsx
import { Container } from 'src/components/Container';

const A11yExample = () => (
  <main>
    <Container>
      <h1>Main Content</h1>
    </Container>
  </main>
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-container.css`**
```css
.custom-container {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Container } from 'src/components/Container';
import './custom-container.css';

const StyledExample = () => (
  <Container className="custom-container">
    Custom Styled Content
  </Container>
);
```
