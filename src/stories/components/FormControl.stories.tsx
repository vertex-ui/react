"use client";

import type { Meta, StoryObj } from '@storybook/react';
import { FormControl } from '../../components/FormControl';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { RichTextEditor } from '../../components/RichTextEditor';
import { Checkbox } from '../../components/Checkbox';
import { RadioGroup } from '../../components/RadioGroup';
import { useState } from 'react';

const meta: Meta<typeof FormControl> = {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'left'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic form control with input
 */
export const WithInput: Story = {
  render: () => (
    <FormControl label="Email Address" helperText="We'll never share your email">
      <Input type="email" placeholder="you@example.com" />
    </FormControl>
  ),
};

/**
 * Form control with textarea
 */
export const WithTextarea: Story = {
  render: () => (
    <FormControl label="Description" helperText="Provide a detailed description">
      <Textarea placeholder="Enter your description..." minRows={4} />
    </FormControl>
  ),
};

/**
 * Form control with select
 */
export const WithSelect: Story = {
  render: () => (
    <FormControl label="Country" helperText="Select your country">
      <Select
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
          { value: 'au', label: 'Australia' },
        ]}
        placeholder="Select a country"
      />
    </FormControl>
  ),
};

/**
 * Form control with rich text editor
 */
export const WithRichTextEditor: Story = {
  render: () => {
    const [content, setContent] = useState('');
    return (
      <FormControl
        label="Article Content"
        helperText="Write your article using the formatting tools"
      >
        <RichTextEditor
          placeholder="Start writing..."
          value={content}
          onChange={(html) => setContent(html)}
          minHeight={300}
        />
      </FormControl>
    );
  },
};

/**
 * Required field with error
 */
export const WithError: Story = {
  render: () => (
    <FormControl label="Password" error="Password must be at least 8 characters" required>
      <Input type="password" placeholder="Enter password" />
    </FormControl>
  ),
};

/**
 * Field with success message
 */
export const WithSuccess: Story = {
  render: () => (
    <FormControl label="Username" success="Username is available!" required>
      <Input placeholder="Enter username" defaultValue="john_doe" />
    </FormControl>
  ),
};

/**
 * Disabled form control
 */
export const Disabled: Story = {
  render: () => (
    <FormControl label="Read-only Field" helperText="This field cannot be edited" disabled>
      <Input placeholder="Cannot edit" defaultValue="Disabled value" />
    </FormControl>
  ),
};

/**
 * Different spacing options
 */
export const SpacingVariants: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h3 style={{ marginBottom: '16px' }}>Default Spacing (md)</h3>
      <FormControl label="Field 1">
        <Input placeholder="Default spacing" />
      </FormControl>
      <FormControl label="Field 2">
        <Input placeholder="Default spacing" />
      </FormControl>

      <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Small Spacing</h3>
      <FormControl label="Field 1" spacing="sm">
        <Input placeholder="Small spacing" />
      </FormControl>
      <FormControl label="Field 2" spacing="sm">
        <Input placeholder="Small spacing" />
      </FormControl>

      <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Large Spacing</h3>
      <FormControl label="Field 1" spacing="lg">
        <Input placeholder="Large spacing" />
      </FormControl>
      <FormControl label="Field 2" spacing="lg">
        <Input placeholder="Large spacing" />
      </FormControl>
    </div>
  ),
};

/**
 * Horizontal label layout
 */
export const HorizontalLabel: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <FormControl label="Email" labelPosition="left">
        <Input type="email" placeholder="you@example.com" />
      </FormControl>

      <FormControl label="Password" labelPosition="left">
        <Input type="password" placeholder="Enter password" />
      </FormControl>

      <FormControl label="Country" labelPosition="left">
        <Select
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
          ]}
          placeholder="Select"
        />
      </FormControl>

      <FormControl label="Bio" labelPosition="left">
        <Textarea placeholder="About you..." minRows={3} />
      </FormControl>
    </div>
  ),
};

/**
 * Size variants
 */
