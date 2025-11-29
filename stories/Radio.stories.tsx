import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../src/components/Radio/Radio';
import { RadioGroup } from '../src/components/RadioGroup/RadioGroup';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radio component allows users to select a single option from a set. Supports variants, sizes, disabled, and error states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the radio is disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, displays error styling',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the radio',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The variant/color of the radio',
    },
    label: {
      control: 'text',
      description: 'The label for the radio',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the radio',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default radio with no label
 */
export const Default: Story = {
  args: {
    name: 'default',
  },
};

/**
 * Radio with label text
 */
export const WithLabel: Story = {
  args: {
    label: 'Option 1',
    name: 'with-label',
  },
};

/**
 * Radio in checked state
 */
export const Checked: Story = {
  args: {
    label: 'Selected',
    checked: true,
    readOnly: true,
    name: 'checked',
  },
};

/**
 * Disabled radio
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    name: 'disabled',
  },
};

/**
 * Disabled and checked radio
 */
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
    readOnly: true,
    name: 'disabled-checked',
  },
};

/**
 * Radio with error state
 */
export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
    helperText: 'Please select this option',
    name: 'error',
  },
};

/**
 * Radio with helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time',
    name: 'helper',
  },
};

/**
 * Small size radio
 */
export const SmallSize: Story = {
  args: {
    label: 'Small radio',
    size: 'small',
    name: 'small',
  },
};

/**
 * Medium size radio (default)
 */
export const MediumSize: Story = {
  args: {
    label: 'Medium radio',
    size: 'medium',
    name: 'medium',
  },
};

/**
 * Large size radio
 */
export const LargeSize: Story = {
  args: {
    label: 'Large radio',
    size: 'large',
    name: 'large',
  },
};

/**
 * All sizes comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio name="sizes" label="Small" size="small" />
      <Radio name="sizes" label="Medium (default)" size="medium" />
      <Radio name="sizes" label="Large" size="large" />
    </div>
  ),
};

/**
 * All variants
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio name="variants" label="Primary (default)" variant="primary" checked readOnly />
      <Radio name="variants" label="Secondary" variant="secondary" checked readOnly />
      <Radio name="variants" label="Success" variant="success" checked readOnly />
      <Radio name="variants" label="Error" variant="error" checked readOnly />
      <Radio name="variants" label="Warning" variant="warning" checked readOnly />
      <Radio name="variants" label="Info" variant="info" checked readOnly />
    </div>
  ),
};

/**
 * Controlled radio with state management
 */
export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio
          name="controlled"
          label="Option 1"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          name="controlled"
          label="Option 2"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          name="controlled"
          label="Option 3"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <strong>Selected:</strong> {selected}
        </div>
      </div>
    );
  },
};

/**
 * RadioGroup - Vertical layout (default)
 */
export const GroupVertical: Story = {
  render: () => (
    <RadioGroup
      name="plan"
      label="Choose your plan"
      options={[
        { value: 'basic', label: 'Basic - $9/month' },
        { value: 'pro', label: 'Pro - $29/month' },
        { value: 'enterprise', label: 'Enterprise - $99/month' },
      ]}
      defaultValue="basic"
    />
  ),
};

/**
 * RadioGroup - Horizontal layout
 */
export const GroupHorizontal: Story = {
  render: () => (
    <RadioGroup
      name="answer"
      label="Is this helpful?"
      options={[
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'maybe', label: 'Maybe' },
      ]}
      orientation="horizontal"
      defaultValue="yes"
    />
  ),
};

/**
 * RadioGroup - Controlled mode
 */
export const GroupControlled: Story = {
  render: () => {
    const [selected, setSelected] = useState('option2');

    return (
      <div>
        <RadioGroup
          name="controlled-group"
          label="Controlled radio group"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          value={selected}
          onChange={setSelected}
        />
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <strong>Selected value:</strong> {selected}
        </div>
      </div>
    );
  },
};

/**
 * RadioGroup - With disabled options
 */
export const GroupWithDisabledOptions: Story = {
  render: () => (
    <RadioGroup
      name="features"
      label="Select feature tier"
      options={[
        { value: 'basic', label: 'Basic features' },
        { value: 'advanced', label: 'Advanced features (Coming soon)', disabled: true },
        { value: 'premium', label: 'Premium features (Pro plan)', disabled: true },
      ]}
      helperText="Advanced and Premium require upgrade"
    />
  ),
};

/**
 * RadioGroup - Disabled state
 */
export const GroupDisabled: Story = {
  render: () => (
    <RadioGroup
      name="disabled-group"
      label="Options (disabled)"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      disabled
      defaultValue="option1"
    />
  ),
};

/**
 * RadioGroup - Error state
 */
export const GroupWithError: Story = {
  render: () => (
    <RadioGroup
      name="required"
      label="Select an option *"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      error
      helperText="Please select one option"
    />
  ),
};

