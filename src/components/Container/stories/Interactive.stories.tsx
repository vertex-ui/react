import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '..';
import { Card } from '../../Card';
import { Typography } from '../../Typography';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fluid', false],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <Card style={{ padding: '24px', marginTop: '24px', marginBottom: '24px' }}>
    <Typography variant="h3" style={{ marginBottom: '16px' }}>Container Demo</Typography>
    <Typography variant="body1" style={{ marginBottom: '12px' }}>
      This container centers the content and applies responsive max-width constraints.
    </Typography>
    <Typography variant="body2" color="secondary">
      Resize your browser window to see how the container adapts to different screen sizes.
    </Typography>
  </Card>
);

export const Default: Story = {
  args: {
    children: <DemoContent />,
  },
};

