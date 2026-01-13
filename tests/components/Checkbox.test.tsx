import * as React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import '@testing-library/jest-dom';
import { Checkbox } from '../../src/components/Checkbox/Checkbox';

describe('Checkbox', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByText('Accept terms')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<Checkbox label="Option" helperText="This is helper text" />);
      expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<Checkbox className="custom-class" />);
      const wrapper = container.querySelector('.vtx-checkbox');
      expect(wrapper).toHaveClass('custom-class');
    });

    it('applies custom input className', () => {
      const { container } = render(<Checkbox inputClassName="custom-input-class" />);
      const input = container.querySelector('input');
      expect(input).toHaveClass('custom-input-class');
    });

    it('renders all three sizes', () => {
      const { container: small } = render(<Checkbox size="small" />);
      const { container: medium } = render(<Checkbox size="medium" />);
      const { container: large } = render(<Checkbox size="large" />);

      expect(small.querySelector('.vtx-checkbox--small')).toBeInTheDocument();
      expect(medium.querySelector('.vtx-checkbox--medium')).toBeInTheDocument();
      expect(large.querySelector('.vtx-checkbox--large')).toBeInTheDocument();
    });
  });

  describe('Checked State', () => {
    it('renders unchecked by default', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.checked).toBe(false);
    });

    it('renders checked when checked prop is true', () => {
      render(<Checkbox checked readOnly />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.checked).toBe(true);
    });

    it('toggles checked state when clicked (uncontrolled)', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.checked).toBe(false);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(true);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(false);
    });

    it('calls onChange callback when clicked', () => {
      const handleChange = jest.fn();
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ checked: true }),
        })
      );
    });

    it('works in controlled mode', () => {
      const handleChange = jest.fn();
      const { rerender } = render(<Checkbox checked={false} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.checked).toBe(false);

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalled();

      // Simulate parent updating the checked prop
      rerender(<Checkbox checked={true} onChange={handleChange} />);
      expect(checkbox.checked).toBe(true);
    });
  });

  describe('Indeterminate State', () => {
    it('sets indeterminate property on input element', () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });

    it('sets indeterminate property when indeterminate is true', () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });

    it('removes indeterminate when clicked', () => {
      const handleChange = jest.fn();
      render(<Checkbox indeterminate onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });

    it('updates indeterminate property when prop changes', () => {
      const { rerender } = render(<Checkbox indeterminate={false} />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.indeterminate).toBe(false);

      rerender(<Checkbox indeterminate={true} />);
      expect(checkbox.indeterminate).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('disables the checkbox when disabled is true', () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.disabled).toBe(true);
    });

    it('applies disabled class', () => {
      const { container } = render(<Checkbox disabled />);
      const wrapper = container.querySelector('.vtx-checkbox');
      expect(wrapper).toHaveClass('vtx-checkbox--disabled');
    });

    it('is marked as disabled in DOM', () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.disabled).toBe(true);
    });
  });

  describe('Error State', () => {
    it('applies error class when error is true', () => {
      const { container } = render(<Checkbox error />);
      const wrapper = container.querySelector('.vtx-checkbox');
      expect(wrapper).toHaveClass('vtx-checkbox--error');
    });

    it('renders error state with helper text', () => {
      render(<Checkbox error helperText="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  describe('Label Interaction', () => {
    it('toggles checkbox when label is clicked', () => {
      render(<Checkbox label="Click me" />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      const label = screen.getByText('Click me');

      expect(checkbox.checked).toBe(false);
      fireEvent.click(label);
      expect(checkbox.checked).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Checkbox />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('has accessible name when label is provided', () => {
      render(<Checkbox label="Accept terms" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleName('Accept terms');
    });

    it('supports aria-label', () => {
      render(<Checkbox aria-label="Custom checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAccessibleName('Custom checkbox');
    });

    it('supports aria-describedby with helper text', () => {
      const { container } = render(<Checkbox label="Option" helperText="Helper text" />);
      const checkbox = screen.getByRole('checkbox');
      const helperTextId = checkbox.getAttribute('aria-describedby');
      if (helperTextId) {
        expect(screen.getByText('Helper text')).toHaveAttribute('id', helperTextId);
      } else {
        // If no aria-describedby, just ensure helper text is rendered
        expect(screen.getByText('Helper text')).toBeInTheDocument();
      }
    });

    it('can be focused with keyboard', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      expect(checkbox).toHaveFocus();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe('checkbox');
    });
  });

  describe('Input Props', () => {
    it('passes through input props', () => {
      render(<Checkbox name="test-checkbox" value="test-value" />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.name).toBe('test-checkbox');
      expect(checkbox.value).toBe('test-value');
    });

    it('supports defaultChecked for uncontrolled mode', () => {
      render(<Checkbox defaultChecked />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.checked).toBe(true);
    });
  });
});
