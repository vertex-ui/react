# FormControl Component

A wrapper component that provides context and structure for form inputs. It manages labels, help text, and validation error messages uniformly across different input types.

## Features

- **Labeling**: Consistent label placement and styling.
- **Validation Messaging**: Standardized display for error and success messages.
- **Helper Text**: Support for descriptive helper text.
- **Required Indicator**: Automatically adds a visual indicator for required fields.
- **Layout**: Options for stacked (default) or horizontal label positioning.
- **Accessibility**: Automatically links labels and descriptions to input fields via ARIA.

## Installation

```tsx
import { FormControl } from '@vtx-ui/react';
```

## Basic Usage

Wrap any input component (like `Input`, `Select`, or `Textarea`) to add a label and optional helper text.

```tsx
<FormControl label="Email Address" helperText="We'll never share your email.">
  <Input type="email" placeholder="you@company.com" />
</FormControl>
```

## Validation States

### Error State

Passing an `error` prop displays the message in red and styles the control accordingly.

```tsx
<FormControl label="Password" error="Password must be at least 8 characters.">
  <Input type="password" isInvalid />
</FormControl>
```

### Success State

Displays a success message.

```tsx
<FormControl label="Username" success="Username is available!">
  <Input value="johndoe" />
</FormControl>
```

## Label Positioning

Labels can be placed to the left of the input for a horizontal layout.

```tsx
<FormControl label="Name" labelPosition="left">
  <Input />
</FormControl>
```

## Required Fields

Adds an asterisk to the label.

```tsx
<FormControl label="Full Name" required>
  <Input />
</FormControl>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `helperText` | `string` | - | Bottom assistance text |
| `error` | `string` | - | Error message |
| `success` | `string` | - | Success message |
| `required` | `boolean` | `false` | Shows required asterisk |
| `disabled` | `boolean` | `false` | Styles as disabled |
| `fullWidth` | `boolean` | `true` | Takes 100% width |
| `labelPosition` | `'top' \| 'left'` | `'top'` | Label placement |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Margin bottom |
| `children` | `ReactNode` | **required** | The input component |

## Accessibility

- **Labels**: Associates the `label` with the input using `htmlFor`. Child inputs should ideally handle the ID generation or accept an `id` prop.
- **Descriptions**: Associates helper text and error messages with the input using `aria-describedby` (requires integration with the child input).
- **Error Messages**: Rendered with `role="alert"` for immediate screen reader feedback.
