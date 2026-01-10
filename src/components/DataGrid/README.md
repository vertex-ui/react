# DataGrid Component

A powerful data grid component for displaying and manipulating tabular data. It supports sorting, filtering, pagination, selection, and customization.

## Features

- **Sorting**: Multi-column sorting support.
- **Filtering**: Advanced filtering with various operators (contains, equals, starts with, etc.) and logic (AND/OR).
- **Pagination**: Client-side pagination with configurable page sizes.
- **Selection**: Row selection via checkboxes or click.
- **Columns**: Resizable, pinnable, and customizable columns.
- **Loading**: Loading states with skeleton loaders or spinners.
- **Styling**: Customizable density, row height, and styling.
- **Empty State**: Customizable empty state content.

## Installation

```tsx
import { DataGrid, DataGridColumn } from '@vtx-ui/react';
```

## Basic Usage

```tsx
const columns: DataGridColumn[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
];

<DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  checkboxSelection
/>
```

## Columns Configuration

The `columns` prop is an array of objects where each object represents a column.

| Property | Type | Description |
|----------|------|-------------|
| `field` | `string` | The key in the row data object. |
| `headerName` | `string` | The title of the column header. |
| `width` | `number` | Specific width of the column. |
| `flex` | `number` | Flex grow factor. |
| `type` | `'string' \| 'number' \| 'date' \| 'boolean'` | Data type (affects sorting/filtering). |
| `sortable` | `boolean` | Enable/disable sorting. |
| `filterable` | `boolean` | Enable/disable filtering. |
| `renderCell` | `(params) => ReactNode` | Custom cell renderer. |
| `valueGetter` | `(row) => any` | Custom value accessor. |
| `pinned` | `'left' \| 'right' \| false` | Pin column to side. |

## Sorting

Sorting is enabled by default for all columns. You can control the initial sort state or disable it per column.

```tsx
// Initial sort
<DataGrid
  initialState={{
    sorting: {
      sortModel: [{ field: 'age', sort: 'desc' }],
    },
  }}
  // ...
/>

// Disable sorting for a specific column
const columns = [
  { field: 'action', headerName: 'Action', sortable: false }
];
```

## Filtering

The DataGrid includes a powerful filtering engine.

```tsx
// Initial filter
<DataGrid
  initialState={{
    filter: {
      filterModel: {
        items: [{ field: 'firstName', operator: 'contains', value: 'Jo' }],
      },
    },
  }}
  // ...
/>
```

## Selection

Enable row selection with `checkboxSelection`.

```tsx
const [selection, setSelection] = useState([]);

<DataGrid
  checkboxSelection
  onRowSelectionModelChange={(newSelection) => {
    setSelection(newSelection);
  }}
  // ...
/>
```

## Pagination

Pagination is enabled by default.

```tsx
<DataGrid
  pageSize={10}
  pageSizeOptions={[5, 10, 25]}
  // ...
/>
```

## Loading State

```tsx
<DataGrid
  loading
  rows={[]}
  columns={columns}
/>
```

Skeleton loader:

```tsx
<DataGrid
  loading
  skeletonLoader
  rows={[]}
  columns={columns}
/>
```

## Custom Cell Rendering

Render custom content in cells (e.g., buttons, images, badges).

```tsx
const columns = [
  {
    field: 'status',
    headerName: 'Status',
    renderCell: (params) => (
      <Badge variant={params.value === 'Active' ? 'success' : 'error'}>
        {params.value}
      </Badge>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: (params) => (
      <Button size="sm" onClick={() => handleEdit(params.row)}>
        Edit
      </Button>
    ),
  },
];
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `any[]` | **required** | The data set |
| `columns` | `DataGridColumn[]` | **required** | Column definitions |
| `getRowId` | `(row) => id` | `row.id` | Function to get unique row ID |
| `loading` | `boolean` | `false` | Loading state |
| `autoHeight` | `boolean` | `false` | Adjust height to content |
| `checkboxSelection` | `boolean` | `false` | Enable checkboxes |
| `density` | `'compact' \| 'standard' \| 'comfortable'` | `'standard'` | Row density |
| `hideFooter` | `boolean` | `false` | Hide pagination/footer |
| `disableColumnMenu` | `boolean` | `false` | Disable column actions menu |

## Accessibility

- Table structure follows semantic HTML.
- ARIA attributes are used for sortable headers and selection.
- Keyboard navigation within the grid is supported.
