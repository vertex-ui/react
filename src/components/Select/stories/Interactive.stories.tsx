import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Select } from '..';

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

export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
    onChange: () => {}, // Dummy handler
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const trigger = canvas.getByText('Select a country');
    await expect(trigger).toBeInTheDocument();

    await userEvent.click(trigger);

    const body = within(document.body);
    const option = await body.findByText('United States');
    await expect(option).toBeVisible();

    await userEvent.click(option);

    await expect(canvas.getByText('United States')).toBeInTheDocument();
  },
};
