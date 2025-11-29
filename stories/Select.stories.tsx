import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '../src/components/Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

export const Default: Story = {
  args: {
    options: countries,
    placeholder: 'Select a country',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    helperText: 'Choose your country of residence',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    error: 'Please select a country',
  },
};

export const Required: Story = {
  args: {
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countries,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    options: countries,
    placeholder: 'Select...',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    options: countries,
    placeholder: 'Select...',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Country',
    options: countries,
    placeholder: 'Select a country',
  },
  parameters: {
    layout: 'padded',
  },
};

// Example with custom API data structure
const apiUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: true },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', isActive: false },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', isActive: true },
];

export const WithCustomKeys: Story = {
  args: {
    label: 'Select User',
    options: apiUsers as any,
    getOptionLabel: 'name',
    getOptionValue: 'id',
    getOptionDisabled: 'isActive',
    placeholder: 'Choose a user',
    helperText: 'Using custom getters: name, id, and isActive from API data',
  },
};

// Example with products from e-commerce API
const productsFromAPI = [
  {
    productId: 'SKU001',
    productName: 'Laptop Pro 15"',
    category: 'Electronics',
    inStock: true,
  },
  {
    productId: 'SKU002',
    productName: 'Wireless Mouse',
    category: 'Electronics',
    inStock: true,
  },
  {
    productId: 'SKU003',
    productName: 'USB-C Cable',
    category: 'Accessories',
    inStock: false,
  },
  {
    productId: 'SKU004',
    productName: 'Laptop Stand',
    category: 'Accessories',
    inStock: true,
  },
  {
    productId: 'SKU005',
    productName: 'Mechanical Keyboard',
    category: 'Electronics',
    inStock: true,
  },
];

export const WithCustomKeysGrouped: Story = {
  args: {
    label: 'Select Product',
    options: productsFromAPI as any,
    getOptionLabel: 'productName',
    getOptionValue: 'productId',
    getOptionGroup: 'category',
    grouped: true,
    placeholder: 'Choose a product',
    helperText: 'Products grouped by category using custom getters',
  },
};

// Example with database records
const databaseRecords = [
  {
    uuid: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
    displayName: 'Production Server',
    serverGroup: 'Production',
    isOffline: false,
  },
  {
    uuid: 'b2c3d4e5-f6a7-5b6c-9d0e-1f2a3b4c5d6e',
    displayName: 'Staging Server',
    serverGroup: 'Staging',
    isOffline: false,
  },
  {
    uuid: 'c3d4e5f6-a7b8-6c7d-0e1f-2a3b4c5d6e7f',
    displayName: 'Dev Server 1',
    serverGroup: 'Development',
    isOffline: false,
  },
  {
    uuid: 'd4e5f6a7-b8c9-7d8e-1f2a-3b4c5d6e7f8a',
    displayName: 'Dev Server 2',
    serverGroup: 'Development',
    isOffline: true,
  },
  {
    uuid: 'e5f6a7b8-c9d0-8e9f-2a3b-4c5d6e7f8a9b',
    displayName: 'Backup Server',
    serverGroup: 'Production',
    isOffline: false,
  },
];

export const WithDatabaseRecords: Story = {
  args: {
    label: 'Select Server',
    options: databaseRecords as any,
    getOptionLabel: 'displayName',
    getOptionValue: 'uuid',
    getOptionGroup: 'serverGroup',
    getOptionDisabled: 'isOffline',
    grouped: true,
    placeholder: 'Choose a server',
    helperText: 'Servers grouped by environment, offline servers are disabled',
  },
};

export const Loading: Story = {
  args: {
    label: 'Select Country',
    options: countries,
    loading: true,
    placeholder: 'Loading...',
    helperText: 'Loading state shows spinner instead of chevron',
  },
};

export const LoadingWithValue: Story = {
  args: {
    label: 'Select Country',
    options: countries,
    loading: true,
    value: 'us',
    helperText: 'Can display selected value while loading new data',
  },
};

export const AsyncDataLoading: Story = {
  render: () => {
    const [options, setOptions] = useState<typeof countries>([]);
    const [loading, setLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const loadData = () => {
      setLoading(true);
      setOptions([]);

      // Simulate API call
      setTimeout(() => {
        setOptions([
          { value: 'jp', label: 'Japan' },
          { value: 'kr', label: 'South Korea' },
          { value: 'cn', label: 'China' },
          { value: 'in', label: 'India' },
        ]);
        setLoading(false);
      }, 2000);
    };

    return (
      <div style={{ minWidth: '300px' }}>
        <Select
          label="Async Data Loading"
          options={options}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          loading={loading}
          placeholder={loading ? 'Loading...' : 'Select a country'}
          helperText="Click button to load options from API"
        />
        <button
          onClick={loadData}
          disabled={loading}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: '1px solid #d4d4d4',
            background: loading ? '#f5f5f5' : 'white',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? 'Loading...' : options.length > 0 ? 'Reload Options' : 'Load Options'}
        </button>
      </div>
    );
  },
};
