import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { RichTextEditor } from '../../src/components/RichTextEditor/RichTextEditor';

describe('RichTextEditor', () => {
  it('renders editor area', () => {
    render(<RichTextEditor />);
    // Might be contenteditable div or textarea
    // Try role textbox
    const editor = screen.getByRole('textbox');
    expect(editor).toBeInTheDocument();
  });

  it('renders toolbar', () => {
    render(<RichTextEditor />);
    // Check for buttons like Bold, Italic
    // If using icons, check aria-label
    expect(screen.getByLabelText(/bold/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/italic/i)).toBeInTheDocument();
  });

  it('accepts initial value', () => {
    render(<RichTextEditor defaultValue="<p>Hello World</p>" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
