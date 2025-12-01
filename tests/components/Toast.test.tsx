import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { Toast } from '../../src/components/Toast/Toast';
import { ToastContainer } from '../../src/components/Toast/ToastContainer';
import { toast, useToast } from '../../src/components/Toast/useToast';

// Mock implementation for createPortal
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (element: React.ReactElement) => element,
}));

// Test component to interact with toast API
const TestComponent = () => {
  const { addToast, removeToast, clearAllToasts } = useToast();

  return (
    <div>
      <button
        onClick={() => addToast('Test message', { variant: 'success' })}
        data-testid="add-toast"
      >
        Add Toast
      </button>
      <button
        onClick={() => addToast('Custom toast', { toastId: 'custom-id' })}
        data-testid="add-custom-toast"
      >
        Add Custom Toast
      </button>
      <button onClick={() => removeToast('custom-id')} data-testid="remove-toast">
        Remove Toast
      </button>
      <button onClick={clearAllToasts} data-testid="clear-toasts">
        Clear All
      </button>
    </div>
  );
};

describe('Toast', () => {
  const mockOnDismiss = jest.fn();

  beforeEach(() => {
    mockOnDismiss.mockClear();
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('renders toast content', () => {
    render(
      <Toast id="test-toast" isVisible={true} onDismiss={mockOnDismiss} createdAt={Date.now()}>
        Test message
      </Toast>
    );

    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders with success variant', () => {
    render(
      <Toast
        id="test-toast"
        variant="success"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
      >
        Success message
      </Toast>
    );

    const toast = screen.getByRole('alert');
    expect(toast).toHaveClass('vtx-toast--success');
  });

  it('renders with primary variant', () => {
    render(
      <Toast
        id="test-toast"
        variant="primary"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
      >
        Primary message
      </Toast>
    );

    const toast = screen.getByRole('alert');
    expect(toast).toHaveClass('vtx-toast--primary');
  });

  it('renders with title and description', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        title="Toast Title"
        description="Toast description"
      >
        Additional content
      </Toast>
    );

    expect(screen.getByText('Toast Title')).toBeInTheDocument();
    expect(screen.getByText('Toast description')).toBeInTheDocument();
    expect(screen.getByText('Additional content')).toBeInTheDocument();
  });

  it('shows close button by default', () => {
    render(
      <Toast id="test-toast" isVisible={true} onDismiss={mockOnDismiss} createdAt={Date.now()}>
        Test message
      </Toast>
    );

    expect(screen.getByLabelText('Close notification')).toBeInTheDocument();
  });

  it('hides close button when closeButton is false', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        closeButton={false}
      >
        Test message
      </Toast>
    );

    expect(screen.queryByLabelText('Close notification')).not.toBeInTheDocument();
  });

  it('calls onDismiss when close button is clicked', () => {
    render(
      <Toast id="test-toast" isVisible={true} onDismiss={mockOnDismiss} createdAt={Date.now()}>
        Test message
      </Toast>
    );

    fireEvent.click(screen.getByLabelText('Close notification'));

    // Should trigger animation first
    act(() => {
      jest.advanceTimersByTime(300); // animation duration
    });

    expect(mockOnDismiss).toHaveBeenCalled();
  });

  it('renders action button when provided', () => {
    const mockAction = jest.fn();
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        action={{ label: 'Undo', onClick: mockAction }}
      >
        Test message
      </Toast>
    );

    const actionButton = screen.getByText('Undo');
    expect(actionButton).toBeInTheDocument();

    fireEvent.click(actionButton);
    expect(mockAction).toHaveBeenCalled();
  });

  it('shows progress bar by default', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        autoClose={5000}
      >
        Test message
      </Toast>
    );

    expect(document.querySelector('.vtx-toast__progress')).toBeInTheDocument();
  });

  it('hides progress bar when progressBar is false', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        progressBar={false}
      >
        Test message
      </Toast>
    );

    expect(document.querySelector('.vtx-toast__progress')).not.toBeInTheDocument();
  });

  it('does not auto-close when autoClose is false', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        autoClose={false}
      >
        Test message
      </Toast>
    );

    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(mockOnDismiss).not.toHaveBeenCalled();
  });

  it('hides icon when icon is false', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        icon={false}
      >
        Test message
      </Toast>
    );

    expect(document.querySelector('.vtx-toast__icon')).not.toBeInTheDocument();
  });

  it('renders custom icon', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        icon={<span data-testid="custom-icon">★</span>}
      >
        Test message
      </Toast>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Toast
        id="test-toast"
        isVisible={true}
        onDismiss={mockOnDismiss}
        createdAt={Date.now()}
        className="custom-toast"
      >
        Test message
      </Toast>
    );

    expect(screen.getByRole('alert')).toHaveClass('custom-toast');
  });
});

