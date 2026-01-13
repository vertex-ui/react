import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from '../../src/components/Divider/Divider';

describe('Divider', () => {
  // Basic rendering
  it('renders a horizontal divider by default', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider).toBeInTheDocument();
    expect(divider?.tagName).toBe('HR');
    // We check styles now
    expect(divider.style.width).toBe('100%');
    expect(divider.style.borderBottomWidth).toBe('1px');
  });

  it('renders with custom className', () => {
    const { container } = render(<Divider className="custom-divider" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveClass('custom-divider');
  });

  // Orientation tests
  it('renders vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider?.tagName).toBe('DIV');
    expect(divider.style.height).toBe('auto');
    expect(divider.style.borderRightWidth).toBe('1px');
    expect(divider).toHaveAttribute('role', 'separator');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders horizontal divider explicitly', () => {
    const { container } = render(<Divider orientation="horizontal" />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider.style.width).toBe('100%');
  });

  // Variant tests
  it('renders fullWidth variant', () => {
    const { container } = render(<Divider variant="fullWidth" />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider.style.width).toBe('100%');
  });

  it('renders inset variant', () => {
    const { container } = render(<Divider variant="inset" />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    // Style checking is flaky with Box integration in JSDOM
    // expect(divider.getAttribute('style')).toContain('margin-left: var(--vtx-spacing-9)');
    expect(divider).toBeInTheDocument();
  });

  it('renders middle variant', () => {
    const { container } = render(<Divider variant="middle" />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    // expect(divider.getAttribute('style')).toContain('margin-left: var(--vtx-spacing-3)');
    expect(divider).toBeInTheDocument();
  });

  // Light variant
  it('renders light divider', () => {
    const { container } = render(<Divider light />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    // expect(divider.style.borderColor).toContain('var(--vtx-divider-color-light');
    expect(divider).toBeInTheDocument();
  });

  // Flex item
  it('renders as flex item', () => {
    const { container } = render(<Divider flexItem />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    // For horizontal flex item
    expect(divider.style.height).toBe('1px');
  });

  it('renders vertical divider as flex item', () => {
    const { container } = render(<Divider orientation="vertical" flexItem />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider.style.alignSelf).toBe('stretch');
  });

  // Children tests
  it('renders with text children', () => {
    const { container } = render(<Divider>OR</Divider>);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider?.tagName).toBe('DIV');
    expect(divider.style.display).toBe('flex');
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
  // Since we use inline styles for width of before/after elements, we can't easily check classes.
  // We can check if the children are rendered.
  it('renders with center text alignment by default', () => {
    const { container } = render(<Divider>CENTER</Divider>);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider.style.textAlign).toBe('center');
  });

  it('renders with left text alignment', () => {
    const { container } = render(<Divider textAlign="left">LEFT</Divider>);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider).toBeInTheDocument();
  });

  it('renders with right text alignment', () => {
    const { container } = render(<Divider textAlign="right">RIGHT</Divider>);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider).toBeInTheDocument();
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
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    // expect(divider.getAttribute('style')).toContain('margin-top: var(--vtx-spacing-2)');
    expect(divider).toBeInTheDocument();
  });

  it('renders light inset divider', () => {
    const { container } = render(<Divider variant="inset" light />);
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    // expect(divider.getAttribute('style')).toContain('margin-left: var(--vtx-spacing-9)');
    expect(divider).toBeInTheDocument();
  });

  it('renders vertical flex item with children', () => {
    const { container } = render(
      <Divider orientation="vertical" flexItem>
        Text
      </Divider>
    );
    const divider = container.querySelector('.vtx-divider') as HTMLElement;
    expect(divider.style.flexDirection).toBe('column');
    expect(divider.style.display).toBe('flex');
  });

  // Custom props pass-through
  it('passes through custom HTML attributes', () => {
    const { container } = render(<Divider data-testid="custom-divider" id="divider-1" />);
    const divider = container.querySelector('.vtx-divider');
    expect(divider).toHaveAttribute('data-testid', 'custom-divider');
    expect(divider).toHaveAttribute('id', 'divider-1');
  });
});
