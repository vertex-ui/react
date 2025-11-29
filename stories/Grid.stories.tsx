import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../src/components/Grid/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A responsive grid layout system with 12 columns and 5 breakpoints (xs, sm, md, lg, xl). Provides flexible spacing, alignment, and direction options.',
      },
    },
  },
  argTypes: {
    container: {
      control: 'boolean',
      description: 'Enable flex container behavior',
    },
    item: {
      control: 'boolean',
      description: 'Enable flex item behavior',
    },
    spacing: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: 'Space between items',
    },
    xs: {
      control: 'select',
      options: [true, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Columns for extra small devices (0px+)',
    },
    sm: {
      control: 'select',
      options: [true, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Columns for small devices (600px+)',
    },
    md: {
      control: 'select',
      options: [true, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Columns for medium devices (960px+)',
    },
    lg: {
      control: 'select',
      options: [true, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Columns for large devices (1280px+)',
    },
    xl: {
      control: 'select',
      options: [true, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: 'Columns for extra large devices (1920px+)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const ItemBox = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <div
    style={{
      padding: '16px',
      backgroundColor: '#e3f2fd',
      border: '1px solid #2196f3',
      borderRadius: '4px',
      textAlign: 'center',
      ...props.style,
    }}
    {...props}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ItemBox>xs=12</ItemBox>
      </Grid>
      <Grid item xs={6}>
        <ItemBox>xs=6</ItemBox>
      </Grid>
      <Grid item xs={6}>
        <ItemBox>xs=6</ItemBox>
      </Grid>
      <Grid item xs={4}>
        <ItemBox>xs=4</ItemBox>
      </Grid>
      <Grid item xs={4}>
        <ItemBox>xs=4</ItemBox>
      </Grid>
      <Grid item xs={4}>
        <ItemBox>xs=4</ItemBox>
      </Grid>
    </Grid>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ItemBox>
          <div style={{ fontSize: '12px' }}>xs=12</div>
          <div style={{ fontSize: '12px' }}>sm=6</div>
          <div style={{ fontSize: '12px' }}>md=4</div>
          <div style={{ fontSize: '12px' }}>lg=3</div>
        </ItemBox>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ItemBox>Responsive</ItemBox>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ItemBox>Responsive</ItemBox>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ItemBox>Responsive</ItemBox>
      </Grid>
    </Grid>
  ),
};

export const MainAndSidebar: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <ItemBox style={{ minHeight: '200px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Main Content</div>
          <div style={{ fontSize: '14px' }}>
            Full width on mobile (xs=12)
            <br />8 columns on desktop (md=8)
          </div>
        </ItemBox>
      </Grid>
      <Grid item xs={12} md={4}>
        <ItemBox style={{ minHeight: '200px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Sidebar</div>
          <div style={{ fontSize: '14px' }}>
            Full width on mobile (xs=12)
            <br />4 columns on desktop (md=4)
          </div>
        </ItemBox>
      </Grid>
    </Grid>
  ),
};

export const SpacingVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Spacing 0</h4>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <ItemBox>Item 1</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Item 2</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Item 3</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Spacing 2</h4>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ItemBox>Item 1</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Item 2</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Item 3</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Spacing 5</h4>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <ItemBox>Item 1</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Item 2</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Item 3</ItemBox>
          </Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const RowAndColumnSpacing: Story = {
  render: () => (
    <Grid container rowSpacing={3} columnSpacing={1}>
      <Grid item xs={6}>
        <ItemBox>Row: 3, Col: 1</ItemBox>
      </Grid>
      <Grid item xs={6}>
        <ItemBox>Row: 3, Col: 1</ItemBox>
      </Grid>
      <Grid item xs={6}>
        <ItemBox>Row: 3, Col: 1</ItemBox>
      </Grid>
      <Grid item xs={6}>
        <ItemBox>Row: 3, Col: 1</ItemBox>
      </Grid>
    </Grid>
  ),
};

export const AutoWidth: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <ItemBox>xs=auto (fits content)</ItemBox>
      </Grid>
      <Grid item xs>
        <ItemBox>xs=true (fills remaining space)</ItemBox>
      </Grid>
      <Grid item xs="auto">
        <ItemBox>xs=auto</ItemBox>
      </Grid>
    </Grid>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Justify Content: flex-start</h4>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={3}>
            <ItemBox>Item 1</ItemBox>
          </Grid>
          <Grid item xs={3}>
            <ItemBox>Item 2</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Justify Content: center</h4>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={3}>
            <ItemBox>Item 1</ItemBox>
          </Grid>
          <Grid item xs={3}>
            <ItemBox>Item 2</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Justify Content: space-between</h4>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={3}>
            <ItemBox>Item 1</ItemBox>
          </Grid>
          <Grid item xs={3}>
            <ItemBox>Item 2</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Align Items: center</h4>
        <Grid container spacing={2} alignItems="center" style={{ minHeight: '120px' }}>
          <Grid item xs={4}>
            <ItemBox>Tall Item</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox style={{ height: '80px' }}>Very Tall Item</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>Tall Item</ItemBox>
          </Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const Direction: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Direction: row (default)</h4>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ItemBox>1</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>2</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>3</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Direction: row-reverse</h4>
        <Grid container spacing={2} direction="row-reverse">
          <Grid item xs={4}>
            <ItemBox>1</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>2</ItemBox>
          </Grid>
          <Grid item xs={4}>
            <ItemBox>3</ItemBox>
          </Grid>
        </Grid>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Direction: column</h4>
        <Grid container spacing={2} direction="column" style={{ maxWidth: '200px' }}>
          <Grid item>
            <ItemBox>1</ItemBox>
          </Grid>
          <Grid item>
            <ItemBox>2</ItemBox>
          </Grid>
          <Grid item>
            <ItemBox>3</ItemBox>
          </Grid>
        </Grid>
      </div>
    </div>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ItemBox>Top Level Item</ItemBox>
      </Grid>
      <Grid item xs={6}>
        <div style={{ padding: '8px', border: '2px dashed #9c27b0', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Nested Grid</h4>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ItemBox style={{ backgroundColor: '#f3e5f5', borderColor: '#9c27b0' }}>
                Nested 1
              </ItemBox>
            </Grid>
            <Grid item xs={6}>
              <ItemBox style={{ backgroundColor: '#f3e5f5', borderColor: '#9c27b0' }}>
                Nested 2
              </ItemBox>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={6}>
        <ItemBox>Regular Item</ItemBox>
      </Grid>
    </Grid>
  ),
};

export const ProductGrid: Story = {
  render: () => (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'white',
            }}
          >
            <div
              style={{
                height: '150px',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '48px', opacity: 0.3 }}>📦</span>
            </div>
            <div style={{ padding: '12px' }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Product {item}</h4>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
                Product description
              </p>
              <div style={{ fontWeight: 'bold', color: '#1976d2' }}>$29.99</div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <Grid container spacing={3}>
      {/* Header */}
      <Grid item xs={12}>
        <div
          style={{
            padding: '24px',
            backgroundColor: '#1976d2',
            color: 'white',
            borderRadius: '8px',
          }}
        >
          <h2 style={{ margin: 0 }}>Dashboard</h2>
        </div>
      </Grid>

      {/* Stats */}
      <Grid item xs={12} sm={6} md={3}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Total Users</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>1,234</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Revenue</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>$45,678</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Orders</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>890</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Growth</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#4caf50' }}>+12%</div>
        </div>
      </Grid>

      {/* Main Content */}
      <Grid item xs={12} md={8}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            minHeight: '300px',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Sales Chart</h3>
          <div
            style={{
              height: '250px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Chart Placeholder
          </div>
        </div>
      </Grid>

      {/* Sidebar */}
      <Grid item xs={12} md={4}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: '0 0 16px 0' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}
              >
                <div style={{ fontSize: '14px', fontWeight: '500' }}>Activity {item}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>2 hours ago</div>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  ),
};

export const FormLayout: Story = {
  render: () => (
    <Grid container spacing={3} style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Grid item xs={12}>
        <h2 style={{ margin: 0 }}>User Information</h2>
      </Grid>

      <Grid item xs={12} sm={6}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
          Last Name
        </label>
        <input
          type="text"
          placeholder="Enter last name"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </Grid>

      <Grid item xs={12} sm={8}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Address</label>
        <input
          type="text"
          placeholder="Enter address"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>ZIP Code</label>
        <input
          type="text"
          placeholder="Enter ZIP"
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <button
          style={{
            padding: '10px 24px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '500',
          }}
        >
          Submit
        </button>
      </Grid>
    </Grid>
  ),
};
