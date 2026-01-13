# Button

## 1. Overview
The **Button** component is a primary interactive element used to trigger actions within the application. It provides a standardized look and feel for user interactions, ensuring consistency across the enterprise platform. It supports various visual styles, sizes, loading states, and can function as both a button and a navigation link.

## 2. Installation & Import
Ensure the component library is installed in your project.

```bash
npm install @your-company/components
```

Import the Button component:

```tsx
import { Button } from '@/components/Button';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'success' \| 'warning'` | `'primary'` | Visual style variant of the button. |
| `size` | `Size` | `'md'` | Size of the button. |
| `fullWidth` | `boolean` | `false` | If true, the button takes the full width of its container. |
| `loading` | `boolean` | `false` | Shows a loading indicator and disables interaction. |
| `loadingText` | `string` | `undefined` | Custom text to display while loading. |
| `disabled` | `boolean` | `false` | Disables the button, preventing user interaction. |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon to display before the button text. |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon to display after the button text. |
| `iconOnly` | `boolean` | `false` | If true, renders the button with equal padding for icon-only usage. |
| `asLink` | `boolean` | `false` | Renders the button as an `<a>` element. Requires `href`. |
| `href` | `string` | `undefined` | URL for the link when `asLink` is true. |
| `target` | `string` | `undefined` | Target attribute for the link (e.g., `_blank`). |
| `textColor` | `string` | `undefined` | Optional custom text color. |
| `darkText` | `boolean` | `undefined` | Forces dark or light text color class. |

## 4. Accessibility
- **ARIA Roles**: Renders as a standard `<button>` or `<a>` tag.
- **Loading State**: When `loading` is true, `aria-busy="true"` and `aria-disabled="true"` are applied. The spinner has `role="status"` and `aria-label="Loading"`.
- **Keyboard Navigation**: Fully focusable via Tab. `Enter` and `Space` keys trigger the click event.
- **Link Support**: When `asLink` is used, it renders semantic `<a>` tags for proper screen reader announcement and navigation.

## 5. Best Practices
- **Performance**: Use the `loading` state to provide immediate feedback during async operations to prevent double submissions.
- **Consistency**: Stick to `primary` for main actions and `secondary` or `outline` for alternative actions to maintain visual hierarchy.
- **Scalability**: Use standard sizes (`sm`, `md`, `lg`) rather than overriding CSS to ensure responsiveness across devices.

## 6. Integration Notes
- Fits seamlessly into forms, dialogs, and navigation bars.
- Can be used within `Flex` or `Grid` layouts for alignment.
- Compatible with form libraries (e.g., React Hook Form) by passing `ref`.

## 7. Do’s and Don’ts
- **Do** use `loading` prop for async actions.
- **Do** provide `aria-label` for `iconOnly` buttons if no text is present (though `children` is usually required).
- **Don't** use `asLink` without an `href`.
- **Don't** mix multiple primary buttons in a single view if possible; prioritize one main action.

## 8. Versioning & Maintenance
- **Backward Compatibility**: Fully compatible with previous major versions.
- **Updates**: Check the changelog for any new variants or deprecated props.
