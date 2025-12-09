import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { Menu, MenuItem } from '../../src/components/Menu';

describe('MenuItem', () => {
  it('renders with label', () => {
    render(<MenuItem label="Test Item" />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<MenuItem label="Test Item" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test Item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<MenuItem label="Test Item" onClick={handleClick} disabled />);

    fireEvent.click(screen.getByText('Test Item'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders icon when provided', () => {
    render(<MenuItem label="Test Item" icon={<span data-testid="test-icon">Icon</span>} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders rightIcon when provided', () => {
    render(<MenuItem label="Test Item" rightIcon={<span data-testid="test-right-icon">→</span>} />);
    expect(screen.getByTestId('test-right-icon')).toBeInTheDocument();
  });

  it('renders shortcut when provided', () => {
    render(<MenuItem label="Test Item" shortcut="Ctrl+S" />);
    expect(screen.getByText('Ctrl+S')).toBeInTheDocument();
  });

  it('applies active class when active', () => {
    render(<MenuItem label="Test Item" active />);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveClass('vtx-menu-item--active');
  });

  it('applies danger class when variant is danger', () => {
    render(<MenuItem label="Test Item" variant="danger" />);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveClass('vtx-menu-item--danger');
  });

  it('renders divider when divider is true', () => {
    render(<MenuItem label="Test Item" divider />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('handles keyboard Enter key', () => {
    const handleClick = jest.fn();
    render(<MenuItem label="Test Item" onClick={handleClick} />);

    const item = screen.getByRole('menuitem');
    fireEvent.keyDown(item, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard Space key', () => {
    const handleClick = jest.fn();
    render(<MenuItem label="Test Item" onClick={handleClick} />);

    const item = screen.getByRole('menuitem');
    fireEvent.keyDown(item, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Menu', () => {
  const mockItems = [
    { label: 'Item 1', onClick: jest.fn() },
    { label: 'Item 2', onClick: jest.fn() },
    { label: 'Item 3', onClick: jest.fn() },
  ];

  beforeEach(() => {
    mockItems.forEach((item) => item.onClick.mockClear());
  });

  it('renders menu with items', () => {
    render(<Menu items={mockItems} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders menu with children', () => {
    render(
      <Menu>
        <MenuItem label="Child 1" />
        <MenuItem label="Child 2" />
      </Menu>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('applies vertical orientation class by default', () => {
    render(<Menu items={mockItems} />);
    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('vtx-menu--vertical');
  });

  it('applies horizontal orientation class', () => {
    render(<Menu items={mockItems} orientation="horizontal" />);
    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('vtx-menu--horizontal');
  });

  it('applies responsive class by default', () => {
    render(<Menu items={mockItems} />);
    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('vtx-menu--responsive');
  });

  it('does not apply responsive class when responsive is false', () => {
    render(<Menu items={mockItems} responsive={false} />);
    const menu = screen.getByRole('menu');
    expect(menu).not.toHaveClass('vtx-menu--responsive');
  });

  it('renders toggle button when responsive', () => {
    render(<Menu items={mockItems} responsive />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('does not render toggle button when not responsive', () => {
    render(<Menu items={mockItems} responsive={false} />);
    expect(screen.queryByLabelText('Toggle menu')).not.toBeInTheDocument();
  });

  it('toggles mobile menu when toggle button is clicked', () => {
    render(<Menu items={mockItems} responsive />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    const menu = screen.getByRole('menu');

    expect(menu).not.toHaveClass('vtx-menu--mobile-open');

    fireEvent.click(toggleButton);
    expect(menu).toHaveClass('vtx-menu--mobile-open');

    fireEvent.click(toggleButton);
    expect(menu).not.toHaveClass('vtx-menu--mobile-open');
  });

  it('closes mobile menu on Escape key', () => {
    render(<Menu items={mockItems} responsive />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleButton);

    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('vtx-menu--mobile-open');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(menu).not.toHaveClass('vtx-menu--mobile-open');
  });

  it('closes mobile menu on outside click', () => {
    render(
      <div>
        <Menu items={mockItems} responsive />
        <div data-testid="outside">Outside</div>
      </div>
    );

    const toggleButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleButton);

    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('vtx-menu--mobile-open');

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(menu).not.toHaveClass('vtx-menu--mobile-open');
  });

  it('applies custom className', () => {
    render(<Menu items={mockItems} className="custom-menu" />);
    const menu = screen.getByRole('menu');
    expect(menu).toHaveClass('custom-menu');
  });

  it('applies custom width for vertical menu', () => {
    render(<Menu items={mockItems} orientation="vertical" width={300} />);
    const menu = screen.getByRole('menu');
    expect(menu).toHaveStyle({ width: '300px' });
  });

  it('applies custom width as string for vertical menu', () => {
    render(<Menu items={mockItems} orientation="vertical" width="20rem" />);
    const menu = screen.getByRole('menu');
    expect(menu).toHaveStyle({ width: '20rem' });
  });

  it('calls item onClick when menu item is clicked', () => {
    render(<Menu items={mockItems} />);

    fireEvent.click(screen.getByText('Item 2'));
    expect(mockItems[1].onClick).toHaveBeenCalledTimes(1);
  });

  it('renders submenu items', () => {
    const itemsWithSubmenu = [
      { label: 'Item 1', onClick: jest.fn() },
      {
        label: 'Item 2',
        items: [
          { label: 'Submenu 1', onClick: jest.fn() },
          { label: 'Submenu 2', onClick: jest.fn() },
        ],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('shows submenu on click', () => {
    const itemsWithSubmenu = [
      {
        label: 'Parent Item',
        items: [
          { label: 'Child Item 1', onClick: jest.fn() },
          { label: 'Child Item 2', onClick: jest.fn() },
        ],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    const parentItem = screen.getByText('Parent Item');

    // Click to open
    fireEvent.click(parentItem);

    expect(screen.getByText('Child Item 1')).toBeInTheDocument();
    expect(screen.getByText('Child Item 2')).toBeInTheDocument();
  });

  it('applies has-submenu class to items with submenus', () => {
    const itemsWithSubmenu = [
      {
        label: 'Parent Item',
        items: [{ label: 'Child', onClick: jest.fn() }],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    const parentItem = screen.getByText('Parent Item').closest('.vtx-menu-item');
    expect(parentItem).toHaveClass('vtx-menu-item--has-submenu');
  });

  it('toggles submenu on click', () => {
    const itemsWithSubmenu = [
      {
        label: 'Parent Item',
        items: [{ label: 'Child Item', onClick: jest.fn() }],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    const parentItem = screen.getByText('Parent Item');

    // Click to open
    fireEvent.click(parentItem);
    expect(screen.getByText('Child Item')).toBeInTheDocument();

    // Click to close
    fireEvent.click(parentItem);
    expect(screen.queryByText('Child Item')).not.toBeInTheDocument();
  });

  it('opens submenu with ArrowDown key', () => {
    const itemsWithSubmenu = [
      {
        label: 'Parent Item',
        items: [{ label: 'Child Item', onClick: jest.fn() }],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    const parentItem = screen.getByRole('menuitem');

    fireEvent.keyDown(parentItem, { key: 'ArrowDown' });
    expect(screen.getByText('Child Item')).toBeInTheDocument();
  });

  it('closes submenu with ArrowUp key', () => {
    const itemsWithSubmenu = [
      {
        label: 'Parent Item',
        items: [{ label: 'Child Item', onClick: jest.fn() }],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    const parentItem = screen.getByRole('menuitem');

    // Open submenu first
    fireEvent.keyDown(parentItem, { key: 'ArrowDown' });
    expect(screen.getByText('Child Item')).toBeInTheDocument();

    // Close with ArrowUp
    fireEvent.keyDown(parentItem, { key: 'ArrowUp' });
    expect(screen.queryByText('Child Item')).not.toBeInTheDocument();
  });

  it('calls onClick for child menu item', () => {
    const childOnClick = jest.fn();
    const itemsWithSubmenu = [
      {
        label: 'Parent Item',
        items: [{ label: 'Child Item', onClick: childOnClick }],
      },
    ];

    render(<Menu items={itemsWithSubmenu} responsive={false} />);

    // Open submenu
    const parentItem = screen.getByText('Parent Item');
    fireEvent.click(parentItem);

    // Click child item
    const childItem = screen.getByText('Child Item');
    fireEvent.click(childItem);

    expect(childOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders deeply nested submenus', () => {
    const deeplyNestedItems = [
      {
        label: 'Level 1',
        items: [
          {
            label: 'Level 2',
            items: [{ label: 'Level 3', onClick: jest.fn() }],
          },
        ],
      },
    ];

    render(<Menu items={deeplyNestedItems} responsive={false} />);

    expect(screen.getByText('Level 1')).toBeInTheDocument();
  });
});