describe('ToastContainer', () => {
  it('renders toast container', () => {
    render(
      <ToastContainer>
        <TestComponent />
      </ToastContainer>
    );

    expect(screen.getByTestId('add-toast')).toBeInTheDocument();
  });

  it('adds toast when button is clicked', async () => {
    render(
      <ToastContainer>
        <TestComponent />
      </ToastContainer>
    );

    act(() => {
      fireEvent.click(screen.getByTestId('add-toast'));
    });

    await waitFor(
      () => {
        expect(screen.getByText('Test message')).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });

  it('removes specific toast', async () => {
    render(
      <ToastContainer>
        <TestComponent />
      </ToastContainer>
    );

    // Add custom toast
    act(() => {
      fireEvent.click(screen.getByTestId('add-custom-toast'));
    });

    await waitFor(() => {
      expect(screen.getByText('Custom toast')).toBeInTheDocument();
    });

    // Remove specific toast
    act(() => {
      fireEvent.click(screen.getByTestId('remove-toast'));
    });

    await waitFor(() => {
      expect(screen.queryByText('Custom toast')).not.toBeInTheDocument();
    });
  });

  it('clears all toasts', async () => {
    render(
      <ToastContainer>
        <TestComponent />
      </ToastContainer>
    );

    // Add multiple toasts
    act(() => {
      fireEvent.click(screen.getByTestId('add-toast'));
      fireEvent.click(screen.getByTestId('add-custom-toast'));
    });

    await waitFor(() => {
      expect(screen.getByText('Test message')).toBeInTheDocument();
      expect(screen.getByText('Custom toast')).toBeInTheDocument();
    });

    // Clear all
    act(() => {
      fireEvent.click(screen.getByTestId('clear-toasts'));
    });

    await waitFor(() => {
      expect(screen.queryByText('Test message')).not.toBeInTheDocument();
      expect(screen.queryByText('Custom toast')).not.toBeInTheDocument();
    });
  });
});

describe('toast API', () => {
  beforeEach(() => {
    // Clear any existing toasts
    document.body.innerHTML = '';
  });

  it('shows success toast', () => {
    // Mock the toast manager
    const mockAddToast = jest.fn();
    Object.defineProperty(toast, 'addToastFn', { value: mockAddToast, writable: true });

    toast.success('Success message');

    expect(mockAddToast).toHaveBeenCalledWith('Success message', {
      variant: 'success',
    });
  });

  it('shows error toast', () => {
    const mockAddToast = jest.fn();
    Object.defineProperty(toast, 'addToastFn', { value: mockAddToast, writable: true });

    toast.error('Error message');

    expect(mockAddToast).toHaveBeenCalledWith('Error message', {
      variant: 'error',
    });
  });

  it('shows warning toast', () => {
    const mockAddToast = jest.fn();
    Object.defineProperty(toast, 'addToastFn', { value: mockAddToast, writable: true });

    toast.warning('Warning message');

    expect(mockAddToast).toHaveBeenCalledWith('Warning message', {
      variant: 'warning',
    });
  });

  it('shows info toast', () => {
    const mockAddToast = jest.fn();
    Object.defineProperty(toast, 'addToastFn', { value: mockAddToast, writable: true });

    toast.info('Info message');

    expect(mockAddToast).toHaveBeenCalledWith('Info message', {
      variant: 'info',
    });
  });

  it('shows primary toast', () => {
    const mockAddToast = jest.fn();
    Object.defineProperty(toast, 'addToastFn', { value: mockAddToast, writable: true });

    toast.primary('Primary message');

    expect(mockAddToast).toHaveBeenCalledWith('Primary message', {
      variant: 'primary',
    });
  });

  it('dismisses toast by id', () => {
    const mockRemoveToast = jest.fn();
    Object.defineProperty(toast, 'removeToastFn', { value: mockRemoveToast, writable: true });

    toast.dismiss('test-id');

    expect(mockRemoveToast).toHaveBeenCalledWith('test-id');
  });

  it('dismisses all toasts', () => {
    const mockClearAllToasts = jest.fn();
    Object.defineProperty(toast, 'clearAllToastsFn', { value: mockClearAllToasts, writable: true });

    toast.dismissAll();

    expect(mockClearAllToasts).toHaveBeenCalled();
  });
});
