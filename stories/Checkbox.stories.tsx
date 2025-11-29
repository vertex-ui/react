import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/components/Checkbox/Checkbox';
import { CheckboxGroup } from '../src/components/CheckboxGroup/CheckboxGroup';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Checkbox component allows users to select one or multiple options from a set. Supports checked, indeterminate, disabled, and error states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the checkbox is checked',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the checkbox is in an indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the checkbox is disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, displays error styling',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The color variant of the checkbox',
    },
    label: {
      control: 'text',
      description: 'The label for the checkbox',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the checkbox',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default checkbox with no label
 */
export const Default: Story = {
  args: {},
};

/**
 * Checkbox with label text
 */
export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

/**
 * Checkbox in checked state
 */
export const Checked: Story = {
  args: {
    label: 'I agree',
    checked: true,
  },
};

/**
 * Checkbox in indeterminate state - typically used for "select all" scenarios
 */
export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
};

/**
 * Disabled checkbox
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

/**
 * Disabled and checked checkbox
 */
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
  },
};

/**
 * Checkbox with error state
 */
export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
    helperText: 'You must accept to continue',
  },
};

/**
 * Checkbox with helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time',
  },
};

/**
 * Small size checkbox
 */
export const SmallSize: Story = {
  args: {
    label: 'Small checkbox',
    size: 'small',
  },
};

/**
 * Medium size checkbox (default)
 */
export const MediumSize: Story = {
  args: {
    label: 'Medium checkbox',
    size: 'medium',
  },
};

/**
 * Large size checkbox
 */
export const LargeSize: Story = {
  args: {
    label: 'Large checkbox',
    size: 'large',
  },
};

/**
 * All sizes comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Small" size="small" />
      <Checkbox label="Medium (default)" size="medium" />
      <Checkbox label="Large" size="large" />
    </div>
  ),
};

/**
 * Primary variant (default)
 */
export const PrimaryVariant: Story = {
  args: {
    label: 'Primary checkbox',
    variant: 'primary',
    checked: true,
  },
};

/**
 * Secondary variant
 */
export const SecondaryVariant: Story = {
  args: {
    label: 'Secondary checkbox',
    variant: 'secondary',
    checked: true,
  },
};

/**
 * Success variant
 */
export const SuccessVariant: Story = {
  args: {
    label: 'Success checkbox',
    variant: 'success',
    checked: true,
  },
};

/**
 * Error variant
 */
export const ErrorVariant: Story = {
  args: {
    label: 'Error checkbox',
    variant: 'error',
    checked: true,
  },
};

/**
 * Warning variant
 */
export const WarningVariant: Story = {
  args: {
    label: 'Warning checkbox',
    variant: 'warning',
    checked: true,
  },
};

/**
 * Info variant
 */
export const InfoVariant: Story = {
  args: {
    label: 'Info checkbox',
    variant: 'info',
    checked: true,
  },
};

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Primary (default)" variant="primary" checked />
      <Checkbox label="Secondary" variant="secondary" checked />
      <Checkbox label="Success" variant="success" checked />
      <Checkbox label="Error" variant="error" checked />
      <Checkbox label="Warning" variant="warning" checked />
      <Checkbox label="Info" variant="info" checked />
    </div>
  ),
};

/**
 * Controlled checkbox with state management
 */
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div>
        <Checkbox
          label={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <button
          onClick={() => setChecked(!checked)}
          style={{ marginTop: '16px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Toggle programmatically
        </button>
      </div>
    );
  },
};

/**
 * Indeterminate checkbox with select all functionality
 */
export const SelectAllPattern: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);
    const allItems = ['item1', 'item2', 'item3'];

    const allSelected = selectedItems.length === allItems.length;
    const someSelected = selectedItems.length > 0 && selectedItems.length < allItems.length;

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedItems(allItems);
      } else {
        setSelectedItems([]);
      }
    };

    const handleItemToggle = (item: string) => {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((i) => i !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox
          label="Select all"
          checked={allSelected}
          indeterminate={someSelected}
          onChange={handleSelectAll}
        />
        <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {allItems.map((item) => (
            <Checkbox
              key={item}
              label={`Item ${item.slice(-1)}`}
              checked={selectedItems.includes(item)}
              onChange={() => handleItemToggle(item)}
            />
          ))}
        </div>
        <div style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          Selected: {selectedItems.length} of {allItems.length}
        </div>
      </div>
    );
  },
};

