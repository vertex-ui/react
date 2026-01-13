import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Grid } from '..';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div style={{ padding: 16, border: '1px solid #ccc' }}>Left</div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{ padding: 16, border: '1px solid #ccc' }}>Right</div>
      </Grid>
    </Grid>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Left')).toBeInTheDocument();
    await expect(canvas.getByText('Right')).toBeInTheDocument();
  },
};
