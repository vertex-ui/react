import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Radio } from '../../components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
    label: 'Default radio',
    name: 'default',
    value: 'default',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked radio',
    name: 'checked',
    value: 'checked',
    checked: true,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    name: 'disabled',
    value: 'disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked radio',
    name: 'disabled-checked',
    value: 'disabled-checked',
    disabled: true,
    checked: true,
    onChange: () => {},
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Radio with helper text',
    name: 'helper',
    value: 'helper',
    helperText: 'This is some helpful information about the radio option.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Radio with error',
    name: 'error',
    value: 'error',
    error: true,
    helperText: 'This option is required.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small radio',
    name: 'small',
    value: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large radio',
    name: 'large',
    value: 'large',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success radio',
    name: 'success',
    value: 'success',
    checked: true,
    onChange: () => {},
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning radio',
    name: 'warning',
    value: 'warning',
    checked: true,
    onChange: () => {},
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio size="sm" label="Small radio" name="sizes" value="small" />
      <Radio size="md" label="Medium radio" name="sizes" value="medium" />
      <Radio size="lg" label="Large radio" name="sizes" value="large" />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Radio',
    name: 'interactive',
    value: 'interactive',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Interactive Radio');
    const radio = canvas.getByRole('radio');

    await expect(radio).not.toBeChecked();
    await userEvent.click(label);
    await expect(radio).toBeChecked();
  },
};
