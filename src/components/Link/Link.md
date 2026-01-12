# Link

## 1. Overview
The **Link** component wraps standard navigation elements, ensuring accessible and consistent styling across the application. It supports client-side routing libraries (like React Router or Next.js) and visual variants.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Link } from '@/components/Link';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | required | The URL to navigate to. |
| `component` | `ElementType` | `undefined` | Custom link component (e.g., Next.js `Link`). |
| `variant` | `'body1' \| 'h1' ...` | `'body1'` | Text style variant. |
| `noUnderline` | `boolean` | `true` | Removes the underline. |
| `color` | `'primary' \| 'secondary' ...` | `'inherit'` | Text color. |
| `leftIcon` | `ReactNode` | `undefined` | Icon before text. |
| `rightIcon` | `ReactNode` | `undefined` | Icon after text. |
| `external` | `boolean` | `false` | Opens in new tab. |

## 4. Accessibility
- **Roles**: Renders an `<a>` tag.
- **External Links**: Adds `rel="noopener noreferrer"` automatically when `external` is true.
- **Keyboard**: Focusable and activatable with Enter key.

## 5. Best Practices
- **Routing**: Use the `component` prop to integrate with your app's router (prevents full page reloads).
- **Clarity**: Use underline or distinct color for inline links to distinguish them from regular text.

## 6. Integration Notes
- Pass `component={RouterLink}` globally via theme or locally via prop.

## 7. Do’s and Don’ts
- **Do** use descriptive link text (avoid "click here").
- **Don't** use `Link` for buttons; use `Button variant="link"` if it triggers an action instead of navigation.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
