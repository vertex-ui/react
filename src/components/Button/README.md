# Button Component

A comprehensive, interactive button component that serves as the primary element for user actions. It supports multiple variants, sizes, loading states, icon integration, and can function as a navigation link.

## Features

- **Multiple Variants**: Primary, Secondary, Outline, Ghost, Danger, Success, Warning
- **Size Options**: Small, Medium (Default), Large
- **State Management**: Loading (with spinner), Disabled, Active
- **Icon Support**: Left and right icon placement
- **Flexibility**: Full width option, icon-only mode
- **Polymorphic**: Can render as a `<button>` or `<a>` tag
- **Accessibility**: ARIA attributes, keyboard navigation, focus management
- **Theming**: Integrated with theme system for consistent styling

## Installation

```tsx
import { Button } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Button onClick={() => console.log('Clicked')}>
  Click Me
</Button>
```

## Variants

The button comes in several visual styles to communicate different levels of hierarchy and action types.

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
```

## Sizes

Available in three standard sizes to fit various layout needs.

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## States

### Loading State
Shows a spinner and disables interaction.

```tsx
<Button loading>Loading</Button>
<Button loading loadingText="Saving...">Save</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled</Button>
```

## Icons

Add icons to the left or right of the text, or create an icon-only button.

```tsx
import { SaveIcon, ArrowRightIcon, EditIcon } from 'lucide-react';

// With text
<Button leftIcon={<SaveIcon />}>Save</Button>
<Button rightIcon={<ArrowRightIcon />}>Next</Button>

// Icon only
<Button iconOnly aria-label="Edit">
  <EditIcon />
</Button>
```

## Link Button

Render the button as an anchor tag while maintaining button styling.

```tsx
<Button asLink href="/dashboard" target="_blank">
  Go to Dashboard
</Button>
```

## Full Width

Make the button span the full width of its container.

```tsx
<Button fullWidth>Submit</Button>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'success' \| 'warning'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `fullWidth` | `boolean` | `false` | Whether the button takes full width |
| `loading` | `boolean` | `false` | Shows loading spinner and disables button |
| `loadingText` | `string` | - | Text to show when loading |
| `leftIcon` | `ReactNode` | - | Icon element to display before text |
| `rightIcon` | `ReactNode` | - | Icon element to display after text |
| `iconOnly` | `boolean` | `false` | optimized for icon-only usage |
| `asLink` | `boolean` | `false` | Renders as an anchor tag |
| `href` | `string` | - | URL (required if `asLink` is true) |
| `target` | `string` | - | Target attribute for link |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `CSSProperties` | - | Inline styles |

## Styling & Theming

The Button component uses CSS variables for easy customization.

```css
:root {
  /* Colors */
  --vtx-button-primary-bg: #...;
  --vtx-button-primary-text: #...;
  /* ... other variant colors */

  /* Spacing */
  --vtx-button-padding-x: 1rem;
  --vtx-button-padding-y: 0.5rem;
}
```

## Accessibility

- **Keyboard Interaction**: Supports Tab focus and Enter/Space to activate.
- **ARIA Attributes**:
  - `aria-busy="true"` when in loading state.
  - `aria-disabled="true"` when disabled or loading.
  - `role="button"` (default) or implicit role for links.
- **Focus Management**: Visible focus indicators for keyboard navigation.

## Best Practices

1. **Hierarchy**: Use `primary` for the main action, `secondary` or `outline` for alternative actions, and `ghost` for less important actions.
2. **Loading**: Always use the `loading` prop for asynchronous actions to prevent double submissions and provide feedback.
3. **Icons**: Use icons to enhance recognition but ensure text labels are descriptive.
4. **Labels**: Keep button text concise and action-oriented (e.g., "Save", "Submit", "Cancel").
5. **Accessibility**: Always provide `aria-label` for icon-only buttons.
