# Accordion Component

A vertically stacked list of items that can be expanded or collapsed to reveal or hide content. Commonly used to reduce page scrolling and group related information.

## Features

- **Flexible Input**: Supports `items` array or `AccordionItem` children
- **Modes**: Single-expand (default) or multi-expand (`allowMultiple`)
- **Controlled/Uncontrolled**: Manage state externally or let the component handle it
- **Styling**: Multiple variants (default, contained, ghost) and sizes
- **Icons**: Customizable chevron position, custom icons, or plus/minus
- **Behavior**: Disable animations, prevent full collapse (`collapsible={false}`)
- **Spacing**: Default, compact, or spacious
- **Accessibility**: Full ARIA support for keyboard navigation

## Installation

```tsx
import { Accordion, AccordionItem } from '@vtx-ui/react';
```

## Basic Usage

### Using Items Array

```tsx
<Accordion
  items={[
    { id: '1', header: 'Section 1', children: 'Content for section 1' },
    { id: '2', header: 'Section 2', children: 'Content for section 2' }
  ]}
/>
```

### Using Children

```tsx
<Accordion>
  <AccordionItem id="1" header="Section 1">
    Content for section 1
  </AccordionItem>
  <AccordionItem id="2" header="Section 2">
    Content for section 2
  </AccordionItem>
</Accordion>
```

## Configuration

### Allow Multiple

Allow multiple sections to be open simultaneously.

```tsx
<Accordion allowMultiple>
  {/* items */}
</Accordion>
```

### Prevent Collapse

Ensure at least one section remains open (works in single-expand mode).

```tsx
<Accordion collapsible={false} defaultOpenItems={['1']}>
  {/* items */}
</Accordion>
```

## Styling

### Variants

- `default`: Standard minimal look
- `contained`: Items have borders/backgrounds
- `ghost`: No borders, transparent background

```tsx
<Accordion variant="contained">
  {/* items */}
</Accordion>
```

### Sizes

```tsx
<Accordion size="sm">Small</Accordion>
<Accordion size="md">Medium (Default)</Accordion>
<Accordion size="lg">Large</Accordion>
```

### Spacing

Control the density of the accordion items.

```tsx
<Accordion spacing="compact">Compact</Accordion>
<Accordion spacing="spacious">Spacious</Accordion>
```

## Icon Customization

### Position

Move the expand/collapse icon to the left or right.

```tsx
<Accordion chevronPosition="left">
  {/* items */}
</Accordion>
```

### Icon Type

Switch between standard chevrons or plus/minus signs.

```tsx
<Accordion iconType="plus-minus">
  {/* items */}
</Accordion>
```

### Custom Icons

Provide your own icons for expanded and collapsed states.

```tsx
<Accordion
  expandedIcon={<MinusCircleIcon />}
  collapsedIcon={<PlusCircleIcon />}
>
  {/* items */}
</Accordion>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItemProps[]` | - | Array of items to render |
| `allowMultiple` | `boolean` | `false` | Allow multiple items to be open |
| `defaultOpenItems` | `string[]` | `[]` | Initially open item IDs |
| `openItems` | `string[]` | - | Controlled state of open items |
| `onToggle` | `(openItems: string[]) => void` | - | Callback when items toggle |
| `variant` | `'default' \| 'contained' \| 'ghost'` | `'default'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the header/content |
| `chevronPosition` | `'left' \| 'right'` | `'right'` | Position of the toggle icon |
| `iconType` | `'chevron' \| 'plus-minus'` | `'chevron'` | Style of the toggle icon |
| `showDivider` | `boolean` | `true` | Show divider between items |
| `collapsible` | `boolean` | `true` | Allow all items to be closed |
| `loading` | `boolean` | `false` | Show loading state |
| `disabled` | `boolean` | `false` | Disable all interaction |
| `spacing` | `'default' \| 'compact' \| 'spacious'` | `'default'` | Vertical spacing |
| `disableAnimations` | `boolean` | `false` | Turn off expand/collapse animations |

### AccordionItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | **required** | Unique identifier |
| `header` | `ReactNode` | **required** | Header content |
| `children` | `ReactNode` | - | Expanded content |
| `disabled` | `boolean` | `false` | Disable specific item |

## Accessibility

- **Keyboard**:
  - `Enter` or `Space` toggles the focused item.
  - `Tab` moves focus between headers and focusable content inside expanded panels.
- **ARIA**:
  - Headers have `role="button"` and `aria-expanded`.
  - Content panels have `role="region"` and `aria-labelledby`.
  - Proper IDs link headers and regions.
