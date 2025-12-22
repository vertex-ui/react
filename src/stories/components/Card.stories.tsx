import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'filled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
        <Text>This is a basic card with some content inside it.</Text>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Elevated Card</h3>
        <Text>This card has an elevated appearance with shadow.</Text>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Outlined Card</h3>
        <Text>This card has a border outline.</Text>
      </div>
    ),
  },
};