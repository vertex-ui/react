# Table Examples

## Basic Usage

A simple table with data.

```tsx
import { Table } from 'src/components/Table';

const BasicExample = () => (
  <Table
    columns={[
      { key: 'name', header: 'Name' },
      { key: 'role', header: 'Role' }
    ]}
    data={[
      { id: 1, name: 'Alice', role: 'Admin' },
      { id: 2, name: 'Bob', role: 'User' }
    ]}
    getRowKey={(row) => row.id}
  />
);
```

## Customization Examples

### Sortable and Filterable

Enhanced table features.

```tsx
import { Table } from 'src/components/Table';

const AdvancedTable = ({ data }) => (
  <Table
    sortable
    filterable
    striped
    columns={[
      { key: 'name', header: 'Name', sortable: true, filterable: true },
      { key: 'status', header: 'Status' }
    ]}
    data={data}
    getRowKey={(row) => row.id}
  />
);
```

## Enterprise Scenarios

### Selection with Pagination

Manage large datasets.

```tsx
import { Table } from 'src/components/Table';

const UsersTable = ({ users }) => (
  <Table
    selectable
    pagination
    rowsPerPage={10}
    columns={userColumns}
    data={users}
    getRowKey={(u) => u.id}
    onSelectionChange={(selected) => console.log(selected)}
  />
);
```

## Accessibility Example

Includes semantic header associations.

```tsx
import { Table } from 'src/components/Table';

const A11yExample = () => (
  <Table
    caption="Employee Directory"
    columns={columns}
    data={data}
    getRowKey={(row) => row.id}
  />
);
```


## Custom Styling

You can override the default styles of the component by providing a custom `className` or `style` prop, or by defining custom CSS variables if the component supports them.

### Example: overriding via CSS file

**`custom-table.css`**
```css
.custom-table {
  /* Your custom styles here */
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
}
```

**`Usage.tsx`**
```tsx
import { Table } from 'src/components/Table';
import './custom-table.css';

const StyledExample = () => (
  <Table className="custom-table">
    Custom Styled Content
  </Table>
);
```
