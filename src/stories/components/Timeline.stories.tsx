import type { Meta, StoryObj } from '@storybook/react';
import Timeline from '../../components/Timeline/Timeline';
import { Flex } from '../../components/Flex';
import { Card } from '../../components/Card';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Timeline component for displaying step-by-step progress. Supports horizontal/vertical orientations, multiple variants, and is fully responsive.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'circle', 'numbered', 'simple'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'success', 'info', 'warning', 'error'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// Simple string array
const orderSteps = ['Order Placed', 'Packed', 'Shipped', 'Delivered'];

// Object array with descriptions
const detailedSteps = [
  { label: 'Order Placed', description: 'Dec 15, 2025' },
  { label: 'Packed', description: 'Dec 16, 2025' },
  { label: 'Shipped', description: 'Dec 18, 2025' },
  { label: 'Delivered', description: 'Expected: Dec 20, 2025' },
];

export const Default: Story = {
  args: {
    steps: orderSteps,
    currentStep: 2,
    orientation: 'horizontal',
    variant: 'default',
    showCheckmarks: true,
    color: 'success',
    size: 'md',
  },
};

export const WithDescriptions: Story = {
  args: {
    steps: detailedSteps,
    currentStep: 2,
    orientation: 'horizontal',
    variant: 'default',
    showCheckmarks: true,
    color: 'success',
    size: 'md',
  },
};

export const Numbered: Story = {
  args: {
    steps: orderSteps,
    currentStep: 1,
    orientation: 'horizontal',
    variant: 'numbered',
    showCheckmarks: false,
    color: 'primary',
    size: 'md',
  },
};

export const CircleVariant: Story = {
  args: {
    steps: ['Planning', 'Development', 'Testing', 'Deployment'],
    currentStep: 2,
    orientation: 'horizontal',
    variant: 'circle',
    showCheckmarks: true,
    color: 'info',
    size: 'lg',
  },
};

export const SimpleVariant: Story = {
  args: {
    steps: ['Start', 'In Progress', 'Review', 'Complete'],
    currentStep: 1,
    orientation: 'horizontal',
    variant: 'simple',
    showCheckmarks: true,
    color: 'success',
    size: 'md',
  },
};

export const Vertical: Story = {
  args: {
    steps: detailedSteps,
    currentStep: 2,
    orientation: 'vertical',
    variant: 'default',
    showCheckmarks: true,
    color: 'success',
    size: 'md',
  },
};

export const VerticalNumbered: Story = {
  args: {
    steps: [
      { label: 'Account Created', description: 'Complete your profile' },
      { label: 'Email Verified', description: 'Check your inbox' },
      { label: 'Payment Added', description: 'Add payment method' },
      { label: 'First Purchase', description: 'Make your first order' },
    ],
    currentStep: 1,
    orientation: 'vertical',
    variant: 'numbered',
    showCheckmarks: false,
    color: 'primary',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    currentStep: 2,
    orientation: 'horizontal',
    variant: 'default',
    showCheckmarks: true,
    color: 'success',
    size: 'lg',
  },
};

export const SmallSize: Story = {
  args: {
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
    currentStep: 3,
    orientation: 'horizontal',
    variant: 'default',
    showCheckmarks: true,
    color: 'success',
    size: 'sm',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <Flex direction="column" gap={24}>
      <Card style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0 }}>Primary</h3>
        <Timeline steps={orderSteps} currentStep={2} color="primary" />
      </Card>
      <Card style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0 }}>Success</h3>
        <Timeline steps={orderSteps} currentStep={2} color="success" />
      </Card>
      <Card style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0 }}>Info</h3>
        <Timeline steps={orderSteps} currentStep={2} color="info" />
      </Card>
      <Card style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0 }}>Warning</h3>
        <Timeline steps={orderSteps} currentStep={2} color="warning" />
      </Card>
      <Card style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0 }}>Error</h3>
        <Timeline steps={orderSteps} currentStep={2} color="error" />
      </Card>
    </Flex>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap={32}>
      <div>
        <h3>Default Variant</h3>
        <Timeline steps={orderSteps} currentStep={2} variant="default" />
      </div>
      <div>
        <h3>Circle Variant</h3>
        <Timeline steps={orderSteps} currentStep={2} variant="circle" />
      </div>
      <div>
        <h3>Numbered Variant</h3>
        <Timeline steps={orderSteps} currentStep={2} variant="numbered" />
      </div>
      <div>
        <h3>Simple Variant</h3>
        <Timeline steps={orderSteps} currentStep={2} variant="simple" />
      </div>
    </Flex>
  ),
};

export const CustomIcons: Story = {
  args: {
    steps: [
      { label: 'Cart', icon: '🛒' },
      { label: 'Payment', icon: '💳' },
      { label: 'Confirm', icon: '✓' },
      { label: 'Complete', icon: '🎉' },
    ],
    currentStep: 2,
    orientation: 'horizontal',
    variant: 'default',
    color: 'success',
    size: 'lg',
  },
};

export const Clickable: Story = {
  args: {
    steps: [
      { label: 'Step 1', onClick: () => alert('Clicked Step 1') },
      { label: 'Step 2', onClick: () => alert('Clicked Step 2') },
      { label: 'Step 3', onClick: () => alert('Clicked Step 3') },
      { label: 'Step 4', onClick: () => alert('Clicked Step 4') },
    ],
    currentStep: 1,
    orientation: 'horizontal',
    variant: 'default',
    color: 'primary',
  },
};

export const LongLabels: Story = {
  args: {
    steps: [
      'Order Successfully Placed',
      'Package Being Prepared',
      'Out for Delivery',
      'Delivered to Customer',
    ],
    currentStep: 2,
    orientation: 'horizontal',
    variant: 'default',
    showCheckmarks: true,
    color: 'success',
    size: 'md',
  },
};

export const ManySteps: Story = {
  args: {
    steps: [
      'Step 1',
      'Step 2',
      'Step 3',
      'Step 4',
      'Step 5',
      'Step 6',
      'Step 7',
      'Step 8',
    ],
    currentStep: 4,
    orientation: 'horizontal',
    variant: 'default',
    showCheckmarks: true,
    color: 'primary',
    size: 'sm',
  },
};
