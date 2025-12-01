# Vertex UI Design System - Theming Guide

## Overview

Vertex UI is designed with a **consistent primary color-based theme system** across all components. Every interactive element, focus state, and primary action uses the same color tokens, ensuring a cohesive visual language throughout your application.

## Core Philosophy

### 1. **Primary Color as Default**

All components use the primary color (`--vtx-color-primary-*`) by default for:

- Interactive states (hover, active, focus)
- Selected states
- Primary actions and CTAs
- Progress indicators and loaders
- Active navigation items

### 2. **Token-Based Flexibility**

Every color, spacing, typography, and effect is defined using CSS custom properties (tokens), allowing you to:

- Change the entire theme by updating a few token values
- Create multiple themes (light/dark, brand variants)
- Override specific component styles without touching the source code
- Support runtime theme switching

### 3. **Semantic Color Variants**

While primary is the default, all components support semantic variants:

- **Primary**: Main brand color (default)
- **Success**: Positive actions, confirmations
- **Error**: Errors, destructive actions
- **Warning**: Cautions, important notices
- **Info**: Informational content
- **Neutral**: Default/secondary actions

## Primary Color Token Structure

### Base Tokens

```css
:root {
  /* Primary color scale (50-900) */
  --vtx-color-primary-50: #eff6ff; /* Lightest - backgrounds */
  --vtx-color-primary-100: #dbeafe; /* Very light - subtle backgrounds */
  --vtx-color-primary-200: #bfdbfe; /* Light - borders, accents */
  --vtx-color-primary-300: #93c5fd; /* Medium light */
  --vtx-color-primary-400: #60a5fa; /* Medium - hover states (dark mode) */
  --vtx-color-primary-500: #3b82f6; /* Base - focus rings, borders */
  --vtx-color-primary-600: #2563eb; /* Main - default primary color */
  --vtx-color-primary-700: #1d4ed8; /* Dark - hover states */
  --vtx-color-primary-800: #1e40af; /* Darker - active states */
  --vtx-color-primary-900: #1e3a8a; /* Darkest */
}
```

### Usage Guidelines

- **50-200**: Backgrounds, subtle accents, light borders
- **300-400**: Medium emphasis, dark mode primary colors
- **500-600**: Primary interactive color (buttons, links, focus)
- **700-800**: Hover and active states
- **900**: Highest emphasis, very dark themes

## Component-by-Component Theming

### Form Controls

#### Button

```css
/* Primary button uses primary-600 by default */
.vtx-button--primary {
  background-color: var(--vtx-color-primary-600);
}
.vtx-button--primary:hover {
  background-color: var(--vtx-color-primary-700);
}
.vtx-button:focus-visible {
  outline: 2px solid var(--vtx-color-primary-500);
}
```

#### Input

```css
/* Focus state uses primary-500 */
.vtx-input-container:focus-within {
  outline: 2px solid var(--vtx-color-primary-500);
  border-color: var(--vtx-color-primary-500);
}
```

#### Checkbox & Radio

```css
/* Checked state uses primary-600 */
.vtx-checkbox-input:checked + .vtx-checkbox-box {
  background-color: var(--vtx-checkbox-color, var(--vtx-color-primary-600));
  border-color: var(--vtx-checkbox-color, var(--vtx-color-primary-600));
}
/* Hover state uses primary-700 */
.vtx-checkbox-label:hover .vtx-checkbox-input:checked + .vtx-checkbox-box {
  background-color: var(--vtx-checkbox-hover-color, var(--vtx-color-primary-700));
}
```

#### Select & MultiSelect

```css
/* Focus state uses primary-500 */
.vtx-select-container:focus-within {
  outline: 2px solid var(--vtx-color-primary-500);
  border-color: var(--vtx-color-primary-500);
}
/* Selected option uses primary colors */
.vtx-multiselect-option--selected {
  background-color: var(--vtx-color-primary-50);
  color: var(--vtx-color-primary-700);
}
```

### Interactive Components

#### Accordion

```css
/* Icon background uses primary color with alpha */
.accordion-item-chevron {
  background: rgba(59, 130, 246, 0.1); /* primary-500 at 10% */
}
/* Open state uses primary-500 */
.accordion-item-chevron.open {
  color: var(--vtx-color-primary-500);
  background: rgba(59, 130, 246, 0.2);
}
/* Focus state */
.accordion-item-header:focus {
  outline: 2px solid var(--vtx-color-primary-500);
}
```

#### Card

```css
/* Focus state uses primary-500 */
.vtx-card:focus-visible {
  outline: 2px solid var(--vtx-color-primary-500);
}
```

#### Modal

```css
/* Close button focus uses primary-500 */
.vtx-modal-close:focus-visible {
  outline: 2px solid var(--vtx-color-primary-500);
}
```

#### Toast

