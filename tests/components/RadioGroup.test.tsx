import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioGroup } from '../../src/components/RadioGroup/RadioGroup';
import type { RadioOption } from '../../src/components/RadioGroup/RadioGroup';

const mockOptions: RadioOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('RadioGroup', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<RadioGroup name="test" options={mockOptions} />);
      expect(container.querySelector('.vtx-radio-group')).toBeInTheDocument();
    });

    it('renders all options', () => {
      render(<RadioGroup name="test" options={mockOptions} />);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('renders group label', () => {
      render(<RadioGroup name="test" label="Select option" options={mockOptions} />);
      expect(screen.getByText('Select option')).toBeInTheDocument();
    });

    it('renders helper text', () => {
      render(<RadioGroup name="test" options={mockOptions} helperText="Select one option" />);
      expect(screen.getByText('Select one option')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <RadioGroup name="test" options={mockOptions} className="custom-class" />
      );
      const group = container.querySelector('.vtx-radio-group');
      expect(group).toHaveClass('custom-class');
    });
  });

  describe('Orientation', () => {
    it('renders vertical by default', () => {
      const { container } = render(<RadioGroup name="test" options={mockOptions} />);
      const group = container.querySelector('.vtx-radio-group');
      expect(group).toHaveClass('vtx-radio-group--vertical');
    });

    it('renders horizontal when orientation is horizontal', () => {
      const { container } = render(
        <RadioGroup name="test" options={mockOptions} orientation="horizontal" />
      );
      const group = container.querySelector('.vtx-radio-group');
      expect(group).toHaveClass('vtx-radio-group--horizontal');
    });
  });

  describe('Size', () => {
    it('passes size prop to radios', () => {
      const { container } = render(<RadioGroup name="test" options={mockOptions} size="large" />);
      const radios = container.querySelectorAll('.vtx-radio--large');
      expect(radios).toHaveLength(3);
    });
  });

  describe('Variant', () => {
    it('passes variant prop to radios', () => {
      const { container } = render(
        <RadioGroup name="test" options={mockOptions} variant="success" />
      );
      const radios = container.querySelectorAll('.vtx-radio--success');
      expect(radios).toHaveLength(3);
    });
  });

  describe('Uncontrolled Mode', () => {
    it('starts with no selection by default', () => {
      render(<RadioGroup name="test" options={mockOptions} />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.checked).toBe(false);
      });
    });

    it('starts with default selection', () => {
      render(<RadioGroup name="test" options={mockOptions} defaultValue="option2" />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radios[0].checked).toBe(false);
      expect(radios[1].checked).toBe(true);
      expect(radios[2].checked).toBe(false);
    });

    it('handles radio selection in uncontrolled mode', () => {
      const handleChange = jest.fn();
      render(<RadioGroup name="test" options={mockOptions} onChange={handleChange} />);
      const radios = screen.getAllByRole('radio');

      fireEvent.click(radios[0]);
      expect(handleChange).toHaveBeenCalledWith('option1');

      fireEvent.click(radios[1]);
      expect(handleChange).toHaveBeenCalledWith('option2');
    });
  });

  describe('Controlled Mode', () => {
    it('uses controlled value', () => {
      render(<RadioGroup name="test" options={mockOptions} value="option2" />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radios[0].checked).toBe(false);
      expect(radios[1].checked).toBe(true);
      expect(radios[2].checked).toBe(false);
    });

    it('calls onChange with updated value when radio is clicked', () => {
      const handleChange = jest.fn();
      render(
        <RadioGroup name="test" options={mockOptions} value="option1" onChange={handleChange} />
      );
      const radios = screen.getAllByRole('radio');

      fireEvent.click(radios[1]);
      expect(handleChange).toHaveBeenCalledWith('option2');
    });

    it('updates when controlled value changes', () => {
      const { rerender } = render(<RadioGroup name="test" options={mockOptions} value="option1" />);
      let radios = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radios[0].checked).toBe(true);
      expect(radios[1].checked).toBe(false);

      rerender(<RadioGroup name="test" options={mockOptions} value="option2" />);
      radios = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radios[0].checked).toBe(false);
      expect(radios[1].checked).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('disables all radios when group is disabled', () => {
      render(<RadioGroup name="test" options={mockOptions} disabled />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.disabled).toBe(true);
      });
    });

    it('applies disabled class', () => {
      const { container } = render(<RadioGroup name="test" options={mockOptions} disabled />);
      const group = container.querySelector('.vtx-radio-group');
      expect(group).toHaveClass('vtx-radio-group--disabled');
    });

    it('disables individual options', () => {
      const optionsWithDisabled: RadioOption[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', disabled: true },
        { value: 'option3', label: 'Option 3' },
      ];
      render(<RadioGroup name="test" options={optionsWithDisabled} />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radios[0].disabled).toBe(false);
      expect(radios[1].disabled).toBe(true);
      expect(radios[2].disabled).toBe(false);
    });

    it('all radios are marked as disabled in DOM', () => {
      render(<RadioGroup name="test" options={mockOptions} disabled />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.disabled).toBe(true);
      });
    });
  });

  describe('Error State', () => {
    it('applies error class when error is true', () => {
      const { container } = render(<RadioGroup name="test" options={mockOptions} error />);
      const group = container.querySelector('.vtx-radio-group');
      expect(group).toHaveClass('vtx-radio-group--error');
    });

    it('passes error state to all radios', () => {
      const { container } = render(<RadioGroup name="test" options={mockOptions} error />);
      const radios = container.querySelectorAll('.vtx-radio--error');
      expect(radios).toHaveLength(3);
    });

    it('renders error state with helper text', () => {
      render(<RadioGroup name="test" options={mockOptions} error helperText="Required field" />);
      expect(screen.getByText('Required field')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has radiogroup role', () => {
      render(<RadioGroup name="test" options={mockOptions} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('sets aria-label from label prop', () => {
      render(<RadioGroup name="test" label="Select option" options={mockOptions} />);
      const group = screen.getByRole('radiogroup');
      expect(group).toHaveAttribute('aria-label', 'Select option');
    });

    it('all radios share the same name', () => {
      render(<RadioGroup name="test-name" options={mockOptions} />);
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.name).toBe('test-name');
      });
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to container div', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<RadioGroup ref={ref} name="test" options={mockOptions} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('vtx-radio-group');
    });
  });
});
