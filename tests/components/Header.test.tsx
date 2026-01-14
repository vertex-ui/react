import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Header } from '../../src/components/Header/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('.vtx-header')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Header title="My App" />);
    expect(screen.getByText('My App')).toBeInTheDocument();
  });

  it('renders user info', () => {
    render(<Header userName="Jane Doe" userSubtitle="Editor" />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Editor')).toBeInTheDocument();
  });

  it('renders custom actions', () => {
    render(<Header actions={<button>Custom Action</button>} />);
    expect(screen.getByText('Custom Action')).toBeInTheDocument();
  });
});
