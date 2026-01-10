import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../../components/FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    onUpload: { action: 'uploaded' },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: 'Upload Documents',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Upload Report',
    helperText: 'PDF, DOCX up to 5MB',
  },
};

export const WithError: Story = {
  args: {
    label: 'Upload Avatar',
    error: 'File size exceeds limit',
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload Images',
    helperText: 'Select multiple images',
    accept: 'image/*',
    multiple: true,
  },
};
