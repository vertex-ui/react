import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Rating } from '../../src/components/Rating/Rating';

describe('Rating', () => {
  it('renders correct number of stars', () => {
    // Check if "3" text exists if component renders it (default showValue is false)
    // The previous run showed a "5" in ProductCard test because it had showValue.
    // Here we can check if 5 star wrappers are rendered.
    const { container } = render(<Rating value={3} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const stars = container.querySelectorAll('.vtx-rating-star-wrapper');
    expect(stars.length).toBe(5);
  });

  it('renders value text if showValue is true', () => {
    render(<Rating value={3.5} showValue allowHalf />);
    expect(screen.getByText('3.5')).toBeInTheDocument();
  });

  it('handles user interaction (selectable)', () => {
    const onChange = jest.fn();
    const { container } = render(<Rating value={0} onChange={onChange} selectable />);

    // Find stars using class
    // DOM structure: wrapper > full/half triggers > span (icon)
    // We should click on the trigger divs.
    // .vtx-rating-star-full is the trigger for full star.

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const starTriggers = container.querySelectorAll('.vtx-rating-star-full');
    expect(starTriggers.length).toBe(5);

    if (starTriggers.length >= 5) {
        // Click 5th star
        fireEvent.click(starTriggers[4]);
        expect(onChange).toHaveBeenCalledWith(5);
    }
  });

  it('is read only', () => {
    const onChange = jest.fn();
    const { container } = render(<Rating value={3} readOnly selectable onChange={onChange} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const starTriggers = container.querySelectorAll('.vtx-rating-star-full');
    if (starTriggers.length >= 5) {
        fireEvent.click(starTriggers[4]);
        expect(onChange).not.toHaveBeenCalled();
    }
  });
});
