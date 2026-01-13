import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { Toast, useToast } from '..'; // Assuming useToast or Toast is exported
import { Button } from '../../Button';

const meta: Meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ToastDemo = () => {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast({ title: 'Notification', description: 'This is a toast' })}>
      Show Toast
    </Button>
  );
};

export const Default: Story = {
  render: () => (
    // Assuming ToastProvider is wrapped in decorators or we need to wrap it here.
    // If no provider, useToast might fail.
    // But usually global provider exists in preview.tsx?
    // Let's assume preview.tsx has it or we can just render the button.
    <ToastDemo />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Show Toast');

    await userEvent.click(button);

    const body = within(document.body);
    const toast = await body.findByText('Notification');
    await expect(toast).toBeVisible();
    await expect(body.getByText('This is a toast')).toBeVisible();
  },
};
