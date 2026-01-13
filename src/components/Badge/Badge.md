# Badge

## 1. Overview
The **Badge** component is a small visual indicator used to display status, counts, categories, or short labels. In enterprise UIs, badges are essential for highlighting new items, error states, or tagging content.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Badge } from '@/components/Badge';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | The content to display. |
| `variant` | `'neutral' \| 'primary' \| 'success' \| 'error' \| ...` | `'neutral'` | Semantic color style. |
| `size` | `Size` | `'md'` | Size of the badge. |
| `pill` | `boolean` | `false` | Applies fully rounded pill shape. |
| `dot` | `boolean` | `false` | Shows a small status dot before text. |
| `outline` | `boolean` | `false` | Uses a bordered style instead of filled background. |
| `icon` | `ReactNode` | `undefined` | Icon to display before text. |
| `onRemove` | `() => void` | `undefined` | If provided, shows a close button for dismissal. |
| `maxLength` | `number` | `undefined` | Truncates text exceeding this length. |

## 4. Accessibility
- **Reading**: Content is available to screen readers.
- **Interactive**: If `onRemove` is present, the close button is keyboard accessible and has an `aria-label`.
- **Contrast**: Automatic text color adjustment ensures compliance with contrast ratios (unless overridden).

## 5. Best Practices
- **Usage**: Use for short strings (1-2 words) or numbers.
- **Color**: Stick to semantic colors (Green = Success, Red = Error) to convey meaning instantly.
- **Truncation**: Use `maxLength` for user-generated tags to prevent layout breakage.

## 6. Integration Notes
- Frequently used inside `Table` cells for status columns.
- Used in `AdminHeader` or `Tabs` to show counts (e.g., "Notifications (3)").

## 7. Do’s and Don’ts
- **Do** use `pill` for numeric counts.
- **Do** use `dot` for live status indicators (e.g., "Online").
- **Don't** put long sentences inside a badge.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
