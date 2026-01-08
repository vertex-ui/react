"use client";

import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from '../../components/RichTextEditor';
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

export const WithCharacterCount: Story = {
  render: () => {
    const [content, setContent] = useState('<p>This is some initial content with <strong>bold</strong> text.</p>');
    return (
      <RichTextEditor
        label="Article"
        placeholder="Write your article..."
        value={content}
        onChange={(html) => setContent(html)}
        maxLength={500}
        showCount
        helperText="Share your thoughts (max 500 characters)"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleChange = (html: string, text: string) => {
      setContent(html);
      if (text.length > 0 && text.length < 20) {
        setError('Content must be at least 20 characters');
      } else {
        setError('');
      }
    };

    return (
      <RichTextEditor
        label="Description"
        placeholder="Enter a description..."
        value={content}
        onChange={handleChange}
        error={error}
        required
      />
    );
  },
};

export const WithSuccess: Story = {
  render: () => {
    const [content, setContent] = useState('<p>This content meets all requirements.</p>');
    return (
      <RichTextEditor
        label="Bio"
        value={content}
        onChange={(html) => setContent(html)}
        success="Bio looks great!"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [content, setContent] = useState('<p>This content <strong>cannot</strong> be edited.</p>');
    return (
      <RichTextEditor
        label="Read-only Content"
        value={content}
        onChange={(html) => setContent(html)}
        disabled
        helperText="This field is disabled"
      />
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [content, setContent] = useState('<h2>Sample Content</h2><p>This is some text that can be cleared using the toolbar button.</p><ul><li>Item 1</li><li>Item 2</li></ul>');
    return (
      <RichTextEditor
        label="Notes"
        placeholder="Enter your notes..."
        value={content}
        onChange={(html) => setContent(html)}
        onClear={() => setContent('')}
        clearable
        helperText="Use the clear button in the toolbar to remove all content"
      />
    );
  },
};

export const WithCustomToolbar: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Simple Editor"
        placeholder="Write something..."
        value={content}
        onChange={(html) => setContent(html)}
        toolbarButtons={['bold', 'italic', 'underline', 'unorderedList', 'orderedList']}
        helperText="Limited formatting options"
      />
    );
  },
};

export const WithoutToolbar: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Plain Text Editor"
        placeholder="Enter plain text..."
        value={content}
        onChange={(html) => setContent(html)}
        hideToolbar
        helperText="No formatting toolbar"
      />
    );
  },
};

export const BlogPost: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Blog Post"
        placeholder="Write your blog post..."
        value={content}
        onChange={(html) => setContent(html)}
        maxLength={5000}
        showCount
        clearable
        onClear={() => setContent('')}
        minHeight={400}
        helperText="Create an engaging blog post"
      />
    );
  },
};

export const EmailComposer: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Email Body"
        placeholder="Compose your email..."
        value={content}
        onChange={(html) => setContent(html)}
        maxLength={2000}
        showCount
        toolbarButtons={[
          'bold',
          'italic',
          'underline',
          'unorderedList',
          'orderedList',
          'link',
          'alignLeft',
          'alignCenter',
          'alignRight',
        ]}
        minHeight={300}
        helperText="Compose your email message"
      />
    );
  },
};

export const CommentBox: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Add Comment"
        placeholder="Write your comment..."
        value={content}
        onChange={(html) => setContent(html)}
        maxLength={1000}
        showCount
        size="sm"
        minHeight={150}
        toolbarButtons={['bold', 'italic', 'link', 'code']}
        helperText="Share your thoughts"
      />
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Small Editor"
        placeholder="Small size..."
        value={content}
        onChange={(html) => setContent(html)}
        size="sm"
        minHeight={150}
      />
    );
  },
};

export const MediumSize: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Medium Editor"
        placeholder="Medium size (default)..."
        value={content}
        onChange={(html) => setContent(html)}
        size="md"
        minHeight={200}
      />
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <RichTextEditor
        label="Large Editor"
        placeholder="Large size..."
        value={content}
        onChange={(html) => setContent(html)}
        size="lg"
        minHeight={250}
      />
    );
  },
};

export const InlineVariant: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <RichTextEditor
          label="Inline Editor"
          placeholder="This is inline..."
          value={content}
          onChange={(html) => setContent(html)}
          fullWidth={false}
          minHeight={150}
          helperText="Set fullWidth={false}"
        />
        <RichTextEditor
          label="Also Inline"
          placeholder="Also inline..."
          fullWidth={false}
          minHeight={150}
        />
      </div>
    );
  },
};

export const CompleteExample: Story = {
  render: () => {
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleChange = (html: string, text: string) => {
      setContent(html);

      if (text.length === 0) {
        setError('Content is required');
      } else if (text.length < 50) {
        setError('Content must be at least 50 characters');
      } else {
        setError('');
      }
    };

    return (
      <RichTextEditor
        label="Article Content"
        placeholder="Write your article content here..."
        value={content}
        onChange={handleChange}
        maxLength={10000}
        showCount
        clearable
        onClear={() => {
          setContent('');
          setError('Content is required');
        }}
        required
        error={error}
        helperText={!error ? 'Write a comprehensive article (minimum 50 characters)' : undefined}
        minHeight={400}
      />
    );
  },
};

export const PrefilledContent: Story = {
  render: () => {
    const [content, setContent] = useState(`
      <h1>Welcome to the Rich Text Editor</h1>
      <p>This is a <strong>powerful</strong> and <em>flexible</em> rich text editor component.</p>
      <h2>Features</h2>
      <ul>
        <li>Text formatting (bold, italic, underline)</li>
        <li>Headings (H1, H2, H3)</li>
        <li>Lists (ordered and unordered)</li>
        <li>Links and code blocks</li>
        <li>Text alignment</li>
      </ul>
      <h3>Try it out!</h3>
      <p>Feel free to edit this content and explore all the formatting options.</p>
    `);
    return (
      <RichTextEditor
        label="Demo Content"
        value={content}
        onChange={(html) => setContent(html)}
        maxLength={5000}
        showCount
        clearable
        onClear={() => setContent('')}
        minHeight={350}
        helperText="Explore the rich text editor features"
      />
    );
  },
};
