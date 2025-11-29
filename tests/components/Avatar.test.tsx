import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from '../../src/components/Avatar';

describe('Avatar', () => {
  it('renders with initials', () => {
    render(<Avatar fallback="JD" alt="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with image src', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByAltText('User Avatar');
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders with custom size', () => {
    const { container } = render(<Avatar fallback="JD" size="large" />);
    const avatar = container.querySelector('.vtx-avatar');
    expect(avatar).toHaveClass('vtx-avatar--large');
  });

  it('renders with status indicator', () => {
    const { container } = render(
      <Avatar fallback="JD" statusIndicator={<div data-testid="status">●</div>} />
    );
    const statusElement = container.querySelector('.vtx-avatar-status');
    expect(statusElement).toBeInTheDocument();
    expect(screen.getByTestId('status')).toBeInTheDocument();
  });

  it('renders status at different positions', () => {
    const { container } = render(
      <Avatar fallback="JD" statusIndicator={<div>●</div>} statusPosition="top-left" />
    );
    const statusElement = container.querySelector('.vtx-avatar-status');
    expect(statusElement).toHaveClass('vtx-avatar-status--top-left');
  });

  it('applies custom className', () => {
    const { container } = render(<Avatar fallback="JD" className="custom-class" />);
    const avatar = container.querySelector('.vtx-avatar');
    expect(avatar).toHaveClass('custom-class');
  });

  it('renders fallback on image error', () => {
    render(<Avatar src="invalid-image.jpg" fallback="JD" alt="User Avatar" />);
    // Simulate image error
    const img = screen.getByAltText('User Avatar');
    fireEvent.error(img);

    // After error, should show fallback
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});
