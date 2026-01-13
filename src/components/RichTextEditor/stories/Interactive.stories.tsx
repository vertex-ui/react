import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from '..';
import { useState } from 'react';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    minHeight: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Content"
        placeholder="Start writing your content..."
        value={content}
        onChange={(html) => setContent(html)}
      />
    );
  },
};
