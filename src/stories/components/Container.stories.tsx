import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../components/Container';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fluid', false],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <Card style={{ padding: '24px', marginTop: '24px', marginBottom: '24px' }}>
    <Text variant="h3" style={{ marginBottom: '16px' }}>Container Demo</Text>
    <Text variant="body1" style={{ marginBottom: '12px' }}>
      This container centers the content and applies responsive max-width constraints.
    </Text>
    <Text variant="body2" color="secondary">
      Resize your browser window to see how the container adapts to different screen sizes.
    </Text>
  </Card>
);

export const Default: Story = {
  args: {
    children: <DemoContent />,
  },
};

export const ExtraSmall: Story = {
  args: {
    maxWidth: 'xs',
    children: (
      <>
        <DemoContent />
        <Card style={{ padding: '16px', marginBottom: '24px' }}>
          <Text variant="body2" color="secondary">
            Max width: 540px - Perfect for narrow content like sign-in forms
          </Text>
        </Card>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    children: (
      <>
        <DemoContent />
        <Card style={{ padding: '16px', marginBottom: '24px' }}>
          <Text variant="body2" color="secondary">
            Max width: 720px - Good for blog posts and articles
          </Text>
        </Card>
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    maxWidth: 'md',
    children: (
      <>
        <DemoContent />
        <Card style={{ padding: '16px', marginBottom: '24px' }}>
          <Text variant="body2" color="secondary">
            Max width: 960px - Standard content width
          </Text>
        </Card>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    maxWidth: 'lg',
    children: (
      <>
        <DemoContent />
        <Card style={{ padding: '16px', marginBottom: '24px' }}>
          <Text variant="body2" color="secondary">
            Max width: 1140px - Default container size
          </Text>
        </Card>
      </>
    ),
  },
};

export const ExtraLarge: Story = {
  args: {
    maxWidth: 'xl',
    children: (
      <>
        <DemoContent />
        <Card style={{ padding: '16px', marginBottom: '24px' }}>
          <Text variant="body2" color="secondary">
            Max width: 1320px - Wide layouts for dashboards
          </Text>
        </Card>
      </>
    ),
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
    children: (
      <>
        <DemoContent />
        <Card style={{ padding: '16px', marginBottom: '24px', backgroundColor: '#fef3c7' }}>
          <Text variant="body2">
            This container spans the full width of the viewport with responsive padding
          </Text>
        </Card>
      </>
    ),
  },
};

export const NoGutters: Story = {
  args: {
    maxWidth: 'lg',
    disableGutters: true,
    children: (
      <Card style={{ padding: '24px', marginTop: '24px', marginBottom: '24px', borderRadius: 0 }}>
        <Text variant="h3" style={{ marginBottom: '16px' }}>No Gutters</Text>
        <Text variant="body1">
          This container has no horizontal padding, so content can stretch edge-to-edge.
          Useful when you want full-bleed layouts.
        </Text>
      </Card>
    ),
  },
};

export const NestedContainers: Story = {
  args: {
    maxWidth: 'xl',
    children: (
      <div style={{ marginTop: '24px', marginBottom: '24px' }}>
        <Card style={{ padding: '24px', marginBottom: '24px' }}>
          <Text variant="h3" style={{ marginBottom: '16px' }}>Outer Container (XL)</Text>
          <Text variant="body1" style={{ marginBottom: '24px' }}>
            This is the outer container with xl max-width.
          </Text>
          <Container maxWidth="sm" style={{ backgroundColor: '#dbeafe', padding: '24px', borderRadius: '8px' }}>
            <Text variant="h4" style={{ marginBottom: '12px' }}>Nested Container (SM)</Text>
            <Text variant="body2">
              This is a nested container with sm max-width inside the xl container.
            </Text>
          </Container>
        </Card>
      </div>
    ),
  },
};

export const MultipleContainers: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Card style={{ padding: '24px', marginTop: '24px' }}>
          <Text variant="h3">Hero Section</Text>
          <Text variant="body1">Large container for main content</Text>
        </Card>
      </Container>
      
      <div style={{ backgroundColor: '#e5e7eb', padding: '48px 0', margin: '24px 0' }}>
        <Container maxWidth="md">
          <Text variant="h4" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Features Section
          </Text>
          <Text variant="body1" style={{ textAlign: 'center' }}>
            Medium container for focused content
          </Text>
        </Container>
      </div>
      
      <Container fluid>
        <Card style={{ padding: '24px', marginBottom: '24px', backgroundColor: '#fef3c7' }}>
          <Text variant="body1" style={{ textAlign: 'center' }}>
            Fluid container for full-width sections
          </Text>
        </Card>
      </Container>
      
      <Container maxWidth="xs">
        <Card style={{ padding: '24px', marginBottom: '24px' }}>
          <Text variant="h5" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Newsletter Signup
          </Text>
          <Text variant="body2" style={{ textAlign: 'center' }}>
            Extra small container for forms
          </Text>
        </Card>
      </Container>
    </div>
  ),
};

export const ResponsivePadding: Story = {
  args: {
    maxWidth: 'lg',
    children: (
      <Card style={{ padding: '24px', marginTop: '24px', marginBottom: '24px' }}>
        <Text variant="h3" style={{ marginBottom: '16px' }}>Responsive Padding</Text>
        <Text variant="body1" style={{ marginBottom: '12px' }}>
          The container automatically adjusts its horizontal padding based on screen size:
        </Text>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><Text variant="body2">Mobile (&lt;576px): 16px padding</Text></li>
          <li><Text variant="body2">Tablet (≥576px): 16px padding</Text></li>
          <li><Text variant="body2">Desktop (≥768px): 24px padding</Text></li>
          <li><Text variant="body2">Large (≥1200px): 32px padding</Text></li>
        </ul>
      </Card>
    ),
  },
};
