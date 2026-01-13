# Typography Examples

## Basic Usage

Display text.

```tsx
import { Typography } from 'src/components/Typography';

const BasicExample = () => (
  <Typography>Standard body text.</Typography>
);
```

## Customization Examples

### Variants

Semantic text styles.

```tsx
import { Typography } from 'src/components/Typography';

const Headers = () => (
  <>
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="caption" color="secondary">Caption text</Typography>
  </>
);
```

## Enterprise Scenarios

### Consistent Branding

Enforce design system fonts and weights.

```tsx
import { Typography } from 'src/components/Typography';

const HeroText = () => (
  <Typography
    variant="h2"
    weight="bold"
    align="center"
    gradient={['#f00', '#00f']}
  >
    Welcome to Enterprise App
  </Typography>
);
```

## Accessibility Example

Renders semantic HTML tags (h1-h6, p).

```tsx
import { Typography } from 'src/components/Typography';

const A11yExample = () => (
  <Typography variant="h3" as="h2">
    Visual h3, Semantic h2
  </Typography>
);
```
