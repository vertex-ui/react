import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Alert } from '../../src/components/Alert';

describe('Alert', () => {
  it('renders with children content', () => {
    render(<Alert>This is an alert message</Alert>);
    expect(screen.getByText('This is an alert message')).toBeInTheDocument();
  });

  it('renders with description prop', () => {
    render(<Alert description="Alert description" />);
    expect(screen.getByText('Alert description')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Alert title="Alert Title">Content here</Alert>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Content here')).toBeInTheDocument();
  });

  it('renders with title and description', () => {
    render(<Alert title="Title" description="Description" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('prioritizes children over description', () => {
    render(
      <Alert description="Description">
        <span>Children content</span>
      </Alert>
    );
    expect(screen.getByText('Children content')).toBeInTheDocument();
    expect(screen.queryByText('Description')).not.toBeInTheDocument();
  });

  it('renders all variants correctly', () => {
    const variants = ['success', 'error', 'warning', 'info', 'neutral'] as const;
    const { rerender } = render(<Alert variant="success">Test</Alert>);

    variants.forEach((variant) => {
      rerender(<Alert variant={variant}>Test</Alert>);
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(`alert--${variant}`);
    });
  });

  it('renders all styles correctly', () => {
    const styles = ['filled', 'outlined', 'subtle', 'left-accent'] as const;
    const { rerender } = render(<Alert alertStyle="subtle">Test</Alert>);

    styles.forEach((alertStyle) => {
      rerender(<Alert alertStyle={alertStyle}>Test</Alert>);
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(`alert--${alertStyle}`);
    });
  });

  it('renders all sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    const { rerender } = render(<Alert size="sm">Test</Alert>);

    sizes.forEach((size) => {
      rerender(<Alert size={size}>Test</Alert>);
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(`alert--${size}`);
    });
  });

  it('shows default icon based on variant', () => {
    const { container } = render(<Alert variant="success">Test</Alert>);
    const icon = container.querySelector('.alert-icon');
    expect(icon).toBeInTheDocument();
  });

  it('hides icon when icon prop is false', () => {
    const { container } = render(<Alert icon={false}>Test</Alert>);
    const icon = container.querySelector('.alert-icon');
    expect(icon).not.toBeInTheDocument();
  });

  it('renders custom icon', () => {
    const CustomIcon = () => <span data-testid="custom-icon">★</span>;
    render(
      <Alert icon={<CustomIcon />} variant="success">
        Test
      </Alert>
    );
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('shows close button when dismissible is true', () => {
    render(<Alert dismissible>Test</Alert>);
    const closeButton = screen.getByLabelText('Close alert');
    expect(closeButton).toBeInTheDocument();
  });

  it('does not show close button by default', () => {
    render(<Alert>Test</Alert>);
    const closeButton = screen.queryByLabelText('Close alert');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <Alert dismissible onClose={onClose}>
        Test
      </Alert>
    );

    const closeButton = screen.getByLabelText('Close alert');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('removes alert from DOM when dismissed', () => {
    render(<Alert dismissible>Test message</Alert>);

    const closeButton = screen.getByLabelText('Close alert');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Test message')).not.toBeInTheDocument();
  });

  it('renders action element', () => {
    const action = <button data-testid="action-button">Action</button>;
    render(<Alert action={action}>Test</Alert>);

    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  it('renders action with close button', () => {
    const action = <button data-testid="action-button">Action</button>;
    render(
      <Alert action={action} dismissible>
        Test
      </Alert>
    );

    expect(screen.getByTestId('action-button')).toBeInTheDocument();
    expect(screen.getByLabelText('Close alert')).toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Alert fullWidth>Test</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert--full-width');
  });

  it('applies custom className', () => {
    render(<Alert className="custom-alert">Test</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('custom-alert');
    expect(alert).toHaveClass('alert');
  });

  it('uses default role of alert', () => {
    render(<Alert>Test</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('accepts custom role', () => {
    render(<Alert role="status">Test</Alert>);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders complex children content', () => {
    render(
      <Alert variant="info" title="Information">
        <p>First paragraph</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Alert>
    );

    expect(screen.getByText('Information')).toBeInTheDocument();
    expect(screen.getByText('First paragraph')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('handles title without message', () => {
    render(<Alert title="Only Title" />);
    expect(screen.getByText('Only Title')).toBeInTheDocument();
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.alert-message')).not.toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Alert ref={ref}>Test</Alert>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('alert');
  });

  it('renders with all props combined', () => {
    const onClose = jest.fn();
    const action = <button data-testid="action">Undo</button>;

    render(
      <Alert
        variant="warning"
        alertStyle="left-accent"
        size="lg"
        title="Warning Title"
        dismissible
        onClose={onClose}
        action={action}
        fullWidth
        className="test-class"
      >
        Warning message content
      </Alert>
    );

    expect(screen.getByText('Warning Title')).toBeInTheDocument();
    expect(screen.getByText('Warning message content')).toBeInTheDocument();
    expect(screen.getByTestId('action')).toBeInTheDocument();
    expect(screen.getByLabelText('Close alert')).toBeInTheDocument();

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert--warning');
    expect(alert).toHaveClass('alert--left-accent');
    expect(alert).toHaveClass('alert--lg');
    expect(alert).toHaveClass('alert--full-width');
    expect(alert).toHaveClass('test-class');
  });

  it('close button has proper accessibility', () => {
    render(<Alert dismissible>Test</Alert>);
    const closeButton = screen.getByLabelText('Close alert');
    expect(closeButton).toHaveAttribute('type', 'button');
    expect(closeButton).toHaveClass('alert-close');
  });
});
