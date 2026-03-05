# RadioGroup Examples

## Basic Usage

Group of radio buttons.

```tsx
import { RadioGroup } from 'src/components/RadioGroup';

const BasicExample = () => (
  <RadioGroup
    name="fruit"
    label="Pick a Fruit"
    options={[
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' }
    ]}
  />
);
```

## Customization Examples

### Horizontal Layout

Display options inline.

```tsx
import { RadioGroup } from 'src/components/RadioGroup';

const HorizontalExample = () => (
  <RadioGroup
    orientation="horizontal"
    name="color"
    options={[
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' }
    ]}
  />
);
```

## Enterprise Scenarios

### Form Validation

Required selection with error state.

```tsx
import { RadioGroup } from 'src/components/RadioGroup';

const FormExample = () => (
  <RadioGroup
    name="plan"
    label="Subscription Plan"
    required
    error="Please select a plan"
    options={[
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro ($10/mo)' }
    ]}
  />
);
```

## Accessibility Example

Uses `radiogroup` role.

```tsx
import { RadioGroup } from 'src/components/RadioGroup';

const A11yExample = () => (
  <RadioGroup
    name="access"
    label="Accessibility Settings"
    options={[{ value: 'high-contrast', label: 'High Contrast' }]}
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-radiogroup.css`**
```css
.custom-radiogroup {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { RadioGroup } from 'src/components/RadioGroup';
import './custom-radiogroup.css';

const StyledExample = () => (
  <RadioGroup className="custom-radiogroup">
    Custom Styled Content
  </RadioGroup>
);
```
