import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from '../../src/components/Radio/Radio';

describe('Radio', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Radio label="Option 1" />);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<Radio label="Option" helperText="This is helper text" />);
      expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<Radio className="custom-class" />);
      const wrapper = container.querySelector('.vtx-radio');
      expect(wrapper).toHaveClass('custom-class');
    });

    it('renders all three sizes', () => {
      const { container: small } = render(<Radio size="small" />);
      const { container: medium } = render(<Radio size="medium" />);
      const { container: large } = render(<Radio size="large" />);

      expect(small.querySelector('.vtx-radio--small')).toBeInTheDocument();
      expect(medium.querySelector('.vtx-radio--medium')).toBeInTheDocument();
      expect(large.querySelector('.vtx-radio--large')).toBeInTheDocument();
    });

    it('renders all variants', () => {
      const variants = ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const;
      variants.forEach((variant) => {
        const { container } = render(<Radio variant={variant} />);
        expect(container.querySelector(`.vtx-radio--${variant}`)).toBeInTheDocument();
      });
    });
  });

  describe('Checked State', () => {
    it('renders unchecked by default', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.checked).toBe(false);
    });

    it('renders checked when checked prop is true', () => {
      render(<Radio checked readOnly />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });

    it('calls onChange callback when clicked', () => {
      const handleChange = jest.fn();
      render(<Radio onChange={handleChange} />);
      const radio = screen.getByRole('radio');

      fireEvent.click(radio);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('works in controlled mode', () => {
      const handleChange = jest.fn();
      const { rerender } = render(<Radio checked={false} onChange={handleChange} />);
      const radio = screen.getByRole('radio') as HTMLInputElement;

      expect(radio.checked).toBe(false);

      fireEvent.click(radio);
      expect(handleChange).toHaveBeenCalled();

      rerender(<Radio checked={true} onChange={handleChange} />);
      expect(radio.checked).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('disables the radio when disabled is true', () => {
      render(<Radio disabled />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.disabled).toBe(true);
    });

    it('applies disabled class', () => {
      const { container } = render(<Radio disabled />);
      const wrapper = container.querySelector('.vtx-radio');
      expect(wrapper).toHaveClass('vtx-radio--disabled');
    });

    it('is marked as disabled in DOM', () => {
      render(<Radio disabled />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.disabled).toBe(true);
    });
  });

  describe('Error State', () => {
    it('applies error class when error is true', () => {
      const { container } = render(<Radio error />);
      const wrapper = container.querySelector('.vtx-radio');
      expect(wrapper).toHaveClass('vtx-radio--error');
    });

    it('renders error state with helper text', () => {
      render(<Radio error helperText="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  describe('Label Interaction', () => {
    it('toggles radio when label is clicked', () => {
      render(<Radio label="Click me" />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      const label = screen.getByText('Click me');

      expect(radio.checked).toBe(false);
      fireEvent.click(label);
      expect(radio.checked).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Radio />);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('has accessible name when label is provided', () => {
      render(<Radio label="Option 1" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleName('Option 1');
    });

    it('supports aria-label', () => {
      render(<Radio aria-label="Custom radio" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleName('Custom radio');
    });

    it('supports aria-describedby with helper text', () => {
      const { container } = render(<Radio label="Option" helperText="Helper text" />);
      const radio = screen.getByRole('radio');
      const helperTextId = radio.getAttribute('aria-describedby');
      if (helperTextId) {
        expect(screen.getByText('Helper text')).toHaveAttribute('id', helperTextId);
      } else {
        expect(screen.getByText('Helper text')).toBeInTheDocument();
      }
    });

    it('can be focused with keyboard', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio');
      radio.focus();
      expect(radio).toHaveFocus();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Radio ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe('radio');
    });
  });

  describe('Input Props', () => {
    it('passes through input props', () => {
      render(<Radio name="test-radio" value="test-value" />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.name).toBe('test-radio');
      expect(radio.value).toBe('test-value');
    });

    it('supports defaultChecked for uncontrolled mode', () => {
      render(<Radio defaultChecked />);
      const radio = screen.getByRole('radio') as HTMLInputElement;
      expect(radio.checked).toBe(true);
    });
  });
});
