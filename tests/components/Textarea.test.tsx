import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Textarea } from '../../src/components/Textarea/Textarea';

describe('Textarea', () => {
  it('renders correctly with label and placeholder', () => {
    render(
      <Textarea
        label="Test Label"
        placeholder="Test Placeholder"
        id="test-textarea"
      />
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} label="Test" />);

    const textarea = screen.getByLabelText('Test');
    fireEvent.change(textarea, { target: { value: 'New Value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue('New Value');
  });

  it('renders helper text', () => {
    render(<Textarea label="Test" helperText="Helper Text" />);
    expect(screen.getByText('Helper Text')).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(<Textarea label="Test" error="Error Message" />);
    const textarea = screen.getByLabelText('Test');

    expect(screen.getByText('Error Message')).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    // Using regex to match class name as it might have other classes
    expect(textarea.closest('.vtx-textarea-container')).toHaveClass('vtx-textarea-container--error');
  });

  it('renders success state', () => {
    render(<Textarea label="Test" success="Success Message" />);
    const textarea = screen.getByLabelText('Test');

    expect(screen.getByText('Success Message')).toBeInTheDocument();
    expect(textarea.closest('.vtx-textarea-container')).toHaveClass('vtx-textarea-container--success');
  });

  it('handles disabled state', () => {
    render(<Textarea label="Test" disabled />);
    const textarea = screen.getByLabelText('Test');
    expect(textarea).toBeDisabled();
    expect(textarea.closest('.vtx-textarea-container')).toHaveClass('vtx-textarea-container--disabled');
  });

  it('handles clearable functionality', () => {
    const handleClear = jest.fn();
    const handleChange = jest.fn();

    render(
      <Textarea
        label="Test"
        value="Some text"
        onChange={handleChange}
        clearable
        onClear={handleClear}
      />
    );

    const clearButton = screen.getByRole('button', { name: /clear textarea/i });
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it('displays character counter', () => {
    render(
      <Textarea
        label="Test"
        value="12345"
        maxLength={10}
        showCount
        onChange={() => {}}
      />
    );

    expect(screen.getByText('5 / 10')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea label="Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
