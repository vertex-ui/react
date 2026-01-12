# Flex Examples

## Basic Usage

A flex container.

```tsx
import { Flex } from 'src/components/Flex';

const BasicExample = () => (
  <Flex gap={16}>
    <div>Item A</div>
    <div>Item B</div>
  </Flex>
);
```

## Customization Examples

### Centered Column

Align content vertically.

```tsx
import { Flex } from 'src/components/Flex';

const CenterColumn = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    style={{ height: '200px' }}
  >
    <h1>Title</h1>
    <p>Subtitle</p>
  </Flex>
);
```

## Enterprise Scenarios

### Responsive Toolbar

Space items apart.

```tsx
import { Flex } from 'src/components/Flex';
import { Button } from 'src/components/Button';

const Toolbar = () => (
  <Flex justify="between" align="center" fullWidth>
    <div className="logo">Logo</div>
    <Flex gap={8}>
      <Button>Login</Button>
      <Button variant="primary">Sign Up</Button>
    </Flex>
  </Flex>
);
```

## Accessibility Example

Use semantic HTML elements.

```tsx
import { Flex } from 'src/components/Flex';

const A11yExample = () => (
  <Flex as="nav" aria-label="Main menu">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </Flex>
);
```
