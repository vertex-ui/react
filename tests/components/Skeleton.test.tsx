import React from 'react';
import { render, screen } from '../test-utils';
import { Skeleton } from '../../src/components/Skeleton/Skeleton';

describe('Skeleton', () => {
  it('renders correctly', () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('.vtx-skeleton')).toBeInTheDocument();
  });

  it('renders with variants', () => {
    const { container } = render(<Skeleton variant="circle" />);
    expect(container.querySelector('.vtx-skeleton--circle')).toBeInTheDocument();
  });

  it('renders with custom dimensions', () => {
    const { container } = render(<Skeleton width={100} height={50} />);
    const skeleton = container.querySelector('.vtx-skeleton') as HTMLElement;
    expect(skeleton.style.width).toBe('100px');
    expect(skeleton.style.height).toBe('50px');
  });
});
