/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DataGrid } from '../../components/DataGrid';
import type { DataGridColumn, GridFilterModel } from '../../components/DataGrid';
import { Badge } from '../../components/Badge';
import { Chip } from '../../components/Chip';

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
const advancedColumns: DataGridColumn[] = [
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
    field: 'rating', 
    headerName: 'Rating', 
    width: 150,
    type: 'number',
    sortable: true,
    filterable: true,
    align: 'center',
    renderCell: (params: any) => (
      <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
        {Array.from({ length: params.value }).map((_, i) => (
          <span key={i} style={{ color: '#FFD700' }}>★</span>
        ))}
        {Array.from({ length: 5 - params.value }).map((_, i) => (
          <span key={i} style={{ color: '#ddd' }}>★</span>
        ))}
      </div>
    ),
  },
  { 
    field: 'country', 
    headerName: 'Country', 
    width: 150,
    type: 'string',
    sortable: true,
    filterable: true,
  },
  { 
    field: 'joinDate', 
    headerName: 'Join Date', 
    width: 130,
    type: 'date',
    sortable: true,
    filterable: true,
    valueFormatter: (value: any) => new Date(value).toLocaleDateString(),
  },
  { 
    field: 'isAdmin', 
    headerName: 'Is Admin?', 
    width: 120,
    type: 'boolean',
    sortable: true,
    filterable: true,
    align: 'center',
    renderCell: (params: any) => params.value ? (
      <Badge variant="success" size="sm">Yes</Badge>
    ) : (
      <Badge variant="neutral" size="sm">No</Badge>
    ),
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 120,
    type: 'string',
    sortable: true,
    filterable: true,
    align: 'center',
    renderCell: (params: any) => {
      const colorMap: Record<string, 'success' | 'warning' | 'error'> = {
        Active: 'success',
        Pending: 'warning',
        Inactive: 'error',
      };
      return <Chip label={params.value} color={colorMap[params.value]} size="sm" />;
    },
  },
];

// Salary column
const salaryColumn: DataGridColumn = {
  field: 'salary',
  headerName: 'Salary',
  width: 130,
  type: 'number',
  sortable: true,
  filterable: true,
  align: 'right',
  valueFormatter: (value: any) => `$${value.toLocaleString()}`,
};

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
};

// With initial filters
export const WithInitialFilters: Story = {
  args: {
    columns: advancedColumns,
    rows: sampleData,
    getRowId: (row: any) => row.id,
    initialState: {
      filter: {
        filterModel: {
          items: [
            { field: 'rating', operator: '>', value: '2' },
          ],
          logicOperator: 'or',
        },
      },
    },
    pagination: true,
    pageSize: 10,
  },
};

