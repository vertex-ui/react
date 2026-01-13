import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Tabs } from '..';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'enclosed', 'soft-rounded', 'solid-rounded', 'segmented'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    isLazy: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Content 1' },
      { label: 'Tab 2', content: 'Content 2' },
      { label: 'Tab 3', content: 'Content 3' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab1 = canvas.getByText('Tab 1');
    const tab2 = canvas.getByText('Tab 2');

    await expect(tab1).toBeInTheDocument();
    await expect(tab2).toBeInTheDocument();

    // Check initial content
    await expect(canvas.getByText('Content 1')).toBeVisible();

    // Switch tab
    await userEvent.click(tab2);

    // Check new content
    await expect(canvas.getByText('Content 2')).toBeVisible();
  },
};
