import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/Textarea';
import { useState } from 'react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    minRows: {
      control: { type: 'number' },
    },
    maxRows: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
    helperText: 'Provide a detailed description',
  },
};

export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Bio"
        placeholder="Tell us about yourself..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={150}
        showCount
        helperText="Share a brief bio"
      />
    );
  },
};

export const WithError: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Enter your comment',
    error: 'Comment must be at least 20 characters',
    defaultValue: 'Too short',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Enter your feedback',
    success: 'Feedback looks good!',
    defaultValue: 'This is a great product with excellent features.',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    helperText: 'This field cannot be empty',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This textarea is disabled',
    disabled: true,
    defaultValue: 'This content cannot be edited',
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState('This text can be cleared with the button');
    return (
      <Textarea
        label="Notes"
        placeholder="Enter your notes..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        clearable
        helperText="Click the × button to clear"
      />
    );
  },
};

export const AutoResize: Story = {
  render: () => {
    const [value, setValue] = useState('Start typing and watch the textarea grow automatically...');
    return (
      <Textarea
        label="Auto-resizing Textarea"
        placeholder="Type to see auto-resize in action"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoResize
        minRows={3}
        maxRows={10}
        helperText="This textarea will grow as you type"
      />
    );
  },
};

export const WithMaxLength: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Short Message"
        placeholder="Keep it brief..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={200}
        showCount
        helperText="Maximum 200 characters"
      />
    );
  },
};

export const LongForm: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        label="Article Content"
        placeholder="Write your article here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={5000}
        showCount
        minRows={8}
        helperText="Write a comprehensive article"
        clearable
        onClear={() => setValue('')}
      />
    );
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Textarea',
    placeholder: 'Small size',
    size: 'sm',
    minRows: 2,
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Medium Textarea',
    placeholder: 'Medium size (default)',
    size: 'md',
    minRows: 3,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Textarea',
    placeholder: 'Large size',
    size: 'lg',
    minRows: 4,
  },
};

export const InlineVariant: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <Textarea
          label="Inline Textarea"
          placeholder="This is inline..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth={false}
          minRows={3}
          helperText="Set fullWidth={false} for inline"
        />
        <Textarea
          label="Another Inline"
          placeholder="Also inline..."
          fullWidth={false}
          minRows={3}
        />
      </div>
    );
  },
};

export const CompleteExample: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      if (newValue.length > 0 && newValue.length < 10) {
        setError('Comment must be at least 10 characters');
      } else {
        setError('');
      }
    };

    return (
      <Textarea
        label="Product Review"
        placeholder="Share your thoughts about this product..."
        value={value}
        onChange={handleChange}
        maxLength={500}
        showCount
        clearable
        onClear={() => {
          setValue('');
          setError('');
        }}
        required
        error={error}
        helperText={!error ? 'Tell us what you think (min 10 characters)' : undefined}
        autoResize
        minRows={4}
        maxRows={12}
      />
    );
  },
};
