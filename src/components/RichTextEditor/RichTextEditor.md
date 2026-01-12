# RichTextEditor

## 1. Overview
The **RichTextEditor** component provides a WYSIWYG editing experience. It allows users to format text (bold, italic), create lists, and insert links without writing HTML.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { RichTextEditor } from '@/components/RichTextEditor';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | HTML content. |
| `onChange` | `(html, text) => void` | `undefined` | Change callback. |
| `toolbarButtons` | `ToolbarButton[]` | all | Visible toolbar actions. |
| `maxLength` | `number` | `undefined` | Character limit (text only). |
| `minHeight` | `number` | `200` | Minimum editor height. |
| `placeholder` | `string` | `undefined` | Empty state text. |

## 4. Accessibility
- **Role**: `role="textbox"`, `aria-multiline="true"`.
- **Keyboard**: Standard rich text navigation. Toolbar is keyboard accessible.

## 5. Best Practices
- **Sanitization**: Always sanitize the output HTML on the server before rendering it to prevent XSS.
- **Usage**: Use for comments, bios, or article bodies.

## 6. Integration Notes
- Uses `contentEditable` internally.
- Outputs HTML string.

## 7. Do’s and Don’ts
- **Do** allow users to clear formatting.
- **Don't** use for simple inputs; use `Textarea` instead.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
