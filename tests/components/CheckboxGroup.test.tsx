import * as React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckboxGroup } from '../../src/components/CheckboxGroup/CheckboxGroup';
import type { CheckboxOption } from '../../src/components/CheckboxGroup/CheckboxGroup';

const mockOptions: CheckboxOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('CheckboxGroup', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<CheckboxGroup options={mockOptions} />);
      expect(container.querySelector('.vtx-checkbox-group')).toBeInTheDocument();
    });

    it('renders all options', () => {
      render(<CheckboxGroup options={mockOptions} />);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('renders group label', () => {
      render(<CheckboxGroup label="Select options" options={mockOptions} />);
      expect(screen.getByText('Select options')).toBeInTheDocument();
    });

    it('renders helper text', () => {
      render(<CheckboxGroup options={mockOptions} helperText="Select at least one" />);
      expect(screen.getByText('Select at least one')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <CheckboxGroup options={mockOptions} className="custom-class" />
      );
      const group = container.querySelector('.vtx-checkbox-group');
      expect(group).toHaveClass('custom-class');
    });
  });

  describe('Orientation', () => {
    it('renders vertical by default', () => {
      const { container } = render(<CheckboxGroup options={mockOptions} />);
      const group = container.querySelector('.vtx-checkbox-group');
      expect(group).toHaveClass('vtx-checkbox-group--vertical');
    });

    it('renders horizontal when orientation is horizontal', () => {
      const { container } = render(
        <CheckboxGroup options={mockOptions} orientation="horizontal" />
      );
      const group = container.querySelector('.vtx-checkbox-group');
      expect(group).toHaveClass('vtx-checkbox-group--horizontal');
    });
  });

  describe('Size', () => {
    it('passes size prop to checkboxes', () => {
      const { container } = render(<CheckboxGroup options={mockOptions} size="lg" />);
      const checkboxes = container.querySelectorAll('.vtx-checkbox--lg');
      expect(checkboxes).toHaveLength(3);
    });
  });

  describe('Uncontrolled Mode', () => {
    it('starts with no selections by default', () => {
      render(<CheckboxGroup options={mockOptions} />);
      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      checkboxes.forEach((checkbox) => {
        expect(checkbox.checked).toBe(false);
      });
    });

    it('starts with default selections', () => {
      render(<CheckboxGroup options={mockOptions} defaultValue={['option1', 'option3']} />);
      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      expect(checkboxes[0].checked).toBe(true);
      expect(checkboxes[1].checked).toBe(false);
      expect(checkboxes[2].checked).toBe(true);
    });

    it('handles checkbox selection in uncontrolled mode', () => {
      const handleChange = jest.fn();
      render(<CheckboxGroup options={mockOptions} onChange={handleChange} />);
      const checkboxes = screen.getAllByRole('checkbox');

      fireEvent.click(checkboxes[0]);
      expect(handleChange).toHaveBeenCalledWith(['option1']);

      fireEvent.click(checkboxes[1]);
      expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
    });

    it('handles checkbox deselection in uncontrolled mode', () => {
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          options={mockOptions}
          defaultValue={['option1', 'option2']}
          onChange={handleChange}
        />
      );
      const checkboxes = screen.getAllByRole('checkbox');

      fireEvent.click(checkboxes[0]);
      expect(handleChange).toHaveBeenCalledWith(['option2']);
    });
  });

  describe('Controlled Mode', () => {
    it('uses controlled value', () => {
      render(<CheckboxGroup options={mockOptions} value={['option1', 'option3']} />);
      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      expect(checkboxes[0].checked).toBe(true);
      expect(checkboxes[1].checked).toBe(false);
      expect(checkboxes[2].checked).toBe(true);
    });

    it('calls onChange with updated value when checkbox is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<CheckboxGroup options={mockOptions} value={['option1']} onChange={handleChange} />);
      const checkboxes = screen.getAllByRole('checkbox');

      await user.click(checkboxes[1]);
      expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
    });

    it('calls onChange with value removed when unchecking', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(
        <CheckboxGroup
          options={mockOptions}
          value={['option1', 'option2']}
          onChange={handleChange}
        />
      );
      const checkboxes = screen.getAllByRole('checkbox');

      await user.click(checkboxes[0]);
      expect(handleChange).toHaveBeenCalledWith(['option2']);
    });

    it('updates when controlled value changes', () => {
      const { rerender } = render(<CheckboxGroup options={mockOptions} value={['option1']} />);
      let checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      expect(checkboxes[0].checked).toBe(true);
      expect(checkboxes[1].checked).toBe(false);

      rerender(<CheckboxGroup options={mockOptions} value={['option2']} />);
      checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      expect(checkboxes[0].checked).toBe(false);
      expect(checkboxes[1].checked).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('disables all checkboxes when group is disabled', () => {
      render(<CheckboxGroup options={mockOptions} disabled />);
      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      checkboxes.forEach((checkbox) => {
        expect(checkbox.disabled).toBe(true);
      });
    });

    it('applies disabled class', () => {
      const { container } = render(<CheckboxGroup options={mockOptions} disabled />);
      const group = container.querySelector('.vtx-checkbox-group');
      expect(group).toHaveClass('vtx-checkbox-group--disabled');
    });

    it('disables individual options', () => {
      const optionsWithDisabled: CheckboxOption[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', disabled: true },
        { value: 'option3', label: 'Option 3' },
      ];
      render(<CheckboxGroup options={optionsWithDisabled} />);
      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      expect(checkboxes[0].disabled).toBe(false);
      expect(checkboxes[1].disabled).toBe(true);
      expect(checkboxes[2].disabled).toBe(false);
    });

    it('all checkboxes are marked as disabled in DOM', () => {
      render(<CheckboxGroup options={mockOptions} disabled />);
      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      checkboxes.forEach((checkbox) => {
        expect(checkbox.disabled).toBe(true);
      });
    });
  });

  describe('Error State', () => {
    it('applies error class when error is true', () => {
      const { container } = render(<CheckboxGroup options={mockOptions} error />);
      const group = container.querySelector('.vtx-checkbox-group');
      expect(group).toHaveClass('vtx-checkbox-group--error');
    });

    it('passes error state to all checkboxes', () => {
      const { container } = render(<CheckboxGroup options={mockOptions} error />);
      const checkboxes = container.querySelectorAll('.vtx-checkbox--error');
      expect(checkboxes).toHaveLength(3);
    });

    it('renders error state with helper text', () => {
      render(<CheckboxGroup options={mockOptions} error helperText="Required field" />);
      expect(screen.getByText('Required field')).toBeInTheDocument();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to container div', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<CheckboxGroup ref={ref} options={mockOptions} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('vtx-checkbox-group');
    });
  });
});
