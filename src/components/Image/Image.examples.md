# Image Examples

## Basic Usage

Display an image.

```tsx
import { Image } from 'src/components/Image';

const BasicExample = () => (
  <Image src="/photo.jpg" alt="Description" />
);
```

## Customization Examples

### With Fallback

Show a placeholder if image fails or while loading.

```tsx
import { Image } from 'src/components/Image';

const FallbackExample = () => (
  <Image
    src="/large-photo.jpg"
    fallback="/placeholder.png"
    alt="Photo"
  />
);
```

## Enterprise Scenarios

### Next.js Integration

Use with Next.js Image component.

```tsx
import { Image } from 'src/components/Image';
import NextImage from 'next/image';

const OptimizedImage = () => (
  <Image
    component={NextImage}
    src="/static/hero.jpg"
    alt="Hero"
    imageProps={{ width: 800, height: 600 }}
  />
);
```

## Accessibility Example

Always provide `alt` text.

```tsx
import { Image } from 'src/components/Image';

const A11yExample = () => (
  <Image
    src="/chart.png"
    alt="Bar chart showing Q1 growth"
  />
);
```
