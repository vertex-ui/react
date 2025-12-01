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
    footerButtons: [{ label: 'Close', onClick: () => {}, variant: 'primary' }],
  },
};

export const WithFooterButtons: Story = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footerButtons={[
            { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'outline' },
            { label: 'Confirm', onClick: () => alert('Confirmed!'), variant: 'primary' },
          ]}
        />
      </>
    );
  },
  args: {
    title: 'Confirm Action',
    description: 'This action cannot be undone.',
    children: <p>Are you sure you want to proceed with this action?</p>,
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

export const WithCustomFooter: Story = {
  render: ModalTemplate,
  args: {
    title: 'Custom Footer',
    children: <p>This modal uses a custom footer ReactNode.</p>,
    footer: (
      <>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save</Button>
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
    footerButtons: [
      { label: 'Cancel', onClick: () => {}, variant: 'outline' },
      { label: 'Save', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const Scrollable: Story = {
  render: ModalTemplate,
  args: {
    title: 'Scrollable Content',
    scrollable: true,
    children: (
      <div>
        <p>This modal has scrollable content.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    ),
    footerButtons: [{ label: 'Close', onClick: () => {}, variant: 'primary' }],
  },
};

export const FormExample: Story = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsOpen(false);
        alert('Form submitted!');
      }, 1500);
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Create User</Button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footerButtons={[
            {
              label: 'Cancel',
              onClick: () => setIsOpen(false),
              variant: 'ghost',
              disabled: loading,
            },
            { label: 'Create', onClick: handleSubmit, variant: 'primary', loading },
          ]}
        />
      </>
    );
  },
  args: {
    title: 'Create New User',
    description: 'Enter the details for the new user account.',
    size: 'medium',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: 500 }}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: 500 }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: 500 }}
          >
            Role
          </label>
          <select
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
          >
            <option>User</option>
            <option>Admin</option>
            <option>Manager</option>
          </select>
        </div>
      </div>
    ),
  },
};

export const WithDescription: Story = {
  render: ModalTemplate,
  args: {
    title: 'Modal with Description',
    description: 'This is a helpful description that provides more context.',
    children: <p>Modal content goes here.</p>,
    footerButtons: [
      { label: 'Cancel', onClick: () => {}, variant: 'outline' },
      { label: 'Continue', onClick: () => {}, variant: 'primary' },
    ],
  },
};

export const DangerAction: Story = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsOpen(false);
        alert('Item deleted!');
      }, 2000);
    };

    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          footerButtons={[
            { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'outline' },
            { label: 'Delete', onClick: handleDelete, variant: 'danger', loading },
          ]}
        />
      </>
    );
  },
  args: {
    title: 'Delete Item',
    description: 'This action cannot be undone.',
    children: (
      <p>
        Are you sure you want to delete this item? All associated data will be permanently removed.
      </p>
    ),
  },
};

export const NoBackdropClose: Story = {
  render: ModalTemplate,
  args: {
    title: 'Cannot Close on Backdrop',
    closeOnBackdropClick: false,
    children: <p>Click outside won't close this modal.</p>,
    footerButtons: [{ label: 'Close', onClick: () => {}, variant: 'primary' }],
  },
};

export const NoEscapeClose: Story = {
  render: ModalTemplate,
  args: {
    title: 'Cannot Close with Escape',
    closeOnEscape: false,
    children: <p>Pressing Escape won't close this modal.</p>,
    footerButtons: [{ label: 'Close', onClick: () => {}, variant: 'primary' }],
  },
};
