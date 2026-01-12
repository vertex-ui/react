# Textarea

## 1. Overview
The **Textarea** component is a multi-line text input. It supports auto-resizing, character counts, and validation states.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Textarea } from '@/components/Textarea';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Content value. |
| `label` | `string` | `undefined` | Label text. |
| `placeholder` | `string` | `undefined` | Placeholder text. |
| `minRows` | `number` | `3` | Minimum height in rows. |
| `maxRows` | `number` | `undefined` | Maximum height (scrolls after). |
| `autoResize` | `boolean` | `false` | Grow with content. |
| `showCount` | `boolean` | `false` | Character counter. |
| `maxLength` | `number` | `undefined` | Max characters. |

## 4. Accessibility
- **Labeling**: Associated label.
- **Resize**: Users can manually resize unless disabled via CSS.

## 5. Best Practices
- **Content**: Use for long-form text (bios, descriptions).
- **Size**: Set a reasonable `minRows` so users know it's a multi-line field.

## 6. Integration Notes
- Standard `onChange` event.

## 7. Do’s and Don’ts
- **Do** use `autoResize` for better UX.
- **Don't** use for single-line input (use Input).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
