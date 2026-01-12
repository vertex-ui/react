# Table

## 1. Overview
The **Table** component is a lighter alternative to `DataGrid` for simpler data presentation. It supports basic features like hover effects, striping, and vertical scrolling.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Table } from '@/components/Table';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn[]` | required | Columns definition. |
| `data` | `any[]` | required | Row data. |
| `striped` | `boolean` | `false` | Zebra striping. |
| `bordered` | `boolean` | `false` | Cell borders. |
| `hoverable` | `boolean` | `true` | Hover effect. |
| `maxHeight` | `string` | `undefined` | Fixed header scroll. |
| `selectable` | `boolean` | `false` | Row selection. |
| `onRowClick` | `(row, index, e) => void` | `undefined` | Row click handler. |

## 4. Accessibility
- **Structure**: Semantic `<table>`, `<thead>`, `<tbody>`.
- **Caption**: Supports `caption` prop.

## 5. Best Practices
- **Simplicity**: Use `Table` for static or small lists (< 50 items).
- **Complexity**: Use `DataGrid` for sorting, filtering, and pagination requirements.

## 6. Integration Notes
- Use `render` function in columns for custom cell content (badges, actions).

## 7. Do’s and Don’ts
- **Do** define column widths for consistent layout.
- **Don't** use table for non-tabular layout (use Grid/Flex).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
