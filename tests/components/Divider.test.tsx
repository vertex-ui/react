import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from '../../src/components/Divider/Divider';

describe('Divider', () => {
  // Basic rendering
  it('renders a horizontal divider by default', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toBeInTheDocument();
    expect(divider?.tagName).toBe('HR');
    expect(divider).toHaveClass('vtx-divider--horizontal');
    expect(divider).toHaveClass('vtx-divider--fullWidth');
  });

  it('renders with custom className', () => {
    const { container } = render(<Divider className="custom-divider" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('custom-divider');
  });

  // Orientation tests
  it('renders vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider?.tagName).toBe('DIV');
    expect(divider).toHaveClass('vtx-divider--vertical');
    expect(divider).toHaveAttribute('role', 'separator');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders horizontal divider explicitly', () => {
    const { container } = render(<Divider orientation="horizontal" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--horizontal');
  });

  // Variant tests
  it('renders fullWidth variant', () => {
    const { container } = render(<Divider variant="fullWidth" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--fullWidth');
  });

  it('renders inset variant', () => {
    const { container } = render(<Divider variant="inset" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--inset');
  });

  it('renders middle variant', () => {
    const { container } = render(<Divider variant="middle" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--middle');
  });

  // Light variant
  it('renders light divider', () => {
    const { container } = render(<Divider light />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--light');
  });

  // Flex item
  it('renders as flex item', () => {
    const { container } = render(<Divider flexItem />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--flex-item');
  });

  it('renders vertical divider as flex item', () => {
    const { container } = render(<Divider orientation="vertical" flexItem />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--vertical');
    expect(divider).toHaveClass('vtx-divider--flex-item');
  });

  // Children tests
  it('renders with text children', () => {
    const { container } = render(<Divider>OR</Divider>);
    const divider = container.querySelector('.vtx-divider');
    expect(divider?.tagName).toBe('DIV');
    expect(divider).toHaveClass('vtx-divider--with-children');
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it('renders with JSX children', () => {
    render(
      <Divider>
        <span data-testid="custom-child">Custom Content</span>
      </Divider>
    );
    expect(screen.getByTestId('custom-child')).toBeInTheDocument();
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('wraps children in a wrapper span', () => {
    const { container } = render(<Divider>Text</Divider>);
    const wrapper = container.querySelector('.vtx-divider-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.textContent).toBe('Text');
  });

  // Text alignment tests
  it('renders with center text alignment by default', () => {
    const { container } = render(<Divider>CENTER</Divider>);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--text-center');
  });

  it('renders with left text alignment', () => {
    const { container } = render(<Divider textAlign="left">LEFT</Divider>);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--text-left');
  });

  it('renders with right text alignment', () => {
    const { container } = render(<Divider textAlign="right">RIGHT</Divider>);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--text-right');
  });

  // Component prop tests
  it('renders with custom component', () => {
    const { container } = render(<Divider component="li" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider?.tagName).toBe('LI');
  });

  it('renders children with custom component', () => {
    const { container } = render(<Divider component="section">Section</Divider>);
    const divider = container.querySelector('.vtx-divider');
    expect(divider?.tagName).toBe('SECTION');
    expect(screen.getByText('Section')).toBeInTheDocument();
  });

  // Role and accessibility tests
  it('has correct role for vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveAttribute('role', 'separator');
  });

  it('accepts custom role', () => {
    const { container } = render(<Divider role="presentation" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveAttribute('role', 'presentation');
  });

  it('can be hidden from screen readers', () => {
    const { container } = render(<Divider aria-hidden="true" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with children and custom role', () => {
    const { container } = render(
      <Divider component="div" role="presentation">
        Content
      </Divider>
    );
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveAttribute('role', 'presentation');
  });

  // Ref forwarding
  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLHRElement | null };
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLHRElement);
    expect(ref.current).toHaveClass('vtx-divider');
  });

  it('forwards ref for div element', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Divider orientation="vertical" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('vtx-divider');
  });

  // Combined props tests
  it('renders vertical divider with middle variant', () => {
    const { container } = render(<Divider orientation="vertical" variant="middle" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--vertical');
    expect(divider).toHaveClass('vtx-divider--middle');
  });

  it('renders light inset divider', () => {
    const { container } = render(<Divider variant="inset" light />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--inset');
    expect(divider).toHaveClass('vtx-divider--light');
  });

  it('renders vertical flex item with children', () => {
    const { container } = render(
      <Divider orientation="vertical" flexItem>
        Text
      </Divider>
    );
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('vtx-divider--vertical');
    expect(divider).toHaveClass('vtx-divider--flex-item');
    expect(divider).toHaveClass('vtx-divider--with-children');
  });

  // Custom props pass-through
  it('passes through custom HTML attributes', () => {
    const { container } = render(<Divider data-testid="custom-divider" id="divider-1" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveAttribute('data-testid', 'custom-divider');
    expect(divider).toHaveAttribute('id', 'divider-1');
  });
});
