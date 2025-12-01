import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toast, ToastContainer, toast } from '../src/components/Toast';
import { Button } from '../src/components/Button';
import { Flex } from '../src/components/Flex';
import { Text } from '../src/components/Text';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A comprehensive toast notification system that provides contextual feedback with smooth animations, 
customizable styling, and full accessibility support. Similar to react-toastify but with better 
design and developer experience.

## Features
- **Multiple variants**: success, error, warning, info, default
- **Flexible positioning**: 6 different positions (top/bottom + left/center/right)
- **Rich content support**: title, description, custom icons, action buttons
- **Progress indicators**: visual progress bars with pause on hover
- **Responsive design**: mobile-optimized with stacked layout
- **Theme support**: light, dark, and auto themes
- **Accessibility**: proper ARIA attributes, keyboard navigation, focus management
- **Customizable**: extensive styling options and animation controls
- **Imperative API**: \`toast.success()\`, \`toast.error()\`, etc.
- **Hook-based API**: \`useToast()\` for React components

## Usage Patterns

### Basic Usage
\`\`\`jsx
import { ToastContainer, toast } from '@vtx-ui/react';

function App() {
  return (
    <div>
      <button onClick={() => toast.success('Success!')}>
        Show Toast
      </button>
      <ToastContainer position="top-right" />
    </div>
  );
}
\`\`\`

### Rich Content
\`\`\`jsx
toast.success('File uploaded successfully', {
  title: 'Upload Complete',
  description: 'Your file has been processed and saved.',
  action: {
    label: 'View File',
    onClick: () => console.log('View file clicked')
  }
});
\`\`\`

### Custom Styling
\`\`\`jsx
toast.info('Custom styled toast', {
  className: 'my-custom-toast',
  style: { borderRadius: '12px' },
  icon: <MyCustomIcon />,
  autoClose: 10000
});
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info', 'primary'],
    },

    autoClose: {
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Demo component for interactive examples
const ToastDemo = ({ position = 'top-right' as const, theme = 'auto' as const, limit = 5 }) => {
  const [toastId, setToastId] = useState<string | number>('');

  const showBasicToast = () => {
    toast.show('This is a basic toast message! 🎉');
  };

  const showSuccessToast = () => {
    toast.success('Operation completed successfully!');
  };

  const showErrorToast = () => {
    toast.error('Something went wrong. Please try again.');
  };

  const showWarningToast = () => {
    toast.warning('Please save your work before proceeding.');
  };

  const showInfoToast = () => {
    toast.info('New updates are available for download.');
  };

  const showPrimaryToast = () => {
    toast.primary('This is a primary toast with full background!');
  };

  const showRichToast = () => {
    toast.success('File uploaded successfully', {
      title: 'Upload Complete',
      description: 'Your file has been processed and is now available.',
      action: {
        label: 'View File',
        onClick: () => toast.info('View file clicked!'),
      },
    });
  };

  const showCustomToast = () => {
    const id = toast.show(
      <div>
        <Text weight="semibold">Custom Content</Text>
        <Text size="sm" style={{ marginTop: '4px' }}>
          This toast has custom JSX content with{' '}
          <button
            type="button"
            style={{
              color: 'var(--vtx-color-primary-600)',
              background: 'none',
              border: 'none',
              padding: 0,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            links
          </button>{' '}
          and styling.
        </Text>
      </div>,
      {
        icon: '🎨',
        autoClose: 8000,
        className: 'custom-toast-demo',
      }
    );
    setToastId(id);
  };

  const showPersistentToast = () => {
    const id = toast.info('This toast will not auto-close', {
      autoClose: false,
      action: {
        label: 'Dismiss',
        onClick: () => toast.dismiss(id),
      },
    });
    setToastId(id);
  };

  const showLoadingToast = () => {
    const id = toast.show('Processing...', {
      icon: '⏳',
      autoClose: false,
    });

    // Simulate loading
    setTimeout(() => {
      toast.update(id, {
        icon: '✅',
        variant: 'success',
        autoClose: 3000,
      });
      toast.show('Processing complete!', { variant: 'success' });
    }, 3000);
  };

  const updateToast = () => {
    if (toastId) {
      toast.update(toastId, {
        title: 'Updated Toast',
        description: 'This toast has been updated with new content!',
        variant: 'info',
        action: {
          label: 'Got it',
          onClick: () => toast.dismiss(toastId),
        },
      });
    } else {
      toast.warning('No toast to update. Create a custom or persistent toast first.');
    }
  };

  const dismissToast = () => {
    if (toastId) {
      toast.dismiss(toastId);
      setToastId('');
    } else {
      toast.warning('No specific toast to dismiss.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <Text variant="h2" style={{ marginBottom: '10px' }}>
          Toast Notification System
        </Text>
        <Text color="var(--vtx-color-neutral-600)">
          Interactive demo showcasing all toast features and variants
        </Text>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        {/* Basic Toasts */}
        <div
          style={{
            padding: '20px',
            border: '1px solid var(--vtx-color-neutral-200)',
            borderRadius: '8px',
          }}
        >
          <Text variant="h5" style={{ marginBottom: '15px' }}>
            Basic Variants
          </Text>
          <Flex direction="column" gap="sm">
            <Button onClick={showBasicToast} variant="outline" size="small">
              Default Toast
            </Button>
            <Button onClick={showSuccessToast} variant="outline" size="small">
              Success Toast
            </Button>
            <Button onClick={showErrorToast} variant="outline" size="small">
              Error Toast
            </Button>
            <Button onClick={showWarningToast} variant="outline" size="small">
              Warning Toast
            </Button>
            <Button onClick={showInfoToast} variant="outline" size="small">
              Info Toast
            </Button>
            <Button onClick={showPrimaryToast} variant="outline" size="small">
              Primary Toast
            </Button>
          </Flex>
        </div>

        {/* Advanced Features */}
        <div
          style={{
            padding: '20px',
            border: '1px solid var(--vtx-color-neutral-200)',
            borderRadius: '8px',
          }}
        >
          <Text variant="h5" style={{ marginBottom: '15px' }}>
            Advanced Features
          </Text>
          <Flex direction="column" gap="sm">
            <Button onClick={showRichToast} variant="outline" size="small">
              Rich Content Toast
            </Button>
            <Button onClick={showCustomToast} variant="outline" size="small">
              Custom JSX Toast
            </Button>
            <Button onClick={showPersistentToast} variant="outline" size="small">
              Persistent Toast
            </Button>
            <Button onClick={showLoadingToast} variant="outline" size="small">
              Loading → Success
            </Button>
          </Flex>
        </div>

        {/* Toast Management */}
        <div
          style={{
            padding: '20px',
            border: '1px solid var(--vtx-color-neutral-200)',
            borderRadius: '8px',
          }}
        >
          <Text variant="h5" style={{ marginBottom: '15px' }}>
            Toast Management
          </Text>
          <Flex direction="column" gap="sm">
            <Button onClick={updateToast} variant="outline" size="small">
              Update Toast
            </Button>
            <Button onClick={dismissToast} variant="outline" size="small">
              Dismiss Specific
            </Button>
            <Button onClick={() => toast.dismissAll()} variant="outline" size="small">
              Dismiss All
            </Button>
          </Flex>
        </div>
      </div>

      {/* Usage Instructions */}
      <div
        style={{
          padding: '20px',
          backgroundColor: 'var(--vtx-color-neutral-50)',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <Text variant="h6" style={{ marginBottom: '10px' }}>
          💡 Try These Features:
        </Text>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Hover over toasts to pause auto-close timer</li>
          <li>Click action buttons to see interactions</li>
          <li>Try different positions using the controls</li>
          <li>Switch themes to see dark mode</li>
          <li>Resize window to see mobile responsiveness</li>
        </ul>
      </div>

      <ToastContainer
        position={position}
        theme={theme}
        limit={limit}
        gap={12}
        margin={16}
        stacked={true}
      />
    </div>
  );
};

// Basic story
export const Default: Story = {
  render: () => <ToastDemo />,
};

// Position variants
export const Positions: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Text variant="h3" style={{ marginBottom: '20px', textAlign: 'center' }}>
        Toast Positions
      </Text>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        {[
          'top-left',
          'top-center',
          'top-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ].map((position) => (
          <Button
            key={position}
            onClick={() => {
              // Create a temporary container for this position
              const container = document.createElement('div');
              document.body.appendChild(container);

              // Show toast at this position
              toast.success(`Toast at ${position}`, {
                toastId: `${position}-demo`,
              });

              // Clean up after 5 seconds
              setTimeout(() => {
                document.body.removeChild(container);
              }, 5000);
            }}
            variant="outline"
            size="small"
          >
            {position}
          </Button>
        ))}
      </div>
      <ToastContainer />
    </div>
  ),
};

// Theme variants component
const ThemesComponent = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('light');

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Text variant="h3" style={{ marginBottom: '20px' }}>
        Toast Themes
      </Text>

      <Flex justify="center" gap="md" style={{ marginBottom: '30px' }}>
        {(['light', 'dark', 'auto'] as const).map((theme) => (
          <Button
            key={theme}
            onClick={() => setCurrentTheme(theme)}
            variant={currentTheme === theme ? 'primary' : 'outline'}
            size="small"
          >
            {theme} Theme
          </Button>
        ))}
      </Flex>

      <Flex justify="center" gap="md" wrap="wrap" style={{ marginBottom: '30px' }}>
        <Button onClick={() => toast.success('Success message')}>Success</Button>
        <Button onClick={() => toast.error('Error message')}>Error</Button>
        <Button onClick={() => toast.warning('Warning message')}>Warning</Button>
        <Button onClick={() => toast.info('Info message')}>Info</Button>
        <Button onClick={() => toast.primary('Primary message')}>Primary</Button>
      </Flex>

      <ToastContainer theme={currentTheme} />
    </div>
  );
};

export const Themes: Story = {
  render: () => <ThemesComponent />,
};

// Individual toast component
export const SingleToast: Story = {
  args: {
    children: 'This is a toast message',
    isVisible: true,
    onDismiss: () => console.log('Toast dismissed'),
    id: 'story-toast',
    createdAt: Date.now(),
    variant: 'success',
    closeButton: true,
    progressBar: true,
    autoClose: 5000,
  },
  render: (args) => (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Toast {...args} />
    </div>
  ),
};

// Rich content example
export const RichContent: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Toast
        id="rich-toast"
        isVisible={true}
        onDismiss={() => console.log('Dismissed')}
        createdAt={Date.now()}
        variant="success"
        title="Upload Complete"
        description="Your file has been successfully uploaded and processed."
        action={{
          label: 'View File',
          onClick: () => console.log('View file clicked'),
        }}
        icon="📄"
      >
        Additional details can be provided here if needed.
      </Toast>
    </div>
  ),
};
