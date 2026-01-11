import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Select } from '../../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
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

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
];

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry', disabled: true },
];

export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select your country',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Preferred Fruit',
    options: fruitOptions,
    placeholder: 'Choose your favorite fruit',
    helperText: 'This will help us personalize your experience.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Field',
    options: countryOptions,
    placeholder: 'Select a country',
    error: 'This field is required.',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    value: 'us',
    success: 'Selection confirmed!',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    defaultValue: 'uk',
    helperText: 'United Kingdom is pre-selected',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: countryOptions,
    placeholder: 'Cannot select',
    disabled: true,
  },
};

export const DisabledOptions: Story = {
  args: {
    label: 'Some Options Disabled',
    options: fruitOptions,
    placeholder: 'Select a fruit',
    helperText: 'Note: Strawberry is currently out of stock.',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Select',
    options: countryOptions,
    placeholder: 'Select country',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Select',
    options: countryOptions,
    placeholder: 'Select country',
    size: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    options: countryOptions,
    placeholder: 'Select country',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Grouped: Story = {
  args: {
    label: 'Select Location',
    options: [
      { value: 'us-ny', label: 'New York', group: 'United States' },
      { value: 'us-ca', label: 'California', group: 'United States' },
      { value: 'us-tx', label: 'Texas', group: 'United States' },
      { value: 'ca-on', label: 'Ontario', group: 'Canada' },
      { value: 'ca-bc', label: 'British Columbia', group: 'Canada' },
      { value: 'uk-en', label: 'England', group: 'United Kingdom' },
      { value: 'uk-sc', label: 'Scotland', group: 'United Kingdom' },
    ],
    placeholder: 'Choose location',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Select
        label="Small Select"
        size="sm"
        options={countryOptions}
        placeholder="Select country"
      />
      <Select
        label="Medium Select"
        size="md"
        options={countryOptions}
        placeholder="Select country"
      />
      <Select
        label="Large Select"
        size="lg"
        options={countryOptions}
        placeholder="Select country"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Select',
    options: countryOptions,
    placeholder: 'Select...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the select trigger
    // Assuming standard implementation: label -> combobox or button
    // It might be difficult to target without knowing exact structure
    // Trying to find by placeholder
    const selectTrigger = canvas.getByText('Select...');
    await userEvent.click(selectTrigger);

    // Find option 'Canada' in the dropdown (which is usually in a portal, so we need screen/body scope, but within works if it renders inline or we can find it)
    // Storybook test runner handles portals usually
    const option = await within(document.body).findByText('Canada');
    await userEvent.click(option);

    // Verify selection
    await expect(canvas.getByText('Canada')).toBeInTheDocument();
  },
};
