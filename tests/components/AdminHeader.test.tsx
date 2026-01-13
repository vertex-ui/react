import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { AdminHeader } from '../../src/components/AdminHeader/AdminHeader';

describe('AdminHeader', () => {
  it('renders correctly', () => {
    const { container } = render(<AdminHeader />);
    expect(container.querySelector('.vtx-admin-header')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<AdminHeader title="Dashboard" />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders user info', () => {
    render(<AdminHeader userName="John Doe" userRole="Admin" userAvatar="avatar.jpg" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('handles user menu interactions', () => {
    const handleProfile = jest.fn();
    const handleLogout = jest.fn();

    const menuItems = [
      { label: 'Profile', onClick: handleProfile },
      { label: 'Logout', onClick: handleLogout }
    ];

    render(<AdminHeader userName="User" userMenuItems={menuItems} />);

    const userMenuTrigger = screen.getByText('User');
    fireEvent.click(userMenuTrigger);

    const profileBtn = screen.getByText('Profile');
    fireEvent.click(profileBtn);
    expect(handleProfile).toHaveBeenCalled();

    fireEvent.click(userMenuTrigger);
    const logoutBtn = screen.getByText('Logout');
    fireEvent.click(logoutBtn);
    expect(handleLogout).toHaveBeenCalled();
  });
});
