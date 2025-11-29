import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../src/components/Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onDelete: { action: 'deleted' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Sizes: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </div>
  ),
};

export const Variants: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Chip label="Filled" variant="filled" color="primary" />
        <Chip label="Outlined" variant="outlined" color="primary" />
        <Chip label="Light" variant="light" color="primary" />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip label="Default" color="default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Success" color="success" />
        <Chip label="Error" color="error" />
        <Chip label="Warning" color="warning" />
        <Chip label="Info" color="info" />
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip label="Primary Filled" color="primary" variant="filled" />
        <Chip label="Primary Outlined" color="primary" variant="outlined" />
        <Chip label="Primary Light" color="primary" variant="light" />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip label="Success Filled" color="success" variant="filled" />
        <Chip label="Success Outlined" color="success" variant="outlined" />
        <Chip label="Success Light" color="success" variant="light" />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip label="Error Filled" color="error" variant="filled" />
        <Chip label="Error Outlined" color="error" variant="outlined" />
        <Chip label="Error Light" color="error" variant="light" />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip label="Warning Filled" color="warning" variant="filled" />
        <Chip label="Warning Outlined" color="warning" variant="outlined" />
        <Chip label="Warning Light" color="warning" variant="light" />
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Chip
        label="With Icon"
        icon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" />
          </svg>
        }
        color="primary"
      />
      <Chip
        label="Home"
        icon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1L1 6V15H6V10H10V15H15V6L8 1Z" />
          </svg>
        }
        variant="outlined"
      />
    </div>
  ),
};

export const WithAvatar: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Chip label="John Doe" avatar="https://i.pravatar.cc/150?img=1" variant="outlined" />
      <Chip label="Jane Smith" avatar="https://i.pravatar.cc/150?img=5" color="primary" />
      <Chip
        label="Bob Wilson"
        avatar="https://i.pravatar.cc/150?img=3"
        variant="light"
        color="success"
      />
    </div>
  ),
};

export const Deletable: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Chip label="React" onDelete={() => console.log('Deleted React')} color="primary" />
      <Chip label="TypeScript" onDelete={() => console.log('Deleted TypeScript')} color="info" />
      <Chip
        label="JavaScript"
        onDelete={() => console.log('Deleted JavaScript')}
        variant="outlined"
      />
      <Chip
        label="Node.js"
        onDelete={() => console.log('Deleted Node.js')}
        variant="light"
        color="success"
      />
    </div>
  ),
};

export const Clickable: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Chip label="Click Me" onClick={() => alert('Chip clicked!')} color="primary" />
      <Chip
        label="With Icon"
        icon={<span>🚀</span>}
        onClick={() => alert('Icon chip clicked!')}
        variant="outlined"
      />
      <Chip
        label="With Delete"
        onClick={() => alert('Chip clicked!')}
        onDelete={() => alert('Delete clicked!')}
        variant="light"
        color="success"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Chip label="Disabled" disabled />
      <Chip label="Disabled Primary" color="primary" disabled />
      <Chip label="Disabled Clickable" onClick={() => console.log('Should not fire')} disabled />
      <Chip
        label="Disabled Delete"
        onDelete={() => console.log('Should not fire')}
        variant="outlined"
        disabled
      />
    </div>
  ),
};

export const UseCases: Story = {
  args: { label: 'Chip' },
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Tags</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Chip label="React" variant="light" color="primary" />
          <Chip label="TypeScript" variant="light" color="info" />
          <Chip label="Tailwind" variant="light" color="success" />
          <Chip label="Node.js" variant="light" color="default" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Selected Filters (Deletable)
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Chip label="Price: $100-$500" onDelete={() => {}} variant="filled" color="primary" />
          <Chip
            label="Category: Electronics"
            onDelete={() => {}}
            variant="filled"
            color="primary"
          />
          <Chip label="In Stock" onDelete={() => {}} variant="filled" color="success" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Team Members
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Chip
            label="Sarah Johnson"
            avatar="https://i.pravatar.cc/150?img=5"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip
            label="Mike Chen"
            avatar="https://i.pravatar.cc/150?img=12"
            onDelete={() => {}}
            variant="outlined"
          />
          <Chip
            label="Emily Davis"
            avatar="https://i.pravatar.cc/150?img=9"
            onDelete={() => {}}
            variant="outlined"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          Status Labels
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Chip label="Active" variant="light" color="success" />
          <Chip label="Pending" variant="light" color="warning" />
          <Chip label="Failed" variant="light" color="error" />
          <Chip label="Inactive" variant="light" color="default" />
        </div>
      </div>
    </div>
  ),
};
