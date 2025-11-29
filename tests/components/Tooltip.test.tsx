import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from '../../src/components/Tooltip';

describe('Tooltip', () => {
  it('renders trigger element', () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows tooltip on mouse enter', async () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    });
  });

  it('hides tooltip on mouse leave', async () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    });

    fireEvent.mouseLeave(trigger);

    await waitFor(() => {
      expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    });
  });

  it('shows tooltip on focus', async () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Focus me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Focus me');
    fireEvent.focus(trigger);

    await waitFor(() => {
      expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    });
  });

  it('renders with arrow', async () => {
    const { container } = render(
      <Tooltip content="Tooltip text" arrow>
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const arrow = document.body.querySelector('.vtx-tooltip-arrow');
      expect(arrow).toBeInTheDocument();
    });
  });

  it('renders different variants', async () => {
    const { container } = render(
      <Tooltip content="Dark tooltip" variant="dark">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = document.body.querySelector('.vtx-tooltip--dark');
      expect(tooltip).toBeInTheDocument();
    });
  });

  it('respects delay prop', async () => {
    render(
      <Tooltip content="Tooltip text" delay={500}>
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    // Should not appear immediately
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();

    // Should appear after delay
    await waitFor(
      () => {
        expect(screen.getByText('Tooltip text')).toBeInTheDocument();
      },
      { timeout: 600 }
    );
  });

  it('works in controlled mode', () => {
    const { rerender } = render(
      <Tooltip content="Tooltip text" open={false}>
        <button>Button</button>
      </Tooltip>
    );

    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();

    rerender(
      <Tooltip content="Tooltip text" open={true}>
        <button>Button</button>
      </Tooltip>
    );

    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('applies custom className', async () => {
    const { container } = render(
      <Tooltip content="Tooltip text" className="custom-tooltip">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = document.body.querySelector('.vtx-tooltip');
      expect(tooltip).toHaveClass('custom-tooltip');
    });
  });

  it('renders dismissible tooltip with close button', async () => {
    render(
      <Tooltip content="Tooltip text" dismissible open>
        <button>Button</button>
      </Tooltip>
    );

    await waitFor(() => {
      const closeButton = document.body.querySelector('.vtx-tooltip-close');
      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toHaveAttribute('aria-label', 'Dismiss tooltip');
    });
  });

  it('calls onDismiss when close button is clicked', async () => {
    const onDismiss = jest.fn();
    render(
      <Tooltip content="Tooltip text" dismissible open onDismiss={onDismiss}>
        <button>Button</button>
      </Tooltip>
    );

    await waitFor(() => {
      const closeButton = document.body.querySelector('.vtx-tooltip-close');
      expect(closeButton).toBeInTheDocument();
    });

    const closeButton = document.body.querySelector('.vtx-tooltip-close') as HTMLElement;
    fireEvent.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('renders all variant styles', async () => {
    const variants = ['dark', 'light', 'error', 'warning', 'success', 'info'] as const;

    for (const variant of variants) {
      const { unmount } = render(
        <Tooltip content="Tooltip" variant={variant} open>
          <button>Button</button>
        </Tooltip>
      );

      await waitFor(() => {
        const tooltip = document.body.querySelector(`.vtx-tooltip--${variant}`);
        expect(tooltip).toBeInTheDocument();
      });

      unmount();
    }
  });

  it('does not show tooltip when disabled', async () => {
    render(
      <Tooltip content="Tooltip text" disabled>
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    // Wait a bit to ensure tooltip doesn't appear
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });
});
