# Checkbox Component

A control that allows the user to select one or more items from a set.

## Features

- **States**: Checked, Unchecked, Indeterminate, Disabled
- **Variants**: Semantic colors (Primary, Success, Error, etc.)
- **Sizes**: Small, Medium, Large
- **Validation**: Error state styling with helper text
- **Layout**: Integrated label and helper text support
- **Accessibility**: Keyboard support and ARIA integration

## Installation

```tsx
import { Checkbox } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Checkbox label="I agree to the terms" />
```

## Controlled Component

```tsx
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Subscribe to newsletter"
/>
```

## Indeterminate State

Useful for "Select All" functionality where only some child items are selected.

```tsx
<Checkbox
  indeterminate
  label="Select All"
/>
```

## Error State

Display validation errors.

```tsx
<Checkbox
  error
  label="Required Field"
  helperText="You must check this box to proceed."
/>
```

## Sizes

```tsx
<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />
<Checkbox size="lg" label="Large" />
```

## Variants

Color variants to match your theme.

```tsx
<Checkbox variant="primary" defaultChecked label="Primary" />
<Checkbox variant="success" defaultChecked label="Success" />
<Checkbox variant="error" defaultChecked label="Error" />
<Checkbox variant="warning" defaultChecked label="Warning" />
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Checked state |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `disabled` | `boolean` | `false` | Disable interaction |
| `label` | `ReactNode` | - | Label text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'primary'` | Visual variant |
| `error` | `boolean` | `false` | Show error styling |
| `helperText` | `ReactNode` | - | Text below checkbox |
| `onChange` | `(event) => void` | - | Change handler |
| `inputClassName` | `string` | - | Class for input element |
| `className` | `string` | - | Class for container |

## CSS Customization

```css
:root {
  --vtx-checkbox-color: #007bff;
  --vtx-checkbox-size: 1.25rem;
  --vtx-checkbox-border-radius: 4px;
}
```

## Accessibility

- Uses native `<input type="checkbox">` for maximum compatibility.
- `indeterminate` property is set via JavaScript ref as it's not an HTML attribute.
- Labels are correctly associated using `htmlFor` and generated IDs.
- Keyboard navigation (Tab, Space) works natively.
