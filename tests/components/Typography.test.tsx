import * as React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Typography } from '../../src/components/Typography';

describe('Typography', () => {
  it('renders text content', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with default variant (body1)', () => {
    render(<Typography>Default text</Typography>);
    const element = screen.getByText('Default text');
    expect(element).toHaveClass('vtx-typography');
    expect(element).toHaveClass('vtx-typography--body1');
  });

  it('renders heading variants', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1')).toHaveClass('vtx-typography--h1');

    render(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2')).toHaveClass('vtx-typography--h2');
  });

  it('renders as correct HTML element', () => {
    const { container } = render(<Typography variant="h1">Heading</Typography>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('renders with custom HTML element using as prop', () => {
    const { container } = render(
      <Typography variant="h1" as="h2">
        Custom Element
      </Typography>
    );
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(screen.getByText('Custom Element')).toHaveClass('vtx-typography--h1');
  });

  it('applies text alignment classes', () => {
    render(<Typography align="center">Centered text</Typography>);
    expect(screen.getByText('Centered text')).toHaveClass('vtx-typography--align-center');
  });

  it('applies color styles', () => {
    render(<Typography textColor="#ff0000">Red text</Typography>);
    const element = screen.getByText('Red text');
    expect(element.style.color).toBe('rgb(255, 0, 0)');
  });

  it('applies weight classes', () => {
    render(<Typography weight="bold">Bold text</Typography>);
    expect(screen.getByText('Bold text')).toHaveClass('vtx-typography--weight-bold');
  });

  it('applies numeric weight as inline style', () => {
    render(<Typography weight={600}>Numeric weight</Typography>);
    const element = screen.getByText('Numeric weight');
    expect(element.style.fontWeight).toBe('600');
  });

  it('applies text transform classes', () => {
    render(<Typography transform="uppercase">Transform text</Typography>);
    expect(screen.getByText('Transform text')).toHaveClass('vtx-typography--transform-uppercase');
  });

  it('applies text decoration utility classes', () => {
    render(<Typography underline>Underlined text</Typography>);
    expect(screen.getByText('Underlined text')).toHaveClass('vtx-typography--underline');

    render(<Typography strikethrough>Strikethrough text</Typography>);
    expect(screen.getByText('Strikethrough text')).toHaveClass('vtx-typography--strikethrough');
  });

  it('applies utility classes', () => {
    render(<Typography truncate>Truncated text</Typography>);
    expect(screen.getByText('Truncated text')).toHaveClass('vtx-typography--truncate');

    render(<Typography italic>Italic text</Typography>);
    expect(screen.getByText('Italic text')).toHaveClass('vtx-typography--italic');
  });

  it('applies line clamp with correct style', () => {
    render(<Typography lineClamp={3}>Clamped text</Typography>);
    const element = screen.getByText('Clamped text');
    expect(element).toHaveClass('vtx-typography--line-clamp');
  });

  it('applies gradient class when gradient prop is provided', () => {
    render(<Typography gradient={['#667eea', '#764ba2']}>Gradient text</Typography>);
    expect(screen.getByText('Gradient text')).toHaveClass('vtx-typography--gradient');
  });

  it('applies default font size for body1 variant', () => {
    render(<Typography>Default body1 text</Typography>);
    const element = screen.getByText('Default body1 text');
    // body1 variant should have default font size from CSS variables
    expect(element).toHaveClass('vtx-typography--body1');
    // Custom size prop should not be applied when not specified
    expect(element.style.fontSize).toBe('');
  });

  it('inherits global font family and properties', () => {
    render(<Typography>Inherited styles</Typography>);
    const element = screen.getByText('Inherited styles');
    // Should inherit font family from CSS variables
    expect(element).toHaveClass('vtx-typography');
    expect(element).toHaveClass('vtx-typography--body1');
    // Should not have inline font-family override
    expect(element.style.fontFamily).toBe('');
  });

  it('applies custom font size', () => {
    render(<Typography size="24px">Custom size</Typography>);
    expect(screen.getByText('Custom size').style.fontSize).toBe('24px');
  });

  it('applies custom font size overriding variant default', () => {
    render(
      <Typography variant="h1" size="18px">
        Custom h1 size
      </Typography>
    );
    const element = screen.getByText('Custom h1 size');
    expect(element).toHaveClass('vtx-typography--h1');
    expect(element.style.fontSize).toBe('18px');
  });

  it('applies custom line height', () => {
    render(<Typography lineHeight="2">Custom line height</Typography>);
    expect(screen.getByText('Custom line height').style.lineHeight).toBe('2');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Custom class</Typography>);
    const element = screen.getByText('Custom class');
    expect(element).toHaveClass('custom-class');
    expect(element).toHaveClass('vtx-typography');
  });

  it('forwards HTML attributes', () => {
    render(
      <Typography id="test-id" data-testid="custom-test">
        Attributes
      </Typography>
    );
    const element = screen.getByTestId('custom-test');
    expect(element).toHaveAttribute('id', 'test-id');
  });

  it('supports onClick handler', () => {
    const handleClick = jest.fn();
    render(<Typography onClick={handleClick}>Clickable</Typography>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref to the element', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Typography ref={ref}>Ref text</Typography>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    expect(ref.current?.textContent).toBe('Ref text');
  });

  it('combines multiple props correctly', () => {
    render(
      <Typography
        variant="h2"
        align="center"
        weight="bold"
        transform="uppercase"
        italic
        underline
        className="custom-class"
      >
        Combined
      </Typography>
    );
    const element = screen.getByText('Combined');
    expect(element).toHaveClass('vtx-typography--h2');
    expect(element).toHaveClass('vtx-typography--align-center');
    expect(element).toHaveClass('vtx-typography--weight-bold');
    expect(element).toHaveClass('vtx-typography--transform-uppercase');
    expect(element).toHaveClass('vtx-typography--italic');
    expect(element).toHaveClass('vtx-typography--underline');
    expect(element).toHaveClass('custom-class');
  });

  it('handles empty children', () => {
    const { container } = render(<Typography></Typography>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('handles complex children nodes', () => {
    render(
      <Typography>
        Text with <strong>bold</strong> and <em>italic</em>
      </Typography>
    );
    expect(screen.getByText('bold')).toBeInTheDocument();
    expect(screen.getByText('italic')).toBeInTheDocument();
  });
});
