import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../src/components/Tooltip';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

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
    children: <Button>Top</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    placement: 'right',
    children: <Button>Right</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    placement: 'bottom',
    children: <Button>Bottom</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    placement: 'left',
    children: <Button>Left</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      'This is a much longer tooltip with more information that will wrap to multiple lines.',
    children: <Button>Hover for long tooltip</Button>,
  },
};

export const CustomDelay: Story = {
  args: {
    content: 'Shown after 500ms',
    delay: 500,
    children: <Button>Hover (500ms delay)</Button>,
  },
};

export const WithArrow: Story = {
  args: {
    content: 'Tooltip with arrow pointer',
    arrow: true,
    placement: 'top',
    children: <Button>With Arrow</Button>,
  },
};

export const Dismissible: Story = {
  args: {
    content: 'Click the X to dismiss this tooltip',
    dismissible: true,
    open: true,
    children: <Button>Dismissible Tooltip</Button>,
  },
};

export const VariantLight: Story = {
  args: {
    content: 'Light variant tooltip',
    variant: 'light',
    arrow: true,
    children: <Button>Light Tooltip</Button>,
  },
};

export const VariantError: Story = {
  args: {
    content: 'Error: Something went wrong!',
    variant: 'error',
    arrow: true,
    children: <Button variant="danger">Error Tooltip</Button>,
  },
};

export const VariantWarning: Story = {
  args: {
    content: 'Warning: Please review before proceeding',
    variant: 'warning',
    arrow: true,
    children: <Button variant="warning">Warning Tooltip</Button>,
  },
};

export const VariantSuccess: Story = {
  args: {
    content: 'Success! Your changes have been saved',
    variant: 'success',
    arrow: true,
    children: <Button variant="success">Success Tooltip</Button>,
  },
};

export const VariantInfo: Story = {
  args: {
    content: 'Information: This feature is currently in beta',
    variant: 'info',
    arrow: true,
    children: <Button variant="primary">Info Tooltip</Button>,
  },
};
