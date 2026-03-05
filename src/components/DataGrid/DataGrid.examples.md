# DataGrid Examples

## Basic Usage

Display tabular data.

```tsx
import { DataGrid } from 'src/components/DataGrid';

const BasicExample = () => (
  <DataGrid
    columns={[
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 }
    ]}
    rows={[
      { id: 1, name: 'Snow' },
      { id: 2, name: 'Lannister' }
    ]}
  />
);
```

## Customization Examples

### Sorting and Filtering

Enable built-in features.

```tsx
import { DataGrid } from 'src/components/DataGrid';

const FeatureRichExample = ({ rows, columns }) => (
  <DataGrid
    rows={rows}
    columns={columns.map(c => ({ ...c, sortable: true, filterable: true }))}
    checkboxSelection
    pagination
    pageSize={5}
  />
);
```

## Enterprise Scenarios

### Server-Side Pagination

Handle large datasets.

```tsx
import { DataGrid } from 'src/components/DataGrid';

const ServerGrid = () => {
  const { data, loading } = useQuery(GET_USERS);

  return (
    <DataGrid
      loading={loading}
      rows={data?.users || []}
      columns={columns}
      pagination
      // Note: Implement server-side logic via onPageChange props if available in future
    />
  );
};
```

## Accessibility Example

The grid uses semantic table structure.

```tsx
import { DataGrid } from 'src/components/DataGrid';

const A11yExample = () => (
  <DataGrid
    aria-label="Employee List"
    rows={rows}
    columns={columns}
  />
);
```


## States Example

Demonstrating different states of the DataGrid.

```tsx
import { DataGrid } from 'src/components/DataGrid';

const StatesExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal State</h3>
      <DataGrid columns={[{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]} data={[{ id: 1, name: 'John Doe' }]} />
    </div>
    <div>
      <h3>Loading State</h3>
      <DataGrid columns={[{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]} data={[{ id: 1, name: 'John Doe' }]} loading />
    </div>
  </div>
);
```
