import * as React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import '@testing-library/jest-dom';
import { ToggleButton } from '../../src/components/ToggleButton/ToggleButton';

describe('ToggleButton', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<ToggleButton />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<ToggleButton label="Enable Feature" />);
      expect(screen.getByText('Enable Feature')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<ToggleButton label="Option" helperText="This is helper text" />);
      expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<ToggleButton className="custom-class" />);
      const wrapper = container.querySelector('.vtx-toggle-button');
      expect(wrapper).toHaveClass('custom-class');
    });

    it('renders all three sizes', () => {
      const { container: small } = render(<ToggleButton size="sm" />);
      const { container: medium } = render(<ToggleButton size="md" />);
      const { container: large } = render(<ToggleButton size="lg" />);

      expect(small.querySelector('.vtx-toggle-button--sm')).toBeInTheDocument();
      expect(medium.querySelector('.vtx-toggle-button--md')).toBeInTheDocument();
      expect(large.querySelector('.vtx-toggle-button--lg')).toBeInTheDocument();
    });

    it('renders label placements correctly', () => {
        const { container: start } = render(<ToggleButton label="Start" labelPlacement="start" />);
        expect(start.querySelector('.vtx-toggle-button-label--start')).toBeInTheDocument();

        const { container: top } = render(<ToggleButton label="Top" labelPlacement="top" />);
        expect(top.querySelector('.vtx-toggle-button-label--top')).toBeInTheDocument();

        const { container: bottom } = render(<ToggleButton label="Bottom" labelPlacement="bottom" />);
        expect(bottom.querySelector('.vtx-toggle-button-label--bottom')).toBeInTheDocument();
    });
  });

  describe('Checked State', () => {
    it('renders unchecked by default', () => {
      render(<ToggleButton />);
      const toggle = screen.getByRole('switch') as HTMLInputElement;
      expect(toggle.checked).toBe(false);
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    it('renders checked when checked prop is true', () => {
      render(<ToggleButton checked onChange={() => {}} />);
      const toggle = screen.getByRole('switch') as HTMLInputElement;
      expect(toggle.checked).toBe(true);
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('toggles checked state when clicked (uncontrolled)', () => {
      render(<ToggleButton />);
      const toggle = screen.getByRole('switch') as HTMLInputElement;

      expect(toggle.checked).toBe(false);
      fireEvent.click(toggle);
      expect(toggle.checked).toBe(true);
      fireEvent.click(toggle);
      expect(toggle.checked).toBe(false);
    });

    it('calls onChange callback when clicked', () => {
      const handleChange = jest.fn();
      render(<ToggleButton onChange={handleChange} />);
      const toggle = screen.getByRole('switch');

      fireEvent.click(toggle);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ checked: true }),
        })
      );
    });

    it('works in controlled mode', () => {
      const handleChange = jest.fn();
      const { rerender } = render(<ToggleButton checked={false} onChange={handleChange} />);
      const toggle = screen.getByRole('switch') as HTMLInputElement;

      expect(toggle.checked).toBe(false);

      fireEvent.click(toggle);
      expect(handleChange).toHaveBeenCalled();

      // Simulate parent updating the checked prop
      rerender(<ToggleButton checked={true} onChange={handleChange} />);
      expect(toggle.checked).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('disables the toggle button when disabled is true', () => {
      render(<ToggleButton disabled />);
      const toggle = screen.getByRole('switch') as HTMLInputElement;
      expect(toggle.disabled).toBe(true);
    });

    it('applies disabled class', () => {
      const { container } = render(<ToggleButton disabled />);
      const wrapper = container.querySelector('.vtx-toggle-button');
      expect(wrapper).toHaveClass('vtx-toggle-button--disabled');
    });
  });

  describe('Error State', () => {
    it('applies error class when error is true', () => {
      const { container } = render(<ToggleButton error />);
      const wrapper = container.querySelector('.vtx-toggle-button');
      expect(wrapper).toHaveClass('vtx-toggle-button--error');
    });

    it('renders error state with helper text', () => {
      render(<ToggleButton error helperText="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  describe('Label Interaction', () => {
    it('toggles switch when label is clicked', () => {
      render(<ToggleButton label="Click me" />);
      const toggle = screen.getByRole('switch') as HTMLInputElement;
      const label = screen.getByText('Click me');

      expect(toggle.checked).toBe(false);
      fireEvent.click(label);
      expect(toggle.checked).toBe(true);
    });
  });

  describe('Icons', () => {
      it('renders icon when provided', () => {
          render(<ToggleButton icon={<span data-testid="icon">icon</span>} />);
          expect(screen.getByTestId('icon')).toBeInTheDocument();
      });

      it('renders checkedIcon when checked', () => {
          render(
              <ToggleButton
                  checked
                  onChange={() => {}}
                  icon={<span data-testid="unchecked-icon">unchecked</span>}
                  checkedIcon={<span data-testid="checked-icon">checked</span>}
              />
          );
          expect(screen.getByTestId('checked-icon')).toBeInTheDocument();
          expect(screen.queryByTestId('unchecked-icon')).not.toBeInTheDocument();
      });

      it('renders icon when checked but no checkedIcon provided', () => {
        render(
            <ToggleButton
                checked
                onChange={() => {}}
                icon={<span data-testid="icon">icon</span>}
            />
        );
        expect(screen.getByTestId('icon')).toBeInTheDocument();
      });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<ToggleButton />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('has accessible name when label is provided', () => {
      render(<ToggleButton label="Enable Feature" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAccessibleName('Enable Feature');
    });

    it('supports aria-label', () => {
      render(<ToggleButton aria-label="Custom toggle" />);
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAccessibleName('Custom toggle');
    });

    it('can be focused with keyboard', () => {
      render(<ToggleButton />);
      const toggle = screen.getByRole('switch');
      toggle.focus();
      expect(toggle).toHaveFocus();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<ToggleButton ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe('checkbox');
    });
  });
});
