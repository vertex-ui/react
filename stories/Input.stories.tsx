import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'This will be your public username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'John Doe',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full Width Input',
    placeholder: 'Takes full width',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <span>🔍</span>,
    rightIcon: <span>✕</span>,
  },
};

export const WithCustomLabelClass: Story = {
  args: {
    label: 'Custom Styled Label',
    labelClassName: 'font-bold text-blue-600',
    placeholder: 'Input with custom label class',
  },
};

export const WithCustomInputClass: Story = {
  args: {
    label: 'Custom Styled Input',
    inputClassName: 'font-mono bg-gray-50',
    placeholder: 'Input with custom input class',
  },
};

export const WithAllCustomClasses: Story = {
  args: {
    label: 'Fully Customized',
    wrapperClassName: 'p-4 bg-blue-50 rounded',
    labelClassName: 'font-bold text-purple-700',
    inputClassName: 'font-mono border-purple-400',
    placeholder: 'All custom classes applied',
    helperText: 'Using wrapperClassName, labelClassName, and inputClassName',
  },
  parameters: {
    layout: 'padded',
  },
};
