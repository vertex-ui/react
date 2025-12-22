import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../components/Table';
import { PackageIcon, InboxIcon, SearchIcon } from '../../icons/IconComponents';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
];

const basicColumns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status' },
];

export const Default: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    getRowKey: (row: any) => row.id,
  },
};

export const WithActions: Story = {
  args: {
    columns: [
      ...basicColumns,
      {
        key: 'actions',
        header: 'Actions',
        render: (row: any) => (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => alert(`Edit ${row.name}`)}
              style={{ 
                padding: '4px 8px', 
                fontSize: '12px', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px',
                background: 'white',
                cursor: 'pointer'
              }}
            >
              Edit
            </button>
            <button 
              onClick={() => alert(`Delete ${row.name}`)}
              style={{ 
                padding: '4px 8px', 
                fontSize: '12px', 
                border: '1px solid #ef4444', 
                borderRadius: '4px',
                background: '#ef4444',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    data: basicData,
    getRowKey: (row: any) => row.id,
  },
};

export const WithCustomRendering: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      {
        key: 'status',
        header: 'Status',
        render: (row: any) => (
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: row.status === 'Active' ? '#dcfce7' : '#fef3c7',
              color: row.status === 'Active' ? '#166534' : '#92400e',
            }}
          >
            {row.status}
          </span>
        ),
      },
    ],
    data: basicData,
    getRowKey: (row: any) => row.id,
  },
};

export const Sortable: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
      { key: 'status', header: 'Status', sortable: true },
    ],
    data: basicData,
    sortable: true,
    getRowKey: (row: any) => row.id,
  },
};

export const Selectable: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    getRowKey: (row: any) => row.id,
    selectable: true,
  },
};

export const Striped: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    getRowKey: (row: any) => row.id,
  },
};

export const Bordered: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    bordered: true,
    getRowKey: (row: any) => row.id,
  },
};

export const Compact: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    size: 'sm',
    getRowKey: (row: any) => row.id,
  },
};

export const Large: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    size: 'lg',
    getRowKey: (row: any) => row.id,
  },
};

export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
    getRowKey: (row: any) => row.id,
  },
};

export const SkeletonLoader: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
    skeletonLoader: true,
    skeletonRows: 8,
    getRowKey: (row: any) => row.id,
  },
};

export const SkeletonLoaderWithSelection: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
    skeletonLoader: true,
    skeletonRows: 5,
    selectable: true,
    getRowKey: (row: any) => row.id,
  },
};

export const CustomLoadingContent: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
    skeletonLoader: false,
    loadingContent: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #e5e7eb',
          borderTopColor: '#2563eb',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <div style={{ color: '#6b7280', fontSize: '14px' }}>Fetching data...</div>
      </div>
    ),
    getRowKey: (row: any) => row.id,
  },
};

export const Empty: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your search criteria.',
    getRowKey: (row: any) => row.id,
  },
};

export const EmptyStateWithIcon: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No products found',
    emptyStateIcon: <PackageIcon size={48} />,
    emptyStateDescription: 'There are no products available at the moment. Try adding some products to get started.',
    getRowKey: (row: any) => row.id,
  },
};

export const EmptyStateSearch: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No results found',
    emptyStateIcon: <SearchIcon size={48} />,
    emptyStateDescription: 'We couldn\'t find any matches for your search. Try different keywords or filters.',
    getRowKey: (row: any) => row.id,
    toolbar: {
      title: 'Search Results',
    },
  },
};

export const EmptyStateInbox: Story = {
  args: {
    columns: [
      { key: 'subject', header: 'Subject' },
      { key: 'sender', header: 'From' },
      { key: 'date', header: 'Date' },
    ],
    data: [],
    emptyMessage: 'Your inbox is empty',
    emptyStateIcon: <InboxIcon size={48} />,
    emptyStateDescription: 'When you receive new messages, they will appear here.',
    getRowKey: (row: any) => row.id,
    toolbar: {
      title: 'Messages',
    },
  },
};

