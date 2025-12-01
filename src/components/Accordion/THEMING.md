# Accordion Component Theming

The Accordion component is fully customizable using CSS custom properties (CSS variables). This allows you to easily theme and customize the appearance without modifying the component code.

## Available CSS Custom Properties

### Layout & Structure

```css
--accordion-radius                /* Border radius for default variant (default: 12px) */
--accordion-item-radius           /* Border radius for bordered variant items (default: 8px) */
--accordion-item-radius-lg        /* Border radius for separated variant items (default: 10px) */
--accordion-spacing               /* Spacing between items in bordered variant (default: 8px) */
--accordion-spacing-lg            /* Spacing between items in separated variant (default: 16px) */
--accordion-divider-spacing       /* Spacing for dividers in bordered variant (default: 12px) */
```

### Colors - Light Mode

```css
--accordion-bg                    /* Background color (default: #ffffff) */
--accordion-border                /* Border color (default: #e5e7eb) */
--accordion-border-hover          /* Border color on hover (default: #d1d5db) */
--accordion-divider               /* Divider line color (default: #e5e7eb) */
--accordion-separated-border      /* Border for separated variant (default: #f3f4f6) */

/* Header */
--accordion-header-color          /* Header text color (default: #1f2937) */
--accordion-header-hover-bg       /* Header background on hover (default: gradient) */
--accordion-header-open-bg        /* Header background when open (default: gradient) */
--accordion-header-open-color     /* Header text color when open (default: #0f172a) */
--accordion-header-open-border    /* Header border when open (default: #e5e7eb) */

/* Content */
--accordion-content-bg            /* Content area background (default: #fafbfc) */
--accordion-content-border        /* Content area border (default: #e5e7eb) */
--accordion-body-color            /* Body text color (default: #4b5563) */

/* Icon */
--accordion-icon-color            /* Icon color (default: #6b7280) */
--accordion-icon-bg               /* Icon background (default: rgba(59, 130, 246, 0.1)) */
--accordion-icon-color-open       /* Icon color when open (default: #3b82f6) */
--accordion-icon-bg-open          /* Icon background when open (default: rgba(59, 130, 246, 0.2)) */
--accordion-icon-color-hover      /* Icon color on hover (default: #3b82f6) */
--accordion-icon-bg-hover         /* Icon background on hover (default: rgba(59, 130, 246, 0.15)) */
--accordion-icon-size             /* Icon container size (default: 24px) */
--accordion-icon-radius           /* Icon border radius (default: 50%) */

/* States */
--accordion-disabled-color        /* Text color when disabled (default: #9ca3af) */
--accordion-disabled-opacity      /* Opacity when disabled (default: 0.5) */
--accordion-focus-color           /* Focus outline color (default: #3b82f6) */
--accordion-focus-radius          /* Focus outline radius (default: 6px) */
--accordion-focus-shadow          /* Focus box shadow (default: 0 0 0 4px rgba(59, 130, 246, 0.1)) */
--accordion-loading-opacity       /* Opacity when loading (default: 0.7) */
--accordion-loading-duration      /* Loading animation duration (default: 1s) */
```

### Colors - Dark Mode

```css
--accordion-bg-dark               /* Dark mode background (default: #1f2937) */
--accordion-border-dark           /* Dark mode border (default: #374151) */
--accordion-divider-dark          /* Dark mode divider (default: #4b5563) */
--accordion-header-color-dark     /* Dark mode header text (default: #f9fafb) */
--accordion-header-hover-bg-dark  /* Dark mode header hover background (default: gradient) */
--accordion-content-bg-dark       /* Dark mode content background (default: #111827) */
--accordion-content-border-dark   /* Dark mode content border (default: #374151) */
--accordion-body-color-dark       /* Dark mode body text (default: #d1d5db) */
--accordion-icon-color-dark       /* Dark mode icon color (default: #9ca3af) */
--accordion-icon-bg-dark          /* Dark mode icon background (default: rgba(59, 130, 246, 0.2)) */
--accordion-icon-color-open-dark  /* Dark mode icon color when open (default: #60a5fa) */
--accordion-icon-bg-open-dark     /* Dark mode icon background when open (default: rgba(59, 130, 246, 0.3)) */
```

### Typography