/**
 * CheckboxGroup - Vertical layout (default)
 */
export const GroupVertical: Story = {
  render: () => (
    <CheckboxGroup
      label="Choose your interests"
      options={[
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'travel', label: 'Travel' },
        { value: 'cooking', label: 'Cooking' },
      ]}
      defaultValue={['music']}
    />
  ),
};

/**
 * CheckboxGroup - Horizontal layout
 */
export const GroupHorizontal: Story = {
  render: () => (
    <CheckboxGroup
      label="Select days"
      options={[
        { value: 'mon', label: 'Mon' },
        { value: 'tue', label: 'Tue' },
        { value: 'wed', label: 'Wed' },
        { value: 'thu', label: 'Thu' },
        { value: 'fri', label: 'Fri' },
      ]}
      orientation="horizontal"
      defaultValue={['mon', 'fri']}
    />
  ),
};

/**
 * CheckboxGroup - Controlled mode
 */
export const GroupControlled: Story = {
  render: () => {
    const [selected, setSelected] = useState(['option1']);

    return (
      <div>
        <CheckboxGroup
          label="Controlled checkbox group"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          value={selected}
          onChange={setSelected}
        />
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <strong>Selected values:</strong> {selected.join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

/**
 * CheckboxGroup - With disabled options
 */
export const GroupWithDisabledOptions: Story = {
  render: () => (
    <CheckboxGroup
      label="Select features"
      options={[
        { value: 'basic', label: 'Basic features' },
        { value: 'advanced', label: 'Advanced features', disabled: true },
        { value: 'premium', label: 'Premium features', disabled: true },
      ]}
      helperText="Advanced and Premium require upgrade"
    />
  ),
};

/**
 * CheckboxGroup - Disabled state
 */
export const GroupDisabled: Story = {
  render: () => (
    <CheckboxGroup
      label="Options (disabled)"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      disabled
      defaultValue={['option1']}
    />
  ),
};

/**
 * CheckboxGroup - Error state
 */
export const GroupWithError: Story = {
  render: () => (
    <CheckboxGroup
      label="Select at least one option *"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      error
      helperText="Please select at least one option"
    />
  ),
};

/**
 * CheckboxGroup - Different sizes
 */
export const GroupSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <CheckboxGroup
        label="Small size"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        size="small"
      />
      <CheckboxGroup
        label="Medium size (default)"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        size="medium"
      />
      <CheckboxGroup
        label="Large size"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        size="large"
      />
    </div>
  ),
};

/**
 * CheckboxGroup - Different variants
 */
export const GroupVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <CheckboxGroup
        label="Primary variant (default)"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue={['a']}
      />
      <CheckboxGroup
        label="Success variant"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue={['a']}
      />
      <CheckboxGroup
        label="Warning variant"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue={['a']}
      />
      <CheckboxGroup
        label="Info variant"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        defaultValue={['a']}
      />
    </div>
  ),
};

/**
 * Real-world example: Registration form
 */
export const RegistrationForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      privacy: false,
    });
    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.terms || !formData.privacy) {
        setShowErrors(true);
      } else {
        alert('Form submitted successfully!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <h3 style={{ marginTop: 0 }}>Create Account</h3>

        <div style={{ marginBottom: '16px' }}>
          <Checkbox
            label="I accept the terms and conditions *"
            checked={formData.terms}
            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
            error={showErrors && !formData.terms}
            helperText={showErrors && !formData.terms ? 'Required field' : ''}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <Checkbox
            label="I have read and accept the privacy policy *"
            checked={formData.privacy}
            onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
            error={showErrors && !formData.privacy}
            helperText={showErrors && !formData.privacy ? 'Required field' : ''}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Checkbox
            label="Subscribe to our newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
            helperText="Get updates about new features and offers"
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', width: '100%' }}>
          Create Account
        </button>
      </form>
    );
  },
};

/**
 * Real-world example: Filter panel
 */
