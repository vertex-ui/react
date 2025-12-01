import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Text } from '../../src/components/Text';

describe('Text', () => {
  it('renders text content', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with default variant (body1)', () => {
    render(<Text>Default text</Text>);
    const element = screen.getByText('Default text');
    expect(element).toHaveClass('vtx-text');
    expect(element).toHaveClass('vtx-text--body1');
  });

  it('renders heading variants', () => {
    render(<Text variant="h1">Heading 1</Text>);
    expect(screen.getByText('Heading 1')).toHaveClass('vtx-text--h1');

    render(<Text variant="h2">Heading 2</Text>);
    expect(screen.getByText('Heading 2')).toHaveClass('vtx-text--h2');
  });

  it('renders as correct HTML element', () => {
    const { container } = render(<Text variant="h1">Heading</Text>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('renders with custom HTML element using as prop', () => {
    const { container } = render(
      <Text variant="h1" as="h2">
        Custom Element
      </Text>
    );
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(screen.getByText('Custom Element')).toHaveClass('vtx-text--h1');
  });

  it('applies text alignment classes', () => {
    render(<Text align="center">Centered text</Text>);
    expect(screen.getByText('Centered text')).toHaveClass('vtx-text--align-center');
  });

  it('applies color styles', () => {
    render(<Text color="#ff0000">Red text</Text>);
    const element = screen.getByText('Red text');
    expect(element.style.color).toBe('rgb(255, 0, 0)');
  });

  it('applies weight classes', () => {
    render(<Text weight="bold">Bold text</Text>);
    expect(screen.getByText('Bold text')).toHaveClass('vtx-text--weight-bold');
  });

  it('applies numeric weight as inline style', () => {
    render(<Text weight={600}>Numeric weight</Text>);
    const element = screen.getByText('Numeric weight');
    expect(element.style.fontWeight).toBe('600');
  });

  it('applies text transform classes', () => {
    render(<Text transform="uppercase">Transform text</Text>);
    expect(screen.getByText('Transform text')).toHaveClass('vtx-text--transform-uppercase');
  });

  it('applies text decoration utility classes', () => {
    render(<Text underline>Underlined text</Text>);
    expect(screen.getByText('Underlined text')).toHaveClass('vtx-text--underline');

    render(<Text strikethrough>Strikethrough text</Text>);
    expect(screen.getByText('Strikethrough text')).toHaveClass('vtx-text--strikethrough');
  });

  it('applies utility classes', () => {
    render(<Text truncate>Truncated text</Text>);
    expect(screen.getByText('Truncated text')).toHaveClass('vtx-text--truncate');

    render(<Text italic>Italic text</Text>);
    expect(screen.getByText('Italic text')).toHaveClass('vtx-text--italic');
  });

  it('applies line clamp with correct style', () => {
    render(<Text lineClamp={3}>Clamped text</Text>);
    const element = screen.getByText('Clamped text');
    expect(element).toHaveClass('vtx-text--line-clamp');
  });

  it('applies gradient class when gradient prop is provided', () => {
    render(<Text gradient={['#667eea', '#764ba2']}>Gradient text</Text>);
    expect(screen.getByText('Gradient text')).toHaveClass('vtx-text--gradient');
  });

  it('applies default font size for body1 variant', () => {
    render(<Text>Default body1 text</Text>);
    const element = screen.getByText('Default body1 text');
    // body1 variant should have default font size from CSS variables
    expect(element).toHaveClass('vtx-text--body1');
    // Custom size prop should not be applied when not specified
    expect(element.style.fontSize).toBe('');
  });

  it('inherits global font family and properties', () => {
    render(<Text>Inherited styles</Text>);
    const element = screen.getByText('Inherited styles');
    // Should inherit font family from CSS variables
    expect(element).toHaveClass('vtx-text');
    expect(element).toHaveClass('vtx-text--body1');
    // Should not have inline font-family override
    expect(element.style.fontFamily).toBe('');
  });

  it('applies custom font size', () => {
    render(<Text size="24px">Custom size</Text>);
    expect(screen.getByText('Custom size').style.fontSize).toBe('24px');
  });

  it('applies custom font size overriding variant default', () => {
    render(
      <Text variant="h1" size="18px">
        Custom h1 size
      </Text>
    );
    const element = screen.getByText('Custom h1 size');
    expect(element).toHaveClass('vtx-text--h1');
    expect(element.style.fontSize).toBe('18px');
  });

  it('applies custom line height', () => {
    render(<Text lineHeight="2">Custom line height</Text>);
    expect(screen.getByText('Custom line height').style.lineHeight).toBe('2');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class">Custom class</Text>);
    const element = screen.getByText('Custom class');
    expect(element).toHaveClass('custom-class');
    expect(element).toHaveClass('vtx-text');
  });

  it('forwards HTML attributes', () => {
    render(
      <Text id="test-id" data-testid="custom-test">
        Attributes
      </Text>
    );
    const element = screen.getByTestId('custom-test');
    expect(element).toHaveAttribute('id', 'test-id');
  });

  it('supports onClick handler', () => {
    const handleClick = jest.fn();
    render(<Text onClick={handleClick}>Clickable</Text>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref to the element', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Text ref={ref}>Ref text</Text>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    expect(ref.current?.textContent).toBe('Ref text');
  });

  it('combines multiple props correctly', () => {
    render(
      <Text
        variant="h2"
        align="center"
        weight="bold"
        transform="uppercase"
        italic
        underline
        className="custom-class"
      >
        Combined
      </Text>
    );
    const element = screen.getByText('Combined');
    expect(element).toHaveClass('vtx-text--h2');
    expect(element).toHaveClass('vtx-text--align-center');
    expect(element).toHaveClass('vtx-text--weight-bold');
    expect(element).toHaveClass('vtx-text--transform-uppercase');
    expect(element).toHaveClass('vtx-text--italic');
    expect(element).toHaveClass('vtx-text--underline');
    expect(element).toHaveClass('custom-class');
  });

  it('handles empty children', () => {
    const { container } = render(<Text></Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('handles complex children nodes', () => {
    render(
      <Text>
        Text with <strong>bold</strong> and <em>italic</em>
      </Text>
    );
    expect(screen.getByText('bold')).toBeInTheDocument();
    expect(screen.getByText('italic')).toBeInTheDocument();
  });
});
