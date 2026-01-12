# Card

## 1. Overview
The **Card** component is a flexible container for grouping related content and actions. It provides a standard surface with options for elevation, borders, and content organization (header/footer). Cards are fundamental to modern dashboard designs.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Card } from '@/components/Card';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Main content of the card. |
| `variant` | `'elevated' \| 'outlined' \| 'filled'` | `'elevated'` | Visual style of the card. |
| `header` | `ReactNode` | `undefined` | Header content area. |
| `footer` | `ReactNode` | `undefined` | Footer content area. |
| `noPadding` | `boolean` | `false` | Removes default padding (good for full-width images/tables). |
| `padding` | `string` | `undefined` | Custom padding value. |
| `hoverable` | `boolean` | `false` | Adds shadow/lift effect on hover. |
| `clickable` | `boolean` | `false` | Indicates interactive card (pointer cursor). |
| `divider` | `boolean` | `false` | Adds lines separating header/content/footer. |

## 4. Accessibility
- **Structure**: Uses `div` structure. Use headings inside for document outline.
- **Interaction**: If `clickable` and `onClick` are used, ensure it is keyboard accessible (add `tabIndex` and key handlers) or wrap content in a button.

## 5. Best Practices
- **Content**: Group logically related information.
- **Images**: Use `noPadding` when placing a full-width image at the top (`CardMedia` pattern).
- **Actions**: Place primary actions in the `footer`.

## 6. Integration Notes
- Wraps any content.
- Often used in `Grid` layouts to create dashboard widgets.
- `DashboardCard` is a specialized implementation of this component.

## 7. Do’s and Don’ts
- **Do** use `outlined` variant for secondary cards or when on a gray background.
- **Don't** nest cards deeply; it creates visual clutter.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
