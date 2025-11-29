import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Modal } from '../../src/components/Modal';

expect.extend(toHaveNoViolations);

describe('Modal', () => {
  describe('Rendering', () => {
    it('renders modal when open', () => {
      render(
        <Modal isOpen onClose={() => {}}>
          <p>Modal content</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
      render(
        <Modal isOpen={false} onClose={() => {}}>
          <p>Modal content</p>
        </Modal>
      );
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders with title', () => {
      render(
        <Modal isOpen title="Test Modal" onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });

    it('renders with footer', () => {
      render(
        <Modal isOpen onClose={() => {}} footer={<button>Action</button>}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('renders different sizes', () => {
      const { rerender } = render(
        <Modal isOpen size="small" onClose={() => {}}>
          <p>Small</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveClass('vtx-modal--small');

      rerender(
        <Modal isOpen size="large" onClose={() => {}}>
          <p>Large</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveClass('vtx-modal--large');
    });
  });

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      render(
        <Modal isOpen title="Test" onClose={handleClose}>
          <p>Content</p>
        </Modal>
      );

      await user.click(screen.getByLabelText('Close modal'));
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when backdrop is clicked', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      render(
        <Modal isOpen onClose={handleClose}>
          <p>Content</p>
        </Modal>
      );

      const backdrop = screen.getByRole('presentation');
      await user.click(backdrop);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not close on backdrop click when disabled', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      render(
        <Modal isOpen closeOnBackdropClick={false} onClose={handleClose}>
          <p>Content</p>
        </Modal>
      );

      const backdrop = screen.getByRole('presentation');
      await user.click(backdrop);
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('closes on Escape key by default', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      render(
        <Modal isOpen onClose={handleClose}>
          <p>Content</p>
        </Modal>
      );

      await user.keyboard('{Escape}');
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not close on Escape when disabled', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      render(
        <Modal isOpen closeOnEscape={false} onClose={handleClose}>
          <p>Content</p>
        </Modal>
      );

      await user.keyboard('{Escape}');
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Modal isOpen title="Accessible Modal" onClose={() => {}}>
          <p>Modal content</p>
        </Modal>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has correct ARIA attributes', () => {
      render(
        <Modal isOpen title="Test Modal" onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-labelledby', 'vtx-modal-title');
    });
  });
});
