import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect, MultiSelectOption } from '../src/components/MultiSelect';
import { useState } from 'react';

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const technologies = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
];

const groupedTechnologies = [
  { value: 'react', label: 'React', group: 'Frontend' },
  { value: 'vue', label: 'Vue', group: 'Frontend' },
  { value: 'angular', label: 'Angular', group: 'Frontend' },
  { value: 'svelte', label: 'Svelte', group: 'Frontend' },
  { value: 'node', label: 'Node.js', group: 'Backend' },
  { value: 'python', label: 'Python', group: 'Backend' },
  { value: 'java', label: 'Java', group: 'Backend' },
  { value: 'go', label: 'Go', group: 'Backend' },
  { value: 'mongodb', label: 'MongoDB', group: 'Database' },
  { value: 'postgresql', label: 'PostgreSQL', group: 'Database' },
  { value: 'mysql', label: 'MySQL', group: 'Database' },
];

export const CheckboxStyle: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Select Technologies"
          placeholder="Choose technologies"
          options={technologies}
          value={selected}
          onChange={setSelected}
          selectionStyle="checkbox"
          helperText="Select multiple technologies using checkboxes"
        />
      </div>
    );
  },
};

export const CheckmarkStyle: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Select Skills"
          placeholder="Choose your skills"
          options={technologies}
          value={selected}
          onChange={setSelected}
          selectionStyle="checkmark"
          helperText="Select multiple skills with checkmark indicators"
        />
      </div>
    );
  },
};

export const WithSearch: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Searchable Select"
          placeholder="Search and select"
          options={groupedTechnologies}
          value={selected}
          onChange={setSelected}
          searchable
          grouped
          helperText="Search to filter options"
        />
      </div>
    );
  },
};

export const WithSelectAll: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Select with Actions"
          placeholder="Choose options"
          options={technologies}
          value={selected}
          onChange={setSelected}
          showSelectAll
          selectionStyle="checkbox"
          helperText="Use Select All or Clear All for bulk actions"
        />
      </div>
    );
  },
};

export const GroupedOptions: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Tech Stack"
          placeholder="Select your tech stack"
          options={groupedTechnologies}
          value={selected}
          onChange={setSelected}
          grouped
          selectionStyle="checkmark"
          helperText="Options grouped by category"
        />
      </div>
    );
  },
};

export const AllFeatures: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '500px' }}>
        <MultiSelect
          label="Full Featured Multi-Select"
          placeholder="Search and select technologies"
          options={groupedTechnologies}
          value={selected}
          onChange={setSelected}
          grouped
          searchable
          showSelectAll
          selectionStyle="checkbox"
          helperText="All features enabled: search, groups, select all"
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  args: { options: [] },
  render: () => {
    return (
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <MultiSelect
          label="Small"
          placeholder="Small size"
          options={technologies}
          size="small"
          defaultValue={['react', 'vue']}
        />
        <MultiSelect
          label="Medium"
          placeholder="Medium size"
          options={technologies}
          size="medium"
          defaultValue={['react', 'vue']}
        />
        <MultiSelect
          label="Large"
          placeholder="Large size"
          options={technologies}
          size="large"
          defaultValue={['react', 'vue']}
        />
      </div>
    );
  },
};

export const WithValidation: Story = {
  args: { options: [] },
  render: () => {
    return (
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <MultiSelect
          label="Required Field"
          placeholder="Select at least one"
          options={technologies}
          required
          error="Please select at least one technology"
        />
        <MultiSelect
          label="Valid Selection"
          placeholder="Select options"
          options={technologies}
          defaultValue={['react', 'typescript']}
          success="Great choices!"
        />
      </div>
    );
  },
};

export const MaxChipsDisplay: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([
      'react',
      'vue',
      'angular',
      'svelte',
      'typescript',
    ]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Limited Chip Display"
          placeholder="Select technologies"
          options={technologies}
          value={selected}
          onChange={setSelected}
          maxChipsDisplay={3}
          helperText="Only 3 chips shown, rest as '+N more'"
        />
      </div>
    );
  },
};

export const ChipVariants: Story = {
  args: { options: [] },
  render: () => {
    return (
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <MultiSelect
          label="Primary Filled Chips"
          options={technologies}
          defaultValue={['react', 'vue']}
          chipColor="primary"
          chipVariant="filled"
        />
        <MultiSelect
          label="Success Outlined Chips"
          options={technologies}
          defaultValue={['react', 'vue']}
          chipColor="success"
          chipVariant="outlined"
        />
        <MultiSelect
          label="Info Light Chips"
          options={technologies}
          defaultValue={['react', 'vue']}
          chipColor="info"
          chipVariant="light"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Multi-Select',
    placeholder: 'Cannot interact',
    options: technologies,
    defaultValue: ['react', 'vue'],
    disabled: true,
    helperText: 'This field is disabled',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <MultiSelect {...args} />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    const optionsWithDisabled = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue', disabled: true },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte', disabled: true },
      { value: 'typescript', label: 'TypeScript' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <MultiSelect
          label="Some Options Disabled"
          placeholder="Select available options"
          options={optionsWithDisabled}
          value={selected}
          onChange={setSelected}
          helperText="Vue and Svelte are disabled"
        />
      </div>
    );
  },
};