export const SizeVariants: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <FormControl label="Small Size" size="sm">
        <Input placeholder="Small input" />
      </FormControl>

      <FormControl label="Medium Size" size="md">
        <Input placeholder="Medium input (default)" />
      </FormControl>

      <FormControl label="Large Size" size="lg">
        <Input placeholder="Large input" />
      </FormControl>
    </div>
  ),
};

/**
 * Contact form with mixed inputs
 */
export const ContactForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      priority: 'normal',
      message: '',
    });

    return (
      <form style={{ width: '600px' }}>
        <FormControl label="Your Name" required>
          <Input
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormControl>

        <FormControl label="Email Address" required>
          <Input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormControl>

        <FormControl label="Subject" required>
          <Input
            placeholder="What is this about?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </FormControl>

        <FormControl label="Priority">
          <RadioGroup
            name="priority"
            options={[
              { value: 'low', label: 'Low' },
              { value: 'normal', label: 'Normal' },
              { value: 'high', label: 'High' },
            ]}
            value={formData.priority}
            onChange={(value) => setFormData({ ...formData, priority: value })}
          />
        </FormControl>

        <FormControl label="Message" helperText="Describe your inquiry in detail" required>
          <Textarea
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            minRows={5}
          />
        </FormControl>

        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </div>
      </form>
    );
  },
};

/**
 * Form with validation states
 */
export const ValidationStates: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <FormControl label="Valid Email" success="Email is available" required>
        <Input type="email" defaultValue="john@example.com" />
      </FormControl>

      <FormControl label="Invalid Password" error="Password is too short" required>
        <Input type="password" defaultValue="123" />
      </FormControl>

      <FormControl label="Pending Verification" helperText="We'll send a verification code" required>
        <Input type="tel" placeholder="+1 (555) 000-0000" />
      </FormControl>

      <FormControl label="Disabled Field" disabled>
        <Input defaultValue="Cannot be edited" />
      </FormControl>
    </div>
  ),
};

/**
 * Complex form with all features
 */
export const CompleteExample: Story = {
  render: () => {
    const [formState, setFormState] = useState({
      title: '',
      category: '',
      content: '',
      tags: '',
      publish: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formState.title) newErrors.title = 'Title is required';
      if (!formState.category) newErrors.category = 'Please select a category';
      if (!formState.content) newErrors.content = 'Content cannot be empty';
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Article saved!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ width: '700px' }}>
        <h2 style={{ marginBottom: '24px' }}>Create New Article</h2>

        <FormControl label="Article Title" error={errors.title} required>
          <Input
            placeholder="Enter a compelling title..."
            value={formState.title}
            onChange={(e) => setFormState({ ...formState, title: e.target.value })}
          />
        </FormControl>

        <FormControl label="Category" error={errors.category} required>
          <Select
            options={[
              { value: 'tech', label: 'Technology' },
              { value: 'design', label: 'Design' },
              { value: 'business', label: 'Business' },
              { value: 'lifestyle', label: 'Lifestyle' },
            ]}
            placeholder="Select a category"
            value={formState.category}
            onChange={(e) => setFormState({ ...formState, category: e.target.value })}
          />
        </FormControl>

        <FormControl
          label="Content"
          error={errors.content}
          helperText="Write your article content with formatting"
          required
        >
          <RichTextEditor
            placeholder="Start writing your article..."
            value={formState.content}
            onChange={(html) => setFormState({ ...formState, content: html })}
            minHeight={300}
            maxLength={5000}
            showCount
          />
        </FormControl>

        <FormControl label="Tags" helperText="Comma-separated tags (e.g., react, typescript, tutorial)">
          <Input
            placeholder="tag1, tag2, tag3"
            value={formState.tags}
            onChange={(e) => setFormState({ ...formState, tags: e.target.value })}
          />
        </FormControl>

        <FormControl spacing="sm">
          <Checkbox
            checked={formState.publish}
            onChange={(e) => setFormState({ ...formState, publish: e.target.checked })}
            label="Publish immediately"
          />
        </FormControl>

        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <Button variant="primary" type="submit">
            Save Article
          </Button>
          <Button variant="outline" type="button">
            Save as Draft
          </Button>
          <Button variant="ghost" type="button">
            Cancel
          </Button>
        </div>
      </form>
    );
  },
};
