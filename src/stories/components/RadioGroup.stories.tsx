import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../../components/RadioGroup';

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

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' },
];

export const Default: Story = {
  args: {
    label: 'Choose a size',
    name: 'size',
    options: sizeOptions,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Choose a size (with default)',
    name: 'size-default',
    options: sizeOptions,
    defaultValue: 'medium',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Choose a color (horizontal)',
    name: 'color-horizontal',
    options: colorOptions,
    orientation: 'horizontal',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio group',
    name: 'disabled',
    options: sizeOptions,
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Some options disabled',
    name: 'some-disabled',
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
    name: 'required',
    options: sizeOptions,
    error: true,
    helperText: 'Please select one option.',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Choose your preferred size',
    name: 'size-helper',
    options: sizeOptions,
    helperText: 'This will affect the display size throughout the application.',
  },
};

export const Small: Story = {
  args: {
    label: 'Small radio group',
    name: 'small-group',
    options: sizeOptions,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large radio group',
    name: 'large-group',
    options: sizeOptions,
    size: 'lg',
  },
};

export const LongOptions: Story = {
  args: {
    label: 'Choose your subscription plan',
    name: 'subscription',
    options: [
      { 
        value: 'basic', 
        label: 'Basic Plan - $9.99/month' 
      },
      { 
        value: 'premium', 
        label: 'Premium Plan - $19.99/month with additional features' 
      },
      { 
        value: 'enterprise', 
        label: 'Enterprise Plan - $49.99/month with unlimited access and priority support' 
      },
    ],
  },
};