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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-skeleton.css`**
```css
.custom-skeleton {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Skeleton } from 'src/components/Skeleton';
import './custom-skeleton.css';

const StyledExample = () => (
  <Skeleton className="custom-skeleton">
    Custom Styled Content
  </Skeleton>
);
```
