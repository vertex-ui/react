import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { RadioGroup } from '..';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sizeOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

export const Default: Story = {
  args: {
    label: 'Choose a size',
    name: 'size',
    options: sizeOptions,
    onChange: () => {}, // dummy
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const small = canvas.getByLabelText('Small');
    const medium = canvas.getByLabelText('Medium');

    await expect(small).toBeInTheDocument();
    await expect(small).not.toBeChecked();

    await userEvent.click(small);
    await expect(small).toBeChecked();

    await userEvent.click(medium);
    await expect(medium).toBeChecked();
    await expect(small).not.toBeChecked(); // Only one checked
  },
};
