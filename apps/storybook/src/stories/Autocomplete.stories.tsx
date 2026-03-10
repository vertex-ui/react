import type { Meta, StoryObj } from '@storybook/react-vite';
import '@luxis-ui/react/theme/base.css';
import { Autocomplete, ThemeProvider } from '@luxis-ui/react';
import React from 'react';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ minHeight: '350px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
    },
    error: {
      control: 'text',
      description: 'Error message (sets error state)',
    },
    success: {
      control: 'text',
      description: 'Success message (sets success state)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Takes full width of container',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    showSearchIcon: {
      control: 'boolean',
      description: 'Shows search icon on the left',
    },
    clearable: {
      control: 'boolean',
      description: 'Shows clear button when input has value',
    },
    openOnFocus: {
      control: 'boolean',
      description: 'Opens dropdown immediately on focus',
    },
  },
  args: {
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false,
    showSearchIcon: true,
    clearable: true,
    openOnFocus: true,
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

// Sample data
const fruits = [
  { value: 'apple', label: 'Apple', description: 'A red fruit' },
  { value: 'banana', label: 'Banana', description: 'A yellow fruit' },
  { value: 'cherry', label: 'Cherry', description: 'A small red fruit' },
  { value: 'grape', label: 'Grape', description: 'A purple fruit' },
  { value: 'orange', label: 'Orange', description: 'An orange citrus fruit' },
  { value: 'pear', label: 'Pear', description: 'A green fruit' },
  { value: 'strawberry', label: 'Strawberry', description: 'A sweet red berry' },
  { value: 'watermelon', label: 'Watermelon', description: 'A large green fruit' },
  { value: 'disabled-fruit', label: 'Not available', disabled: true },
];

export const Default: Story = {
  args: {
    label: 'Select a fruit',
    placeholder: 'Type to search...',
    options: fruits,
    helperText: 'Choose your favorite fruit from the list',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
      <Autocomplete {...args} size="sm" label="Small (sm)" placeholder="Small autocomplete" />
      <Autocomplete {...args} size="md" label="Medium (md)" placeholder="Medium autocomplete" />
      <Autocomplete {...args} size="lg" label="Large (lg)" placeholder="Large autocomplete" />
    </div>
  ),
  args: {
    options: fruits,
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
      <Autocomplete {...args} label="Default state" placeholder="Search..." />
      <Autocomplete
        {...args}
        label="Success state"
        placeholder="Search..."
        success="Value is valid!"
      />
      <Autocomplete
        {...args}
        label="Error state"
        placeholder="Search..."
        error="This field is required"
      />
      <Autocomplete
        {...args}
        label="Disabled state"
        placeholder="Cannot interact..."
        disabled
      />
    </div>
  ),
  args: {
    options: fruits,
  },
};

export const AsyncLoading: Story = {
  render: function AsyncDemo(args) {
    const [loading, setLoading] = React.useState(false);
    const [options, setOptions] = React.useState<typeof fruits>([]);

    const handleSearch = (value: string) => {
      if (!value) {
        setOptions([]);
        return;
      }

      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        const filtered = fruits.filter(f =>
          f.label.toLowerCase().includes(value.toLowerCase())
        );
        setOptions(filtered);
        setLoading(false);
      }, 1000);
    };

    return (
      <Autocomplete
        {...args}
        label="Async search"
        placeholder="Type to fetch results..."
        options={options}
        loading={loading}
        onChange={handleSearch}
        disableClientFilter
        helperText="Type 'a' to see async loading simulation"
      />
    );
  },
  args: {
    options: [],
  },
};

const users = [
  { id: '1', name: 'John Doe', role: 'Admin', avatar: 'JD' },
  { id: '2', name: 'Jane Smith', role: 'Editor', avatar: 'JS' },
  { id: '3', name: 'Bob Johnson', role: 'Viewer', avatar: 'BJ' },
];

export const CustomMapping: Story = {
  args: {
    label: 'Search users',
    placeholder: 'Find by name...',
    options: users,
    getOptionLabel: 'name',
    getOptionValue: 'id',
    getOptionDescription: 'role',
    getOptionIcon: (opt) => (
      <div style={{
        width: 24, height: 24, borderRadius: '50%',
        background: 'var(--lxs-color-primary-100)', color: 'var(--lxs-color-primary-700)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '10px', fontWeight: 'bold'
      }}>
        {opt.avatar}
      </div>
    ),
  },
};
