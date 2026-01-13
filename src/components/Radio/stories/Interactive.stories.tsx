import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Radio } from '..';

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
    onChange: () => {}, // Dummy handler
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio');

    await expect(radio).toBeInTheDocument();
    await expect(radio).not.toBeChecked();

    await userEvent.click(radio);
    await expect(radio).toBeChecked();
  },
};
