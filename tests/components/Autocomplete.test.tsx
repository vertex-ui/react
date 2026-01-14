import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from '../../src/components/Autocomplete/Autocomplete';

describe('Autocomplete', () => {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Durian', value: 'durian', disabled: true }
  ];

  describe('Rendering', () => {
    it('renders with label', () => {
      render(<Autocomplete options={options} label="Select Fruit" />);
      expect(screen.getByLabelText('Select Fruit')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<Autocomplete options={options} helperText="Pick a fruit" />);
      expect(screen.getByText('Pick a fruit')).toBeInTheDocument();
    });

    it('renders error state', () => {
      render(<Autocomplete options={options} error="Invalid fruit" />);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByText('Invalid fruit')).toBeInTheDocument();
    });

    it('renders success state', () => {
      const { container } = render(<Autocomplete options={options} success="Great choice!" />);
      expect(container.querySelector('.vtx-autocomplete-container--success')).toBeInTheDocument();
      expect(screen.getByText('Great choice!')).toBeInTheDocument();
    });

    it('renders search icon when requested', () => {
      const { container } = render(<Autocomplete options={options} showSearchIcon />);
      expect(container.querySelector('.vtx-autocomplete-icon--left')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('opens dropdown on focus by default', () => {
      render(<Autocomplete options={options} />);
      const input = screen.getByRole('combobox');

      fireEvent.focus(input);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.getByText('Apple')).toBeInTheDocument();
    });

    it('does not open dropdown on focus if openOnFocus is false', () => {
      render(<Autocomplete options={options} openOnFocus={false} />);
      const input = screen.getByRole('combobox');

      fireEvent.focus(input);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('opens dropdown on input change', () => {
      render(<Autocomplete options={options} openOnFocus={false} />);
      const input = screen.getByRole('combobox');

      // Need focus + change to trigger dropdown opening in some implementations
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'a' } });
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('filters options (controlled by parent in this implementation, ensuring options prop is respected)', () => {
      // Note: This component renders options as passed. Parent is responsible for filtering.
      // We test that it renders what is passed.
      const filtered = [options[0]];
      render(<Autocomplete options={filtered} />);
      const input = screen.getByRole('combobox');
      fireEvent.focus(input);

      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    });

    it('selects an option on click', async () => {
      const onSelect = jest.fn();
      const onChange = jest.fn();
      render(<Autocomplete options={options} onSelect={onSelect} onChange={onChange} />);
      const input = screen.getByRole('combobox');

      // Open dropdown
      fireEvent.focus(input);

      // Click option
      fireEvent.click(screen.getByText('Banana'));

      expect(onSelect).toHaveBeenCalledWith('banana', expect.objectContaining({ label: 'Banana' }));
      // Input value should update
      expect(input).toHaveValue('Banana');
    });

    it('does not select disabled options', () => {
      const onSelect = jest.fn();
      render(<Autocomplete options={options} onSelect={onSelect} />);
      const input = screen.getByRole('combobox');

      fireEvent.focus(input);
      fireEvent.click(screen.getByText('Durian'));

      expect(onSelect).not.toHaveBeenCalled();
      expect(input).not.toHaveValue('Durian');
    });

    it('clears value when clear button clicked', async () => {
      const onClear = jest.fn();
      const onChange = jest.fn();
      render(<Autocomplete options={options} clearable onClear={onClear} onChange={onChange} />);
      const input = screen.getByRole('combobox');

      // Type something
      await userEvent.type(input, 'Apple');
      expect(input).toHaveValue('Apple');

      // Click clear
      const clearBtn = screen.getByLabelText('Clear input');
      await userEvent.click(clearBtn);

      expect(onClear).toHaveBeenCalled();
      expect(input).toHaveValue('');
    });
  });

  describe('Keyboard Navigation', () => {
    it('navigates options with arrow keys', async () => {
      const user = userEvent.setup();
      render(<Autocomplete options={options} />);
      const input = screen.getByRole('combobox');

      // Focus to open
      await user.click(input);

      // Arrow Down -> Highlights Apple (index 0)
      await user.keyboard('{ArrowDown}');
      const option1 = screen.getByText('Apple').closest('.vtx-autocomplete-option');
      expect(option1).toHaveClass('vtx-autocomplete-option--highlighted');

      // Arrow Down -> Highlights Banana (index 1)
      await user.keyboard('{ArrowDown}');
      const option2 = screen.getByText('Banana').closest('.vtx-autocomplete-option');
      expect(option2).toHaveClass('vtx-autocomplete-option--highlighted');
      expect(option1).not.toHaveClass('vtx-autocomplete-option--highlighted');
    });

    it('selects highlighted option with Enter', async () => {
      const onSelect = jest.fn();
      const user = userEvent.setup();
      render(<Autocomplete options={options} onSelect={onSelect} />);
      const input = screen.getByRole('combobox');

      await user.click(input);
      await user.keyboard('{ArrowDown}'); // Highlight Apple
      await user.keyboard('{Enter}'); // Select

      expect(onSelect).toHaveBeenCalledWith('apple', expect.objectContaining({ label: 'Apple' }));
      expect(input).toHaveValue('Apple');
    });

    it('skips disabled options with keyboard', async () => {
      const user = userEvent.setup();
      render(<Autocomplete options={options} />);
      const input = screen.getByRole('combobox');

      await user.click(input);

      // 0: Apple, 1: Banana, 2: Cherry, 3: Durian (disabled)
      // Navigate to Cherry
      await user.keyboard('{ArrowDown}'); // Apple
      await user.keyboard('{ArrowDown}'); // Banana
      await user.keyboard('{ArrowDown}'); // Cherry

      const cherry = screen.getByText('Cherry').closest('.vtx-autocomplete-option');
      expect(cherry).toHaveClass('vtx-autocomplete-option--highlighted');

      // Next should skip Durian and wrap or stop?
      // Implementation logic: next < options.length - 1 ? next + 1 : 0
      // If next is disabled, checks again?
      // Let's verify wrap around to Apple
      await user.keyboard('{ArrowDown}');

      const apple = screen.getByText('Apple').closest('.vtx-autocomplete-option');
      expect(apple).toHaveClass('vtx-autocomplete-option--highlighted');
    });

    it('closes dropdown with Escape', async () => {
      const user = userEvent.setup();
      render(<Autocomplete options={options} />);
      const input = screen.getByRole('combobox');

      await user.click(input);
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Custom Rendering', () => {
    it('uses getOptionLabel and getOptionValue', () => {
      const customOptions = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
      ];

      render(
        <Autocomplete
          options={customOptions}
          getOptionLabel={(opt) => opt.name}
          getOptionValue={(opt) => String(opt.id)}
        />
      );

      const input = screen.getByRole('combobox');
      fireEvent.focus(input);

      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('renders custom option component', () => {
      render(
        <Autocomplete
          options={options}
          renderOption={(option) => (
            <div key={option.value} className="custom-option">
              Custom: {option.label}
            </div>
          )}
        />
      );

      const input = screen.getByRole('combobox');
      fireEvent.focus(input);

      expect(screen.getByText('Custom: Apple')).toBeInTheDocument();
    });
  });

  describe('Loading and Empty States', () => {
    it('shows loading message', () => {
      render(<Autocomplete options={[]} loading loadingMessage="Fetching..." />);
      const input = screen.getByRole('combobox');
      fireEvent.focus(input);

      expect(screen.getByText('Fetching...')).toBeInTheDocument();
    });

    it('shows no options message', () => {
      render(<Autocomplete options={[]} noOptionsMessage="Nothing found" />);
      const input = screen.getByRole('combobox');
      fireEvent.focus(input);

      expect(screen.getByText('Nothing found')).toBeInTheDocument();
    });
  });
});
