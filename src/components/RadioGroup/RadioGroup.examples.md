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


## States Example

Demonstrating different states of the RadioGroup.

```tsx
import { RadioGroup } from 'src/components/RadioGroup';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <RadioGroup options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} />
    </div>
    <div>
      <h3>Disabled State</h3>
      <RadioGroup options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} disabled />
    </div>
  </div>
);
```
