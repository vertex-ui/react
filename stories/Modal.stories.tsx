import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../src/components/Modal';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalTemplate = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: ModalTemplate,
  args: {
    title: 'Modal Title',
    children: <p>This is the modal content. You can put any content here.</p>,
  },
};

export const WithFooter: Story = {
  render: ModalTemplate,
  args: {
    title: 'Confirm Action',
    children: <p>Are you sure you want to proceed with this action?</p>,
    footer: (
      <>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
};

export const Small: Story = {
  render: ModalTemplate,
  args: {
    title: 'Small Modal',
    size: 'small',
    children: <p>This is a small modal.</p>,
  },
};

export const Large: Story = {
  render: ModalTemplate,
  args: {
    title: 'Large Modal',
    size: 'large',
    children: (
      <div>
        <p>This is a large modal with more content.</p>
        <p>You can include multiple paragraphs and elements.</p>
      </div>
    ),
  },
};

export const Fullscreen: Story = {
  render: ModalTemplate,
  args: {
    title: 'Fullscreen Modal',
    size: 'fullscreen',
    children: <p>This modal takes up the full viewport.</p>,
  },
};

export const NoBackdropClose: Story = {
  render: ModalTemplate,
  args: {
    title: 'Cannot Close on Backdrop',
    closeOnBackdropClick: false,
    children: <p>Click outside won't close this modal.</p>,
    footer: <Button variant="primary">Close</Button>,
  },
};

export const NoEscapeClose: Story = {
  render: ModalTemplate,
  args: {
    title: 'Cannot Close with Escape',
    closeOnEscape: false,
    children: <p>Pressing Escape won't close this modal.</p>,
    footer: <Button variant="primary">Close</Button>,
  },
};
