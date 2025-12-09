# 🎨 VTX Accordion Component - Comprehensive Theming Guide

The VTX Accordion component has been completely redesigned to fully integrate with the VTX design system, offering beautiful visual states, enhanced accessibility, and comprehensive theming capabilities.

## ✨ Design Philosophy

The redesigned accordion follows these core principles:
- **VTX Token Integration**: Full utilization of VTX design tokens for consistent theming
- **Beautiful Visual States**: Enhanced hover, focus, and active states with smooth animations
- **Accessibility First**: WCAG compliant with proper ARIA attributes and keyboard navigation
- **Performance Optimized**: Efficient animations with respect for user preferences
- **Dark Mode Ready**: Automatic dark mode support with beautiful color adaptations

## 🎯 Key Features

### Visual Variants
- **Default**: Clean card-like appearance with subtle shadows
- **Bordered**: Individual cards with spacing and enhanced hover effects  
- **Separated**: Floating cards with enhanced shadows and animations
- **Flush**: Minimal design without borders

### Size Variants
- **Small (sm)**: Compact spacing for dense layouts
- **Medium (md)**: Standard spacing (default)
- **Large (lg)**: Spacious layout for emphasis

### Enhanced States
- **Loading**: Pulse animation for async content
- **Disabled**: Reduced opacity with pointer events disabled
- **Status Indicators**: Success, warning, error, and featured states
- **Custom Icons**: Support for custom expand/collapse icons

## 🛠️ VTX Design Token Usage

The accordion now uses VTX design tokens exclusively for consistent theming:

### Core Design Tokens Used

```css
/* Colors */
--vtx-color-primary-*     /* Primary color scale for accents and interactive states */
--vtx-color-secondary-*   /* Secondary colors for featured states */
--vtx-color-neutral-*     /* Neutral colors for backgrounds and text */
--vtx-color-success-*     /* Success state indicators */
--vtx-color-warning-*     /* Warning state indicators */
--vtx-color-error-*       /* Error state indicators */

/* Spacing */
--vtx-spacing-*          /* Consistent spacing scale (1-24) */

/* Typography */
--vtx-font-family-sans   /* Primary font family */
--vtx-font-size-*        /* Font size scale (xs, sm, base, lg, xl, 2xl) */
--vtx-font-weight-*      /* Font weight scale (normal, medium, semibold, bold) */
--vtx-line-height-*      /* Line height scale (tight, normal, relaxed) */

/* Radius */
--vtx-radius-*           /* Border radius scale (sm, base, md, lg, xl, 2xl, full) */

/* Shadows */
--vtx-shadow-*           /* Shadow scale (sm, base, md, lg, xl) */

/* Transitions */
--vtx-transition-*       /* Transition timing (fast, base, slow) */
--accordion-disabled-opacity      /* Opacity when disabled (default: 0.5) */
--accordion-focus-color           /* Focus outline color (default: #3b82f6) */
--accordion-focus-radius          /* Focus outline radius (default: 6px) */
--accordion-focus-shadow          /* Focus box shadow (default: 0 0 0 4px rgba(59, 130, 246, 0.1)) */
--accordion-loading-opacity       /* Opacity when loading (default: 0.7) */
--accordion-loading-duration      /* Loading animation duration (default: 1s) */
```

## 🎨 Component Structure & Styling

### Accordion Container
```css
.accordion {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: var(--vtx-font-family-sans);
  font-size: var(--vtx-font-size-base);
  line-height: var(--vtx-line-height-normal);
  color: var(--vtx-color-neutral-900);
}
```

### Variant-Specific Styling

#### Default Variant
```css
.accordion--default {
  background: var(--vtx-color-neutral-50);
  border: 1px solid var(--vtx-color-neutral-200);
  border-radius: var(--vtx-radius-xl);
  overflow: hidden;
  box-shadow: var(--vtx-shadow-base);
  transition: box-shadow var(--vtx-transition-base);
}

.accordion--default:hover {
  box-shadow: var(--vtx-shadow-md);
}
```

#### Bordered Variant
```css
.accordion--bordered .accordion-item {
  background: white;
  border: 1px solid var(--vtx-color-neutral-200);
  border-radius: var(--vtx-radius-lg);
  box-shadow: var(--vtx-shadow-sm);
  transition: 
    box-shadow var(--vtx-transition-base),
    border-color var(--vtx-transition-base),
    transform var(--vtx-transition-fast);
}

.accordion--bordered .accordion-item:hover {
  border-color: var(--vtx-color-primary-300);
  box-shadow: var(--vtx-shadow-md);
  transform: translateY(-1px);
}
```

