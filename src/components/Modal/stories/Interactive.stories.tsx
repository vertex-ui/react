import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { useState } from 'react';
import { Modal } from '..';
import { Button } from '../../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'fullscreen', 'auto'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Default Modal"
        >
          <p>This is the modal content. You can put any React components here.</p>
        </Modal>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open Modal');

    // Open
    await userEvent.click(openButton);

    // Modal is in portal
    const body = within(document.body);
    const modalTitle = await body.findByText('Default Modal');
    await expect(modalTitle).toBeVisible();

    // Close via overlay or button (assuming close button exists)
    // const closeButton = body.getByRole('button', { name: /close/i }); // might vary
    // await userEvent.click(closeButton);
  },
};
