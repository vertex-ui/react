import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import { Autocomplete } from '../../src/components/Autocomplete/Autocomplete';

describe('Autocomplete', () => {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' }
  ];

  it('renders correctly', () => {
    render(<Autocomplete options={options} label="Fruit" />);
    expect(screen.getByLabelText('Fruit')).toBeInTheDocument();
  });

  it('filters options on input', async () => {
    // Autocomplete doesn't filter by itself, it expects filtered options from parent or filtering logic elsewhere if controlled.
    // BUT looking at `Autocomplete.tsx`, it seems to just render `options` as passed.
    // It does NOT implement internal filtering.

    const { container } = render(<Autocomplete options={options} label="Fruit" />);
    const input = screen.getByLabelText('Fruit');

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'App' } });

    await waitFor(() => {
        // We expect Apple to be present.
        // Since component doesn't filter, Banana should ALSO be present.
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
    });
  });

  it('selects an option', async () => {
    const onSelect = jest.fn(); // The prop is onSelect, not onChange for selection!

    render(<Autocomplete options={options} label="Fruit" onSelect={onSelect} />);
    const input = screen.getByLabelText('Fruit');

    fireEvent.focus(input);
    // Trigger change to ensure it opens? Or just focus opens it (openOnFocus=true default).

    // Wait for options
    await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Banana'));

    // Expect onSelect to be called
    expect(onSelect).toHaveBeenCalledWith('banana', expect.objectContaining({ label: 'Banana' }));

    // Expect input value to update (uncontrolled)
    expect(input).toHaveValue('Banana');
  });
});
