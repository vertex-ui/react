# Container

## 1. Overview
The **Container** component centers your content horizontally. It's the most basic layout element that constrains the content width based on the current breakpoint, ensuring a readable line length and consistent margins across the application.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Container } from '@/components/Container';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | The content to wrap. |
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'fluid'` | `'lg'` | The max-width of the container. |
| `disableGutters` | `boolean` | `false` | Removes the left and right padding. |
| `fluid` | `boolean` | `false` | Alias for `maxWidth="fluid"`. |

## 4. Accessibility
- **Structure**: It is a layout primitive and typically does not have semantic meaning itself (renders a `div`), but it helps organize accessible content.

## 5. Best Practices
- **Hierarchy**: Use as the top-level wrapper for page content or sections.
- **Fluidity**: Use `fluid` for full-width layouts (e.g., hero sections with background colors) while nesting another `Container` inside to align text.

## 6. Integration Notes
- Works with the grid system to align content.
- Responsive by default.

## 7. Do’s and Don’ts
- **Do** use to center page content.
- **Don't** nest containers unnecessarily; one per section is usually enough.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