// Real-world example with custom data
const teamMembers = [
  { id: 1, name: 'Sarah Johnson', dept: 'Engineering', status: 'active' },
  { id: 2, name: 'Mike Chen', dept: 'Engineering', status: 'active' },
  { id: 3, name: 'Emily Davis', dept: 'Design', status: 'active' },
  { id: 4, name: 'John Smith', dept: 'Design', status: 'inactive' },
  { id: 5, name: 'Lisa Brown', dept: 'Marketing', status: 'active' },
  { id: 6, name: 'Tom Wilson', dept: 'Marketing', status: 'active' },
];

export const RealWorldExample: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);

    return (
      <div style={{ width: '500px' }}>
        <MultiSelect
          label="Assign Team Members"
          placeholder="Select team members for this project"
          options={teamMembers as any}
          value={selected}
          onChange={(values, options) => {
            setSelected(values);
            console.log('Selected members:', options);
          }}
          getOptionLabel="name"
          getOptionValue="id"
          getOptionGroup="dept"
          getOptionDisabled={(member) => member.status === 'inactive'}
          grouped
          searchable
          showSelectAll
          selectionStyle="checkbox"
          helperText="Select team members (inactive members are disabled)"
        />

        {selected.length > 0 && (
          <div
            style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#f9fafb',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <strong>
              Selected: {selected.length} member{selected.length !== 1 ? 's' : ''}
            </strong>
          </div>
        )}
      </div>
    );
  },
};

// Product categories example
const productCategories = [
  { sku: 'ELEC-001', name: 'Laptop', category: 'Electronics', stock: 15 },
  { sku: 'ELEC-002', name: 'Smartphone', category: 'Electronics', stock: 0 },
  { sku: 'ELEC-003', name: 'Tablet', category: 'Electronics', stock: 8 },
  { sku: 'FURN-001', name: 'Desk Chair', category: 'Furniture', stock: 5 },
  { sku: 'FURN-002', name: 'Standing Desk', category: 'Furniture', stock: 3 },
  { sku: 'BOOK-001', name: 'Programming Book', category: 'Books', stock: 0 },
  { sku: 'BOOK-002', name: 'Design Handbook', category: 'Books', stock: 12 },
];

export const ProductCatalogExample: Story = {
  args: { options: [] },
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);

    return (
      <div style={{ width: '500px' }}>
        <MultiSelect
          label="Select Products"
          placeholder="Choose products for bundle"
          options={productCategories as any}
          value={selected}
          onChange={setSelected}
          getOptionLabel={(product) => `${product.name} (Stock: ${product.stock})`}
          getOptionValue="sku"
          getOptionGroup="category"
          getOptionDisabled={(product) => product.stock === 0}
          grouped
          searchable
          selectionStyle="checkmark"
          chipColor="success"
          chipVariant="light"
          maxChipsDisplay={4}
          helperText="Out of stock items are disabled"
        />
      </div>
    );
  },
};

export const LoadingState: Story = {
  args: { options: [] },
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selected, setSelected] = useState<(string | number)[]>([]);

    return (
      <div style={{ maxWidth: '400px' }}>
        <MultiSelect
          label="Select Technologies"
          placeholder="Choose your technologies"
          options={technologies}
          value={selected}
          onChange={setSelected}
          loading={isLoading}
          searchable
          showSelectAll
          helperText="Simulating async data loading"
        />
        <button
          onClick={() => setIsLoading(!isLoading)}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: '1px solid #d4d4d4',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          {isLoading ? 'Stop Loading' : 'Start Loading'}
        </button>
      </div>
    );
  },
};

export const AsyncOptions: Story = {
  args: { options: [] },
  render: () => {
    const [options, setOptions] = useState<MultiSelectOption[]>([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState<(string | number)[]>([]);

    const loadOptions = () => {
      setLoading(true);
      setOptions([]);

      // Simulate API call
      setTimeout(() => {
        setOptions([
          { value: '1', label: 'React' },
          { value: '2', label: 'Vue' },
          { value: '3', label: 'Angular' },
          { value: '4', label: 'Svelte' },
        ]);
        setLoading(false);
      }, 2000);
    };

    return (
      <div style={{ maxWidth: '400px' }}>
        <MultiSelect
          label="Async Data Loading"
          placeholder="Load and select options"
          options={options}
          value={selected}
          onChange={setSelected}
          loading={loading}
          searchable
          helperText="Click button to load options from API"
        />
        <button
          onClick={loadOptions}
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

export const ComparisonStyles: Story = {
  args: { options: [] },
  render: () => {
    const [checkboxSelected, setCheckboxSelected] = useState<(string | number)[]>(['react']);
    const [checkmarkSelected, setCheckmarkSelected] = useState<(string | number)[]>(['react']);

    return (
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ width: '350px' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
            Style 1: Checkbox
          </h3>
          <MultiSelect
            label="With Checkboxes"
            placeholder="Select technologies"
            options={technologies}
            value={checkboxSelected}
            onChange={setCheckboxSelected}
            selectionStyle="checkbox"
            helperText="Checkbox style for clear selection state"
          />
        </div>

        <div style={{ width: '350px' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
            Style 2: Checkmark
          </h3>
          <MultiSelect
            label="With Checkmarks"
            placeholder="Select technologies"
            options={technologies}
            value={checkmarkSelected}
            onChange={setCheckmarkSelected}
            selectionStyle="checkmark"
            helperText="Checkmark style for cleaner appearance"
          />
        </div>
      </div>
    );
  },
};
