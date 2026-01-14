import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../../src/components/Accordion';
import { AccordionItemProps } from '../../src/components/Accordion/types';

describe('Accordion', () => {
  const mockItems: AccordionItemProps[] = [
    {
      id: 'item1',
      header: 'First Item',
      children: 'First item content',
    },
    {
      id: 'item2',
      header: 'Second Item',
      children: 'Second item content',
      disabled: false,
    },
    {
      id: 'item3',
      header: 'Third Item',
      children: 'Third item content',
      disabled: true,
    },
  ];

  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Accordion items={mockItems} />);
      expect(screen.getByRole('presentation')).toBeInTheDocument();
    });

    it('renders all accordion items', () => {
      render(<Accordion items={mockItems} />);
      expect(screen.getByText('First Item')).toBeInTheDocument();
      expect(screen.getByText('Second Item')).toBeInTheDocument();
      expect(screen.getByText('Third Item')).toBeInTheDocument();
    });

    it('renders with children instead of items prop', () => {
      render(
        <Accordion>
          <div id="child1" header="Child 1">
            Child content 1
          </div>
          <div id="child2" header="Child 2">
            Child content 2
          </div>
        </Accordion>
      );
      expect(screen.getByText('Child content 1')).toBeInTheDocument();
      expect(screen.getByText('Child content 2')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Accordion items={mockItems} className="custom-accordion" />);
      expect(screen.getByRole('presentation')).toHaveClass('custom-accordion');
    });

    it('applies custom styles', () => {
      const customStyles = { backgroundColor: 'red' };
      render(<Accordion items={mockItems} style={customStyles} />);
      expect(screen.getByRole('presentation')).toHaveStyle('background-color: red');
    });
  });

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Accordion items={mockItems} variant="default" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--default');
    });

    it('renders bordered variant', () => {
      render(<Accordion items={mockItems} variant="bordered" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--bordered');
    });

    it('renders separated variant', () => {
      render(<Accordion items={mockItems} variant="separated" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--separated');
    });

    it('renders flush variant', () => {
      render(<Accordion items={mockItems} variant="flush" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--flush');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Accordion items={mockItems} size="sm" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--sm');
    });

    it('renders medium size by default', () => {
      render(<Accordion items={mockItems} />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--md');
    });

    it('renders large size', () => {
      render(<Accordion items={mockItems} size="lg" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--lg');
    });
  });

  describe('Interaction', () => {
    it('toggles item when header is clicked', async () => {
      render(<Accordion items={mockItems} />);
      const firstHeader = screen.getByText('First Item');

      // Initially content should be collapsed (maxHeight: 0)
      const contentContainer = document.getElementById('accordion-content-item1');
      expect(contentContainer).toHaveStyle('max-height: 0');
      expect(contentContainer).not.toHaveClass('accordion-item-content--open');

      // Click to open
      await act(async () => {
        fireEvent.click(firstHeader);
      });

      await waitFor(() => {
        expect(contentContainer).toHaveStyle('max-height: 500px');
        expect(contentContainer).toHaveClass('accordion-item-content--open');
      });

      // Click to close
      await act(async () => {
        fireEvent.click(firstHeader);
      });

      await waitFor(() => {
        expect(contentContainer).toHaveStyle('max-height: 0');
        expect(contentContainer).not.toHaveClass('accordion-item-content--open');
      });
    });

    it('toggles item with keyboard interaction', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);
      const firstHeader = screen.getByRole('button', { name: /first item/i });
      const contentContainer = document.getElementById('accordion-content-item1');

      // Focus and press Enter
      firstHeader.focus();
      await act(async () => {
        await user.keyboard('{Enter}');
      });
      await waitFor(() => {
        expect(contentContainer).toHaveStyle('max-height: 500px');
      });

      // Press Space to close
      await act(async () => {
        await user.keyboard(' ');
      });
      await waitFor(() => {
        expect(contentContainer).toHaveStyle('max-height: 0');
      });
    });

    it('does not toggle disabled items', async () => {
      render(<Accordion items={mockItems} />);
      const disabledHeader = screen.getByText('Third Item');
      const contentContainer = document.getElementById('accordion-content-item3');

      await act(async () => {
        fireEvent.click(disabledHeader);
      });
      expect(contentContainer).toHaveStyle('max-height: 0');
    });

    it('calls onToggle callback', () => {
      const onToggleMock = jest.fn();
      render(<Accordion items={mockItems} onToggle={onToggleMock} />);

      fireEvent.click(screen.getByText('First Item'));
      expect(onToggleMock).toHaveBeenCalledWith(['item1']);
    });
  });

  describe('Multiple Items Mode', () => {
    it('allows multiple items to be open when allowMultiple is true', () => {
      render(<Accordion items={mockItems} allowMultiple />);

      fireEvent.click(screen.getByText('First Item'));
      fireEvent.click(screen.getByText('Second Item'));

      expect(screen.getByText('First item content')).toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();
    });

    it('closes other items when allowMultiple is false', async () => {
      render(<Accordion items={mockItems} allowMultiple={false} />);

      const firstContent = document.getElementById('accordion-content-item1');
      const secondContent = document.getElementById('accordion-content-item2');

      await act(async () => {
        fireEvent.click(screen.getByText('First Item'));
      });
      await waitFor(() => {
        expect(firstContent).toHaveStyle('max-height: 500px');
      });

      await act(async () => {
        fireEvent.click(screen.getByText('Second Item'));
      });
      await waitFor(() => {
        expect(firstContent).toHaveStyle('max-height: 0');
        expect(secondContent).toHaveStyle('max-height: 500px');
      });
    });
  });

  describe('Controlled Mode', () => {
    it('works in controlled mode', async () => {
      const onToggleMock = jest.fn();
      const { rerender } = render(
        <Accordion items={mockItems} openItems={['item1']} onToggle={onToggleMock} />
      );

      const firstContent = document.getElementById('accordion-content-item1');
      const secondContent = document.getElementById('accordion-content-item2');
      expect(firstContent).toHaveStyle('max-height: 500px');

      await act(async () => {
        fireEvent.click(screen.getByText('Second Item'));
      });
      // Since allowMultiple is false by default, clicking Second Item should replace First Item
      expect(onToggleMock).toHaveBeenCalledWith(['item2']);

      // Simulate parent component updating openItems
      rerender(<Accordion items={mockItems} openItems={['item2']} onToggle={onToggleMock} />);

      expect(firstContent).toHaveStyle('max-height: 0');
      expect(secondContent).toHaveStyle('max-height: 500px');
    });
  });

  describe('Default Open Items', () => {
    it('opens default items on mount', () => {
      render(<Accordion items={mockItems} defaultOpenItems={['item1', 'item2']} />);

      expect(screen.getByText('First item content')).toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();
    });
  });

  describe('Chevron Icon and Custom Icons', () => {
    it('shows chevron icons by default', () => {
      render(<Accordion items={mockItems} />);
      expect(screen.getByTestId('item1-chevron-icon')).toBeInTheDocument();
      expect(screen.getByTestId('item2-chevron-icon')).toBeInTheDocument();
      expect(screen.getByTestId('item3-chevron-icon')).toBeInTheDocument();
    });

    it('hides chevron icons when showChevron is false', () => {
      render(<Accordion items={mockItems} showChevron={false} />);
      expect(screen.queryByTestId('item1-chevron-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('item2-chevron-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('item3-chevron-icon')).not.toBeInTheDocument();
    });

    it('positions chevron on the left when specified', () => {
      render(<Accordion items={mockItems} chevronPosition="left" />);
      expect(screen.getByTestId('item1-chevron-icon')).toBeInTheDocument();
      expect(screen.getByTestId('item2-chevron-icon')).toBeInTheDocument();
      expect(screen.getByTestId('item3-chevron-icon')).toBeInTheDocument();
    });

    it('renders plus-minus icons', () => {
      render(<Accordion items={mockItems} iconType="plus-minus" />);
      expect(screen.getByTestId('item1-plus-minus-icon')).toBeInTheDocument();
    });

    it('renders custom global icons', () => {
      const CustomExpanded = <span data-testid="custom-expanded">Expanded</span>;
      const CustomCollapsed = <span data-testid="custom-collapsed">Collapsed</span>;

      render(
        <Accordion
          items={mockItems}
          iconType="custom"
          expandedIcon={CustomExpanded}
          collapsedIcon={CustomCollapsed}
        />
      );

      expect(screen.getByTestId('item1-custom-icon')).toBeInTheDocument();
      // Expect all items to be collapsed initially
      expect(screen.getAllByText('Collapsed')).toHaveLength(mockItems.length);

      // Open item
      fireEvent.click(screen.getByText('First Item'));
      // Wait for the state update if necessary, though fireEvent is sync usually
      // Item 1 should now be expanded
      expect(screen.getByText('Expanded')).toBeInTheDocument();
      // Other items should still be collapsed
      expect(screen.getAllByText('Collapsed')).toHaveLength(mockItems.length - 1);
    });

    it('renders specific item icons', () => {
      const itemsWithIcon: AccordionItemProps[] = [
        {
          id: 'item1',
          header: 'Item 1',
          children: 'Content',
          icon: {
            expanded: <span data-testid="item-expanded">ItemExpanded</span>,
            collapsed: <span data-testid="item-collapsed">ItemCollapsed</span>
          }
        }
      ];

      render(<Accordion items={itemsWithIcon} />);
      expect(screen.getByTestId('item1-custom-icon')).toBeInTheDocument();
      expect(screen.getByTestId('item-collapsed')).toBeInTheDocument();

      fireEvent.click(screen.getByText('Item 1'));
      expect(screen.getByTestId('item-expanded')).toBeInTheDocument();
    });
  });

  describe('Status and State', () => {
    it('renders item status indicator', () => {
      const itemsWithStatus: AccordionItemProps[] = [
        { id: 'item1', header: 'Status Item', children: 'Content', status: 'success' }
      ];
      render(<Accordion items={itemsWithStatus} />);

      // Status is rendered in body, only visible when open or if implementation renders it regardless
      // Based on implementation: status is inside accordion-item-body
      fireEvent.click(screen.getByText('Status Item'));
      expect(screen.getByText('Status: success')).toBeInTheDocument();
    });

    it('handles loading state correctly', () => {
      render(<Accordion items={mockItems} loading />);

      const accordion = screen.getByRole('presentation');
      expect(accordion).toHaveClass('accordion--loading');
      expect(accordion).toHaveAttribute('aria-busy', 'true');

      // Should prevent interaction
      const header = screen.getByText('First Item').closest('.accordion-item-header');
      expect(header).toHaveAttribute('aria-busy', 'true');

      fireEvent.click(screen.getByText('First Item'));
      // Should not toggle when loading
      const content = document.getElementById('accordion-content-item1');
      expect(content).toHaveStyle('max-height: 0');
    });

    it('applies spacing classes', () => {
      const { rerender } = render(<Accordion items={mockItems} spacing="compact" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--compact');

      rerender(<Accordion items={mockItems} spacing="spacious" />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--spacious');
    });

    it('handles divider visibility', () => {
      const { rerender } = render(<Accordion items={mockItems} showDivider={true} />);
      expect(screen.getByRole('presentation')).toHaveClass('accordion--divider');

      rerender(<Accordion items={mockItems} showDivider={false} />);
      expect(screen.getByRole('presentation')).not.toHaveClass('accordion--divider');
    });

    it('handles disabled animations', () => {
      render(<Accordion items={mockItems} disableAnimations />);

      expect(screen.getByRole('presentation')).toHaveClass('accordion--no-animation');

      // Check inline styles for transition
      fireEvent.click(screen.getByText('First Item'));
      const content = document.getElementById('accordion-content-item1');
      expect(content).toHaveStyle('transition: none');
    });
  });

  describe('Collapsible', () => {
    it('allows all items to be closed when collapsible is true', async () => {
      render(<Accordion items={mockItems} collapsible defaultOpenItems={['item1']} />);

      const firstContent = document.getElementById('accordion-content-item1');
      expect(firstContent).toHaveStyle('max-height: 500px');

      await act(async () => {
        fireEvent.click(screen.getByText('First Item'));
      });
      await waitFor(() => {
        expect(firstContent).toHaveStyle('max-height: 0');
      });
    });

    it('prevents closing last item when collapsible is false and allowMultiple is false', () => {
      render(
        <Accordion
          items={mockItems}
          collapsible={false}
          allowMultiple={false}
          defaultOpenItems={['item1']}
        />
      );

      expect(screen.getByText('First item content')).toBeVisible();

      // Try to close the only open item
      fireEvent.click(screen.getByText('First Item'));
      expect(screen.getByText('First item content')).toBeVisible();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Accordion items={mockItems} />);

      const headers = screen.getAllByRole('button');
      headers.forEach((header) => {
        expect(header).toHaveAttribute('aria-expanded');
        expect(header).toHaveAttribute('aria-controls');
      });

      const contents = screen.getAllByRole('region');
      expect(contents).toHaveLength(mockItems.length);
    });

    it('supports keyboard navigation', () => {
      render(<Accordion items={mockItems} />);
      const firstHeader = screen.getAllByRole('button')[0];

      expect(firstHeader).toHaveAttribute('tabIndex', '0');

      firstHeader.focus();
      expect(firstHeader).toHaveFocus();
    });

    it('disables keyboard interaction for disabled items', () => {
      render(<Accordion items={mockItems} />);
      const disabledHeader = screen.getAllByRole('button')[2]; // Third item is disabled

      expect(disabledHeader).toHaveAttribute('tabIndex', '-1');
      expect(disabledHeader).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to container div', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Accordion ref={ref} items={mockItems} />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('accordion');
    });
  });
});
