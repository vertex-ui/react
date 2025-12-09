import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Chip } from '../../src/components/Chip';

describe('Chip', () => {
  it('renders with label', () => {
    render(<Chip label="Test Chip" />);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender, container } = render(<Chip label="Small" size="small" />);
    expect(container.firstChild).toHaveClass('vtx-chip--small');

    rerender(<Chip label="Medium" size="medium" />);
    expect(container.firstChild).toHaveClass('vtx-chip--medium');

    rerender(<Chip label="Large" size="large" />);
    expect(container.firstChild).toHaveClass('vtx-chip--large');
  });

  it('applies variant classes correctly', () => {
    const { rerender, container } = render(<Chip label="Test" variant="filled" />);
    expect(container.firstChild).toHaveClass('vtx-chip--filled');

    rerender(<Chip label="Test" variant="outlined" />);
    expect(container.firstChild).toHaveClass('vtx-chip--outlined');

    rerender(<Chip label="Test" variant="light" />);
    expect(container.firstChild).toHaveClass('vtx-chip--light');
  });

  it('applies color classes correctly', () => {
    const { rerender, container } = render(<Chip label="Test" color="primary" />);
    expect(container.firstChild).toHaveClass('vtx-chip--primary');

    rerender(<Chip label="Test" color="success" />);
    expect(container.firstChild).toHaveClass('vtx-chip--success');

    rerender(<Chip label="Test" color="error" />);
    expect(container.firstChild).toHaveClass('vtx-chip--error');

    rerender(<Chip label="Test" color="warning" />);
    expect(container.firstChild).toHaveClass('vtx-chip--warning');

    rerender(<Chip label="Test" color="info" />);
    expect(container.firstChild).toHaveClass('vtx-chip--info');

    rerender(<Chip label="Test" color="default" />);
    expect(container.firstChild).toHaveClass('vtx-chip--default');
  });

  it('renders with icon', () => {
    const icon = <span data-testid="test-icon">🔥</span>;
    render(<Chip label="With Icon" icon={icon} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders with avatar', () => {
    render(<Chip label="User" avatar="https://example.com/avatar.jpg" />);
    // The avatar img is aria-hidden, but jsdom/testing-library may still give it role 'img'.
    const avatar = screen.getByAltText('');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveClass('vtx-chip__avatar');
  });

  it('shows delete button when onDelete is provided', () => {
    const handleDelete = jest.fn();
    render(<Chip label="Deletable" onDelete={handleDelete} />);

    const deleteButton = screen.getByRole('button', { name: /remove deletable/i });
    expect(deleteButton).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const handleDelete = jest.fn();
    render(<Chip label="Delete Me" onDelete={handleDelete} />);

    const deleteButton = screen.getByRole('button', { name: /remove delete me/i });
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('prevents event propagation when delete button is clicked', () => {
    const handleDelete = jest.fn();
    const handleClick = jest.fn();
    render(<Chip label="Test" onDelete={handleDelete} onClick={handleClick} />);

    const deleteButton = screen.getByRole('button', { name: /remove test/i });
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('calls onClick when chip is clicked', () => {
    const handleClick = jest.fn();
    render(<Chip label="Clickable" onClick={handleClick} />);

    const chip = screen.getByRole('button');
    fireEvent.click(chip);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard interaction for clickable chip', () => {
    const handleClick = jest.fn();
    render(<Chip label="Keyboard" onClick={handleClick} />);

    const chip = screen.getByRole('button');

    fireEvent.keyDown(chip, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(chip, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('applies clickable class when onClick is provided', () => {
    const { container } = render(<Chip label="Click" onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('vtx-chip--clickable');
  });

  it('disables interactions when disabled', () => {
    const handleClick = jest.fn();
    const handleDelete = jest.fn();
    render(<Chip label="Disabled" onClick={handleClick} onDelete={handleDelete} disabled />);

    const chip = screen.getByText('Disabled').parentElement;
    fireEvent.click(chip!);

    expect(handleClick).not.toHaveBeenCalled();
    expect(chip).toHaveClass('vtx-chip--disabled');
  });

  it('applies disabled class when disabled', () => {
    const { container } = render(<Chip label="Disabled" disabled />);
    expect(container.firstChild).toHaveClass('vtx-chip--disabled');
  });

  it('applies custom className', () => {
    const { container } = render(<Chip label="Custom" className="my-custom-class" />);
    expect(container.firstChild).toHaveClass('my-custom-class');
  });

  it('sets aria-label correctly', () => {
    render(<Chip label="Test" aria-label="Custom ARIA label" />);
    expect(screen.getByLabelText('Custom ARIA label')).toBeInTheDocument();
  });

  it('uses label as aria-label by default', () => {
    render(<Chip label="Default ARIA" />);
    expect(screen.getByLabelText('Default ARIA')).toBeInTheDocument();
  });

  it('sets data-testid correctly', () => {
    render(<Chip label="Test" data-testid="custom-chip" />);
    expect(screen.getByTestId('custom-chip')).toBeInTheDocument();
  });

  it('renders without onClick as non-interactive', () => {
    render(<Chip label="Static" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('has correct tabIndex when clickable', () => {
    const { rerender } = render(<Chip label="Test" onClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '0');

    rerender(<Chip label="Test" onClick={() => {}} disabled />);
    expect(screen.getByText('Test').parentElement).not.toHaveAttribute('tabIndex', '0');
  });

  it('avatar takes precedence over icon', () => {
    const icon = <span data-testid="icon">Icon</span>;
    render(<Chip label="Test" icon={icon} avatar="https://example.com/avatar.jpg" />);

    // The avatar img is aria-hidden, but jsdom/testing-library may still give it role 'img'.
    expect(screen.getByAltText('')).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
});
