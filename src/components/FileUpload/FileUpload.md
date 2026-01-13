# FileUpload

## 1. Overview
The **FileUpload** component provides a drag-and-drop zone for uploading files. It handles file selection, validation (size/type), preview generation, and progress simulation.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { FileUpload } from '@/components/FileUpload';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onUpload` | `(files) => void` | required | Callback with file list. |
| `accept` | `string` | `undefined` | Allowed mime types (e.g. "image/*"). |
| `multiple` | `boolean` | `false` | Allow multiple files. |
| `maxSize` | `number` | `undefined` | Max size in bytes. |
| `label` | `string` | `undefined` | Label above dropzone. |
| `helperText` | `string` | `undefined` | Instructions. |
| `disabled` | `boolean` | `false` | Disable interactions. |
| `initialFiles` | `FileItem[]` | `[]` | Pre-populated files. |

## 4. Accessibility
- **Keyboard**: Dropzone is focusable and can be activated with Enter/Space to open file dialog.
- **Labels**: Associated label and helper text.
- **Feedback**: Error messages are announced.

## 5. Best Practices
- **Feedback**: Always show upload progress.
- **Validation**: Validate size client-side to save bandwidth.
- **Previews**: Show image previews to confirm selection.

## 6. Integration Notes
- Does not handle the actual HTTP upload; it simulates progress. You must implement the API call in `onUpload`.

## 7. Do’s and Don’ts
- **Do** provide clear instructions on allowed formats.
- **Don't** rely solely on client-side validation for security.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