export const LargeDataset: Story = {
  args: {
    columns: basicColumns,
    data: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Editor'][i % 3],
      status: ['Active', 'Inactive'][i % 2],
    })),
    getRowKey: (row: any) => row.id,
  },
};

export const FixedHeader: Story = {
  args: {
    columns: basicColumns,
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Editor'][i % 3],
      status: ['Active', 'Inactive'][i % 2],
    })),
    maxHeight: '400px',
    getRowKey: (row: any) => row.id,
    stickyHeader: true,
  },
};

export const WithPagination: Story = {
  args: {
    columns: basicColumns,
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Editor'][i % 3],
      status: ['Active', 'Inactive'][i % 2],
    })),
    getRowKey: (row: any) => row.id,
    pagination: true,
    rowsPerPage: 10,
  },
};

export const Dense: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    getRowKey: (row: any) => row.id,
    dense: true,
  },
};

export const WithToolbar: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    getRowKey: (row: any) => row.id,
    toolbar: {
      title: 'Users',
      actions: (
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#2563eb',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Add User
        </button>
      ),
    },
  },
};

export const SelectableWithPagination: Story = {
  args: {
    columns: basicColumns,
    data: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Editor'][i % 3],
      status: ['Active', 'Inactive'][i % 2],
    })),
    getRowKey: (row: any) => row.id,
    selectable: true,
    pagination: true,
    rowsPerPage: 10,
    toolbar: {
      title: 'User Management',
    },
  },
};

export const ExpandableRows: Story = {
  args: {
    columns: basicColumns,
    data: basicData,
    getRowKey: (row: any) => row.id,
    expandableRows: true,
    renderExpandedRow: (row: any) => (
      <div style={{ padding: '16px', backgroundColor: '#f9fafb' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
          Additional Details for {row.name}
        </h4>
        <div style={{ fontSize: '13px', color: '#6b7280' }}>
          <p style={{ margin: '4px 0' }}>
            <strong>ID:</strong> {row.id}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Email:</strong> {row.email}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Role:</strong> {row.role}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Status:</strong> {row.status}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Last Login:</strong> 2 hours ago
          </p>
        </div>
      </div>
    ),
  },
};

export const FullFeatures: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
      {
        key: 'status',
        header: 'Status',
        sortable: true,
        render: (row: any) => (
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: row.status === 'Active' ? '#dcfce7' : '#fef3c7',
              color: row.status === 'Active' ? '#166534' : '#92400e',
            }}
          >
            {row.status}
          </span>
        ),
      },
    ],
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Editor'][i % 3],
      status: ['Active', 'Inactive'][i % 2],
    })),
    getRowKey: (row: any) => row.id,
    selectable: true,
    sortable: true,
    pagination: true,
    rowsPerPage: 10,
    hoverable: true,
    toolbar: {
      title: 'Complete Data Table',
      actions: (
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Export
          </button>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#2563eb',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Add User
          </button>
        </div>
      ),
    },
  },
};

export const WithColumnFilters: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', sortable: true, filterable: true },
      { key: 'email', header: 'Email', sortable: true, filterable: true },
      { key: 'role', header: 'Role', sortable: true, filterable: true },
      {
        key: 'status',
        header: 'Status',
        sortable: true,
        filterable: true,
        render: (row: any) => (
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: row.status === 'Active' ? '#dcfce7' : '#fef3c7',
              color: row.status === 'Active' ? '#166534' : '#92400e',
            }}
          >
            {row.status}
          </span>
        ),
      },
    ],
    data: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'User', 'Editor'][i % 3],
      status: ['Active', 'Inactive'][i % 2],
    })),
    getRowKey: (row: any) => row.id,
    sortable: true,
    filterable: true,
    pagination: true,
    rowsPerPage: 10,
    toolbar: {
      title: 'Filterable Table',
    },
  },
};