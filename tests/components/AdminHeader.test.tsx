import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { AdminHeader, NotificationItem, SearchSuggestion } from '../../src/components/AdminHeader/AdminHeader';

describe('AdminHeader', () => {
  describe('Rendering', () => {
    it('renders correctly with minimal props', () => {
      const { container } = render(<AdminHeader />);
      expect(container.querySelector('.vtx-admin-header')).toBeInTheDocument();
    });

    it('renders branding elements', () => {
      render(
        <AdminHeader
          title="Dashboard"
          subtitle="Overview"
          logo={<span data-testid="logo">Logo</span>}
        />
      );
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Overview')).toBeInTheDocument();
      expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    it('renders styling variants', () => {
      const { container } = render(
        <AdminHeader
          variant="elevated"
          theme="dark"
          sticky
          blur
        />
      );
      const header = container.querySelector('.vtx-admin-header');
      expect(header).toHaveClass('vtx-admin-header--elevated');
      expect(header).toHaveClass('vtx-admin-header--dark');
      expect(header).toHaveClass('vtx-admin-header--sticky');
      expect(header).toHaveClass('vtx-admin-header--blur');
    });
  });

  describe('Search Functionality', () => {
    it('renders search input when showSearch is true', () => {
      render(<AdminHeader showSearch searchPlaceholder="Find..." />);
      expect(screen.getByPlaceholderText('Find...')).toBeInTheDocument();
    });

    it('handles search input change', async () => {
      const handleSearchChange = jest.fn();
      const user = userEvent.setup();
      render(<AdminHeader showSearch onSearchChange={handleSearchChange} />);

      const input = screen.getByPlaceholderText('Search...');
      await user.type(input, 'test');

      expect(handleSearchChange).toHaveBeenCalled();
      expect(input).toHaveValue('test');
    });

    it('shows search suggestions on focus/type', async () => {
      const suggestions: SearchSuggestion[] = [
        { id: '1', label: 'Result 1' },
        { id: '2', label: 'Result 2' }
      ];

      const user = userEvent.setup();
      render(<AdminHeader showSearch searchSuggestions={suggestions} />);

      const input = screen.getByPlaceholderText('Search...');
      await user.click(input); // Focus

      expect(screen.getByText('Result 1')).toBeInTheDocument();
      expect(screen.getByText('Result 2')).toBeInTheDocument();
    });

    it('clears search input', async () => {
      const handleSearchChange = jest.fn();
      const user = userEvent.setup();
      render(<AdminHeader showSearch onSearchChange={handleSearchChange} />);

      const input = screen.getByPlaceholderText('Search...');
      await user.type(input, 'query');

      const clearBtn = screen.getByLabelText('Clear search');
      await user.click(clearBtn);

      expect(input).toHaveValue('');
      expect(handleSearchChange).toHaveBeenCalledWith('');
    });
  });

  describe('Notifications', () => {
    const mockNotifications: NotificationItem[] = [
      { id: '1', title: 'New Message', time: '1 min ago', read: false },
      { id: '2', title: 'System Alert', time: '1 hour ago', read: true, type: 'error' }
    ];

    it('renders notification badge', () => {
      render(<AdminHeader notifications={mockNotifications} />);
      // 1 unread notification
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('opens notifications panel on click', async () => {
      const user = userEvent.setup();
      render(<AdminHeader notifications={mockNotifications} />);

      const bellBtn = screen.getByLabelText('Notifications');
      await user.click(bellBtn);

      expect(screen.getByText('Notifications')).toBeInTheDocument();
      expect(screen.getByText('New Message')).toBeInTheDocument();
      expect(screen.getByText('System Alert')).toBeInTheDocument();
    });

    it('handles notification click', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(<AdminHeader notifications={mockNotifications} onNotificationClick={handleClick} />);

      await user.click(screen.getByLabelText('Notifications'));
      await user.click(screen.getByText('New Message'));

      expect(handleClick).toHaveBeenCalledWith(mockNotifications[0]);
    });

    it('renders empty state', async () => {
      const user = userEvent.setup();
      render(<AdminHeader notifications={[]} />);

      await user.click(screen.getByLabelText('Notifications'));
      expect(screen.getByText('No notifications')).toBeInTheDocument();
    });
  });

  describe('User Menu', () => {
    it('renders user info', () => {
      render(<AdminHeader userName="John Doe" userRole="Admin" />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Admin')).toBeInTheDocument();
    });

    it('opens user menu interactions', async () => {
      const handleProfile = jest.fn();
      const menuItems = [
        { label: 'Profile', onClick: handleProfile },
        { label: 'Logout', onClick: jest.fn() }
      ];

      const user = userEvent.setup();
      render(<AdminHeader userName="User" userMenuItems={menuItems} />);

      const userMenuTrigger = screen.getByLabelText('User menu');
      await user.click(userMenuTrigger);

      const profileBtn = screen.getByText('Profile');
      await user.click(profileBtn);

      expect(handleProfile).toHaveBeenCalled();
    });

    it('renders initials fallback when no avatar', () => {
      const { container } = render(<AdminHeader userName="John Doe" />);
      const fallback = container.querySelector('.vtx-admin-header-user-avatar-fallback');
      expect(fallback).toHaveTextContent('J');
    });
  });

  describe('Mobile Toggle', () => {
    it('calls onToggleSidebar when clicked', async () => {
      const handleToggle = jest.fn();
      const user = userEvent.setup();
      render(<AdminHeader showToggleButton onToggleSidebar={handleToggle} />);

      const toggleBtn = screen.getByLabelText('Toggle sidebar');
      await user.click(toggleBtn);

      expect(handleToggle).toHaveBeenCalled();
    });
  });

  describe('Quick Actions', () => {
    it('renders quick actions', async () => {
      const handleAction = jest.fn();
      const actions = [
        { id: '1', label: 'Create', icon: <span>+</span>, onClick: handleAction }
      ];

      const user = userEvent.setup();
      render(<AdminHeader quickActions={actions} />);

      const actionBtn = screen.getByLabelText('Create');
      await user.click(actionBtn);

      expect(handleAction).toHaveBeenCalled();
    });
  });

  describe('Breadcrumbs', () => {
    it('renders breadcrumbs', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Settings', href: '/settings' },
        { label: 'Profile' }
      ];

      render(<AdminHeader showBreadcrumbs breadcrumbs={items} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
    });
  });
});