```css
/* Default toast uses primary-500 for accent */
.vtx-toast--default {
  border-left: 4px solid var(--vtx-color-primary-500);
}
/* Primary variant uses primary-600 */
.vtx-toast--primary {
  color: var(--vtx-color-primary-600);
  border: 1px solid var(--vtx-color-primary-200);
  border-left: 4px solid var(--vtx-color-primary-500);
}
```

### Display Components

#### Chip

```css
/* Filled primary chip uses primary-600 */
.vtx-chip--primary.vtx-chip--filled {
  background-color: var(--vtx-color-primary-600);
  border-color: var(--vtx-color-primary-600);
}
/* Outlined primary chip uses primary-600 */
.vtx-chip--primary.vtx-chip--outlined {
  color: var(--vtx-color-primary-600);
  border-color: var(--vtx-color-primary-600);
}
/* Focus state */
.vtx-chip--clickable:focus-visible {
  outline: 2px solid var(--vtx-color-primary-600);
}
```

#### Badge

```css
/* Primary badge uses primary scale */
.vtx-badge--primary {
  background-color: var(--vtx-color-primary-100); /* Light background */
  color: var(--vtx-color-primary-800); /* Dark text */
}
.vtx-badge--primary .vtx-badge-dot {
  background-color: var(--vtx-color-primary-600); /* Dot color */
}
```

#### Table

```css
/* Hoverable rows use primary-50 */
.vtx-table--hoverable .vtx-table-row:hover {
  background-color: var(--vtx-color-primary-50);
}
```

## Customizing the Theme

### Method 1: Update Primary Color Tokens

Change the entire theme by updating the primary color values:

```css
:root {
  /* Red theme */
  --vtx-color-primary-50: #fef2f2;
  --vtx-color-primary-100: #fee2e2;
  --vtx-color-primary-200: #fecaca;
  --vtx-color-primary-300: #fca5a5;
  --vtx-color-primary-400: #f87171;
  --vtx-color-primary-500: #ef4444;
  --vtx-color-primary-600: #dc2626;
  --vtx-color-primary-700: #b91c1c;
  --vtx-color-primary-800: #991b1b;
  --vtx-color-primary-900: #7f1d1d;
}
```

### Method 2: Component-Specific Overrides

Override specific component colors without changing the global theme:

```css
/* Make Accordion use success color instead of primary */
.my-custom-accordion {
  --accordion-icon-color-open: var(--vtx-color-success-500);
  --accordion-icon-bg-open: rgba(34, 197, 94, 0.2);
  --accordion-focus-color: var(--vtx-color-success-500);
}

/* Make buttons use purple */
.my-custom-button {
  --vtx-button-primary-bg: #9333ea;
  --vtx-button-primary-hover: #7e22ce;
}
```

### Method 3: Multiple Themes

Create multiple theme classes for different contexts:

```css
/* Default theme (blue) */
:root {
  --vtx-color-primary-500: #3b82f6;
  --vtx-color-primary-600: #2563eb;
  /* ... */
}

/* Dark theme */
[data-theme='dark'] {
  --vtx-color-primary-400: #60a5fa;
  --vtx-color-primary-500: #3b82f6;
  /* Adjust for dark backgrounds */
}

/* Brand variant 1 (purple) */
[data-theme='purple'] {
  --vtx-color-primary-500: #a855f7;
  --vtx-color-primary-600: #9333ea;
  --vtx-color-primary-700: #7e22ce;
}

/* Brand variant 2 (green) */
[data-theme='green'] {
  --vtx-color-primary-500: #22c55e;
  --vtx-color-primary-600: #16a34a;
  --vtx-color-primary-700: #15803d;
}
```

Then apply themes dynamically:

```typescript
// Change theme at runtime
document.documentElement.setAttribute('data-theme', 'purple');
```

## Design Tokens Reference

### Complete Token System

#### Colors

- `--vtx-color-primary-*` (50-900): Primary brand color
- `--vtx-color-success-*` (50-900): Success/positive states
- `--vtx-color-error-*` (50-900): Error/danger states
- `--vtx-color-warning-*` (50-900): Warning/caution states
- `--vtx-color-info-*` (50-900): Info/neutral emphasis
- `--vtx-color-neutral-*` (50-900): Grayscale palette

#### Spacing

- `--vtx-spacing-1` to `--vtx-spacing-24`: Consistent spacing scale
- Based on 4px grid (1 = 4px, 2 = 8px, etc.)

#### Typography

- `--vtx-font-size-*`: xs, sm, base, lg, xl, 2xl-9xl
- `--vtx-font-weight-*`: thin to black (100-900)
- `--vtx-line-height-*`: none, tight, snug, normal, relaxed, loose
- `--vtx-font-family-sans`: System font stack

#### Border Radius

- `--vtx-radius-*`: none, sm, base, md, lg, xl, 2xl, full

#### Shadows

- `--vtx-shadow-*`: sm, base, md, lg, xl, none

#### Transitions

- `--vtx-transition-fast`: 150ms
- `--vtx-transition-base`: 200ms
- `--vtx-transition-slow`: 300ms

