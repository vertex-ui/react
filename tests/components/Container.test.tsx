import React from 'react';
import { render, screen } from '../test-utils';
import { Container } from '../../src/components/Container/Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    // When using our custom render which wraps in ThemeProvider,
    // container.firstChild is the ThemeProvider div.
    // We need to query for the Container div.
    render(<Container data-testid="container">Content</Container>);
    const containerDiv = screen.getByTestId('container');

    expect(containerDiv).toHaveClass('vtx-container');
    expect(containerDiv).toHaveClass('vtx-container--lg'); // Default maxWidth
  });

  it('applies different maxWidth classes', () => {
    const variants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    variants.forEach((size) => {
      const { unmount } = render(<Container maxWidth={size} data-testid={`container-${size}`}>Content</Container>);
      const containerDiv = screen.getByTestId(`container-${size}`);
      expect(containerDiv).toHaveClass(`vtx-container--${size}`);
      unmount();
    });

    render(<Container maxWidth="fluid" data-testid="container-fluid">Content</Container>);
    expect(screen.getByTestId('container-fluid')).toHaveClass('vtx-container--fluid');
  });

  it('applies disableGutters class', () => {
    render(<Container disableGutters data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('vtx-container--no-gutters');
  });

  it('applies fluid prop correctly', () => {
    render(<Container fluid data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('vtx-container--fluid');
  });

  it('renders as fluid when both maxWidth="fluid" and fluid prop are used', () => {
    render(<Container fluid maxWidth="fluid" data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('vtx-container--fluid');
  });

  it('merges custom className', () => {
    render(<Container className="custom-class" data-testid="container">Content</Container>);
    const containerDiv = screen.getByTestId('container');
    expect(containerDiv).toHaveClass('custom-class');
    expect(containerDiv).toHaveClass('vtx-container');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Container ref={ref} data-testid="container">Content</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('vtx-container');
  });

  it('passes other props to the div element', () => {
    render(<Container id="test-id" data-testid="container">Content</Container>);
    const containerDiv = screen.getByTestId('container');
    expect(containerDiv).toHaveAttribute('id', 'test-id');
  });
});
