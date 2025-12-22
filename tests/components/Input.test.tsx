import React from 'react';
import { render, screen } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Input } from '../../src/components/Input';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  describe('Rendering', () => {
    it('renders input field', () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Input label="Email" />);
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      render(<Input helperText="This is helpful" />);
      expect(screen.getByText('This is helpful')).toBeInTheDocument();
    });

    it('renders with error message', () => {
      render(<Input error="This field is required" />);
      const errorMessage = screen.getByText('This field is required');
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveAttribute('role', 'alert');
    });

    it('shows required indicator', () => {
      render(<Input label="Name" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Input size="small" />);
      expect(screen.getByRole('textbox').parentElement).toHaveClass('vtx-input-container--small');

      rerender(<Input size="large" />);
      expect(screen.getByRole('textbox').parentElement).toHaveClass('vtx-input-container--large');
    });

    it('applies custom labelClassName', () => {
      render(<Input label="Custom Label" labelClassName="custom-label-class" />);
      const label = screen.getByText('Custom Label');
      expect(label).toHaveClass('vtx-input-label');
      expect(label).toHaveClass('custom-label-class');
    });

    it('applies custom inputClassName', () => {
      render(<Input inputClassName="custom-input-class" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('vtx-input');
      expect(input).toHaveClass('custom-input-class');
    });
  });

  describe('Interactions', () => {
    it('accepts user input', async () => {
      const user = userEvent.setup();
      render(<Input placeholder="Type here" />);

      const input = screen.getByPlaceholderText('Type here');
      await user.type(input, 'Hello World');
      expect(input).toHaveValue('Hello World');
    });

    it('calls onChange handler', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      render(<Input onChange={handleChange} />);

      await user.type(screen.getByRole('textbox'), 'a');
      expect(handleChange).toHaveBeenCalled();
    });

    it('cannot be edited when disabled', async () => {
      const user = userEvent.setup();
      render(<Input disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
      await user.type(input, 'test');
      expect(input).toHaveValue('');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Input label="Accessible Input" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('associates label with input', () => {
      render(<Input label="Username" id="username-input" />);
      const input = screen.getByLabelText('Username');
      expect(input).toHaveAttribute('id', 'username-input');
    });

    it('associates helper text with input via aria-describedby', () => {
      render(<Input label="Email" helperText="Enter your email" />);
      const input = screen.getByLabelText('Email');
      const helperId = input.getAttribute('aria-describedby');
      expect(helperId).toBeTruthy();
      expect(screen.getByText('Enter your email')).toHaveAttribute('id', helperId);
    });

    it('marks input as invalid when error is present', () => {
      render(<Input error="Invalid input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });
  });
});
