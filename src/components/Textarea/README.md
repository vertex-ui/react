# Textarea Component

A multi-line text input field with support for auto-resizing, validation, and character counting.

## Features

- **Auto-resize**: Automatically expands vertical height as the user types.
- **Character Count**: Built-in counter to show usage against a limit.
- **Validation**: Error and success states.
- **Clearable**: Integrated button to clear content.
- **Rows Control**: Configurable min/max rows.

## Installation

```tsx
import { Textarea } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Textarea
  placeholder="Enter your message..."
  onChange={(e) => console.log(e.target.value)}
/>
```

## Auto Resize

Allow the textarea to grow with content.

```tsx
<Textarea
  autoResize
  minRows={3}
  maxRows={10}
  label="Message"
/>
```

## Character Limit

Show a character counter.

```tsx
<Textarea
  label="Bio"
  maxLength={200}
  showCount
/>
```

## Validation

```tsx
<Textarea
  label="Comment"
  error="Comment is required"
  required
/>
```

## Clearable

Add a button to clear the input.

```tsx
<Textarea
  clearable
  onClear={() => setValue('')}
  value={value}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `helperText` | `string` | - | Helper text |
| `error` | `string` | - | Error message |
| `autoResize` | `boolean` | `false` | Expand on type |
| `minRows` | `number` | `3` | Min height in rows |
| `maxRows` | `number` | - | Max height in rows |
| `maxLength` | `number` | - | Max chars |
| `showCount` | `boolean` | `false` | Show counter |
| `clearable` | `boolean` | `false` | Clear button |
| `fullWidth` | `boolean` | `true` | 100% width |

## Accessibility

- `aria-invalid` set on error.
- `aria-describedby` links helper/error text.
- Label association via `htmlFor`.