// Controlled filters example
export const ControlledFilters: Story = {
  render: () => {
    const [filterModel, setFilterModel] = useState<GridFilterModel>({
      items: [
        { id: 1, field: 'age', operator: '>=', value: '30' },
        { id: 2, field: 'country', operator: 'contains', value: 'United' },
      ],
      logicOperator: 'and',
    });

    return (
      <div>
        <div style={{ marginBottom: '16px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Current Filters:</h3>
          <pre style={{ margin: 0, fontSize: '12px' }}>
            {JSON.stringify(filterModel, null, 2)}
          </pre>
        </div>
        <DataGrid
          columns={basicColumns}
          rows={sampleData}
          getRowId={(row: any) => row.id}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
          pagination
          pageSize={10}
        />
      </div>
    );
  },
};

// With custom rendering
export const CustomRendering: Story = {
  args: {
    columns: advancedColumns,
    rows: sampleData,
    getRowId: (row: any) => row.id,
    pagination: true,
    pageSize: 10,
  },
};

// With row selection
export const WithRowSelection: Story = {
  render: () => {
    const [selectionModel, setSelectionModel] = useState<(string | number)[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '16px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Selected Rows: {selectionModel.length}</h3>
          <p style={{ margin: 0, fontSize: '12px' }}>
            {selectionModel.length > 0 ? selectionModel.join(', ') : 'None'}
          </p>
        </div>
        <DataGrid
          columns={basicColumns}
          rows={sampleData}
          getRowId={(row: any) => row.id}
          checkboxSelection
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={setSelectionModel}
          pagination
          pageSize={10}
        />
      </div>
    );
  },
};

// Different density variants
export const CompactDensity: Story = {
  args: {
    columns: basicColumns,
    rows: sampleData.slice(0, 20),
    getRowId: (row: any) => row.id,
    density: 'compact',
    pagination: true,
    pageSize: 10,
  },
};

export const ComfortableDensity: Story = {
  args: {
    columns: basicColumns,
    rows: sampleData.slice(0, 20),
    getRowId: (row: any) => row.id,
    density: 'comfortable',
    pagination: true,
    pageSize: 10,
  },
};

// All column types example
export const AllColumnTypes: Story = {
  args: {
    columns: [
      ...advancedColumns,
      salaryColumn,
      {
        field: 'company',
        headerName: 'Company',
        width: 150,
        type: 'string',
        sortable: true,
        filterable: true,
      },
    ],
    rows: sampleData,
    getRowId: (row: any) => row.id,
    pagination: true,
    pageSize: 10,
  },
};

// Without pagination
export const WithoutPagination: Story = {
  args: {
    columns: basicColumns,
    rows: sampleData.slice(0, 20),
    getRowId: (row: any) => row.id,
    pagination: false,
  },
};

// Disable column filter
export const DisabledFilters: Story = {
  args: {
    columns: basicColumns,
    rows: sampleData,
    getRowId: (row: any) => row.id,
    disableColumnFilter: true,
    pagination: true,
    pageSize: 10,
  },
};

// Loading state
export const LoadingState: Story = {
  args: {
    columns: basicColumns,
    rows: sampleData,
    getRowId: (row: any) => row.id,
    loading: true,
    pagination: true,
    pageSize: 10,
  },
};

// Empty state
export const EmptyState: Story = {
  args: {
    columns: basicColumns,
    rows: [],
    getRowId: (row: any) => row.id,
    pagination: true,
    pageSize: 10,
  },
};

// Complex filtering example
export const ComplexFiltering: Story = {
  render: () => {
    const [filterModel, setFilterModel] = useState<GridFilterModel>({
      items: [
        { id: 1, field: 'rating', operator: '>=', value: '3' },
        { id: 2, field: 'age', operator: '<', value: '50' },
        { id: 3, field: 'country', operator: 'contains', value: 'United' },
      ],
      logicOperator: 'and',
    });

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <h3>Complex Multi-Filter Example</h3>
          <p>Filter by rating ≥ 3 AND age &lt; 50 AND country contains "United"</p>
        </div>
        <DataGrid
          columns={[
            ...advancedColumns,
            { 
              field: 'age', 
              headerName: 'Age', 
              width: 100,
              type: 'number',
              sortable: true,
              filterable: true,
              align: 'center',
            },
          ]}
          rows={sampleData}
          getRowId={(row: any) => row.id}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
          pagination
          pageSize={10}
        />
      </div>
    );
  },
};

// Full featured example
export const FullFeatured: Story = {
  render: () => {
    const [filterModel, setFilterModel] = useState<GridFilterModel>({
      items: [],
      logicOperator: 'or',
    });
    const [selectionModel, setSelectionModel] = useState<(string | number)[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1, padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Filters Active:</h4>
            <p style={{ margin: 0 }}>{filterModel.items.length}</p>
          </div>
          <div style={{ flex: 1, padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Rows Selected:</h4>
            <p style={{ margin: 0 }}>{selectionModel.length}</p>
          </div>
        </div>
        
        <DataGrid
          columns={[
            ...advancedColumns,
            salaryColumn,
          ]}
          rows={sampleData}
          getRowId={(row: any) => row.id}
          checkboxSelection
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={setSelectionModel}
          filterModel={filterModel}
          onFilterModelChange={setFilterModel}
          pagination
          pageSize={15}
          pageSizeOptions={[10, 15, 25, 50]}
          density="standard"
        />
      </div>
    );
  },
};

// Pinned/Frozen columns example
export const PinnedColumns: Story = {
  render: () => {
    return (
      <div>
        <div style={{ marginBottom: '16px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Pinned Columns Demo</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            The ID and Name columns are pinned to the left, and Status is pinned to the right. Scroll horizontally to see the effect.
          </p>
        </div>
        <DataGrid
          columns={[
            { 
              field: 'id', 
              headerName: 'ID', 
              width: 80,
              type: 'number',
              sortable: true,
              filterable: true,
              pinned: 'left',
            },
            { 
              field: 'name', 
              headerName: 'Name', 
              width: 180,
              type: 'string',
              sortable: true,
              filterable: true,
              pinned: 'left',
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
            { 
              field: 'company', 
              headerName: 'Company', 
              width: 150,
              type: 'string',
              sortable: true,
              filterable: true,
            },
            { 
              field: 'rating', 
              headerName: 'Rating', 
              width: 150,
              type: 'number',
              sortable: true,
              filterable: true,
              align: 'center',
              renderCell: (params: any) => (
                <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
                  {Array.from({ length: params.value }).map((_, i) => (
                    <span key={i} style={{ color: '#FFD700' }}>★</span>
                  ))}
                  {Array.from({ length: 5 - params.value }).map((_, i) => (
                    <span key={i} style={{ color: '#ddd' }}>★</span>
                  ))}
                </div>
              ),
            },
            { 
              field: 'salary',
              headerName: 'Salary',
              width: 130,
              type: 'number',
              sortable: true,
              filterable: true,
              align: 'right',
              valueFormatter: (value: any) => `$${value.toLocaleString()}`,
            },
            { 
              field: 'status', 
              headerName: 'Status', 
              width: 120,
              type: 'string',
              sortable: true,
              filterable: true,
              align: 'center',
              pinned: 'right',
              renderCell: (params: any) => {
                const colorMap: Record<string, 'success' | 'warning' | 'error'> = {
                  Active: 'success',
                  Pending: 'warning',
                  Inactive: 'error',
                };
                return <Chip label={params.value} color={colorMap[params.value]} size="sm" />;
              },
            },
          ]}
          rows={sampleData}
          getRowId={(row: any) => row.id}
          checkboxSelection
          pagination
          pageSize={10}
        />
      </div>
    );
  },
};
