import React from 'react';
import { render, screen } from '../test-utils';
import { Avatar } from '../../src/components/Avatar/Avatar';

describe('Avatar', () => {
  it('renders image when src provided', () => {
    const { container } = render(<Avatar src="avatar.jpg" alt="User Avatar" />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'avatar.jpg');
  });

  it('renders initials when no src', () => {
    render(<Avatar alt="John Doe" />);
    const fallback = document.querySelector('.vtx-avatar-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback?.querySelector('svg')).toBeInTheDocument();
  });

  it('renders placeholder when no src and no alt', () => {
    const { container } = render(<Avatar />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.vtx-avatar-fallback')).toBeInTheDocument();
  });
});
