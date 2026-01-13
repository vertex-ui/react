import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '..';

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

