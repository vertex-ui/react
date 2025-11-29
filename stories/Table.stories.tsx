import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/components/Table';
import { Badge } from '../src/components/Badge';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active' },
];

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role', align: 'center' as const },
  {
    key: 'status',
    header: 'Status',
    align: 'center' as const,
    render: (row: any) => (
      <Badge variant={row.status === 'active' ? 'success' : 'neutral'}>
        {row.status}
      </Badge>
    ),
  },
];

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
    getRowKey: (row) => row.id,
  },
};

export const Striped: Story = {
  args: {
    columns,
    data: sampleData,
    getRowKey: (row) => row.id,
    striped: true,
  },
};

export const NotHoverable: Story = {
  args: {
    columns,
    data: sampleData,
    getRowKey: (row) => row.id,
    hoverable: false,
  },
};

export const Small: Story = {
  args: {
    columns,
    data: sampleData,
    getRowKey: (row) => row.id,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    columns,
    data: sampleData,
    getRowKey: (row) => row.id,
    size: 'large',
  },
};

export const WithCaption: Story = {
  args: {
    columns,
    data: sampleData,
    getRowKey: (row) => row.id,
    caption: 'User Management Table',
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    getRowKey: (row) => row.id,
    emptyMessage: 'No users found',
  },
};
