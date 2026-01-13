import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Table } from '..';


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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check headers
    await expect(canvas.getByText('Name')).toBeInTheDocument();
    await expect(canvas.getByText('Email')).toBeInTheDocument();

    // Check rows
    await expect(canvas.getByText('John Doe')).toBeInTheDocument();
    await expect(canvas.getByText('jane@example.com')).toBeInTheDocument();
  },
};
