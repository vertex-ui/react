import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import { ActionMenu, ActionMenuProps } from '../../src/components/Menu/ActionMenu';
import { MenuItemProps } from '../../src/components/Menu/Menu';

describe('ActionMenu', () => {
  const mockItems: MenuItemProps[] = [
    { label: 'Edit', onClick: jest.fn() },
    { label: 'Delete', onClick: jest.fn(), variant: 'danger' },
    { label: 'Share', items: [{ label: 'Email', onClick: jest.fn() }] }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with default trigger', () => {
      render(<ActionMenu items={mockItems} triggerLabel="Options" />);
      expect(screen.getByText('Options')).toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('renders with custom icon trigger', () => {
      render(
        <ActionMenu
          items={mockItems}
          triggerIcon={<span data-testid="icon">Icon</span>}
        />
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders with ReactNode trigger', () => {
      render(
        <ActionMenu
          items={mockItems}
          trigger={<button>Custom Trigger</button>}
        />
      );
      expect(screen.getByText('Custom Trigger')).toBeInTheDocument();
    });

    it('renders with render function trigger', () => {
      render(
        <ActionMenu
          items={mockItems}
          trigger={({ isOpen }) => <button>State: {isOpen ? 'Open' : 'Closed'}</button>}
        />
      );
      expect(screen.getByText('State: Closed')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('opens menu on trigger click', () => {
      render(<ActionMenu items={mockItems} />);

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(screen.getByText('Edit')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });

    it('closes menu on trigger click when open', () => {
      render(<ActionMenu items={mockItems} />);

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);
      expect(screen.getByRole('menu')).toBeInTheDocument();

      fireEvent.click(trigger);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('closes menu when clicking outside', () => {
      render(
        <div>
          <ActionMenu items={mockItems} />
          <div data-testid="outside">Outside</div>
        </div>
      );

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      fireEvent.mouseDown(screen.getByTestId('outside'));
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('closes menu on Escape key', () => {
      render(<ActionMenu items={mockItems} />);

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('calls onOpen and onClose callbacks', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();
      render(<ActionMenu items={mockItems} onOpen={onOpen} onClose={onClose} />);

      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);
      expect(onOpen).toHaveBeenCalled();

      fireEvent.click(trigger);
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('Item Selection', () => {
    it('calls item onClick and closes menu', () => {
      render(<ActionMenu items={mockItems} />);

      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Edit'));

      expect(mockItems[0].onClick).toHaveBeenCalled();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('does not close menu for items without onClick', () => {
      const items = [{ label: 'Info Only' }];
      render(<ActionMenu items={items} />);

      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByText('Info Only'));

      // Should remain open as there is no action associated
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  describe('Custom Trigger Functionality', () => {
    it('passes state to render function', () => {
      render(
        <ActionMenu
          items={mockItems}
          trigger={({ isOpen, toggle }) => (
            <button onClick={toggle}>
              {isOpen ? 'Close' : 'Open'}
            </button>
          )}
        />
      );

      const button = screen.getByText('Open');
      fireEvent.click(button);

      expect(screen.getByText('Close')).toBeInTheDocument();
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  describe('Accessibility and Disabled State', () => {
    it('does not open when disabled', () => {
      render(<ActionMenu items={mockItems} disabled />);

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveAttribute('aria-disabled', 'true');

      fireEvent.click(trigger);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('supports keyboard Enter to open', () => {
      render(<ActionMenu items={mockItems} />);

      const trigger = screen.getByRole('button');
      fireEvent.keyDown(trigger, { key: 'Enter' });

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });
});