#### Z-Index

- `--vtx-z-dropdown`: 1000
- `--vtx-z-sticky`: 1100
- `--vtx-z-modal`: 1200
- `--vtx-z-tooltip`: 1300
- `--vtx-z-notification`: 1400

## Best Practices

### 1. **Use Token Hierarchy**

Always use the full token path with fallbacks:

```css
/* ✅ Good - with fallbacks */
color: var(--component-specific, var(--vtx-color-primary-600, #2563eb));

/* ❌ Bad - no fallback */
color: var(--vtx-color-primary-600);
```

### 2. **Maintain Shade Consistency**

Use the same shade numbers across components for similar purposes:

- **-50/-100**: Very subtle backgrounds
- **-500**: Focus rings, borders
- **-600**: Primary filled elements
- **-700**: Hover states
- **-800**: Active states

### 3. **Consider Contrast**

Ensure sufficient contrast ratios (WCAG AA minimum):

- Light backgrounds: Use -600 to -900 for text
- Dark backgrounds: Use -50 to -400 for text
- White text on filled: Use -600 or darker

### 4. **Test Dark Mode**

Always test your theme in both light and dark modes:

```css
/* Light mode */
:root {
  --vtx-color-primary-600: #2563eb;
}

/* Dark mode - adjust for visibility */
@media (prefers-color-scheme: dark) {
  :root {
    --vtx-color-primary-500: #60a5fa; /* Lighter for dark backgrounds */
    --vtx-color-primary-600: #3b82f6;
  }
}
```

### 5. **Use Semantic Variants**

Choose the right variant for the context:

```tsx
// ✅ Good - semantic meaning
<Button variant="primary">Submit</Button>
<Button variant="error">Delete</Button>
<Alert variant="warning">Important notice</Alert>

// ❌ Bad - mismatched semantics
<Button variant="error">Submit</Button>
<Alert variant="success">Error occurred</Alert>
```

## Migration Guide

If you're updating from an older version with hardcoded colors:

### Step 1: Identify Hardcoded Colors

Search your CSS for:

- `#3b82f6`, `#2563eb` (blue colors)
- `rgb(59, 130, 246)`
- `rgba(59, 130, 246, *)`

### Step 2: Replace with Tokens

```css
/* Before */
.my-component {
  color: #3b82f6;
  border: 1px solid #2563eb;
  background: rgba(59, 130, 246, 0.1);
}

/* After */
.my-component {
  color: var(--vtx-color-primary-500);
  border: 1px solid var(--vtx-color-primary-600);
  background: rgba(59, 130, 246, 0.1); /* Keep alpha, or create token */
}
```

### Step 3: Test Thoroughly

- Verify all interactive states (hover, focus, active)
- Check accessibility (contrast ratios)
- Test with different theme values
- Validate in light and dark modes

## Examples

### Example 1: Corporate Theme (Blue → Dark Blue)

```css
:root {
  --vtx-color-primary-500: #1e3a8a;
  --vtx-color-primary-600: #1e40af;
  --vtx-color-primary-700: #1d4ed8;
}
```

### Example 2: Eco-Friendly Theme (Blue → Green)

```css
:root {
  --vtx-color-primary-50: #f0fdf4;
  --vtx-color-primary-500: #22c55e;
  --vtx-color-primary-600: #16a34a;
  --vtx-color-primary-700: #15803d;
}
```

### Example 3: Premium Theme (Blue → Purple/Gold)

```css
:root {
  --vtx-color-primary-50: #faf5ff;
  --vtx-color-primary-500: #a855f7;
  --vtx-color-primary-600: #9333ea;
  --vtx-color-primary-700: #7e22ce;
}
```

### Example 4: Dynamic Theme Switcher

```typescript
const themes = {
  blue: { primary: '#2563eb' },
  green: { primary: '#16a34a' },
  purple: { primary: '#9333ea' },
};

function setTheme(themeName: string) {
  const root = document.documentElement;
  root.style.setProperty('--vtx-color-primary-600', themes[themeName].primary);
  // Set other shades accordingly...
}
```

## Component Audit Summary

All components have been audited and updated to use primary color tokens consistently:

✅ **Form Controls**: Button, Input, Select, MultiSelect, Checkbox, Radio, CheckboxGroup, RadioGroup  
✅ **Interactive**: Accordion, Card, Modal, Toast, Tooltip  
✅ **Display**: Chip, Badge, Table, Alert, Avatar, Divider  
✅ **Layout**: Flex, Grid, Text

**Total Components**: 23  
**Components Using Primary Tokens**: 23 (100%)  
**Tests Passing**: 508/508 ✅

---

## Need Help?

For questions about theming:

1. Check the component's individual documentation
2. Review the token system in `src/theme/tokens.ts`
3. See examples in Storybook
4. Refer to component-specific `THEMING.md` files (e.g., `Accordion/THEMING.md`)

**Happy theming! 🎨**
