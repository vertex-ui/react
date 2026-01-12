# Box

## 1. Overview
The **Box** component is the fundamental building block of the layout system. It serves as a wrapper that allows you to apply spacing, positioning, colors, and layout properties via props, eliminating the need for custom CSS classes for utility styling. It is comparable to `div` but with superpowers.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Box } from '@/components/Box';
```

## 3. Customization Options

| Prop | Type | Description |
|------|------|-------------|
| `as` | `ElementType` | The HTML tag to render (default: `div`). |
| `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` | `string \| number` | Margin properties. |
| `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` | `string \| number` | Padding properties. |
| `bg` | `string` | Background color. |
| `color` | `string` | Text color. |
| `display` | `string` | CSS display property (e.g., `flex`, `block`). |
| `w`, `h` | `string \| number` | Width and Height. |
| `border`, `borderRadius` | `string \| number` | Border styling. |
| `shadow` | `string` | Box shadow preset or value. |
| `position`, `top`, `left`, ... | `string \| number` | Positioning properties. |
| `flexDirection`, `justifyContent`, ... | `string` | Flexbox properties (when `display="flex"`). |

*(Note: Box supports almost all CSS properties as props)*

## 4. Accessibility
- **Semantic HTML**: Use the `as` prop to render semantic elements (e.g., `as="section"`, `as="nav"`) to ensure a proper document outline.
- **Defaults**: Renders a standard `div` by default, which is neutral.

## 5. Best Practices
- **Layout**: Use `Box` for grouping elements and applying margins/padding.
- **Refactoring**: Replace nested `div`s with clear `Box` components to improve code readability.
- **Styling**: Prefer prop-based styling over inline `style={{ ... }}` for consistency and type safety.

## 6. Integration Notes
- Acts as the base for more complex components like `Card`, `Flex`, and `Grid`.
- Can accept `ref` for direct DOM manipulation or measurement.

## 7. Do’s and Don’ts
- **Do** use `as="button"` and `onClick` for simple interactive wrappers.
- **Don't** use Box for complex interactive components where a dedicated component (like `Button`) exists; Box lacks default interactive styles/states.

## 8. Versioning & Maintenance
- **Performance**: Box is highly optimized but avoid excessive nesting depth (>20 levels) in performance-critical loops.
