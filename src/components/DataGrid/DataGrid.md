# DataGrid

## 1. Overview
The **DataGrid** component is a powerful table solution designed for handling large datasets with advanced features like sorting, filtering, pagination, and selection. It is essential for admin panels and data-heavy applications.

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { DataGrid } from '@/components/DataGrid';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `DataGridColumn[]` | required | Array of column definitions. |
| `rows` | `any[]` | required | Array of data objects. |
| `checkboxSelection` | `boolean` | `false` | Enables row selection checkboxes. |
| `pagination` | `boolean` | `true` | Enables pagination controls. |
| `pageSize` | `number` | `10` | Rows per page. |
| `loading` | `boolean` | `false` | Shows loading spinner or skeleton. |
| `skeletonLoader` | `boolean` | `false` | Use skeleton rows instead of spinner. |
| `autoHeight` | `boolean` | `false` | Adjusts height based on row count. |
| `density` | `'compact' \| 'standard' \| 'comfortable'` | `'standard'` | Vertical density of rows. |
| `filterModel` | `GridFilterModel` | `undefined` | Controlled filter state. |
| `onRowSelectionModelChange` | `(ids) => void` | `undefined` | Callback for selection changes. |

### Column Definition
| Property | Type | Description |
|----------|------|-------------|
| `field` | `string` | Key in the row data. |
| `headerName` | `string` | Title of the column. |
| `width` | `number` | Fixed width. |
| `flex` | `number` | Flex grow factor. |
| `renderCell` | `(params) => ReactNode` | Custom cell renderer. |
| `sortable` | `boolean` | Enable sorting (default true). |
| `pinned` | `'left' \| 'right' \| false` | Sticky column. |

## 4. Accessibility
- **Table Role**: Renders a semantic `<table>`.
- **Keyboard**: Supports standard keyboard navigation.
- **ARIA**: Sort headers use `aria-sort`. Selection checkboxes use `aria-label`.

## 5. Best Practices
- **Performance**: Use `pagination` for datasets > 100 rows.
- **Column Widths**: Define `minWidth` to prevent columns from collapsing too much.
- **RenderCell**: Use for complex content like avatars, badges, or action buttons.

## 6. Integration Notes
- Highly customizable via `initialState` or controlled props.
- Can fetch data server-side by listening to `onPageChange` (if implemented manually via controlled props).

## 7. Do’s and Don’ts
- **Do** provide a stable `getRowId` if your data doesn't have an `id` field.
- **Don't** try to render thousands of rows without pagination or virtualization.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
