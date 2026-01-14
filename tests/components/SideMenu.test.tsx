import { render, screen, fireEvent } from '../test-utils';
import { SideMenu, SideMenuItem } from '../../src/components/SideMenu';

describe('SideMenuItem', () => {
  it('renders with label', () => {
    render(<SideMenuItem label="Test Item" />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<SideMenuItem label="Test Item" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test Item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<SideMenuItem label="Test Item" onClick={handleClick} disabled />);

    const item = screen.getByRole('menuitem');
    fireEvent.click(item);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders icon when provided', () => {
    render(<SideMenuItem label="Test Item" icon={<span data-testid="test-icon">Icon</span>} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(<SideMenuItem label="Test Item" badge="5" />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('applies active class when active', () => {
    render(<SideMenuItem label="Test Item" active />);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveClass('vtx-sidemenu-item--active');
  });

  it('applies disabled class when disabled', () => {
    render(<SideMenuItem label="Test Item" disabled />);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveClass('vtx-sidemenu-item--disabled');
    expect(item).toHaveAttribute('aria-disabled', 'true');
  });

  it('handles keyboard Enter key', () => {
    const handleClick = jest.fn();
    render(<SideMenuItem label="Test Item" onClick={handleClick} />);

    const item = screen.getByRole('menuitem');
    fireEvent.keyDown(item, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard Space key', () => {
    const handleClick = jest.fn();
    render(<SideMenuItem label="Test Item" onClick={handleClick} />);

    const item = screen.getByRole('menuitem');
    fireEvent.keyDown(item, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not respond to keyboard when disabled', () => {
    const handleClick = jest.fn();
    render(<SideMenuItem label="Test Item" onClick={handleClick} disabled />);

    const item = screen.getByRole('menuitem');
    fireEvent.keyDown(item, { key: 'Enter' });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('toggles submenu when clicked on item with children', () => {
    const submenuItems = [
      { label: 'Submenu 1' },
      { label: 'Submenu 2' },
    ];
    render(<SideMenuItem label="Parent Item" items={submenuItems} />);

    const item = screen.getByRole('menuitem');
    
    // Initially submenu should not be visible
    expect(screen.queryByText('Submenu 1')).not.toBeInTheDocument();

    // Click to open submenu
    fireEvent.click(item);
    expect(screen.getByText('Submenu 1')).toBeInTheDocument();
    expect(screen.getByText('Submenu 2')).toBeInTheDocument();

    // Click again to close submenu
    fireEvent.click(item);
    expect(screen.queryByText('Submenu 1')).not.toBeInTheDocument();
  });

  it('toggles submenu with keyboard', () => {
    const submenuItems = [{ label: 'Submenu 1' }];
    render(<SideMenuItem label="Parent Item" items={submenuItems} />);

    const item = screen.getByRole('menuitem');

    // Open with Enter
    fireEvent.keyDown(item, { key: 'Enter' });
    expect(screen.getByText('Submenu 1')).toBeInTheDocument();

    // Close with Space
    fireEvent.keyDown(item, { key: ' ' });
    expect(screen.queryByText('Submenu 1')).not.toBeInTheDocument();
  });

  it('shows chevron icon when item has submenu', () => {
    const submenuItems = [{ label: 'Submenu 1' }];
    render(<SideMenuItem label="Parent Item" items={submenuItems} />);

    const chevron = document.querySelector('.vtx-sidemenu-chevron');
    expect(chevron).toBeInTheDocument();
  });

  it('applies collapsed styles when collapsed', () => {
    render(<SideMenuItem label="Test Item" collapsed />);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveClass('vtx-sidemenu-item--collapsed');
  });

  it('shows title attribute when collapsed', () => {
    render(<SideMenuItem label="Test Item" collapsed />);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveAttribute('title', 'Test Item');
  });

  it('hides label text when collapsed', () => {
    const { container } = render(<SideMenuItem label="Test Item" collapsed />);
    // When collapsed, the Text component with label should not be rendered
    const textElements = container.querySelectorAll('.vtx-text');
    expect(textElements).toHaveLength(0);
  });

  it('does not show submenu when collapsed', () => {
    const submenuItems = [{ label: 'Submenu 1' }];
    render(<SideMenuItem label="Parent Item" items={submenuItems} collapsed />);

    const item = screen.getByRole('menuitem');
    fireEvent.click(item);
    
    // Submenu should not be visible when collapsed
    expect(screen.queryByText('Submenu 1')).not.toBeInTheDocument();
  });

  it('renders as anchor tag when href is provided', () => {
    render(<SideMenuItem label="Test Item" href="/test" />);
    const item = screen.getByRole('menuitem');
    expect(item.tagName).toBe('A');
    expect(item).toHaveAttribute('href', '/test');
  });

  it('renders as div when href is not provided', () => {
    render(<SideMenuItem label="Test Item" />);
    const item = screen.getByRole('menuitem');
    expect(item.tagName).toBe('DIV');
  });

  it('applies has-submenu class when item has children', () => {
    const submenuItems = [{ label: 'Submenu 1' }];
    render(<SideMenuItem label="Parent Item" items={submenuItems} />);
    
    const item = screen.getByRole('menuitem');
    expect(item).toHaveClass('vtx-sidemenu-item--has-submenu');
  });

  it('prevents default on click when has submenu', () => {
    const submenuItems = [{ label: 'Submenu 1' }];
    const handleClick = jest.fn();
    render(<SideMenuItem label="Parent Item" items={submenuItems} onClick={handleClick} />);

    const item = screen.getByRole('menuitem');
    fireEvent.click(item);
    
    // onClick should not be called when item has submenu
    expect(handleClick).not.toHaveBeenCalled();
  });
});

describe('SideMenu', () => {
  const mockItems = [
    { label: 'Dashboard', onClick: jest.fn() },
    { label: 'Products', onClick: jest.fn() },
    { label: 'Settings', onClick: jest.fn() },
  ];

  beforeEach(() => {
    mockItems.forEach((item) => item.onClick.mockClear());
  });

  it('renders menu with items', () => {
    render(<SideMenu items={mockItems} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders as navigation element', () => {
    render(<SideMenu items={mockItems} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('applies default width when not collapsed', () => {
    render(<SideMenu items={mockItems} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle({ width: '260px' });
  });

  it('applies collapsed width when collapsed', () => {
    render(<SideMenu items={mockItems} collapsed />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle({ width: '80px' });
  });

  it('applies custom width', () => {
    render(<SideMenu items={mockItems} width="300px" />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle({ width: '300px' });
  });

  it('applies custom collapsed width', () => {
    render(<SideMenu items={mockItems} collapsed collapsedWidth="60px" />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle({ width: '60px' });
  });

  it('handles numeric width values', () => {
    render(<SideMenu items={mockItems} width={300} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle({ width: '300px' });
  });

  it('applies collapsed class when collapsed', () => {
    render(<SideMenu items={mockItems} collapsed />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('vtx-sidemenu--collapsed');
  });

  it('applies custom className', () => {
    render(<SideMenu items={mockItems} className="custom-class" />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('custom-class');
  });

  it('renders header when provided', () => {
    render(<SideMenu items={mockItems} header={<div data-testid="header">Logo</div>} />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    render(<SideMenu items={mockItems} footer={<div data-testid="footer">Footer</div>} />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies header and footer padding', () => {
    render(
      <SideMenu
        items={mockItems}
        header="Header"
        footer="Footer"
        headerPadding="30px"
        footerPadding={10}
      />
    );

    // Header is rendered in a div with class vtx-sidemenu-header
    const header = screen.getByText('Header').closest('.vtx-sidemenu-header');
    expect(header).toHaveStyle({ padding: '30px' });

    const footer = screen.getByText('Footer').closest('.vtx-sidemenu-footer');
    expect(footer).toHaveStyle({ padding: '10px' });
  });

  it('renders nested menu items', () => {
    const nestedItems = [
      {
        label: 'Products',
        items: [
          { label: 'All Products' },
          { label: 'Categories' },
        ],
      },
    ];
    render(<SideMenu items={nestedItems} />);

    expect(screen.getByText('Products')).toBeInTheDocument();
    
    // Click to expand submenu
    fireEvent.click(screen.getByText('Products'));
    
    expect(screen.getByText('All Products')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

  it('passes collapsed prop to menu items', () => {
    render(<SideMenu items={mockItems} collapsed />);
    const menuItems = screen.getAllByRole('menuitem');
    menuItems.forEach((item) => {
      expect(item).toHaveClass('vtx-sidemenu-item--collapsed');
    });
  });

  it('renders with icons', () => {
    const itemsWithIcons = [
      { label: 'Dashboard', icon: <span data-testid="icon-1">📊</span> },
      { label: 'Products', icon: <span data-testid="icon-2">📦</span> },
    ];
    render(<SideMenu items={itemsWithIcons} />);

    expect(screen.getByTestId('icon-1')).toBeInTheDocument();
    expect(screen.getByTestId('icon-2')).toBeInTheDocument();
  });

  it('renders with badges', () => {
    const itemsWithBadges = [
      { label: 'Messages', badge: '5' },
      { label: 'Notifications', badge: 10 },
    ];
    render(<SideMenu items={itemsWithBadges} />);

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('handles active items', () => {
    const itemsWithActive = [
      { label: 'Dashboard', active: true },
      { label: 'Products', active: false },
    ];
    render(<SideMenu items={itemsWithActive} />);

    const dashboard = screen.getByText('Dashboard').closest('[role="menuitem"]');
    expect(dashboard).toHaveClass('vtx-sidemenu-item--active');
  });

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { label: 'Dashboard', disabled: false },
      { label: 'Products', disabled: true },
    ];
    render(<SideMenu items={itemsWithDisabled} />);

    const products = screen.getByText('Products').closest('[role="menuitem"]');
    expect(products).toHaveClass('vtx-sidemenu-item--disabled');
  });

  it('forwards ref to aside element', () => {
    const ref = jest.fn();
    render(<SideMenu items={mockItems} ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('renders deeply nested menu items', () => {
    const deeplyNested = [
      {
        label: 'Level 1',
        items: [
          {
            label: 'Level 2',
            items: [
              { label: 'Level 3' },
            ],
          },
        ],
      },
    ];
    render(<SideMenu items={deeplyNested} />);

    // Open first level
    fireEvent.click(screen.getByText('Level 1'));
    expect(screen.getByText('Level 2')).toBeInTheDocument();

    // Open second level
    fireEvent.click(screen.getByText('Level 2'));
    expect(screen.getByText('Level 3')).toBeInTheDocument();
  });

  it('renders empty menu when items array is empty', () => {
    render(<SideMenu items={[]} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
