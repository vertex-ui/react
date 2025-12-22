import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../components/Tooltip';
import { Button } from '../../components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
    },

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    placement: 'top',
    children: <Button>Top tooltip</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    placement: 'bottom',
    children: <Button>Bottom tooltip</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    children: <Button>Left tooltip</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    children: <Button>Right tooltip</Button>,
  },
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click to show/hide tooltip',
    children: <Button>Click me</Button>,
  },
};

export const FocusTrigger: Story = {
  args: {
    content: 'Focus to show tooltip',

    children: <Button>Focus me</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a tooltip with a much longer message that demonstrates how the component handles longer text content.',
    children: <Button>Long tooltip</Button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip with custom delay',
    delay: 1000,
    children: <Button>Delayed tooltip (1s)</Button>,
  },
};

export const NoArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    children: <Button>No arrow</Button>,
  },
};

export const CustomContent: Story = {
  args: {
    content: (
      <div style={{ textAlign: 'center' }}>
        <strong>Custom Content</strong>
        <br />
        <span style={{ color: '#888' }}>With HTML formatting</span>
      </div>
    ),
    children: <Button>Rich content</Button>,
  },
};

export const OnDisabledElement: Story = {
  render: () => (
    <Tooltip content="This button is disabled">
      <span style={{ cursor: 'not-allowed' }}>
        <Button disabled style={{ pointerEvents: 'none' }}>
          Disabled button
        </Button>
      </span>
    </Tooltip>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Tooltip content="Top Start" placement="top-start">
        <Button>Top Start</Button>
      </Tooltip>
      <Tooltip content="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Top End" placement="top-end">
        <Button>Top End</Button>
      </Tooltip>
      <Tooltip content="Bottom Start" placement="bottom-start">
        <Button>Bottom Start</Button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Bottom End" placement="bottom-end">
        <Button>Bottom End</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Some important text</span>
      <Tooltip content="This provides additional context and helpful information about the text.">
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: '#e5e7eb',
            color: '#6b7280',
            fontSize: '12px',
            cursor: 'help',
          }}
        >
          ?
        </span>
      </Tooltip>
    </div>
  ),
};

export const InteractiveTooltip: Story = {
  args: {
    content: (
      <div style={{ padding: '4px' }}>
        <div style={{ marginBottom: '8px', fontWeight: '600' }}>Interactive Tooltip</div>
        <button
          style={{
            padding: '4px 8px',
            fontSize: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer',
          }}
          onClick={() => alert('Button in tooltip clicked!')}
        >
          Click me
        </button>
      </div>
    ),

    children: <Button>Interactive content</Button>,
  },
};