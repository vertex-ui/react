import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid } from '../../src/components/Grid/Grid';

describe('Grid', () => {
  // Basic rendering
  it('renders a grid component', () => {
    const { container } = render(<Grid data-testid="grid">Content</Grid>);
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Grid className="custom-grid">Content</Grid>);
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('custom-grid');
  });

  // Container/Item props
  it('renders as container', () => {
    const { container } = render(<Grid container>Content</Grid>);
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-container');
  });

  it('renders as item', () => {
    const { container } = render(<Grid item>Content</Grid>);
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-item');
  });

  it('renders as both container and item', () => {
    const { container } = render(
      <Grid container item>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-container');
    expect(grid).toHaveClass('vtx-grid-item');
  });

  // Spacing
  it('applies spacing', () => {
    const { container } = render(
      <Grid container spacing={3}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-spacing-3');
  });

  it('applies row spacing', () => {
    const { container } = render(
      <Grid container rowSpacing={2}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-row-spacing-2');
  });

  it('applies column spacing', () => {
    const { container } = render(
      <Grid container columnSpacing={4}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-column-spacing-4');
  });

  it('applies both row and column spacing', () => {
    const { container } = render(
      <Grid container rowSpacing={2} columnSpacing={3}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-row-spacing-2');
    expect(grid).toHaveClass('vtx-grid-column-spacing-3');
  });

  // Breakpoints - XS
  it('applies xs breakpoint with number', () => {
    const { container } = render(
      <Grid item xs={6}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-xs-6');
  });

  it('applies xs breakpoint with boolean', () => {
    const { container } = render(
      <Grid item xs>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-xs');
  });

  it('applies xs breakpoint with auto', () => {
    const { container } = render(
      <Grid item xs="auto">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-xs-auto');
  });

  // Breakpoints - SM
  it('applies sm breakpoint', () => {
    const { container } = render(
      <Grid item sm={4}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-sm-4');
  });

  // Breakpoints - MD
  it('applies md breakpoint', () => {
    const { container } = render(
      <Grid item md={8}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-md-8');
  });

  // Breakpoints - LG
  it('applies lg breakpoint', () => {
    const { container } = render(
      <Grid item lg={3}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-lg-3');
  });

  // Breakpoints - XL
  it('applies xl breakpoint', () => {
    const { container } = render(
      <Grid item xl={12}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-xl-12');
  });

  // Multiple breakpoints
  it('applies multiple breakpoints', () => {
    const { container } = render(
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-xs-12');
    expect(grid).toHaveClass('vtx-grid-sm-6');
    expect(grid).toHaveClass('vtx-grid-md-4');
    expect(grid).toHaveClass('vtx-grid-lg-3');
    expect(grid).toHaveClass('vtx-grid-xl-2');
  });

  // Direction
  it('applies row direction by default', () => {
    const { container } = render(<Grid container>Content</Grid>);
    const grid = container.querySelector('.vtx-grid');
    expect(grid).not.toHaveClass('vtx-grid-direction-row');
  });

  it('applies row-reverse direction', () => {
    const { container } = render(
      <Grid container direction="row-reverse">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-direction-row-reverse');
  });

  it('applies column direction', () => {
    const { container } = render(
      <Grid container direction="column">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-direction-column');
  });

  it('applies column-reverse direction', () => {
    const { container } = render(
      <Grid container direction="column-reverse">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-direction-column-reverse');
  });

  // Wrap
  it('applies wrap by default', () => {
    const { container } = render(<Grid container>Content</Grid>);
    const grid = container.querySelector('.vtx-grid');
    expect(grid).not.toHaveClass('vtx-grid-wrap-wrap');
  });

  it('applies nowrap', () => {
    const { container } = render(
      <Grid container wrap="nowrap">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-wrap-nowrap');
  });

  it('applies wrap-reverse', () => {
    const { container } = render(
      <Grid container wrap="wrap-reverse">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-wrap-wrap-reverse');
  });

  // Alignment
  it('applies justifyContent style', () => {
    const { container } = render(
      <Grid container justifyContent="center">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveStyle({ justifyContent: 'center' });
  });

  it('applies alignItems style', () => {
    const { container } = render(
      <Grid container alignItems="flex-end">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveStyle({ alignItems: 'flex-end' });
  });

  it('applies alignContent style', () => {
    const { container } = render(
      <Grid container alignContent="space-between">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveStyle({ alignContent: 'space-between' });
  });

  it('applies multiple alignment styles', () => {
    const { container } = render(
      <Grid container justifyContent="center" alignItems="center" alignContent="stretch">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveStyle({
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'stretch',
    });
  });

  // Nested grids
  it('renders nested grids', () => {
    const { container } = render(
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Nested content
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
    const grids = container.querySelectorAll('.vtx-grid');
    expect(grids.length).toBeGreaterThanOrEqual(3);
    expect(screen.getByText('Nested content')).toBeInTheDocument();
  });

  // Ref forwarding
  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Grid ref={ref}>Content</Grid>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('vtx-grid');
  });

  // Custom props pass-through
  it('passes through custom HTML attributes', () => {
    const { container } = render(
      <Grid data-testid="custom-grid" id="grid-1">
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveAttribute('data-testid', 'custom-grid');
    expect(grid).toHaveAttribute('id', 'grid-1');
  });

  // Combined props
  it('renders with all props combined', () => {
    const { container } = render(
      <Grid
        container
        spacing={3}
        xs={12}
        md={6}
        direction="column"
        wrap="nowrap"
        justifyContent="center"
        alignItems="flex-start"
        className="custom-class"
      >
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveClass('vtx-grid-container');
    expect(grid).toHaveClass('vtx-grid-spacing-3');
    expect(grid).toHaveClass('vtx-grid-xs-12');
    expect(grid).toHaveClass('vtx-grid-md-6');
    expect(grid).toHaveClass('vtx-grid-direction-column');
    expect(grid).toHaveClass('vtx-grid-wrap-nowrap');
    expect(grid).toHaveClass('custom-class');
    expect(grid).toHaveStyle({
      justifyContent: 'center',
      alignItems: 'flex-start',
    });
  });

  // Custom styles
  it('applies custom inline styles', () => {
    const { container } = render(
      <Grid style={{ backgroundColor: 'red', padding: '20px' }}>Content</Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveStyle({
      backgroundColor: 'red',
      padding: '20px',
    });
  });

  it('merges custom styles with alignment styles', () => {
    const { container } = render(
      <Grid container justifyContent="center" style={{ backgroundColor: 'blue' }}>
        Content
      </Grid>
    );
    const grid = container.querySelector('.vtx-grid');
    expect(grid).toHaveStyle({
      justifyContent: 'center',
      backgroundColor: 'blue',
    });
  });
});
