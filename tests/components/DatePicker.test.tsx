import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import { DatePicker } from '../../src/components/DatePicker/DatePicker';

describe('DatePicker', () => {
  it('renders correctly', () => {
    render(<DatePicker label="Date" />);
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
  });

  it('opens calendar on click', async () => {
    render(<DatePicker label="Date" />);
    const input = screen.getByLabelText('Date');
    fireEvent.click(input);

    // Check for calendar element (e.g. current month/year)
    const currentYear = new Date().getFullYear().toString();
    await waitFor(() => {
        expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    });
  });

  it('selects a date', async () => {
    const onChange = jest.fn();
    render(<DatePicker label="Date" onChange={onChange} />);
    const input = screen.getByLabelText('Date');
    fireEvent.click(input);

    await waitFor(() => {
        // Find a day (e.g. 15) and click it
        const days = screen.getAllByText('15');
        fireEvent.click(days[0]);
    });

    expect(onChange).toHaveBeenCalled();
  });
});
