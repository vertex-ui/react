import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { CheckboxGroup } from '..';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
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

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

export const Default: Story = {
  args: {
    label: 'Select your favorite fruits',
    options: fruitOptions,
    onChange: () => {}, // dummy
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const apple = canvas.getByLabelText('Apple');
    const banana = canvas.getByLabelText('Banana');

    await expect(apple).toBeInTheDocument();
    await expect(apple).not.toBeChecked();

    await userEvent.click(apple);
    await expect(apple).toBeChecked();

    await userEvent.click(banana);
    await expect(banana).toBeChecked();
    await expect(apple).toBeChecked(); // Both should be checked
  },
};
