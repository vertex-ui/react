import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import { toast } from '../../components/Toast';
import { Flex } from '../../components/Flex';

const meta: Meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic toast notifications with different variants
 */
export const BasicVariants: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        variant="success" 
        onClick={() => toast.success('Success! Your changes have been saved.')}
      >
        Success Toast
      </Button>
      <Button 
        variant="danger" 
        onClick={() => toast.error('Error! Something went wrong.')}
      >
        Error Toast
      </Button>
      <Button 
        variant="warning" 
        onClick={() => toast.warning('Warning! Please review your input.')}
      >
        Warning Toast
      </Button>
      <Button 
        onClick={() => toast.info('Info: New features are available.')}
      >
        Info Toast
      </Button>
      <Button 
        variant="primary"
        onClick={() => toast.primary('Primary notification message.')}
      >
        Primary Toast
      </Button>
    </Flex>
  ),
};

/**
 * Toast with custom title and description
 */
export const WithTitleAndDescription: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        variant="success"
        onClick={() => toast.success('Your profile has been updated successfully.', {
          title: 'Profile Updated',
        })}
      >
        With Title
      </Button>
      <Button 
        variant="primary"
        onClick={() => toast.info('', {
          title: 'New Message',
          description: 'You have 3 unread messages from your team.',
        })}
      >
        Title + Description
      </Button>
    </Flex>
  ),
};

/**
 * Toast with custom auto-close duration
 */
export const CustomDuration: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        onClick={() => toast.info('This will disappear in 2 seconds', {
          autoClose: 2000,
        })}
      >
        2 Seconds
      </Button>
      <Button 
        onClick={() => toast.success('This will disappear in 10 seconds', {
          autoClose: 10000,
        })}
      >
        10 Seconds
      </Button>
      <Button 
        variant="warning"
        onClick={() => toast.warning('This will stay until dismissed', {
          autoClose: false,
        })}
      >
        No Auto-Close
      </Button>
    </Flex>
  ),
};

/**
 * Toast with action button
 */
export const WithAction: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        onClick={() => toast.success('File uploaded successfully', {
          title: 'Upload Complete',
          action: {
            label: 'View',
            onClick: () => alert('View clicked!'),
          },
        })}
      >
        With Action
      </Button>
      <Button 
        variant="warning"
        onClick={() => {
          const id = toast.warning('Item will be deleted in 5 seconds', {
            title: 'Delete Scheduled',
            autoClose: 5000,
            action: {
              label: 'Undo',
              onClick: () => {
                toast.dismiss(id);
                toast.success('Delete cancelled');
              },
            },
          });
        }}
      >
        Undo Action
      </Button>
    </Flex>
  ),
};

/**
 * Toast without progress bar or close button
 */
export const CustomOptions: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        onClick={() => toast.info('No progress bar', {
          progressBar: false,
        })}
      >
        No Progress Bar
      </Button>
      <Button 
        onClick={() => toast.success('No close button', {
          closeButton: false,
          autoClose: 3000,
        })}
      >
        No Close Button
      </Button>
      <Button 
        onClick={() => toast.warning('Minimal toast', {
          progressBar: false,
          closeButton: false,
          autoClose: 3000,
        })}
      >
        Minimal
      </Button>
    </Flex>
  ),
};

/**
 * Toast with custom icon
 */
export const CustomIcon: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        onClick={() => toast.success('Custom icon toast', {
          icon: <span style={{ fontSize: '20px' }}>🎉</span>,
        })}
      >
        Celebration
      </Button>
      <Button 
        onClick={() => toast.info('No icon', {
          icon: false,
        })}
      >
        No Icon
      </Button>
      <Button 
        onClick={() => toast.primary('Rocket launch!', {
          icon: <span style={{ fontSize: '20px' }}>🚀</span>,
          title: 'Launch Successful',
        })}
      >
        Rocket
      </Button>
    </Flex>
  ),
};

/**
 * Dismissing toasts programmatically
 */
