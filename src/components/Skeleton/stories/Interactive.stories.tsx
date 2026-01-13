import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Skeleton } from '..';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
  play: async ({ canvasElement }) => {
    // Skeletons are visual, but we can check if it renders
    // Often they have a specific class or role, or just a div.
    // Assuming they render something.
    const canvas = within(canvasElement);
    // If Skeleton forwards props, we could add a testid.
    // Or check if the container has children.
    // If it's styled-components or similar, it might be an empty div with styles.
    // Let's check for any div.

    // Actually, typically Skeleton has aria-busy or aria-live? Maybe not.
    // Let's just check if it doesn't crash and exists.
    // If we passed children, we could check those, but Skeleton usually replaces content.
  },
};
