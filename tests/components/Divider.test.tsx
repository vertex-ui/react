import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from '../../src/components/Divider/Divider';

// Mock Box component to verify style props passed to it, bypassing JSDOM style validation
jest.mock('../../src/components/Box', () => ({
  Box: React.forwardRef(({
    as: Component = 'div',
    style,
    // Destructure style props used in Divider to avoid passing them to DOM
    width, height, borderTop, borderLeft, borderColor,
    ...props
  }: any, ref: any) => (
    <Component
      ref={ref}
      style={style}
      data-testid="mock-box"
      data-style={JSON.stringify(style)}
      {...props}
    />
  )),
}));

describe('Divider', () => {
  const getRootBox = () => {
    // The root divider always has class 'vtx-divider'
    const boxes = screen.getAllByTestId('mock-box');
    return boxes.find(box => box.classList.contains('vtx-divider')) || boxes[0];
  };

  const getStyle = () => {
    const box = getRootBox();
    return JSON.parse(box.getAttribute('data-style') || '{}');
  };

  // Basic rendering
  it('renders a horizontal divider by default', () => {
    render(<Divider />);
    const box = getRootBox();
    expect(box).toBeInTheDocument();
    expect(box.tagName).toBe('HR');

    const style = getStyle();
    expect(style.width).toBe('100%');
    expect(style.borderBottomWidth).toBe('1px');
  });

  it('renders with custom className', () => {
    render(<Divider className="custom-divider" />);
    const box = getRootBox();
    expect(box).toHaveClass('custom-divider');
  });

  // Orientation tests
  it('renders vertical divider', () => {
    render(<Divider orientation="vertical" />);
    const box = getRootBox();
    expect(box.tagName).toBe('DIV');

    const style = getStyle();
    expect(style.height).toBe('auto');
    expect(style.borderRightWidth).toBe('1px');
    expect(box).toHaveAttribute('role', 'separator');
    expect(box).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders horizontal divider explicitly', () => {
    render(<Divider orientation="horizontal" />);
    const box = getRootBox();
    // Horizontal uses HR by default if no children
    expect(box.tagName).toBe('HR');
    expect(getStyle().width).toBe('100%');
  });

  // Variant tests
  it('renders fullWidth variant', () => {
    render(<Divider variant="fullWidth" />);
    expect(getStyle().width).toBe('100%');
  });

  it('renders inset variant', () => {
    render(<Divider variant="inset" />);
    expect(getStyle().marginLeft).toBe('var(--vtx-spacing-9)');
  });

  it('renders middle variant', () => {
    render(<Divider variant="middle" />);
    expect(getStyle().marginLeft).toBe('var(--vtx-spacing-3)');
  });

  // Light variant
  it('renders light divider', () => {
    render(<Divider light />);
    expect(getStyle().borderColor).toBe('var(--vtx-divider-color-light, var(--vtx-color-neutral-100))');
  });

  // Flex item
  it('renders as flex item', () => {
    render(<Divider flexItem />);
    expect(getStyle().height).toBe('1px');
  });

  it('renders vertical divider as flex item', () => {
    render(<Divider orientation="vertical" flexItem />);
    expect(getStyle().alignSelf).toBe('stretch');
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
    render(<Divider orientation="vertical" variant="middle" />);
    expect(getStyle().marginTop).toBe('var(--vtx-spacing-2)');
  });

  it('renders light inset divider', () => {
    render(<Divider variant="inset" light />);
    expect(getStyle().marginLeft).toBe('var(--vtx-spacing-9)');
  });

  it('renders vertical flex item with children', () => {
    render(
      <Divider orientation="vertical" flexItem>
        Text
      </Divider>
    );
    const style = getStyle();
    expect(style.flexDirection).toBe('column');
    expect(style.display).toBe('flex');
  });

  // Custom props pass-through
  it('passes through custom HTML attributes', () => {
    render(<Divider data-custom="custom-val" id="divider-1" />);
    const box = getRootBox();
    expect(box).toHaveAttribute('data-custom', 'custom-val');
    expect(box).toHaveAttribute('id', 'divider-1');
  });
});
