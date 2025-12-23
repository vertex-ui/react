import type { Meta, StoryObj } from '@storybook/react';
import { GridCarouselWidget } from '../../components/Widget';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Flex } from '../../components/Flex';

const meta: Meta<typeof GridCarouselWidget> = {
  title: 'Widgets/GridCarouselWidget',
  component: GridCarouselWidget,
  tags: ['autodocs'],
  argTypes: {
    borderRadius: {
      control: 'boolean',
      description: 'Apply border radius to the carousel container',
    },
    autoplay: {
      control: 'boolean',
      description: 'Enable auto-play',
    },
    autoplayDelay: {
      control: 'number',
      description: 'Delay between auto-play transitions (in milliseconds)',
    },
    showNavigation: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination dots',
    },
    scrollBehavior: {
      control: 'select',
      options: ['page', 'item'],
      description: 'Scroll behavior: page scrolls by full page, item scrolls by one item',
    },
    gap: {
      control: 'text',
      description: 'Gap between grid items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridCarouselWidget>;

// Sample Card Items
const createCardItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => (
    <Card key={i} variant="elevated" style={{ padding: '20px', height: '100%' }}>
      <Flex direction="column" gap={12}>
        <Text variant="h3">Card {i + 1}</Text>
        <Text variant="body1" color="secondary">
          This is a sample card item in the grid carousel. It demonstrates how components can be displayed in a responsive grid layout.
        </Text>
        <Badge variant="primary">Featured</Badge>
      </Flex>
    </Card>
  ));
};

// Sample Product Cards
const createProductCards = (count: number) => {
  const products = [
    { name: 'Wireless Headphones', price: '$199', image: '🎧' },
    { name: 'Smart Watch', price: '$299', image: '⌚' },
    { name: 'Laptop Stand', price: '$49', image: '💻' },
    { name: 'USB-C Hub', price: '$79', image: '🔌' },
    { name: 'Mechanical Keyboard', price: '$159', image: '⌨️' },
    { name: 'Wireless Mouse', price: '$69', image: '🖱️' },
    { name: 'Monitor Arm', price: '$129', image: '🖥️' },
    { name: 'Webcam HD', price: '$89', image: '📹' },
  ];

  return Array.from({ length: count }, (_, i) => {
    const product = products[i % products.length];
    return (
      <Card key={i} variant="elevated" style={{ padding: '0', height: '100%', overflow: 'hidden' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px',
          textAlign: 'center',
          fontSize: '48px'
        }}>
          {product.image}
        </div>
        <div style={{ padding: '20px' }}>
          <Text variant="h4" style={{ marginBottom: '8px' }}>{product.name}</Text>
          <Text variant="h3" style={{ marginBottom: '12px', color: '#667eea' }}>{product.price}</Text>
          <Text variant="body2" color="secondary">
            High quality product with excellent reviews
          </Text>
        </div>
      </Card>
    );
  });
};

// Sample User Profile Cards
const createUserCards = (count: number) => {
  const users = [
    { name: 'Alice Johnson', role: 'Product Designer', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob Smith', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Carol Williams', role: 'UX Researcher', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'David Brown', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Emma Davis', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Frank Miller', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?img=6' },
  ];

  return Array.from({ length: count }, (_, i) => {
    const user = users[i % users.length];
    return (
      <Card key={i} variant="elevated" style={{ padding: '24px', height: '100%' }}>
        <Flex direction="column" align="center" gap={12}>
          <Avatar src={user.avatar} alt={user.name} size="lg" />
          <Text variant="h4" style={{ textAlign: 'center' }}>{user.name}</Text>
          <Text variant="body2" color="secondary" style={{ textAlign: 'center' }}>
            {user.role}
          </Text>
          <Badge variant="success">Available</Badge>
        </Flex>
      </Card>
    );
  });
};

// Stories
export const Default: Story = {
  args: {
    items: createCardItems(6),
    borderRadius: true,
    autoplay: false,
    autoplayDelay: 3000,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '20px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const ProductShowcase: Story = {
  args: {
    items: createProductCards(8),
    borderRadius: true,
    autoplay: true,
    autoplayDelay: 4000,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    },
    gap: '16px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const TeamMembers: Story = {
  args: {
    items: createUserCards(6),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '24px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const AutoPlay: Story = {
  args: {
    items: createCardItems(9),
    borderRadius: true,
    autoplay: true,
    autoplayDelay: 2500,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '20px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const ItemScrollBehavior: Story = {
  args: {
    items: createProductCards(10),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '20px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'item', // Scroll one item at a time
  },
};

export const ManyItems: Story = {
  args: {
    items: createCardItems(20),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    },
    gap: '16px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const TwoColumns: Story = {
  args: {
    items: createProductCards(8),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 2,
    },
    gap: '24px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const FiveColumns: Story = {
  args: {
    items: createUserCards(15),
    borderRadius: true,
    autoplay: true,
    autoplayDelay: 3500,
    itemsPerView: {
      mobile: 2,
      tablet: 3,
      desktop: 5,
    },
    gap: '12px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const MinimalControls: Story = {
  args: {
    items: createCardItems(6),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '20px',
    showNavigation: false,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const NoControls: Story = {
  args: {
    items: createCardItems(3),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '20px',
    showNavigation: false,
    showPagination: false,
    scrollBehavior: 'page',
  },
};

export const LargeGap: Story = {
  args: {
    items: createProductCards(6),
    borderRadius: true,
    autoplay: false,
    itemsPerView: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '40px',
    showNavigation: true,
    showPagination: true,
    scrollBehavior: 'page',
  },
};

export const EmptyState: Story = {
  args: {
    items: [],
    borderRadius: true,
    showNavigation: true,
    showPagination: true,
  },
};
