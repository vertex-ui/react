# Radio Examples

## Basic Usage

A single radio button.

```tsx
import { Radio } from 'src/components/Radio';

const BasicExample = () => (
  <Radio
    label="Option A"
    name="group1"
    value="a"
  />
);
```

## Customization Examples

### Sizes and Variants

Radio button styles.

```tsx
import { Radio } from 'src/components/Radio';

const StyleExample = () => (
  <>
    <Radio label="Small" size="sm" variant="success" />
    <Radio label="Large" size="lg" variant="error" />
  </>
);
```

## Enterprise Scenarios

### Disabled State

Indicate unavailable options.

```tsx
import { Radio } from 'src/components/Radio';

const DisabledExample = () => (
  <Radio
    label="Premium Feature (Unavailable)"
    disabled
    checked={false}
  />
);
```

## Accessibility Example

Ensure labels are connected via `id` or implicit association (component handles this).

```tsx
import { Radio } from 'src/components/Radio';

const A11yExample = () => (
  <Radio
    label="Accessible Option"
    aria-label="Select Accessible Option"
  />
);
```
