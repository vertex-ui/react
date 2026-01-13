import type { Meta, StoryObj } from '@storybook/react';
import Timeline from '../Timeline';
import { Flex } from '../../Flex';


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

