import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { DatePicker } from '../../src/components/DatePicker/DatePicker';

describe('DatePicker', () => {
  describe('Rendering', () => {
    it('renders with label', () => {
      render(<DatePicker label="Select Date" />);
      expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
      render(<DatePicker placeholder="MM/DD/YYYY" />);
      expect(screen.getByPlaceholderText('MM/DD/YYYY')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<DatePicker helperText="Format: MM/DD/YYYY" />);
      expect(screen.getByText('Format: MM/DD/YYYY')).toBeInTheDocument();
    });

    it('renders error state', () => {
      render(<DatePicker error="Invalid date" />);
      expect(screen.getByText('Invalid date')).toBeInTheDocument();
    });

    it('renders success state', () => {
      render(<DatePicker success="Valid date" />);
      expect(screen.getByText('Valid date')).toBeInTheDocument();
    });

    it('renders disabled state', () => {
      render(<DatePicker disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('opens calendar on input click', async () => {
      const user = userEvent.setup();
      render(<DatePicker label="Date" />);
      const input = screen.getByLabelText('Date');

      await user.click(input);

      const currentYear = new Date().getFullYear().toString();
      expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    });

    it('selects a date from calendar', async () => {
      const onChange = jest.fn();
      const user = userEvent.setup();
      render(<DatePicker label="Date" onChange={onChange} />);

      const input = screen.getByLabelText('Date');
      await user.click(input);

      // Select 15th of current month
      // We must select the one that is a button (day) not just text
      const days = screen.getAllByRole('button', { name: /15/ });
      const day15 = days.find(el => el.classList.contains('vtx-datepicker__day'));

      if (day15) await user.click(day15);

      expect(onChange).toHaveBeenCalled();
      const date = onChange.mock.calls[0][0];
      expect(date.getDate()).toBe(15);
    });

    it('selects today', async () => {
      const onChange = jest.fn();
      const user = userEvent.setup();
      render(<DatePicker label="Date" showToday onChange={onChange} />);

      await user.click(screen.getByLabelText('Date'));

      const todayBtn = screen.getByText('Today');
      await user.click(todayBtn);

      expect(onChange).toHaveBeenCalled();
      const date = onChange.mock.calls[0][0];
      const today = new Date();
      expect(date.getDate()).toBe(today.getDate());
      expect(date.getMonth()).toBe(today.getMonth());
      expect(date.getFullYear()).toBe(today.getFullYear());
    });

    it('clears value', async () => {
      const onChange = jest.fn();
      const user = userEvent.setup();
      const date = new Date(2023, 0, 15); // Jan 15 2023

      render(<DatePicker label="Date" value={date} clearable onChange={onChange} />);

      const clearBtn = screen.getByLabelText('Clear input');
      await user.click(clearBtn);

      expect(onChange).toHaveBeenCalledWith(null);
    });

    it('validates manual input', async () => {
      const onChange = jest.fn();
      const user = userEvent.setup();
      render(<DatePicker label="Date" onChange={onChange} format="MM/DD/YYYY" />);

      const input = screen.getByLabelText('Date');
      await user.type(input, '01/15/2023');

      // Should call onChange with valid date
      expect(onChange).toHaveBeenCalled();
      const date = onChange.mock.calls[onChange.mock.calls.length - 1][0];
      expect(date.getFullYear()).toBe(2023);
      expect(date.getMonth()).toBe(0); // Jan is 0
      expect(date.getDate()).toBe(15);
    });

    it('reverts invalid input on blur', async () => {
      const user = userEvent.setup();
      const initialDate = new Date(2023, 0, 1);
      render(<DatePicker label="Date" value={initialDate} />);

      const input = screen.getByLabelText('Date');
      await user.clear(input);
      await user.type(input, 'invalid-date');
      await user.tab(); // Blur

      expect(input).toHaveValue('01/01/2023');
    });
  });

  describe('Calendar Navigation', () => {
    it('navigates months', async () => {
      const user = userEvent.setup();
      render(<DatePicker label="Date" />);

      await user.click(screen.getByLabelText('Date'));

      const prevBtn = screen.getByLabelText('Previous month');
      const nextBtn = screen.getByLabelText('Next month');

      // The component implementation uses class "vtx-datepicker__month-year" for header
      const header = document.querySelector('.vtx-datepicker__month-year');

      // Get initial month
      const initialMonthText = header?.textContent;

      await user.click(nextBtn);
      expect(header?.textContent).not.toBe(initialMonthText);

      await user.click(prevBtn);
      expect(header?.textContent).toBe(initialMonthText);
    });
  });

  describe('Constraints', () => {
    it('disables dates outside min/max range', async () => {
      const user = userEvent.setup();
      const today = new Date();
      // Ensure we are in a month view where 5, 15, 25 are visible
      // Default view is current month
      const minDate = new Date(today.getFullYear(), today.getMonth(), 10);
      // Set time to end of day for maxDate to include it fully if logic compares times, or start if inclusive.
      // Typically date pickers compare start of day.
      const maxDate = new Date(today.getFullYear(), today.getMonth(), 20);

      render(<DatePicker label="Date" minDate={minDate} maxDate={maxDate} />);
      await user.click(screen.getByLabelText('Date'));

      // We must select buttons that are actual days, not just text
      const day5 = screen.getByRole('button', { name: new Date(today.getFullYear(), today.getMonth(), 5).toLocaleDateString() });
      expect(day5).toBeDisabled();

      const day25 = screen.getByRole('button', { name: new Date(today.getFullYear(), today.getMonth(), 25).toLocaleDateString() });
      expect(day25).toBeDisabled();

      const day15 = screen.getByRole('button', { name: new Date(today.getFullYear(), today.getMonth(), 15).toLocaleDateString() });
      expect(day15).not.toBeDisabled();
    });

    it('respects disabledDates array', async () => {
      const user = userEvent.setup();
      const today = new Date();
      const disabledDate = new Date(today.getFullYear(), today.getMonth(), 15);

      render(<DatePicker label="Date" disabledDates={[disabledDate]} />);
      await user.click(screen.getByLabelText('Date'));

      const day15 = screen.getByRole('button', { name: disabledDate.toLocaleDateString() });
      expect(day15).toBeDisabled();
    });
  });
});