#### Separated Variant
```css
.accordion--separated .accordion-item {
  background: white;
  border: 1px solid var(--vtx-color-neutral-100);
  border-radius: var(--vtx-radius-xl);
  box-shadow: 
    var(--vtx-shadow-base),
    0 0 0 1px rgba(255, 255, 255, 0.8);
  transition: 
    box-shadow var(--vtx-transition-base),
    transform var(--vtx-transition-base);
  backdrop-filter: blur(10px);
}

.accordion--separated .accordion-item:hover {
  box-shadow: 
    var(--vtx-shadow-xl),
    0 0 0 1px var(--vtx-color-primary-100);
  transform: translateY(-2px);
}
```

### Interactive States

#### Header Styling
```css
.accordion-item-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--vtx-spacing-4) var(--vtx-spacing-5);
  background: white;
  cursor: pointer;
  transition: 
    background-color var(--vtx-transition-base),
    color var(--vtx-transition-base),
    box-shadow var(--vtx-transition-base);
}

.accordion-item-header:hover {
  background: linear-gradient(135deg, var(--vtx-color-primary-50) 0%, var(--vtx-color-neutral-50) 100%);
}

.accordion-item-header:focus-visible {
  outline: 2px solid var(--vtx-color-primary-500);
  outline-offset: -2px;
  box-shadow: 
    inset 0 0 0 2px var(--vtx-color-primary-500),
    0 0 0 4px var(--vtx-color-primary-100);
}
```

#### Open State Styling
```css
.accordion-item--open .accordion-item-header {
  background: linear-gradient(135deg, var(--vtx-color-primary-100) 0%, var(--vtx-color-primary-50) 100%);
  border-bottom: 1px solid var(--vtx-color-primary-200);
}

.accordion-item--open .accordion-item-header-content {
  color: var(--vtx-color-primary-800);
  font-weight: var(--vtx-font-weight-bold);
}
```

### Status Indicators

#### Success State
```css
.accordion-item--success .accordion-item-header {
  border-left: 4px solid var(--vtx-color-success-500);
}
```

#### Warning State
```css
.accordion-item--warning .accordion-item-header {
  border-left: 4px solid var(--vtx-color-warning-500);
}
```

#### Error State
```css
.accordion-item--error .accordion-item-header {
  border-left: 4px solid var(--vtx-color-error-500);
}
```

#### Featured State
```css
.accordion-item--featured .accordion-item-header {
  background: linear-gradient(135deg, var(--vtx-color-primary-50) 0%, var(--vtx-color-secondary-50) 100%);
  border-left: 4px solid var(--vtx-color-primary-500);
}
```

### Chevron Icon Styling

```css
.accordion-item-chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--vtx-spacing-6);
  height: var(--vtx-spacing-6);
  margin-left: var(--vtx-spacing-3);
  border-radius: var(--vtx-radius-full);
  background: var(--vtx-color-primary-100);
  color: var(--vtx-color-primary-600);
  transition: 
    transform var(--vtx-transition-base),
    background-color var(--vtx-transition-base),
    color var(--vtx-transition-base);
  flex-shrink: 0;
}

.accordion-item-chevron.open {
  transform: rotate(180deg);
  background: var(--vtx-color-primary-200);
  color: var(--vtx-color-primary-700);
}
```

## 🌙 Dark Mode Support

The accordion automatically adapts to dark mode with beautiful color transitions:

```css
[data-theme="dark"] .accordion,
@media (prefers-color-scheme: dark) {
  .accordion {
    color: var(--vtx-color-neutral-100);
  }

  .accordion--default {
    background: var(--vtx-color-neutral-800);
    border-color: var(--vtx-color-neutral-700);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .accordion-item-header {
    background: var(--vtx-color-neutral-900);
  }

  .accordion-item-header:hover {
    background: linear-gradient(135deg, var(--vtx-color-neutral-800) 0%, var(--vtx-color-neutral-700) 100%);
  }

  .accordion-item-chevron {
    background: var(--vtx-color-primary-900);
    color: var(--vtx-color-primary-300);
  }
}
```

## 📱 Size Variants

