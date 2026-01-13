import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { FormControl } from '..';
import { Input } from '../../Input';

const meta: Meta<typeof FormControl> = {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'left'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic form control with input
 */
export const Basic: Story = {
  args: {
    label: 'Email Address',
    helperText: 'We will never share your email.',
    children: <Input placeholder="Enter email" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Email Address')).toBeInTheDocument();
    await expect(canvas.getByText('We will never share your email.')).toBeInTheDocument();
    await expect(canvas.getByPlaceholderText('Enter email')).toBeInTheDocument();
  },
};
