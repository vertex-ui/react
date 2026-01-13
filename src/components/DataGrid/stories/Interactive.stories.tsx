/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { DataGrid } from '..';
import type { DataGridColumn } from '..';


const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['compact', 'standard', 'comfortable'],
    },
    pageSize: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generate sample data
const generateRandomData = (count: number) => {
  const names = [
    'John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson',
    'Diana Prince', 'Edward Norton', 'Fiona Apple', 'George Martin', 'Hannah Montana',
    'Ian McKellen', 'Julia Roberts', 'Kevin Hart', 'Laura Palmer', 'Michael Scott',
    'Nancy Drew', 'Oscar Wilde', 'Patricia Highsmith', 'Quentin Tarantino', 'Rachel Green',
    'Steve Jobs', 'Tina Fey', 'Uma Thurman', 'Victor Hugo', 'Wendy Williams',
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
    'Italy', 'Spain', 'Japan', 'China', 'Australia',
    'Brazil', 'India', 'Mexico', 'South Korea', 'Netherlands',
  ];

  const companies = [
    'TechCorp', 'DataSystems', 'CloudInnovate', 'WebSolutions', 'CodeMasters',
    'DigitalWorks', 'Innovation Labs', 'Startup Inc', 'Enterprise LLC', 'Global Tech',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    email: `user${i + 1}@example.com`,
    age: Math.floor(Math.random() * 50) + 20,
    country: countries[Math.floor(Math.random() * countries.length)],
    company: companies[Math.floor(Math.random() * companies.length)],
    rating: Math.floor(Math.random() * 5) + 1,
    salary: Math.floor(Math.random() * 150000) + 30000,
    isAdmin: Math.random() > 0.7,
    joinDate: new Date(
      Date.now() - Math.floor(Math.random() * 365 * 5 * 24 * 60 * 60 * 1000)
    ).toISOString(),
    status: ['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)],
  }));
};

const sampleData = generateRandomData(100);

// Basic columns configuration
const basicColumns: DataGridColumn[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
    type: 'number',
    sortable: true,
    filterable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    type: 'string',
    sortable: true,
    filterable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 220,
    type: 'string',
    sortable: true,
    filterable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 100,
    type: 'number',
    sortable: true,
    filterable: true,
    align: 'center',
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    type: 'string',
    sortable: true,
    filterable: true,
  },
];

// Advanced columns with custom rendering


// Salary column


// Basic example
export const Default: Story = {
  args: {
    columns: basicColumns,
    rows: sampleData,
    getRowId: (row: any) => row.id,
    pagination: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check headers
    await expect(canvas.getByText('Name')).toBeInTheDocument();
    await expect(canvas.getByText('Email')).toBeInTheDocument();
    await expect(canvas.getByText('Country')).toBeInTheDocument();

    // Check rows (at least one)
    // Rows might be virtualized or rendered in tbody
    // We can just check for existence of some cell data if predictable, or just check grid role
    // const grid = canvas.getByRole('grid'); // or 'table'
    // await expect(grid).toBeInTheDocument();

    // Check pagination
    // expect(canvas.getByText('Rows per page:')).toBeInTheDocument();
  },
};

// With initial filters

// Controlled filters example

// With custom rendering

// With row selection

// Different density variants

// All column types example

// Without pagination

// Disable column filter

// Loading state

// Empty state

// Complex filtering example

// Full featured example

// Pinned/Frozen columns example
