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
    label: 'Upload File',
    helperText: 'Max file size: 5MB',
  },
};

export const WithError: Story = {
  args: {
    label: 'Upload File',
    error: 'File too large',
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
