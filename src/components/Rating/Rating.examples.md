# Rating Examples

## Basic Usage

Display a star rating.

```tsx
import { Rating } from 'src/components/Rating';

const BasicExample = () => (
  <Rating value={4} />
);
```

## Customization Examples

### Interactive

Allow user to set rating.

```tsx
import { Rating } from 'src/components/Rating';

const InteractiveExample = () => (
  <Rating
    selectable
    onChange={(val) => console.log(val)}
  />
);
```

### Half Stars

Precision rating.

```tsx
import { Rating } from 'src/components/Rating';

const HalfStarExample = () => (
  <Rating
    value={3.5}
    allowHalf
    showValue
  />
);
```

## Enterprise Scenarios

### Review Display

Show rating in a product review.

```tsx
import { Rating } from 'src/components/Rating';

const ReviewRating = ({ score }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Rating value={score} readOnly size="sm" />
    <span style={{ marginLeft: 8 }}>{score.toFixed(1)}</span>
  </div>
);
```

## Accessibility Example

Interactive ratings are keyboard accessible (arrow keys).

```tsx
import { Rating } from 'src/components/Rating';

const A11yExample = () => (
  <Rating
    selectable
    aria-label="Rate this product"
  />
);
```
