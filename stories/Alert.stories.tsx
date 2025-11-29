import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/components/Alert';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default alert message.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="success">Success alert - Operation completed successfully!</Alert>
      <Alert variant="error">Error alert - Something went wrong.</Alert>
      <Alert variant="warning">Warning alert - Please review your changes.</Alert>
      <Alert variant="info">Info alert - Here's some useful information.</Alert>
      <Alert variant="neutral">Neutral alert - General notification.</Alert>
    </div>
  ),
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info" style="subtle">
        Subtle style (default) - Soft background with border
      </Alert>
      <Alert variant="info" style="filled">
        Filled style - Solid background color
      </Alert>
      <Alert variant="info" style="outlined">
        Outlined style - Transparent background with bold border
      </Alert>
      <Alert variant="info" style="left-accent">
        Left accent style - Subtle with accent border on left
      </Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    variant: 'error',
    title: 'Error occurred',
    description: 'Unable to process your request. Please try again later.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info" size="small" title="Small Alert">
        This is a small alert with compact spacing.
      </Alert>
      <Alert variant="info" size="medium" title="Medium Alert">
        This is a medium alert with standard spacing.
      </Alert>
      <Alert variant="info" size="large" title="Large Alert">
        This is a large alert with generous spacing.
      </Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    title: 'Session expiring',
    description: 'Your session will expire in 5 minutes.',
    dismissible: true,
  },
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Update available',
    description: 'A new version of the application is available.',
    action: <Button size="small">Update Now</Button>,
  },
};

export const WithActionAndDismiss: Story = {
  args: {
    variant: 'success',
    title: 'Payment successful',
    description: 'Your payment of $99.99 has been processed.',
    dismissible: true,
    action: (
      <Button size="small" variant="ghost">
        View Receipt
      </Button>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    title: 'Simple notification',
    description: 'This alert has no icon.',
    icon: false,
  },
};

export const WithCustomIcon: Story = {
  render: () => {
    const CustomIcon = () => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0l3.09 6.26L20 7.27l-5 4.87 1.18 6.88L10 15.77l-6.18 3.25L5 12.14 0 7.27l6.91-1.01L10 0z"
          fill="currentColor"
        />
      </svg>
    );

    return (
      <Alert variant="success" title="Achievement unlocked!" icon={<CustomIcon />}>
        You've completed 100 tasks this month!
      </Alert>
    );
  },
};

export const ComplexContent: Story = {
  render: () => (
    <Alert variant="warning" title="Important update" dismissible>
      <p style={{ margin: '0 0 0.5rem 0' }}>
        Please review the following changes before proceeding:
      </p>
      <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
        <li>Database schema will be updated</li>
        <li>All users will be logged out</li>
        <li>Service downtime: ~5 minutes</li>
      </ul>
    </Alert>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Alert variant="info" title="New features available">
      <p style={{ margin: '0 0 0.5rem 0' }}>
        Check out the <strong>latest updates</strong> to our platform:
      </p>
      <ul style={{ margin: '0 0 0.5rem 0', paddingLeft: '1.5rem' }}>
        <li>Dark mode support</li>
        <li>Improved performance</li>
        <li>New dashboard widgets</li>
      </ul>
      <a href="#" style={{ color: 'inherit', fontWeight: 500 }}>
        Learn more →
      </a>
    </Alert>
  ),
};

export const FullWidth: Story = {
  args: {
    variant: 'error',
    title: 'System Error',
    description: 'An unexpected error occurred. Please contact support.',
    fullWidth: true,
    dismissible: true,
  },
};

export const AllSizesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="success" size="small" title="Small" dismissible>
        Compact alert for tight spaces
      </Alert>
      <Alert variant="success" size="medium" title="Medium" dismissible>
        Standard alert for most use cases
      </Alert>
      <Alert variant="success" size="large" title="Large" dismissible>
        Prominent alert for important messages
      </Alert>
    </div>
  ),
};

export const VariantStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Success</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Alert variant="success" style="subtle" size="small">
            Subtle
          </Alert>
          <Alert variant="success" style="filled" size="small">
            Filled
          </Alert>
          <Alert variant="success" style="outlined" size="small">
            Outlined
          </Alert>
          <Alert variant="success" style="left-accent" size="small">
            Left Accent
          </Alert>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Error</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Alert variant="error" style="subtle" size="small">
            Subtle
          </Alert>
          <Alert variant="error" style="filled" size="small">
            Filled
          </Alert>
          <Alert variant="error" style="outlined" size="small">
            Outlined
          </Alert>
          <Alert variant="error" style="left-accent" size="small">
            Left Accent
          </Alert>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Warning</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Alert variant="warning" style="subtle" size="small">
            Subtle
          </Alert>
          <Alert variant="warning" style="filled" size="small">
            Filled
          </Alert>
          <Alert variant="warning" style="outlined" size="small">
            Outlined
          </Alert>
          <Alert variant="warning" style="left-accent" size="small">
            Left Accent
          </Alert>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Info</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Alert variant="info" style="subtle" size="small">
            Subtle
          </Alert>
          <Alert variant="info" style="filled" size="small">
            Filled
          </Alert>
          <Alert variant="info" style="outlined" size="small">
            Outlined
          </Alert>
          <Alert variant="info" style="left-accent" size="small">
            Left Accent
          </Alert>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <Alert
        variant="success"
        style="left-accent"
        title="Order confirmed"
        dismissible
        action={
          <Button size="small" variant="ghost">
            Track Order
          </Button>
        }
      >
        Your order #12345 has been confirmed and will be shipped within 24 hours.
      </Alert>

      <Alert
        variant="error"
        title="Payment failed"
        dismissible
        action={
          <Button size="small" variant="ghost">
            Retry Payment
          </Button>
        }
      >
        We couldn't process your payment. Please check your card details and try again.
      </Alert>

      <Alert
        variant="warning"
        style="left-accent"
        title="Account verification required"
        action={<Button size="small">Verify Now</Button>}
      >
        Please verify your email address to unlock all features.
      </Alert>

      <Alert variant="info" style="subtle" title="New message" dismissible>
        You have 3 unread messages from your team.
      </Alert>

      <Alert variant="neutral" icon={false}>
        System maintenance scheduled for tonight at 2 AM EST (3 hours).
      </Alert>
    </div>
  ),
};

export const FormValidation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Alert variant="error" size="small" style="left-accent">
        Please fix the following errors before submitting:
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.25rem' }}>
          <li>Email is required</li>
          <li>Password must be at least 8 characters</li>
        </ul>
      </Alert>
    </div>
  ),
};

export const NotificationStack: Story = {
  render: () => (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: '400px',
        zIndex: 1000,
      }}
    >
      <Alert variant="success" size="small" dismissible>
        File uploaded successfully
      </Alert>
      <Alert variant="info" size="small" dismissible>
        2 team members joined
      </Alert>
      <Alert variant="warning" size="small" dismissible>
        Storage almost full
      </Alert>
    </div>
  ),
};