export const FilterPanel: Story = {
  render: () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [priceRanges, setPriceRanges] = useState<string[]>([]);
    const [brands, setBrands] = useState<string[]>([]);

    const hasFilters = categories.length > 0 || priceRanges.length > 0 || brands.length > 0;

    const clearAll = () => {
      setCategories([]);
      setPriceRanges([]);
      setBrands([]);
    };

    return (
      <div
        style={{
          width: '280px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <h4 style={{ margin: 0 }}>Filters</h4>
          {hasFilters && (
            <button
              onClick={clearAll}
              style={{ padding: '4px 8px', fontSize: '12px', cursor: 'pointer' }}
            >
              Clear all
            </button>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <CheckboxGroup
            label="Category"
            options={[
              { value: 'electronics', label: 'Electronics' },
              { value: 'clothing', label: 'Clothing' },
              { value: 'books', label: 'Books' },
            ]}
            value={categories}
            onChange={setCategories}
            size="small"
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <CheckboxGroup
            label="Price Range"
            options={[
              { value: 'under-25', label: 'Under $25' },
              { value: '25-50', label: '$25 - $50' },
              { value: '50-100', label: '$50 - $100' },
              { value: 'over-100', label: 'Over $100' },
            ]}
            value={priceRanges}
            onChange={setPriceRanges}
            size="small"
          />
        </div>

        <div>
          <CheckboxGroup
            label="Brand"
            options={[
              { value: 'brand-a', label: 'Brand A' },
              { value: 'brand-b', label: 'Brand B' },
              { value: 'brand-c', label: 'Brand C' },
            ]}
            value={brands}
            onChange={setBrands}
            size="small"
          />
        </div>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '13px',
          }}
        >
          Active filters: {categories.length + priceRanges.length + brands.length}
        </div>
      </div>
    );
  },
};

/**
 * Real-world example: Task status checklist with variants
 */
export const TaskStatusChecklist: Story = {
  render: () => {
    const [tasks, setTasks] = useState([
      { id: '1', label: 'Project setup completed', checked: true, variant: 'success' as const },
      { id: '2', label: 'Design review pending', checked: false, variant: 'warning' as const },
      { id: '3', label: 'Critical bug fix required', checked: false, variant: 'error' as const },
      { id: '4', label: 'Documentation updated', checked: true, variant: 'success' as const },
      { id: '5', label: 'Feature implementation', checked: false, variant: 'info' as const },
      { id: '6', label: 'Code review requested', checked: false, variant: 'primary' as const },
    ]);

    const toggleTask = (id: string) => {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task)));
    };

    const completedCount = tasks.filter((t) => t.checked).length;
    const progress = (completedCount / tasks.length) * 100;

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginTop: 0 }}>Project Tasks</h3>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Progress</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
              {completedCount} / {tasks.length}
            </span>
          </div>
          <div
            style={{
              height: '8px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#2196F3',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tasks.map((task) => (
            <Checkbox
              key={task.id}
              label={task.label}
              checked={task.checked}
              variant={task.variant}
              onChange={() => toggleTask(task.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Real-world example: Settings panel with different variants
 */
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      autoSave: true,
      analytics: false,
      darkMode: true,
      experimental: false,
      beta: false,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings({ ...settings, [key]: !settings[key] });
    };

    return (
      <div
        style={{
          maxWidth: '500px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '24px',
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Application Settings</h3>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>General</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
              label="Enable notifications"
              checked={settings.notifications}
              onChange={() => updateSetting('notifications')}
              variant="primary"
              helperText="Receive updates about important events"
            />
            <Checkbox
              label="Auto-save documents"
              checked={settings.autoSave}
              onChange={() => updateSetting('autoSave')}
              variant="success"
              helperText="Automatically save your work every 5 minutes"
            />
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Privacy</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
              label="Share usage analytics"
              checked={settings.analytics}
              onChange={() => updateSetting('analytics')}
              variant="info"
              helperText="Help us improve by sharing anonymous usage data"
            />
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Appearance</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
              label="Dark mode"
              checked={settings.darkMode}
              onChange={() => updateSetting('darkMode')}
              variant="secondary"
            />
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', marginBottom: '12px' }}>Advanced</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
              label="Enable experimental features"
              checked={settings.experimental}
              onChange={() => updateSetting('experimental')}
              variant="warning"
              helperText="⚠️ May cause instability"
            />
            <Checkbox
              label="Join beta program"
              checked={settings.beta}
              onChange={() => updateSetting('beta')}
              variant="error"
              helperText="⚠️ Not recommended for production use"
            />
          </div>
        </div>
      </div>
    );
  },
};
