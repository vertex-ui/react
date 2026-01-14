import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '../../tests/test-utils';
import { FileUpload } from '../../src/components/FileUpload';

// Mock URL.createObjectURL and URL.revokeObjectURL
global.URL.createObjectURL = jest.fn(() => 'mock-url');
global.URL.revokeObjectURL = jest.fn();

describe('FileUpload', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders correctly with label', () => {
    render(<FileUpload label="Upload Files" />);
    expect(screen.getByText('Upload Files')).toBeInTheDocument();
    expect(screen.getByText('Click to upload')).toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(<FileUpload helperText="Max size 5MB" />);
    expect(screen.getByText('Max size 5MB')).toBeInTheDocument();
  });

  it('renders error message when provided', () => {
    render(<FileUpload error="File too large" />);
    expect(screen.getByText('File too large')).toBeInTheDocument();
  });

  it('handles file selection via input', async () => {
    const onUpload = jest.fn();
    render(<FileUpload onUpload={onUpload} label="Upload Files" />);

    const input = screen.getByLabelText('Upload Files');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    Object.defineProperty(input, 'files', {
      value: [file]
    });

    fireEvent.change(input);

    await waitFor(() => {
      expect(screen.getByText('hello.png')).toBeInTheDocument();
    });

    expect(onUpload).toHaveBeenCalled();
  });

  it('validates file size', async () => {
    render(<FileUpload maxSize={10} label="Upload Files" />); // 10 bytes max

    const input = screen.getByLabelText('Upload Files');
    const file = new File(['this string is definitely longer than 10 bytes'], 'large.txt', { type: 'text/plain' });

    Object.defineProperty(input, 'files', {
      value: [file]
    });

    fireEvent.change(input);

    await waitFor(() => {
      expect(screen.getByText(/File size exceeds/)).toBeInTheDocument();
    });
  });

  it('removes file when remove button is clicked', async () => {
    const onRemove = jest.fn();
    render(<FileUpload onRemove={onRemove} label="Upload Files" />);

    const input = screen.getByLabelText('Upload Files');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    Object.defineProperty(input, 'files', {
      value: [file]
    });

    fireEvent.change(input);

    await waitFor(() => {
      expect(screen.getByText('hello.png')).toBeInTheDocument();
    });

    const removeBtn = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeBtn);

    await waitFor(() => {
      expect(screen.queryByText('hello.png')).not.toBeInTheDocument();
    });

    expect(onRemove).toHaveBeenCalled();
  });

  it('handles multiple files', async () => {
    render(<FileUpload multiple label="Upload Files" />);

    const input = screen.getByLabelText('Upload Files');
    const file1 = new File(['hello'], 'hello.png', { type: 'image/png' });
    const file2 = new File(['world'], 'world.txt', { type: 'text/plain' });

    Object.defineProperty(input, 'files', {
      value: [file1, file2]
    });

    fireEvent.change(input);

    await waitFor(() => {
      expect(screen.getByText('hello.png')).toBeInTheDocument();
      expect(screen.getByText('world.txt')).toBeInTheDocument();
    });
  });

  it('uses custom icon when provided', async () => {
    const CustomIcon = () => <div data-testid="custom-icon">Icon</div>;
    render(<FileUpload customIcons={{ 'custom': <CustomIcon /> }} label="Upload Files" />);

    const input = screen.getByLabelText('Upload Files');
    const file = new File(['hello'], 'test.custom', { type: 'application/custom' });

    Object.defineProperty(input, 'files', {
      value: [file]
    });

    fireEvent.change(input);

    await waitFor(() => {
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  it('handles drag and drop', async () => {
    const onUpload = jest.fn();
    const { container } = render(<FileUpload onUpload={onUpload} label="Upload Files" />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const dropzone = container.querySelector('.vtx-fileupload-dropzone') as HTMLElement;

    // Test Drag Over
    fireEvent.dragOver(dropzone);
    expect(dropzone).toHaveClass('vtx-fileupload-dropzone--active');

    // Test Drag Leave
    fireEvent.dragLeave(dropzone);
    expect(dropzone).not.toHaveClass('vtx-fileupload-dropzone--active');

    // Test Drop
    const file = new File(['content'], 'dropped.txt', { type: 'text/plain' });

    fireEvent.drop(dropzone, {
      dataTransfer: {
        files: [file]
      }
    });

    await waitFor(() => {
      expect(screen.getByText('dropped.txt')).toBeInTheDocument();
    });

    expect(onUpload).toHaveBeenCalled();
  });

  it('simulates upload progress', async () => {
    const { container } = render(<FileUpload label="Upload Files" />);

    const input = screen.getByLabelText('Upload Files');
    const file = new File(['content'], 'progress.txt', { type: 'text/plain' });

    Object.defineProperty(input, 'files', {
      value: [file]
    });

    fireEvent.change(input);

    // Initial state
    await waitFor(() => {
      expect(screen.getByText('progress.txt')).toBeInTheDocument();
    });

    // Progress starts
    await act(async () => {
      jest.advanceTimersByTime(200);
    });

    // We can check if progress bar exists or styles change, but specifically we want to see it complete eventually
    await act(async () => {
      jest.advanceTimersByTime(3000); // Advance enough time for 100%
    });

    await waitFor(() => {
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const fileItem = screen.getByText('progress.txt').closest('.vtx-fileupload-item');
        expect(fileItem).toBeInTheDocument();

        // Look for success indicator inside the file item.
        // Maybe an SVG?
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const svg = fileItem?.querySelector('svg');
        expect(svg).toBeInTheDocument();

        // Or check if progress bar is gone?
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const progressBar = fileItem?.querySelector('progress');
        expect(progressBar).not.toBeInTheDocument();
    });
  });
});
