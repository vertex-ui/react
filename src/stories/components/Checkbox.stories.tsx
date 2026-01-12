import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Checkbox } from '../../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
    onChange: () => {}, // Handled by component state or dummy for controlled prop
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    disabled: true,
    checked: true,
    onChange: () => {},
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Checkbox with helper text',
    helperText: 'This is some helpful information about the checkbox.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Checkbox with error',
    error: true,
    helperText: 'This field is required.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success checkbox',
    checked: true,
    onChange: () => {},
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning checkbox',
    checked: true,
    onChange: () => {},
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Checkbox',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Targeting the label element or a parent container because the input itself might be hidden/pointer-events:none
    // The previous error was "Unable to perform pointer interaction as the element has pointer-events: none" on the input.
    // Usually clicking the label works.
    const checkboxLabel = canvas.getByText('Interactive Checkbox');
    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkboxLabel);
    await expect(checkbox).toBeChecked();
    await userEvent.click(checkboxLabel);
    await expect(checkbox).not.toBeChecked();
  },
};
