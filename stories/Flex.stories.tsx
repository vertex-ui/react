import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../src/components/Flex/Flex';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

// Demo Box component for examples
const Box = ({ children, color = '#3b82f6' }: { children: React.ReactNode; color?: string }) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: color,
      color: 'white',
      borderRadius: '4px',
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <Box>Item 1</Box>
        <Box color="#8b5cf6">Item 2</Box>
        <Box color="#ec4899">Item 3</Box>
      </>
    ),
  },
};

export const WithGap: Story = {
  args: {
    gap: 16,
    children: (
      <>
        <Box>Item 1</Box>
        <Box color="#8b5cf6">Item 2</Box>
        <Box color="#ec4899">Item 3</Box>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 12,
    children: (
      <>
        <Box>First</Box>
        <Box color="#8b5cf6">Second</Box>
        <Box color="#ec4899">Third</Box>
      </>
    ),
  },
};

export const Center: Story = {
  args: {
    justify: 'center',
    align: 'center',
    gap: 8,
    style: { height: '200px', border: '2px dashed #ccc' },
    children: (
      <>
        <Box>Centered</Box>
        <Box color="#8b5cf6">Content</Box>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: 'between',
    align: 'center',
    children: (
      <>
        <Box>Left</Box>
        <Box color="#8b5cf6">Middle</Box>
        <Box color="#ec4899">Right</Box>
      </>
    ),
  },
};

export const Wrap: Story = {
  args: {
    wrap: 'wrap',
    gap: 12,
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Box key={i} color={i % 3 === 0 ? '#ec4899' : i % 2 === 0 ? '#8b5cf6' : '#3b82f6'}>
            Item {i}
          </Box>
        ))}
      </>
    ),
  },
};

export const RowAndColumnGap: Story = {
  args: {
    wrap: 'wrap',
    rowGap: 24,
    columnGap: 8,
    style: { maxWidth: '400px' },
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Box key={i} color={i % 3 === 0 ? '#ec4899' : i % 2 === 0 ? '#8b5cf6' : '#3b82f6'}>
            Item {i}
          </Box>
        ))}
      </>
    ),
  },
};

export const InlineFlex: Story = {
  args: {
    inline: true,
    gap: 8,
    style: { border: '2px solid #3b82f6', padding: '8px' },
    children: (
      <>
        <Box>Inline</Box>
        <Box color="#8b5cf6">Flex</Box>
      </>
    ),
  },
};

export const CustomElement: Story = {
  args: {
    as: 'section',
    gap: 16,
    children: (
      <>
        <Box>Section</Box>
        <Box color="#8b5cf6">Element</Box>
      </>
    ),
  },
};

// Real-world Examples

export const NavigationBar: Story = {
  render: () => (
    <Flex justify="between" align="center" style={{ padding: '16px', backgroundColor: '#1f2937' }}>
      <Flex gap={24} align="center">
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Logo</div>
        <Flex gap={16}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
            Products
          </a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </a>
        </Flex>
      </Flex>
      <Flex gap={8}>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid white',
            background: 'transparent',
            color: 'white',
          }}
        >
          Sign In
        </button>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            background: '#3b82f6',
            color: 'white',
          }}
        >
          Sign Up
        </button>
      </Flex>
    </Flex>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <Flex wrap="wrap" gap={24} style={{ maxWidth: '900px' }}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Flex
          key={i}
          direction="column"
          gap={12}
          style={{
            flex: '1 1 250px',
            padding: '24px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Card {i}</div>
          <div style={{ color: '#6b7280' }}>Some description text for card {i}</div>
          <button
            style={{
              marginTop: 'auto',
              padding: '8px',
              borderRadius: '4px',
              border: 'none',
              background: '#3b82f6',
              color: 'white',
            }}
          >
            Learn More
          </button>
        </Flex>
      ))}
    </Flex>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Flex
      direction="column"
      gap={16}
      style={{
        maxWidth: '400px',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ margin: 0 }}>Contact Form</h2>

      <Flex direction="column" gap={8}>
        <label htmlFor="name" style={{ fontWeight: 500 }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </Flex>

      <Flex direction="column" gap={8}>
        <label htmlFor="email" style={{ fontWeight: 500 }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        />
      </Flex>

      <Flex gap={8}>
        <Flex direction="column" gap={8} style={{ flex: 1 }}>
          <label htmlFor="phone" style={{ fontWeight: 500 }}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
          />
        </Flex>
        <Flex direction="column" gap={8} style={{ flex: 1 }}>
          <label htmlFor="country" style={{ fontWeight: 500 }}>
            Country
          </label>
          <select
            id="country"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
          >
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
          </select>
        </Flex>
      </Flex>

      <Flex justify="end" gap={8}>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            background: 'white',
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            background: '#3b82f6',
            color: 'white',
          }}
        >
          Submit
        </button>
      </Flex>
    </Flex>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <Flex direction="column" gap={24} style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <Flex justify="between" align="center">
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            background: '#3b82f6',
            color: 'white',
          }}
        >
          New Report
        </button>
      </Flex>

      <Flex gap={16} wrap="wrap">
        {[
          { title: 'Total Users', value: '12,345', change: '+12%' },
          { title: 'Revenue', value: '$98,234', change: '+8%' },
          { title: 'Active Now', value: '1,234', change: '-3%' },
          { title: 'Conversion', value: '3.24%', change: '+5%' },
        ].map((stat) => (
          <Flex
            key={stat.title}
            direction="column"
            gap={8}
            style={{
              flex: '1 1 200px',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ color: '#6b7280', fontSize: '14px' }}>{stat.title}</div>
            <Flex justify="between" align="end">
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{stat.value}</div>
              <div
                style={{
                  color: stat.change.startsWith('+') ? '#10b981' : '#ef4444',
                  fontSize: '14px',
                }}
              >
                {stat.change}
              </div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  ),
};

export const MediaObject: Story = {
  render: () => (
    <Flex
      gap={16}
      style={{
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          flexShrink: 0,
        }}
      />
      <Flex direction="column" gap={8}>
        <h3 style={{ margin: 0 }}>John Doe</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <Flex gap={8}>
          <button
            style={{
              padding: '4px 12px',
              borderRadius: '4px',
              border: '1px solid #d1d5db',
              background: 'white',
              fontSize: '14px',
            }}
          >
            Follow
          </button>
          <button
            style={{
              padding: '4px 12px',
              borderRadius: '4px',
              border: 'none',
              background: '#3b82f6',
              color: 'white',
              fontSize: '14px',
            }}
          >
            Message
          </button>
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const StickyFooter: Story = {
  render: () => (
    <Flex
      direction="column"
      style={{
        minHeight: '400px',
        border: '2px dashed #ccc',
      }}
    >
      <div style={{ padding: '20px', backgroundColor: '#1f2937', color: 'white' }}>Header</div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Main Content</h2>
        <p>Content grows and pushes footer to bottom...</p>
      </div>
      <Flex
        justify="between"
        align="center"
        style={{ padding: '20px', backgroundColor: '#f3f4f6', borderTop: '1px solid #d1d5db' }}
      >
        <div>© 2024 Company Name</div>
        <Flex gap={16}>
          <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>
            Privacy
          </a>
          <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>
            Terms
          </a>
          <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>
            Contact
          </a>
        </Flex>
      </Flex>
    </Flex>
  ),
};
