import React from 'react';
import { render, screen } from '../test-utils';
import { Skeleton } from '../../src/components/Skeleton/Skeleton';

describe('Skeleton', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('.lxs-skeleton');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('lxs-skeleton--text'); // default variant
    expect(skeleton).toHaveClass('lxs-skeleton--wave'); // default animation
  });

  describe('Variants', () => {
    it('renders text variant', () => {
      const { container } = render(<Skeleton variant="text" />);
      expect(container.querySelector('.lxs-skeleton--text')).toBeInTheDocument();
    });

    it('renders circular variant', () => {
      const { container } = render(<Skeleton variant="circular" />);
      expect(container.querySelector('.lxs-skeleton--circular')).toBeInTheDocument();
    });

    it('renders rectangular variant', () => {
      const { container } = render(<Skeleton variant="rectangular" />);
      expect(container.querySelector('.lxs-skeleton--rectangular')).toBeInTheDocument();
    });

    it('renders rounded variant', () => {
      const { container } = render(<Skeleton variant="rounded" />);
      expect(container.querySelector('.lxs-skeleton--rounded')).toBeInTheDocument();
    });
  });

  describe('Animations', () => {
    it('renders pulse animation', () => {
      const { container } = render(<Skeleton animation="pulse" />);
      expect(container.querySelector('.lxs-skeleton--pulse')).toBeInTheDocument();
    });

    it('renders wave animation', () => {
      const { container } = render(<Skeleton animation="wave" />);
      expect(container.querySelector('.lxs-skeleton--wave')).toBeInTheDocument();
    });

    it('renders no animation', () => {
      const { container } = render(<Skeleton animation="none" />);
      expect(container.querySelector('.lxs-skeleton--none')).not.toBeInTheDocument();
      // Should not have any animation class
      const skeleton = container.querySelector('.lxs-skeleton');
      expect(skeleton).not.toHaveClass('lxs-skeleton--wave');
      expect(skeleton).not.toHaveClass('lxs-skeleton--pulse');
    });
  });

  describe('Styling', () => {
    it('applies custom dimensions (numbers)', () => {
      const { container } = render(<Skeleton width={100} height={50} />);
      const skeleton = container.querySelector('.lxs-skeleton') as HTMLElement;
      expect(skeleton.style.width).toBe('100px');
      expect(skeleton.style.height).toBe('50px');
    });

    it('applies custom dimensions (strings)', () => {
      const { container } = render(<Skeleton width="50%" height="2rem" />);
      const skeleton = container.querySelector('.lxs-skeleton') as HTMLElement;
      expect(skeleton.style.width).toBe('50%');
      expect(skeleton.style.height).toBe('2rem');
    });

    it('applies custom className', () => {
      const { container } = render(<Skeleton className="custom-class" />);
      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });

    it('applies custom style prop', () => {
      const { container } = render(<Skeleton style={{ margin: '10px' }} />);
      const skeleton = container.querySelector('.lxs-skeleton') as HTMLElement;
      expect(skeleton.style.margin).toBe('10px');
    });
  });

  describe('Accessibility', () => {
    it('has correct aria attributes', () => {
      const { container } = render(<Skeleton />);
      const skeleton = container.querySelector('.lxs-skeleton');
      expect(skeleton).toHaveAttribute('aria-busy', 'true');
      expect(skeleton).toHaveAttribute('aria-live', 'polite');
    });
  });
});
