# Table Component

A comprehensive table component for displaying large datasets. It features sorting, pagination, filtering, row selection, and expandable rows.

## Features

- **Sorting**: Clickable column headers to sort data.
- **Selection**: Checkbox-based row selection.
- **Pagination**: Integrated pagination controls.
- **Filtering**: Per-column filtering input.
- **Expandable Rows**: Reveal detailed content for specific rows.
- **Sticky Headers/Columns**: Fix headers and specific columns during scroll.
- **Loading State**: Skeleton loaders or spinner support.
- **Custom Rendering**: Fully customizable cell content.

## Installation

```tsx
import { Table } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const columns = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
];

const data = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' },
];

<Table
  columns={columns}
  data={data}
  getRowKey={(row) => row.id}
/>
```

## Columns Configuration

```tsx
const columns = [
  {
    key: 'amount',
    header: 'Amount',
    align: 'right',
    render: (row) => `$${row.amount.toFixed(2)}`
  },
  {
    key: 'status',
    header: 'Status',
    render: (row) => <Badge>{row.status}</Badge>
  }
];
```

## Sorting

Enable sorting on the table and specific columns.

```tsx
<Table
  sortable
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'age', header: 'Age', sortable: true }
  ]}
  data={users}
  // Optional manual control:
  // onSortChange={(key, direction) => fetchSortedData(key, direction)}
/>
```

## Selection

Enable row checkboxes.

```tsx
<Table
  selectable
  onSelectionChange={(selectedIds) => console.log(selectedIds)}
  data={data}
  getRowKey={(row) => row.id}
/>
```

## Pagination

Enable client-side pagination.

```tsx
<Table
  pagination
  rowsPerPage={10}
  rowsPerPageOptions={[10, 20, 50]}
  data={largeDataset}
  getRowKey={(row) => row.id}
/>
```

## Expandable Rows

Show nested content.

```tsx
<Table
  expandableRows
  renderExpandedRow={(row) => (
    <div style={{ padding: '16px' }}>
      <strong>Full Bio:</strong> {row.bio}
    </div>
  )}
  data={data}
  getRowKey={(row) => row.id}
/>
```

## Filtering

Enable column filters.

```tsx
<Table
  filterable
  columns={[
    { key: 'role', header: 'Role', filterable: true }
  ]}
  data={data}
  getRowKey={(row) => row.id}
/>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumn[]` | **required** | Column definitions |
| `data` | `T[]` | **required** | Data array |
| `getRowKey` | `(row) => id` | **required** | Row ID getter |
| `striped` | `boolean` | `false` | Striped rows |
| `hoverable` | `boolean` | `true` | Hover effect |
| `bordered` | `boolean` | `false` | Cell borders |
| `loading` | `boolean` | `false` | Loading state |
| `selectable` | `boolean` | `false` | Enable selection |
| `pagination` | `boolean` | `false` | Enable pagination |
| `expandableRows` | `boolean` | `false` | Enable expansion |
| `stickyHeader` | `boolean` | `false` | Sticky header |
| `maxHeight` | `string` | - | Table container height |

## Accessibility

- `<caption>` support via the `caption` prop.
- Proper table semantics (`<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>`).
- ARIA sorting attributes (`aria-sort`).
- Keyboard accessible sorting headers and pagination controls.
