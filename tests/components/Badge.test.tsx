import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Badge } from '../../src/components/Badge';

describe('Badge', () => {
  it('renders with children text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    const badge = container.querySelector('.vtx-badge');
    expect(badge).toHaveClass('vtx-badge--success');
  });

  it('renders with dot indicator', () => {
    const { container } = render(<Badge dot>Status</Badge>);
    const badge = container.querySelector('.vtx-badge');
    expect(badge).toHaveClass('vtx-badge--with-dot');
    expect(container.querySelector('.vtx-badge-dot')).toBeInTheDocument();
  });

  it('renders outline style', () => {
    const { container } = render(<Badge outline>Outline</Badge>);
    const badge = container.querySelector('.vtx-badge');
    expect(badge).toHaveClass('vtx-badge--outline');
  });

  it('truncates long content', () => {
    render(<Badge maxLength={5}>Very Long Text</Badge>);
    expect(screen.getByText('Very ...')).toBeInTheDocument();
  });

  it('calls onRemove when remove button clicked', () => {
    const onRemove = jest.fn();
    render(<Badge onRemove={onRemove}>Removable</Badge>);

    const removeButton = screen.getByRole('button');
    fireEvent.click(removeButton);

    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-badge">Test</Badge>);
    const badge = container.querySelector('.vtx-badge');
    expect(badge).toHaveClass('custom-badge');
  });

  it('renders with icon when provided', () => {
    const Icon = () => <span data-testid="badge-icon">★</span>;
    render(<Badge icon={<Icon />}>With Icon</Badge>);
    expect(screen.getByTestId('badge-icon')).toBeInTheDocument();
  });
});
