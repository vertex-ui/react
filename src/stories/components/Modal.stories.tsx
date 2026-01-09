"use client";

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';

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
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Footer"
          footerButtons={[
            {
              label: 'Cancel',
              onClick: () => setIsOpen(false),
              variant: 'secondary',
            },
            {
              label: 'Confirm',
              onClick: () => setIsOpen(false),
              variant: 'primary',
            },
          ]}
        >
          <p>This modal includes footer buttons for user actions.</p>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <p>This is a large modal with more content space.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Small Modal"
          size="sm"
        >
          <p>Compact modal for simple confirmations.</p>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal (No Close Button)</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal without Close Button"
          showCloseButton={false}
          footerButtons={[
            {
              label: 'Close',
              onClick: () => setIsOpen(false),
              variant: 'primary',
            },
          ]}
        >
          <p>This modal doesn't have a close button in the header.</p>
        </Modal>
      </>
    );
  },
};

export const DangerModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Delete Confirmation"
          footerButtons={[
            {
              label: 'Cancel',
              onClick: () => setIsOpen(false),
              variant: 'secondary',
            },
            {
              label: 'Delete',
              onClick: () => setIsOpen(false),
              variant: 'danger',
            },
          ]}
        >
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        </Modal>
      </>
    );
  },
};

export const NonClosableBackdrop: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Non-closable Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Non-closable Modal"
          closeOnBackdropClick={false}
          closeOnEscape={false}
          footerButtons={[
            {
              label: 'Close',
              onClick: () => setIsOpen(false),
              variant: 'primary',
            },
          ]}
        >
          <p>This modal can only be closed using the footer button.</p>
        </Modal>
      </>
    );
  },
};