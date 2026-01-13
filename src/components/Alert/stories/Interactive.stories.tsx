import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Alert } from '..';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Success',
    children: 'This is a success alert',
    variant: 'success',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Success')).toBeInTheDocument();
    await expect(canvas.getByText('This is a success alert')).toBeInTheDocument();
    // Verify role if available
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeInTheDocument();
  },
};