```css
--accordion-header-font-weight    /* Header font weight (default: 600) */
--accordion-header-line-height    /* Header line height (default: 1.5) */
--accordion-header-open-font-weight /* Header font weight when open (default: 700) */
--accordion-body-font-size        /* Body font size (default: 0.95em) */
--accordion-body-line-height      /* Body line height (default: 1.7) */
```

### Size-Specific Properties

```css
/* Small */
--accordion-sm-padding            /* Small size padding (default: 12px 16px) */
--accordion-sm-font-size          /* Small size font size (default: 14px) */
--accordion-sm-body-font-size     /* Small size body font size (default: 14px) */
--accordion-sm-min-height         /* Small size minimum height (default: 48px) */
--accordion-sm-icon-size          /* Small size icon size (default: 20px) */

/* Medium */
--accordion-md-padding            /* Medium size padding (default: 16px 20px) */
--accordion-md-font-size          /* Medium size font size (default: 16px) */
--accordion-md-body-font-size     /* Medium size body font size (default: 15px) */
--accordion-md-min-height         /* Medium size minimum height (default: 56px) */
--accordion-md-icon-size          /* Medium size icon size (default: 24px) */

/* Large */
--accordion-lg-padding            /* Large size padding (default: 20px 24px) */
--accordion-lg-font-size          /* Large size font size (default: 18px) */
--accordion-lg-body-font-size     /* Large size body font size (default: 16px) */
--accordion-lg-min-height         /* Large size minimum height (default: 64px) */
--accordion-lg-icon-size          /* Large size icon size (default: 28px) */
```

### Shadows & Effects

```css
--accordion-shadow                /* Default variant shadow */
--accordion-shadow-dark           /* Default variant shadow in dark mode */
--accordion-item-shadow           /* Bordered variant item shadow */
--accordion-item-shadow-hover     /* Bordered variant item shadow on hover */
--accordion-separated-shadow      /* Separated variant shadow */
--accordion-separated-shadow-hover /* Separated variant shadow on hover */
--accordion-separated-shadow-hover-dark /* Separated variant shadow on hover in dark mode */
```

### Transitions

```css
--accordion-icon-transition       /* Icon rotation transition (default: 0.3s) */
--accordion-content-transition    /* Content expand/collapse transition (default: 0.3s) */
--accordion-content-max-height    /* Maximum height for expanded content (default: 500px) */
```

### Gradients

```css
--accordion-divider-gradient      /* Divider gradient for separated variant */
--accordion-divider-gradient-dark /* Divider gradient for separated variant in dark mode */
```

## Usage Examples

### Basic Theming

```css
:root {
  --accordion-bg: #f8f9fa;
  --accordion-border: #dee2e6;
  --accordion-header-color: #212529;
}
```

### Custom Brand Colors

```css
:root {
  --accordion-icon-bg: rgba(220, 38, 38, 0.1);
  --accordion-icon-color-open: #dc2626;
  --accordion-icon-bg-open: rgba(220, 38, 38, 0.2);
  --accordion-focus-color: #dc2626;
  --accordion-header-hover-bg: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
}
```

### Compact Variant

```css
:root {
  --accordion-md-padding: 12px 16px;
  --accordion-md-min-height: 44px;
  --accordion-icon-size: 20px;
  --accordion-content-max-height: 300px;
}
```

### High Contrast Theme

```css
:root {
  --accordion-bg: #000000;
  --accordion-border: #ffffff;
  --accordion-header-color: #ffffff;
  --accordion-body-color: #e0e0e0;
  --accordion-icon-color: #ffffff;
  --accordion-disabled-opacity: 0.3;
}
```

### Component-Specific Override

```css
.my-custom-accordion {
  --accordion-radius: 8px;
  --accordion-header-font-weight: 700;
  --accordion-icon-bg: transparent;
  --accordion-content-bg: transparent;
}
```

## Integration with Design Tokens

The Accordion component integrates seamlessly with your design token system by using fallback values:

```css
--accordion-bg: var(--color-background, #ffffff) --accordion-border: var(--color-border, #e5e7eb)
  --accordion-spacing: var(--spacing-2, 8px);
```

This means you can set global design tokens and the Accordion will automatically use them:

```css
:root {
  /* Global tokens */
  --color-background: #ffffff;
  --color-border: #e5e7eb;
  --color-primary: #3b82f6;
  --spacing-2: 8px;
  --spacing-4: 16px;
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
