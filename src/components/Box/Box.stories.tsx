import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';
import Text from '../Text/Text';
import Button from '../Button/Button';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'main', 'header', 'footer', 'nav', 'span'],
      description: 'HTML element to render',
    },
    display: {
      control: 'select',
      options: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none'],
      description: 'CSS display property',
    },
    position: {
      control: 'select',
      options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
      description: 'CSS position property',
    },
    bg: {
      control: 'color',
      description: 'Background color',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Box shadow preset',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

/**
 * Basic Box component with padding and background
 */
export const Basic: Story = {
  args: {
    p: 4,
    bg: '#f0f0f0',
    borderRadius: 8,
    children: 'This is a basic Box component',
  },
};

/**
 * Box with various spacing props
 */
export const Spacing: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box p={4} bg="#e3f2fd" borderRadius={8}>
        <Text>Box with padding: 4</Text>
      </Box>
      <Box px={4} py={2} bg="#f3e5f5" borderRadius={8}>
        <Text>Box with px: 4, py: 2</Text>
      </Box>
      <Box m={2} p={3} bg="#e8f5e9" border="2px solid #4caf50" borderRadius={8}>
        <Text>Box with margin and padding</Text>
      </Box>
    </Box>
  ),
};

/**
 * Flexbox layouts using Box
 */
export const FlexLayout: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box display="flex" justifyContent="space-between" p={3} bg="#fff3e0" borderRadius={8}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" p={3} bg="#fce4ec" borderRadius={8} h={100}>
        <Text>Centered Content</Text>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap" p={3} bg="#e0f2f1" borderRadius={8}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box key={i} p={2} bg="white" borderRadius={4} shadow="sm">
            Item {i}
          </Box>
        ))}
      </Box>
    </Box>
  ),
};

/**
 * Grid layouts using Box
 */
export const GridLayout: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Box key={i} p={4} bg="#e1f5fe" borderRadius={8} textAlign="center">
            <Text>Grid Item {i}</Text>
          </Box>
        ))}
      </Box>

      <Box display="grid" gridTemplateColumns="1fr 2fr 1fr" gap={2}>
        <Box p={3} bg="#f3e5f5" borderRadius={8}>
          <Text>Sidebar</Text>
        </Box>
        <Box p={3} bg="#e8eaf6" borderRadius={8}>
          <Text>Main Content (2x width)</Text>
        </Box>
        <Box p={3} bg="#f3e5f5" borderRadius={8}>
          <Text>Sidebar</Text>
        </Box>
      </Box>
    </Box>
  ),
};

/**
 * Box with shadows
 */
export const Shadows: Story = {
  render: () => (
    <Box display="flex" gap={4} flexWrap="wrap">
      <Box p={4} bg="white" shadow="sm" borderRadius={8}>
        <Text>Shadow SM</Text>
      </Box>
      <Box p={4} bg="white" shadow="md" borderRadius={8}>
        <Text>Shadow MD</Text>
      </Box>
      <Box p={4} bg="white" shadow="lg" borderRadius={8}>
        <Text>Shadow LG</Text>
      </Box>
      <Box p={4} bg="white" shadow="xl" borderRadius={8}>
        <Text>Shadow XL</Text>
      </Box>
    </Box>
  ),
};

/**
 * Card-like component using Box
 */
export const Card: Story = {
  render: () => (
    <Box maxW={400} bg="white" shadow="md" borderRadius={12} overflow="hidden">
      <Box h={200} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" />
      <Box p={4}>
        <Box className="mb-2">
          <Text variant="h4">Card Title</Text>
        </Box>
        <Box className="mb-3">
          <Text variant="body2" textColor="#666">
            This is a card component built entirely with the Box component. It demonstrates the
            flexibility and power of the Box component.
          </Text>
        </Box>
        <Box display="flex" gap={2}>
          <Button size="sm">Learn More</Button>
          <Button size="sm" variant="outline">
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  ),
};

/**
 * Responsive container using Box
 */
export const Container: Story = {
  render: () => (
    <Box maxW={1200} mx="auto" px={4}>
      <Box p={6} bg="#f5f5f5" borderRadius={8}>
        <Box className="mb-3">
          <Text variant="h3">Responsive Container</Text>
        </Box>
        <Text>
          This Box acts as a container with max-width of 1200px and centered using mx="auto". It
          also has horizontal padding for smaller screens.
        </Text>
      </Box>
    </Box>
  ),
};

/**
 * Box wrapping other components
 */
export const WrappingComponents: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4} p={4} bg="#fafafa" borderRadius={8}>
      <Box display="flex" justifyContent="space-between" alignItems="center" pb={3} borderBottom="1px solid #e0e0e0">
        <Text variant="h4">Component Wrapper</Text>
        <Box display="flex" gap={2}>
          <Button size="sm" variant="outline">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={3}>
        <Box p={3} bg="white" borderRadius={8} shadow="sm">
          <Box className="mb-1">
            <Text weight="semibold">Feature 1</Text>
          </Box>
          <Text variant="body2" textColor="#666">
            Description of feature 1
          </Text>
        </Box>
        <Box p={3} bg="white" borderRadius={8} shadow="sm">
          <Box className="mb-1">
            <Text weight="semibold">Feature 2</Text>
          </Box>
          <Text variant="body2" textColor="#666">
            Description of feature 2
          </Text>
        </Box>
        <Box p={3} bg="white" borderRadius={8} shadow="sm">
          <Box className="mb-1">
            <Text weight="semibold">Feature 3</Text>
          </Box>
          <Text variant="body2" textColor="#666">
            Description of feature 3
          </Text>
        </Box>
      </Box>
    </Box>
  ),
};

/**
 * Different semantic elements using 'as' prop
 */
export const SemanticHTML: Story = {
  render: () => (
    <Box as="article" maxW={800} mx="auto" p={4}>
      <Box as="header" className="mb-4">
        <Text variant="h2">Article Title</Text>
        <Text variant="body2" textColor="#666">
          Published on January 8, 2026
        </Text>
      </Box>

      <Box as="section" className="mb-4">
        <Box className="mb-2">
          <Text variant="h4">Section 1</Text>
        </Box>
        <Text>This is the content of section 1.</Text>
      </Box>

      <Box as="section" className="mb-4">
        <Box className="mb-2">
          <Text variant="h4">Section 2</Text>
        </Box>
        <Text>This is the content of section 2.</Text>
      </Box>

      <Box as="footer" pt={4} borderTop="1px solid #e0e0e0">
        <Text variant="body2" textColor="#666">
          Article footer content
        </Text>
      </Box>
    </Box>
  ),
};

/**
 * Positioned elements using Box
 */
export const Positioning: Story = {
  render: () => (
    <Box position="relative" h={300} bg="#f0f0f0" borderRadius={8} overflow="hidden">
      <Box position="absolute" top={10} left={10} p={2} bg="white" shadow="md" borderRadius={4}>
        <Text>Top Left</Text>
      </Box>
      <Box position="absolute" top={10} right={10} p={2} bg="white" shadow="md" borderRadius={4}>
        <Text>Top Right</Text>
      </Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        p={3}
        bg="white"
        shadow="lg"
        borderRadius={8}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <Text weight="semibold">Centered</Text>
      </Box>
      <Box position="absolute" bottom={10} left={10} p={2} bg="white" shadow="md" borderRadius={4}>
        <Text>Bottom Left</Text>
      </Box>
      <Box position="absolute" bottom={10} right={10} p={2} bg="white" shadow="md" borderRadius={4}>
        <Text>Bottom Right</Text>
      </Box>
    </Box>
  ),
};
