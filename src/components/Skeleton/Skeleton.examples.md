# Skeleton Examples

## Basic Usage

Loading placeholder.

```tsx
import { Skeleton } from 'src/components/Skeleton';

const BasicExample = () => (
  <Skeleton width={200} height={20} />
);
```

## Customization Examples

### Shapes

Different placeholder shapes.

```tsx
import { Skeleton } from 'src/components/Skeleton';

const ShapesExample = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={100} height={40} />
    <Skeleton variant="text" width={150} />
  </div>
);
```

## Enterprise Scenarios

### Card Loading State

Mock complex UI components.

```tsx
import { Skeleton } from 'src/components/Skeleton';
import { Card } from 'src/components/Card';

const CardSkeleton = () => (
  <Card>
    <Skeleton variant="rectangular" height={150} style={{ marginBottom: 10 }} />
    <Skeleton variant="text" width="80%" height={24} />
    <Skeleton variant="text" width="40%" />
  </Card>
);
```

## Accessibility Example

Use `aria-busy` and `aria-live`.

```tsx
import { Skeleton } from 'src/components/Skeleton';

const A11yExample = () => (
  <div aria-busy="true" aria-label="Loading content">
    <Skeleton />
  </div>
);
```
