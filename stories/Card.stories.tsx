import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card/Card';
import React from 'react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card component provides a flexible container for grouping related content with support for variants, custom padding, headers, footers, and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
      description: 'The visual style variant of the card',
    },
    noPadding: {
      control: 'boolean',
      description: 'If true, removes padding from the card content',
    },
    padding: {
      control: 'text',
      description: 'Custom padding value (overrides noPadding)',
    },
    hoverable: {
      control: 'boolean',
      description: 'If true, adds hover effects',
    },
    clickable: {
      control: 'boolean',
      description: 'If true, makes the card clickable with cursor pointer',
    },
    divider: {
      control: 'boolean',
      description: 'If true, adds dividers between header, content, and footer',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with standard padding
 */
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
        <p style={{ margin: 0 }}>This is a basic card with default settings.</p>
      </div>
    ),
  },
};

/**
 * Card without any padding - useful for images or custom layouts
 */
export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: (
      <div>
        <img
          src="https://via.placeholder.com/400x200/2196F3/ffffff?text=Full+Bleed+Image"
          alt="Full bleed"
          style={{ width: '100%', display: 'block' }}
        />
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Image Card</h3>
          <p style={{ margin: 0 }}>Card with no padding, perfect for full-bleed images.</p>
        </div>
      </div>
    ),
  },
};

/**
 * Card with custom padding value
 */
export const CustomPadding: Story = {
  args: {
    padding: '32px',
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Custom Padding</h3>
        <p style={{ margin: 0 }}>This card has 32px of padding instead of the default 16px.</p>
      </div>
    ),
  },
};

/**
 * All three visual variants
 */
export const Variants: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card variant="elevated" style={{ width: '250px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Elevated</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Default variant with shadow</p>
      </Card>
      <Card variant="outlined" style={{ width: '250px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Outlined</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Card with border and no shadow</p>
      </Card>
      <Card variant="filled" style={{ width: '250px' }}>
        <h4 style={{ margin: '0 0 8px 0' }}>Filled</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Card with background fill</p>
      </Card>
    </div>
  ),
};

/**
 * Card with header section
 */
export const WithHeader: Story = {
  args: {
    header: <h3 style={{ margin: 0 }}>Card Header</h3>,
    children: <p style={{ margin: 0 }}>Card content goes here.</p>,
  },
};

/**
 * Card with footer section
 */
export const WithFooter: Story = {
  args: {
    footer: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Action Button</button>,
    children: <p style={{ margin: 0 }}>Card content with a footer action.</p>,
  },
};

/**
 * Card with header, footer, and dividers
 */
export const WithHeaderFooterDivider: Story = {
  args: {
    header: <h3 style={{ margin: 0 }}>Card with Dividers</h3>,
    footer: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ padding: '6px 12px', cursor: 'pointer' }}>Cancel</button>
        <button
          style={{
            padding: '6px 12px',
            cursor: 'pointer',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Save
        </button>
      </div>
    ),
    divider: true,
    children: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>Header and footer are separated by dividers.</p>
        <p style={{ margin: 0 }}>This creates clear visual sections.</p>
      </div>
    ),
  },
};

/**
 * Interactive hoverable card
 */
export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Hover Over Me</h3>
        <p style={{ margin: 0 }}>This card has hover effects.</p>
      </div>
    ),
  },
};

/**
 * Clickable card with hover effects
 */
export const Clickable: Story = {
  args: {
    clickable: true,
    hoverable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Click Me</h3>
        <p style={{ margin: 0 }}>This card is clickable and shows visual feedback.</p>
      </div>
    ),
  },
};

/**
 * Product card example
 */
export const ProductCard: Story = {
  args: { children: null },
  render: () => (
    <Card noPadding hoverable clickable style={{ width: '280px' }}>
      <img
        src="https://via.placeholder.com/280x200/4CAF50/ffffff?text=Product+Image"
        alt="Product"
        style={{ width: '100%', display: 'block' }}
      />
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Product Name</h3>
        <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '14px' }}>
          Short product description that highlights key features.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2196F3' }}>$99.99</span>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  ),
};

/**
 * Profile card example
 */
export const ProfileCard: Story = {
  args: { children: null },
  render: () => (
    <Card variant="outlined" style={{ width: '300px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#2196F3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          JD
        </div>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>John Doe</h3>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Software Engineer</p>
        </div>
      </div>
      <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
        Passionate about building great user experiences and writing clean code.
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Follow
        </button>
        <button
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: 'white',
            color: '#2196F3',
            border: '1px solid #2196F3',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Message
        </button>
      </div>
    </Card>
  ),
};

/**
 * Dashboard stat card
 */
export const StatCard: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {[
        { label: 'Total Users', value: '1,234', change: '+12%', color: '#4CAF50' },
        { label: 'Revenue', value: '$56.2K', change: '+8%', color: '#2196F3' },
        { label: 'Orders', value: '892', change: '-3%', color: '#F44336' },
        { label: 'Conversion', value: '3.2%', change: '+0.5%', color: '#FF9800' },
      ].map((stat) => (
        <Card key={stat.label} variant="filled" hoverable style={{ width: '180px' }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>{stat.label}</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px' }}>
            {stat.value}
          </div>
          <div style={{ fontSize: '14px', color: stat.color, fontWeight: '500' }}>
            {stat.change}
          </div>
        </Card>
      ))}
    </div>
  ),
};

/**
 * Card with form content
 */
export const FormCard: Story = {
  args: { children: null },
  render: () => (
    <Card
      header={<h3 style={{ margin: 0 }}>Login</h3>}
      footer={
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Sign In
        </button>
      }
      divider
      style={{ width: '320px' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <a href="#" style={{ fontSize: '14px', color: '#2196F3', textDecoration: 'none' }}>
          Forgot password?
        </a>
      </div>
    </Card>
  ),
};

/**
 * Grid of cards
 */
export const CardGrid: Story = {
  args: { children: null },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px',
        maxWidth: '800px',
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Card key={num} hoverable clickable>
          <h4 style={{ margin: '0 0 8px 0' }}>Card {num}</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            This is card number {num} in a responsive grid layout.
          </p>
        </Card>
      ))}
    </div>
  ),
};
