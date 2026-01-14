import React from 'react';
import { render, screen } from '../test-utils';
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
        <Modal isOpen size="sm" onClose={() => {}}>
          <p>Small</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveClass('vtx-modal--sm');

      rerender(
        <Modal isOpen size="lg" onClose={() => {}}>
          <p>Large</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveClass('vtx-modal--lg');
    });

    it('renders with description', () => {
      render(
        <Modal isOpen title="Title" description="Description text" onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.getByText('Description text')).toBeInTheDocument();
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-describedby', 'vtx-modal-description');
    });

    it('renders with custom header', () => {
      render(
        <Modal isOpen header={<div data-testid="custom-header">Header</div>} onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
      // Default title should not be present if custom header is used (unless inside it)
      expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
    });

    it('renders with footerButtons', () => {
      const handleClick = jest.fn();
      const footerButtons = [
        { label: 'Cancel', onClick: () => {} },
        { label: 'Confirm', onClick: handleClick, variant: 'primary' as const }
      ];
      render(
        <Modal isOpen onClose={() => {}} footerButtons={footerButtons}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });

    it('renders scrollable modal', () => {
      render(
        <Modal isOpen scrollable onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.getByRole('dialog')).toHaveClass('vtx-modal--scrollable');
    });

    it('renders centered modal', () => {
      render(
        <Modal isOpen centered onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      const backdrop = document.querySelector('.vtx-modal-backdrop');
      expect(backdrop).toHaveClass('vtx-modal-backdrop--centered');
    });

    it('renders transparent backdrop', () => {
      render(
        <Modal isOpen transparentBackdrop onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      const backdrop = document.querySelector('.vtx-modal-backdrop');
      expect(backdrop).toHaveClass('vtx-modal-backdrop--transparent');
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

    it('calls footer button onClick', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      const footerButtons = [
        { label: 'Confirm', onClick: handleClick }
      ];
      render(
        <Modal isOpen onClose={() => {}} footerButtons={footerButtons}>
          <p>Content</p>
        </Modal>
      );

      await user.click(screen.getByText('Confirm'));
      expect(handleClick).toHaveBeenCalled();
    });

    it('hides close button when showCloseButton is false', () => {
      render(
        <Modal isOpen title="Title" showCloseButton={false} onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
    });

    it('calls onAfterOpen when opened', () => {
      const onAfterOpen = jest.fn();
      render(
        <Modal isOpen onAfterOpen={onAfterOpen} onClose={() => {}}>
          <p>Content</p>
        </Modal>
      );
      expect(onAfterOpen).toHaveBeenCalled();
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
