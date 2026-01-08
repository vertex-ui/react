import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '../../components/Rating';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 4,
  },
};

export const WithValue: Story = {
  args: {
    value: 4.5,
    showValue: true,
  },
};

export const HalfStars: Story = {
  args: {
    value: 3.5,
    allowHalf: true,
    showValue: true,
  },
};

export const Selectable: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Rating value={rating} selectable onChange={setRating} showValue size="lg" />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Click to rate: {rating} / 5
        </div>
      </div>
    );
  },
};

export const SelectableHalfStars: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Rating value={rating} selectable allowHalf onChange={setRating} showValue size="lg" />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Click to rate (half stars): {rating.toFixed(1)} / 5
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Small</div>
        <Rating value={4} size="sm" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Medium</div>
        <Rating value={4} size="md" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Large</div>
        <Rating value={4} size="lg" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Extra Large</div>
        <Rating value={4} size="xl" showValue />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Primary</div>
        <Rating value={4} color="primary" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Secondary</div>
        <Rating value={4} color="secondary" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Success</div>
        <Rating value={4} color="success" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Warning (default)</div>
        <Rating value={4} color="warning" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Error</div>
        <Rating value={4} color="error" showValue />
      </div>
      <div>
        <div style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>Neutral</div>
        <Rating value={4} color="neutral" showValue />
      </div>
    </div>
  ),
};

export const ReadOnly: Story = {
  args: {
    value: 4.5,
    selectable: true,
    readOnly: true,
    showValue: true,
  },
};

export const CustomValueFormat: Story = {
  args: {
    value: 4.5,
    showValue: true,
    valueFormat: (value) => `${value}/5 stars`,
  },
};

export const InProductReview: Story = {
  render: () => (
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', maxWidth: '400px' }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>Customer Reviews</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Rating value={5} size="sm" showValue color="warning" />
          <div style={{ flex: 1, height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '70%', background: '#f59e0b' }} />
          </div>
          <span style={{ fontSize: '14px', color: '#666' }}>70%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Rating value={4} size="sm" showValue color="warning" />
          <div style={{ flex: 1, height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '20%', background: '#f59e0b' }} />
          </div>
          <span style={{ fontSize: '14px', color: '#666' }}>20%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Rating value={3} size="sm" showValue color="warning" />
          <div style={{ flex: 1, height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '5%', background: '#f59e0b' }} />
          </div>
          <span style={{ fontSize: '14px', color: '#666' }}>5%</span>
        </div>
      </div>
    </div>
  ),
};

export const ProductRatingExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', width: '200px' }}>
        <img src="https://via.placeholder.com/150" alt="Product" style={{ width: '100%', borderRadius: '4px' }} />
        <h4 style={{ margin: '12px 0 8px 0', fontSize: '16px' }}>Product Name</h4>
        <Rating value={4.5} allowHalf showValue size="sm" />
        <div style={{ marginTop: '12px', fontSize: '18px', fontWeight: 'bold' }}>$29.99</div>
      </div>
      <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', width: '200px' }}>
        <img src="https://via.placeholder.com/150" alt="Product" style={{ width: '100%', borderRadius: '4px' }} />
        <h4 style={{ margin: '12px 0 8px 0', fontSize: '16px' }}>Another Product</h4>
        <Rating value={3.5} allowHalf showValue size="sm" />
        <div style={{ marginTop: '12px', fontSize: '18px', fontWeight: 'bold' }}>$49.99</div>
      </div>
    </div>
  ),
};