/**
 * RadioGroup - Different sizes
 */
export const GroupSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <RadioGroup
        name="size-small"
        label="Small size"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        size="small"
      />
      <RadioGroup
        name="size-medium"
        label="Medium size (default)"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        size="medium"
      />
      <RadioGroup
        name="size-large"
        label="Large size"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        size="large"
      />
    </div>
  ),
};

/**
 * RadioGroup - Different variants
 */
export const GroupVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <RadioGroup
        name="variant-primary"
        label="Primary (default)"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        variant="primary"
        defaultValue="a"
      />
      <RadioGroup
        name="variant-success"
        label="Success"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        variant="success"
        defaultValue="a"
      />
      <RadioGroup
        name="variant-error"
        label="Error"
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        variant="error"
        defaultValue="a"
      />
    </div>
  ),
};

/**
 * Real-world example: Survey form
 */
export const SurveyForm: Story = {
  render: () => {
    const [satisfaction, setSatisfaction] = useState('');
    const [recommend, setRecommend] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!satisfaction || !recommend) {
        setShowErrors(true);
      } else {
        alert('Survey submitted successfully!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <h3 style={{ marginTop: 0 }}>Customer Satisfaction Survey</h3>

        <div style={{ marginBottom: '24px' }}>
          <RadioGroup
            name="satisfaction"
            label="How satisfied are you with our service? *"
            options={[
              { value: 'very-satisfied', label: 'Very satisfied' },
              { value: 'satisfied', label: 'Satisfied' },
              { value: 'neutral', label: 'Neutral' },
              { value: 'dissatisfied', label: 'Dissatisfied' },
              { value: 'very-dissatisfied', label: 'Very dissatisfied' },
            ]}
            value={satisfaction}
            onChange={setSatisfaction}
            error={showErrors && !satisfaction}
            helperText={showErrors && !satisfaction ? 'This field is required' : ''}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <RadioGroup
            name="recommend"
            label="Would you recommend us to a friend? *"
            options={[
              { value: 'definitely', label: 'Definitely' },
              { value: 'probably', label: 'Probably' },
              { value: 'not-sure', label: 'Not sure' },
              { value: 'probably-not', label: 'Probably not' },
              { value: 'definitely-not', label: 'Definitely not' },
            ]}
            value={recommend}
            onChange={setRecommend}
            error={showErrors && !recommend}
            helperText={showErrors && !recommend ? 'This field is required' : ''}
            variant="success"
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', width: '100%' }}>
          Submit Survey
        </button>
      </form>
    );
  },
};

/**
 * Real-world example: Payment method selection
 */
export const PaymentMethod: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
      <div
        style={{
          maxWidth: '400px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '24px',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Payment Method</h3>

        <RadioGroup
          name="payment"
          options={[
            { value: 'card', label: '💳 Credit or Debit Card' },
            { value: 'paypal', label: '🔵 PayPal' },
            { value: 'bank', label: '🏦 Bank Transfer' },
            { value: 'crypto', label: '₿ Cryptocurrency (Coming soon)', disabled: true },
          ]}
          value={paymentMethod}
          onChange={setPaymentMethod}
        />

        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <strong>Selected:</strong> {paymentMethod}
        </div>

        <button style={{ marginTop: '16px', padding: '12px', width: '100%', cursor: 'pointer' }}>
          Continue to Payment
        </button>
      </div>
    );
  },
};

/**
 * Real-world example: Quiz question
 */
export const QuizQuestion: Story = {
  render: () => {
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const correctAnswer = 'paris';

    const handleSubmit = () => {
      setSubmitted(true);
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <h3 style={{ marginTop: 0 }}>Question 1</h3>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>What is the capital of France?</p>

        <RadioGroup
          name="quiz"
          options={[
            { value: 'london', label: 'London' },
            { value: 'paris', label: 'Paris' },
            { value: 'berlin', label: 'Berlin' },
            { value: 'madrid', label: 'Madrid' },
          ]}
          value={answer}
          onChange={setAnswer}
          variant={submitted ? (answer === correctAnswer ? 'success' : 'error') : 'primary'}
          disabled={submitted}
        />

        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={!answer}
            style={{
              marginTop: '16px',
              padding: '10px 20px',
              cursor: answer ? 'pointer' : 'not-allowed',
            }}
          >
            Submit Answer
          </button>
        )}

        {submitted && (
          <div
            style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: answer === correctAnswer ? '#e8f5e9' : '#ffebee',
              color: answer === correctAnswer ? '#2e7d32' : '#c62828',
              borderRadius: '4px',
            }}
          >
            {answer === correctAnswer ? '✓ Correct!' : '✗ Incorrect. The correct answer is Paris.'}
          </div>
        )}
      </div>
    );
  },
};
