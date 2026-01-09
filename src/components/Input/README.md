# Input Component

A versatile text input field that supports labels, icons, validation states, and helper features.

## Features

- **Standard Types**: Supports all standard HTML input types (`text`, `email`, `password`, `number`, etc.).
- **Decoration**: Prefix/Suffix text and Left/Right icons.
- **Validation**: Error and Success states with descriptive messages.
- **Clearable**: Integrated button to clear content.
- **Character Count**: Built-in length tracking.
- **Accessibility**: Automatic ARIA attribute handling for labels and descriptions.

## Installation

```tsx
import { Input } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Input placeholder="Enter text..." />
```

## With Label and Helper Text

```tsx
<Input
  label="Email Address"
  placeholder="john@example.com"
  helperText="We'll never share your email."
/>
```

## Icons

Add visual cues with icons.

```tsx
import { SearchIcon, MailIcon } from 'lucide-react';

<Input
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>

<Input
  rightIcon={<MailIcon />}
  placeholder="Email"
/>
```

## Prefix & Suffix

Add fixed text before or after the input value.

```tsx
<Input prefix="$" placeholder="0.00" label="Price" />
<Input suffix="@gmail.com" placeholder="username" label="Gmail" />
```

## Validation States

```tsx
<Input
  error="Invalid username"
  value="invalid input"
  label="Username"
/>

<Input
  success="Username available!"
  value="valid_user"
  label="Username"
/>
```

## Clearable

Allow users to quickly reset the field.

```tsx
const [value, setValue] = useState('Search query');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  clearable
  onClear={() => setValue('')}
/>
```

## Character Count

Show a live character count against a `maxLength`.

```tsx
<Input
  label="Tweet"
  maxLength={280}
  showCount
  multiline // Note: Input is single line, use Textarea for multiline
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `helperText` | `string` | - | Bottom helper text |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `size` | `Size` | - | Input size |
| `fullWidth` | `boolean` | `false` | 100% width |
| `leftIcon` | `ReactNode` | - | Start icon |
| `rightIcon` | `ReactNode` | - | End icon |
| `prefix` | `string` | - | Start text |
| `suffix` | `string` | - | End text |
| `clearable` | `boolean` | `false` | Show clear button |
| `onClear` | `() => void` | - | Clear handler |
| `showCount` | `boolean` | `false` | Show char counter |
| `disabled` | `boolean` | `false` | Disable input |

## Accessibility

- `aria-invalid` is set automatically when `error` is present.
- `aria-describedby` links the input to helper/error text.
- `htmlFor` on the label matches the input `id`.