### Small Size
```css
.accordion--sm .accordion-item-header {
  padding: var(--vtx-spacing-3) var(--vtx-spacing-4);
  font-size: var(--vtx-font-size-sm);
  min-height: 48px;
}

.accordion--sm .accordion-item-body {
  padding: var(--vtx-spacing-4);
  font-size: var(--vtx-font-size-xs);
}
```

### Large Size
```css
.accordion--lg .accordion-item-header {
  padding: var(--vtx-spacing-5) var(--vtx-spacing-6);
  font-size: var(--vtx-font-size-lg);
  min-height: 64px;
}

.accordion--lg .accordion-item-body {
  padding: var(--vtx-spacing-6);
  font-size: var(--vtx-font-size-base);
}
```

## 🎛️ Custom Theming

### Override VTX Tokens
You can customize the accordion by overriding VTX design tokens:

```css
:root {
  /* Custom primary color */
  --vtx-color-primary-500: #8b5cf6;
  --vtx-color-primary-600: #7c3aed;
  --vtx-color-primary-700: #6d28d9;
  
  /* Custom spacing */
  --vtx-spacing-4: 1.25rem; /* 20px instead of 16px */
  
  /* Custom border radius */
  --vtx-radius-lg: 1rem; /* 16px instead of 8px */
}
```

### Component-Specific Overrides
For more specific control, you can target accordion classes:

```css
.my-custom-accordion {
  --vtx-color-primary-100: #f0f9ff;
  --vtx-color-primary-500: #0ea5e9;
  --vtx-shadow-base: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.my-custom-accordion .accordion-item-header {
  font-weight: var(--vtx-font-weight-bold);
  letter-spacing: 0.025em;
}

.my-custom-accordion .accordion-item--featured .accordion-item-header {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}
```

## ♿ Accessibility Features

The accordion includes comprehensive accessibility features:

- **ARIA Labels**: Proper `aria-expanded`, `aria-controls`, and `aria-labelledby` attributes
- **Keyboard Navigation**: Full keyboard support with Enter and Space keys
- **Focus Management**: Clear focus indicators with `focus-visible` support
- **Screen Reader Support**: Status announcements and semantic markup
- **High Contrast**: Enhanced borders and focus indicators in high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## 🎯 Usage Examples

### Basic Usage
```tsx
<Accordion
  variant="default"
  size="md"
  items={[
    {
      id: 'item1',
      header: 'Getting Started',
      children: <p>Welcome to the accordion!</p>
    }
  ]}
/>
```

### Advanced Configuration
```tsx
<Accordion
  variant="separated"
  size="lg"
  spacing="spacious"
  allowMultiple
  showChevron
  iconType="plus-minus"
  chevronPosition="left"
  defaultOpenItems={['item1']}
  items={items}
/>
```

### With Status Indicators
```tsx
const items = [
  {
    id: 'success',
    header: 'Completed Task',
    status: 'success',
    children: <p>This task is complete!</p>
  },
  {
    id: 'warning',
    header: 'Needs Attention',
    status: 'warning', 
    children: <p>This needs your attention.</p>
  }
];

<Accordion
  variant="bordered"
  items={items}
/>
```

## 🎨 Design Guidelines

### When to Use Each Variant

- **Default**: General content organization, documentation, FAQ sections
- **Bordered**: Settings panels, configuration options, card-based layouts  
- **Separated**: Marketing content, feature showcases, premium content
- **Flush**: Minimal interfaces, mobile layouts, nested accordions

### Best Practices

1. **Content Organization**: Group related content logically
2. **Loading States**: Use loading prop for async content
3. **Status Indicators**: Provide visual feedback for different states
4. **Responsive Design**: Test across different screen sizes
5. **Keyboard Navigation**: Always ensure keyboard accessibility
6. **Performance**: Use `disableAnimations` for performance-critical scenarios

The redesigned VTX Accordion component provides a perfect balance of beauty, functionality, and accessibility while maintaining full integration with your design system!
  --radius-md: 8px;

  /* These will be used by Accordion automatically */
}
```

## Tips

1. **Start with global tokens**: Define your base design tokens first, then override specific accordion properties as needed.
2. **Use CSS custom properties for runtime theming**: You can change themes dynamically by updating CSS variables via JavaScript.
3. **Leverage the cascade**: Apply custom properties at different levels (`:root`, `.theme-class`, or component level) for flexible theming.
4. **Dark mode**: All dark mode variables are applied automatically via `@media (prefers-color-scheme: dark)`.
5. **Gradients**: For custom gradients, provide the full `linear-gradient()` value as the variable value.