export const ProgrammaticDismiss: Story = {
  render: () => {
    let toastId: string | number;

    return (
      <Flex gap="md">
        <Button 
          onClick={() => {
            toastId = toast.info('This is a persistent toast', {
              autoClose: false,
              title: 'Persistent Message',
            });
          }}
        >
          Show Persistent Toast
        </Button>
        <Button 
          variant="danger"
          onClick={() => {
            if (toastId) {
              toast.dismiss(toastId);
            }
          }}
        >
          Dismiss Last Toast
        </Button>
        <Button 
          variant="warning"
          onClick={() => toast.dismissAll()}
        >
          Dismiss All Toasts
        </Button>
      </Flex>
    );
  },
};

/**
 * Updating an existing toast
 */
export const UpdateToast: Story = {
  render: () => {
    let toastId: string | number;

    return (
      <Flex gap="md">
        <Button 
          onClick={() => {
            toastId = toast.info('Processing...', {
              autoClose: false,
              progressBar: false,
            });

            // Simulate async operation
            setTimeout(() => {
              toast.update(toastId, {
                variant: 'success',
                title: 'Complete!',
                description: 'Your operation completed successfully.',
                autoClose: 3000,
                progressBar: true,
              });
            }, 2000);
          }}
        >
          Process Task
        </Button>
        <Button 
          variant="primary"
          onClick={() => {
            toastId = toast.primary('Uploading file...', {
              autoClose: false,
              progressBar: false,
              title: 'Upload in Progress',
            });

            setTimeout(() => {
              toast.update(toastId, {
                variant: 'success',
                title: 'Upload Complete',
                description: 'Your file has been uploaded successfully.',
                autoClose: 3000,
                progressBar: true,
              });
            }, 3000);
          }}
        >
          Upload File
        </Button>
      </Flex>
    );
  },
};

/**
 * Multiple toasts at once
 */
export const MultipleToasts: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        onClick={() => {
          toast.success('First notification');
          setTimeout(() => toast.info('Second notification'), 200);
          setTimeout(() => toast.warning('Third notification'), 400);
          setTimeout(() => toast.error('Fourth notification'), 600);
        }}
      >
        Show Multiple
      </Button>
      <Button 
        variant="primary"
        onClick={() => {
          for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
              toast.info(`Notification ${i} of 5`, {
                autoClose: 3000 + (i * 1000),
              });
            }, i * 300);
          }
        }}
      >
        Staggered Toasts
      </Button>
    </Flex>
  ),
};

/**
 * Loading state pattern
 */
export const LoadingPattern: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        variant="primary"
        onClick={() => {
          const id = toast.info('Saving changes...', {
            autoClose: false,
            progressBar: false,
            closeButton: false,
            icon: <span>⏳</span>,
          });

          // Simulate API call
          setTimeout(() => {
            toast.update(id, {
              variant: 'success',
              title: 'Saved!',
              description: 'All changes have been saved successfully.',
              autoClose: 3000,
              progressBar: true,
              closeButton: true,
              icon: undefined,
            });
          }, 2000);
        }}
      >
        Save Changes
      </Button>
      <Button 
        variant="danger"
        onClick={() => {
          const id = toast.warning('Deleting item...', {
            autoClose: false,
            progressBar: false,
            closeButton: false,
          });

          setTimeout(() => {
            toast.update(id, {
              variant: 'error',
              title: 'Delete Failed',
              description: 'Could not delete item. Please try again.',
              autoClose: 5000,
              progressBar: true,
              closeButton: true,
            });
          }, 2000);
        }}
      >
        Delete Item (Fail)
      </Button>
    </Flex>
  ),
};

/**
 * Form validation feedback
 */
export const FormValidation: Story = {
  render: () => (
    <Flex gap="md">
      <Button 
        variant="success"
        onClick={() => {
          toast.success('Form submitted successfully!', {
            title: 'Success',
            description: 'We\'ll get back to you within 24 hours.',
            autoClose: 5000,
          });
        }}
      >
        Valid Submission
      </Button>
      <Button 
        variant="danger"
        onClick={() => {
          toast.error('Please fix the following errors:', {
            title: 'Validation Failed',
            description: '• Email is required\n• Password must be at least 8 characters',
            autoClose: false,
          });
        }}
      >
        Invalid Form
      </Button>
    </Flex>
  ),
};

/**
 * API operation feedback
 */
