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


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-radio.css`**
```css
.custom-radio {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Radio } from 'src/components/Radio';
import './custom-radio.css';

const StyledExample = () => (
  <Radio className="custom-radio">
    Custom Styled Content
  </Radio>
);
```
