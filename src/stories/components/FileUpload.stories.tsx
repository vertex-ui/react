import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../../components/FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onUpload: { action: 'uploaded' },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Upload Documents',
    placeholder: 'Click to upload or drag and drop',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Upload Report',
    helperText: 'PDF, DOCX up to 5MB',
    placeholder: 'Select a file',
  },
};

export const WithError: Story = {
  args: {
    label: 'Upload Avatar',
    error: 'File size exceeds limit',
    placeholder: 'Select an image',
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload Gallery',
    multiple: true,
    helperText: 'Select multiple images',
    accept: 'image/*',
  },
};

export const AcceptImages: Story = {
  args: {
    label: 'Profile Picture',
    accept: 'image/*',
    helperText: 'Only image files are allowed',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read Only',
    disabled: true,
    helperText: 'Uploads are currently disabled',
  },
};
