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
