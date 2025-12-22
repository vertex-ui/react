import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../components/Toast';
import { Button } from '../../components/Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  isVisible: true,
  onDismiss: () => console.log('Toast dismissed'),
  id: 'demo-toast',
  createdAt: Date.now(),
};

export const Success: Story = {
  args: {
    ...defaultProps,
    variant: 'success',
    title: 'Success!',
    children: 'Your changes have been saved successfully.',
  },
};

export const Error: Story = {
  args: {
    ...defaultProps,
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
};

export const Warning: Story = {
  args: {
    ...defaultProps,
    variant: 'warning',
    title: 'Warning',
    children: 'This action cannot be undone.',
  },
};

export const Info: Story = {
  args: {
    ...defaultProps,
    variant: 'info',
    title: 'Info',
    children: 'New features are available in the latest update.',
  },
};

export const WithAction: Story = {
  args: {
    ...defaultProps,
    variant: 'success',
    title: 'File uploaded',
    children: 'Your file has been uploaded successfully.',
    action: {
      label: 'View',
      onClick: () => alert('View clicked'),
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    ...defaultProps,
    variant: 'info',
    children: 'This is a toast notification without a title.',
  },
};

export const Persistent: Story = {
  args: {
    ...defaultProps,
    variant: 'error',
    title: 'Connection Error',
    children: 'Unable to connect to server. Please check your internet connection.',
    autoClose: false,
  },
};

export const CustomDuration: Story = {
  args: {
    ...defaultProps,
    variant: 'success',
    title: 'Quick notification',
    children: 'This will disappear in 2 seconds.',
    autoClose: 2000,
  },
};

export const Interactive: Story = {
  render: () => {
    const showToast = (variant: 'success' | 'error' | 'warning' | 'info', title: string, message: string) => {
      // This would typically use the toast context/hook
      alert(`${variant.toUpperCase()}: ${title} - ${message}`);
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button 
          variant="success" 
          onClick={() => showToast('success', 'Success!', 'Operation completed successfully.')}
        >
          Show Success
        </Button>
        <Button 
          variant="danger" 
          onClick={() => showToast('error', 'Error!', 'Something went wrong.')}
        >
          Show Error
        </Button>
        <Button 
          variant="warning" 
          onClick={() => showToast('warning', 'Warning!', 'Please be careful.')}
        >
          Show Warning
        </Button>
        <Button 
          onClick={() => showToast('info', 'Info', 'Here is some information.')}
        >
          Show Info
        </Button>
      </div>
    );
  },
};

export const LongMessage: Story = {
  args: {
    ...defaultProps,
    variant: 'info',
    title: 'Important Update',
    children: 'This is a very long message that demonstrates how the toast component handles longer text content. It should wrap appropriately and maintain good readability while not taking up too much screen space.',
  },
};

export const WithCloseButton: Story = {
  args: {
    ...defaultProps,
    variant: 'info',
    title: 'Notification',
    children: 'This toast has a close button for manual dismissal.',
    closeButton: true,
    autoClose: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      <Toast
        {...defaultProps}
        variant="success"
        title="Success"
        autoClose={false}
      >
        This is a success message.
      </Toast>
      <Toast
        {...defaultProps}
        variant="error"
        title="Error"
        autoClose={false}
      >
        This is an error message.
      </Toast>
      <Toast
        {...defaultProps}
        variant="warning"
        title="Warning"
        autoClose={false}
      >
        This is a warning message.
      </Toast>
      <Toast
        {...defaultProps}
        variant="info"
        title="Info"
        autoClose={false}
      >
        This is an info message.
      </Toast>
    </div>
  ),
};