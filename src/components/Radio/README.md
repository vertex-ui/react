# Radio Component

A form element that allows users to select one option from a set.

## Features

- **Variants**: Semantic colors (Primary, Success, Error, etc.).
- **Sizes**: Small, Medium, Large.
- **States**: Checked, Disabled, Error.
- **Labels**: Integrated label and helper text.
- **Accessibility**: Keyboard and ARIA support.

## Installation

```tsx
import { Radio } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Radio label="Option 1" name="radio-group" value="1" />
<Radio label="Option 2" name="radio-group" value="2" />
```

## Controlled Component

```tsx
const [value, setValue] = useState('1');

<Radio
  checked={value === '1'}
  onChange={(e) => setValue(e.target.value)}
  value="1"
  label="Selected"
/>
```

## Variants

Color variants to match your theme.

```tsx
<Radio variant="primary" label="Primary" defaultChecked />
<Radio variant="success" label="Success" defaultChecked />
<Radio variant="error" label="Error" defaultChecked />
```

## Sizes

```tsx
<Radio size="sm" label="Small" />
<Radio size="md" label="Medium" />
<Radio size="lg" label="Large" />
```

## Error State

```tsx
<Radio
  error
  label="Invalid Option"
  helperText="This selection is not allowed."
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Checked state |
| `disabled` | `boolean` | `false` | Disable input |
| `label` | `ReactNode` | - | Label text |
| `value` | `string \| number` | - | Input value |
| `name` | `string` | - | Input name |
| `size` | `Size` | - | Component size |
| `variant` | `'primary' \| ...` | `'primary'` | Color variant |
| `error` | `boolean` | `false` | Error styling |
| `helperText` | `ReactNode` | - | Bottom text |
| `onChange` | `(event) => void` | - | Change handler |

## Accessibility

- Uses native `<input type="radio">` for best compatibility.
- Labels are linked via `htmlFor`.
- Helper text is linked via `aria-describedby`.
- Arrow keys navigate between radio buttons in the same group (when sharing a `name`).
