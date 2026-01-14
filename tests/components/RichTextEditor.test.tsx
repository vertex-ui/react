import React from 'react';
import { render, screen, fireEvent, waitFor } from '../test-utils';
import userEvent from '@testing-library/user-event';
import { RichTextEditor } from '../../src/components/RichTextEditor/RichTextEditor';

describe('RichTextEditor', () => {
  beforeEach(() => {
    // Mock document.execCommand
    document.execCommand = jest.fn();
    // Mock window.prompt
    window.prompt = jest.fn();
  });

  describe('Rendering', () => {
    it('renders editor area', () => {
      render(<RichTextEditor />);
      const editor = screen.getByRole('textbox');
      expect(editor).toBeInTheDocument();
      expect(editor).toHaveAttribute('contenteditable', 'true');
    });

    it('renders toolbar with default buttons', () => {
      render(<RichTextEditor />);
      expect(screen.getByRole('toolbar')).toBeInTheDocument();
      expect(screen.getByLabelText('Bold')).toBeInTheDocument();
      expect(screen.getByLabelText('Italic')).toBeInTheDocument();
      // Using exact names from implementation to avoid regex issues with "list" vs "List"
      expect(screen.getByLabelText('Ordered List')).toBeInTheDocument();
    });

    it('renders label and helper text', () => {
      render(<RichTextEditor label="Description" helperText="Enter details" />);
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Enter details')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
      render(<RichTextEditor placeholder="Type here..." />);
      const editor = screen.getByRole('textbox');
      expect(editor).toHaveAttribute('data-placeholder', 'Type here...');
    });

    it('accepts initial value (defaultValue)', () => {
      render(<RichTextEditor defaultValue="<p>Initial Content</p>" />);
      expect(screen.getByText('Initial Content')).toBeInTheDocument();
    });

    it('accepts controlled value', () => {
      render(<RichTextEditor value="<p>Controlled Content</p>" />);
      expect(screen.getByText('Controlled Content')).toBeInTheDocument();
    });

    it('renders error state', () => {
      render(<RichTextEditor error="Field required" />);
      expect(screen.getByText('Field required')).toBeInTheDocument();
      const container = screen.getByRole('textbox').closest('.vtx-richtext-container');
      expect(container).toHaveClass('vtx-richtext-container--error');
    });

    it('renders success state', () => {
      render(<RichTextEditor success="Looks good" />);
      expect(screen.getByText('Looks good')).toBeInTheDocument();
      const container = screen.getByRole('textbox').closest('.vtx-richtext-container');
      expect(container).toHaveClass('vtx-richtext-container--success');
    });

    it('hides toolbar when hideToolbar is true', () => {
      render(<RichTextEditor hideToolbar />);
      expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('executes formatting commands', async () => {
      const user = userEvent.setup();
      render(<RichTextEditor />);

      await user.click(screen.getByLabelText('Bold'));
      expect(document.execCommand).toHaveBeenCalledWith('bold', false, undefined);

      await user.click(screen.getByLabelText('Italic'));
      expect(document.execCommand).toHaveBeenCalledWith('italic', false, undefined);
    });

    it('handles link insertion', async () => {
      const user = userEvent.setup();
      (window.prompt as jest.Mock).mockReturnValue('https://example.com');

      render(<RichTextEditor />);

      await user.click(screen.getByLabelText('Insert Link'));
      expect(window.prompt).toHaveBeenCalled();
      expect(document.execCommand).toHaveBeenCalledWith('createLink', false, 'https://example.com');
    });

    it('calls onChange when content is typed', () => {
      const handleChange = jest.fn();
      render(<RichTextEditor onChange={handleChange} />);
      const editor = screen.getByRole('textbox');

      // Manually set both HTML and innerText because JSDOM doesn't auto-derive innerText from HTML
      editor.innerHTML = '<p>New Text</p>';
      Object.defineProperty(editor, 'innerText', { value: 'New Text', configurable: true });

      fireEvent.input(editor);

      expect(handleChange).toHaveBeenCalledWith('<p>New Text</p>', 'New Text');
    });

    it('shows and clears content with clear button', async () => {
      const handleClear = jest.fn();
      const handleChange = jest.fn();
      render(<RichTextEditor clearable onClear={handleClear} onChange={handleChange} defaultValue="Content" />);

      // JSDOM rendering of defaultValue might not trigger state update for "currentLength" immediately, so clear button might not be visible.
      // We need to simulate typing or manually ensure length is set if relying on defaultValue.
      // But let's check if the button appears if we type.

      const editor = screen.getByRole('textbox');

      // Manually trigger input to update length state
      Object.defineProperty(editor, 'innerText', { value: 'Content', configurable: true });
      fireEvent.input(editor);

      const clearBtn = screen.getByLabelText('Clear all content');
      fireEvent.click(clearBtn);

      expect(handleClear).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledWith('', '');
      expect(editor.innerHTML).toBe('');
    });

    it('does not edit when disabled', async () => {
      const user = userEvent.setup();
      render(<RichTextEditor disabled />);
      const editor = screen.getByRole('textbox');

      expect(editor).toHaveAttribute('contenteditable', 'false');

      // Toolbar buttons should be disabled
      const boldBtn = screen.getByLabelText('Bold');
      expect(boldBtn).toBeDisabled();

      await user.click(boldBtn);
      expect(document.execCommand).not.toHaveBeenCalled();
    });
  });

  describe('Character Count', () => {
    it('shows character count', () => {
      render(<RichTextEditor showCount maxLength={100} defaultValue="Hello" />);
      // Default value might not trigger length update immediately in JSDOM or implementation nuances
      // But let's check if we can trigger it or if logic is correct
      // If it renders 0 / 100 initially, it means useEffect didn't run or innerText was empty
      const editor = screen.getByRole('textbox');
      // Force update
      fireEvent.input(editor);
      // If still 0, then JSDOM innerText issue.
      // JSDOM does not support innerText well.
      // We might need to mock innerText or use textContent.
      // Implementation uses innerText.

      // Since JSDOM doesn't support innerText fully, we can mock it on the element
      // But here we can't easily access ref before render.
      // However, we can set it after render.
      Object.defineProperty(editor, 'innerText', { value: 'Hello', configurable: true });
      fireEvent.input(editor);

      expect(screen.getByText('5 / 100')).toBeInTheDocument();
    });

    it('updates character count on input', () => {
      render(<RichTextEditor showCount maxLength={100} />);
      const editor = screen.getByRole('textbox');

      Object.defineProperty(editor, 'innerText', { value: 'Testing', configurable: true });
      fireEvent.input(editor);

      expect(screen.getByText('7 / 100')).toBeInTheDocument();
    });

    it('prevents input exceeding maxLength', () => {
      const handleChange = jest.fn();
      render(<RichTextEditor maxLength={5} onChange={handleChange} />);
      const editor = screen.getByRole('textbox');

      // Set initial content
      editor.innerText = '12345';
      editor.innerHTML = '12345';
      fireEvent.input(editor);
      expect(handleChange).toHaveBeenLastCalledWith('12345', '12345');

      // Try to exceed
      editor.innerText = '123456';
      editor.innerHTML = '123456';
      fireEvent.input(editor);

      // Should not trigger change with new content (implementation returns early)
      // Note: Implementation logic `if (maxLength && text.length > maxLength) return;` prevents `onChange` call but doesn't revert DOM in JSDOM unless controlled manually.
      // But we can check that onChange was NOT called for the overflow.
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
