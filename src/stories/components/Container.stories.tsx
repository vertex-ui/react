import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../components/Container';
import { Card } from '../../components/Card';
import { Typography } from '../../components/Typography';

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
    <Typography variant="h3" style={{ marginBottom: '16px' }}>Container Demo</Typography>
    <Typography variant="body1" style={{ marginBottom: '12px' }}>
      This container centers the content and applies responsive max-width constraints.
    </Typography>
    <Typography variant="body2" color="secondary">
      Resize your browser window to see how the container adapts to different screen sizes.
    </Typography>
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
          <Typography variant="body2" color="secondary">
            Max width: 540px - Perfect for narrow content like sign-in forms
          </Typography>
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
          <Typography variant="body2" color="secondary">
            Max width: 720px - Good for blog posts and articles
          </Typography>
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
          <Typography variant="body2" color="secondary">
            Max width: 960px - Standard content width
          </Typography>
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
          <Typography variant="body2" color="secondary">
            Max width: 1140px - Default container size
          </Typography>
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
          <Typography variant="body2" color="secondary">
            Max width: 1320px - Wide layouts for dashboards
          </Typography>
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
          <Typography variant="body2">
            This container spans the full width of the viewport with responsive padding
          </Typography>
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
        <Typography variant="h3" style={{ marginBottom: '16px' }}>No Gutters</Typography>
        <Typography variant="body1">
          This container has no horizontal padding, so content can stretch edge-to-edge.
          Useful when you want full-bleed layouts.
        </Typography>
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
          <Typography variant="h3" style={{ marginBottom: '16px' }}>Outer Container (XL)</Typography>
          <Typography variant="body1" style={{ marginBottom: '24px' }}>
            This is the outer container with xl max-width.
          </Typography>
          <Container maxWidth="sm" style={{ backgroundColor: '#dbeafe', padding: '24px', borderRadius: '8px' }}>
            <Typography variant="h4" style={{ marginBottom: '12px' }}>Nested Container (SM)</Typography>
            <Typography variant="body2">
              This is a nested container with sm max-width inside the xl container.
            </Typography>
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
          <Typography variant="h3">Hero Section</Typography>
          <Typography variant="body1">Large container for main content</Typography>
        </Card>
      </Container>
      
      <div style={{ backgroundColor: '#e5e7eb', padding: '48px 0', margin: '24px 0' }}>
        <Container maxWidth="md">
          <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Features Section
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            Medium container for focused content
          </Typography>
        </Container>
      </div>
      
      <Container fluid>
        <Card style={{ padding: '24px', marginBottom: '24px', backgroundColor: '#fef3c7' }}>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            Fluid container for full-width sections
          </Typography>
        </Card>
      </Container>
      
      <Container maxWidth="xs">
        <Card style={{ padding: '24px', marginBottom: '24px' }}>
          <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '16px' }}>
            Newsletter Signup
          </Typography>
          <Typography variant="body2" style={{ textAlign: 'center' }}>
            Extra small container for forms
          </Typography>
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
        <Typography variant="h3" style={{ marginBottom: '16px' }}>Responsive Padding</Typography>
        <Typography variant="body1" style={{ marginBottom: '12px' }}>
          The container automatically adjusts its horizontal padding based on screen size:
        </Typography>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li><Typography variant="body2">Mobile (&lt;576px): 16px padding</Typography></li>
          <li><Typography variant="body2">Tablet (≥576px): 16px padding</Typography></li>
          <li><Typography variant="body2">Desktop (≥768px): 24px padding</Typography></li>
          <li><Typography variant="body2">Large (≥1200px): 32px padding</Typography></li>
        </ul>
      </Card>
    ),
  },
};
