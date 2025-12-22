import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../../components/CheckboxGroup';

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
  },
};

export const WithDefaultValues: Story = {
  args: {
    label: 'Select your favorite fruits',
    options: fruitOptions,
    defaultValue: ['apple', 'orange'],
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Choose options (horizontal)',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    orientation: 'horizontal',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox group',
    options: fruitOptions,
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Some options disabled',
    options: [
      { value: 'option1', label: 'Available option' },
      { value: 'option2', label: 'Disabled option', disabled: true },
      { value: 'option3', label: 'Another available option' },
      { value: 'option4', label: 'Another disabled option', disabled: true },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Required selection',
    options: fruitOptions,
    error: true,
    helperText: 'Please select at least one option.',
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox group',
    options: fruitOptions,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large checkbox group',
    options: fruitOptions,
    size: 'lg',
  },
};