export const APIOperations: Story = {
  render: () => (
    <Flex gap="md" direction="column" align="start">
      <Flex gap="md">
        <Button 
          variant="primary"
          onClick={async () => {
            const id = toast.info('Fetching data...', {
              autoClose: false,
              progressBar: false,
            });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            toast.update(id, {
              variant: 'success',
              title: 'Data loaded',
              description: 'Successfully fetched 245 records.',
              autoClose: 3000,
              progressBar: true,
            });
          }}
        >
          Fetch Data
        </Button>
        <Button 
          variant="success"
          onClick={async () => {
            const id = toast.info('Creating user...', {
              autoClose: false,
              progressBar: false,
            });

            await new Promise(resolve => setTimeout(resolve, 1500));

            toast.update(id, {
              variant: 'success',
              title: 'User Created',
              description: 'New user account has been created successfully.',
              autoClose: 4000,
              progressBar: true,
            });
          }}
        >
          Create User
        </Button>
        <Button 
          variant="danger"
          onClick={async () => {
            const id = toast.warning('Connecting to server...', {
              autoClose: false,
              progressBar: false,
            });

            await new Promise(resolve => setTimeout(resolve, 2000));

            toast.update(id, {
              variant: 'error',
              title: 'Connection Failed',
              description: 'Unable to reach the server. Please check your internet connection.',
              autoClose: false,
              action: {
                label: 'Retry',
                onClick: () => {
                  toast.dismiss(id);
                  toast.info('Retrying connection...');
                },
              },
            });
          }}
        >
          Network Error
        </Button>
      </Flex>
    </Flex>
  ),
};

/**
 * Real-world examples
 */
export const RealWorldExamples: Story = {
  render: () => (
    <Flex gap="md" direction="column" align="start">
      <Flex gap="md">
        <Button 
          onClick={() => toast.success('Copied to clipboard!', { autoClose: 2000 })}
        >
          Copy to Clipboard
        </Button>
        <Button 
          onClick={() => toast.info('Download started', {
            title: 'Downloading',
            description: 'report-2024.pdf',
          })}
        >
          Download File
        </Button>
        <Button 
          onClick={() => toast.success('Settings saved', {
            description: 'Your preferences have been updated.',
          })}
        >
          Save Settings
        </Button>
      </Flex>
      <Flex gap="md">
        <Button 
          variant="warning"
          onClick={() => toast.warning('Session expiring soon', {
            title: 'Warning',
            description: 'You will be logged out in 5 minutes.',
            autoClose: 10000,
            action: {
              label: 'Extend',
              onClick: () => toast.success('Session extended'),
            },
          })}
        >
          Session Warning
        </Button>
        <Button 
          variant="success"
          onClick={() => toast.success('Welcome back!', {
            title: 'Login Successful',
            description: 'Redirecting to dashboard...',
            autoClose: 2000,
          })}
        >
          Login Success
        </Button>
        <Button 
          variant="primary"
          onClick={() => toast.primary('New comment on your post', {
            title: 'Notification',
            description: 'John Doe replied to your article.',
            action: {
              label: 'View',
              onClick: () => alert('Opening comment...'),
            },
          })}
        >
          Notification
        </Button>
      </Flex>
    </Flex>
  ),
};

/**
 * Playground - Try different combinations
 */
export const Playground: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '16px' }}>Toast API Playground</h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Click buttons to test different toast configurations
      </p>
      <Flex gap="md" direction="column" align="start">
        <Flex gap="sm">
          <Button size="sm" onClick={() => toast.success('Success message')}>
            Success
          </Button>
          <Button size="sm" onClick={() => toast.error('Error message')}>
            Error
          </Button>
          <Button size="sm" onClick={() => toast.warning('Warning message')}>
            Warning
          </Button>
          <Button size="sm" onClick={() => toast.info('Info message')}>
            Info
          </Button>
          <Button size="sm" onClick={() => toast.primary('Primary message')}>
            Primary
          </Button>
        </Flex>
        <Flex gap="sm">
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => toast.dismissAll()}
          >
            Dismiss All
          </Button>
        </Flex>
      </Flex>
    </div>
  ),
};