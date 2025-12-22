import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: { type: 'select' },
      options: ['fullWidth', 'inset', 'middle'],
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Content above</div>
      <Divider />
      <div>Content below</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Content above</div>
      <Divider>OR</Divider>
      <div>Content below</div>
    </div>
  ),
};

export const LeftAligned: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Content above</div>
      <Divider textAlign="left">Left</Divider>
      <div>Content below</div>
    </div>
  ),
};

export const RightAligned: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Content above</div>
      <Divider textAlign="right">Right</Divider>
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center' }}>
      <div>Left content</div>
      <Divider orientation="vertical" />
      <div>Right content</div>
    </div>
  ),
};

export const VerticalWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center' }}>
      <div>Left content</div>
      <Divider orientation="vertical">OR</Divider>
      <div>Right content</div>
    </div>
  ),
};

export const Inset: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Content above</div>
      <Divider variant="inset" />
      <div>Content below</div>
    </div>
  ),
};

export const Middle: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Content above</div>
      <Divider variant="middle" />
      <div>Content below</div>
    </div>
  ),
};

export const Light: Story = {
  render: () => (
    <div style={{ width: '300px', background: '#333', padding: '16px', color: 'white' }}>
      <div>Content above</div>
      <Divider light />
      <div>Content below</div>
    </div>
  ),
};

export const FlexItem: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div>Item 1</div>
      <Divider orientation="vertical" flexItem />
      <div>Item 2</div>
      <Divider orientation="vertical" flexItem />
      <div>Item 3</div>
    </div>
  ),
};