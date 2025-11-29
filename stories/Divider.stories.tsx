import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../src/components/Divider/Divider';
import { Chip } from '../src/components/Chip/Chip';
import { Avatar } from '../src/components/Avatar/Avatar';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy. It supports horizontal and vertical orientations, multiple variants, and can wrap content like text or chips.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant to use',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment when children are provided',
    },
    light: {
      control: 'boolean',
      description: 'Use lighter color',
    },
    flexItem: {
      control: 'boolean',
      description: 'Optimize for flex containers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <p>Content above the divider</p>
      <Divider />
      <p>Content below the divider</p>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
          Full Width (default)
        </p>
        <Divider />
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Inset</p>
        <Divider variant="inset" />
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Middle</p>
        <Divider variant="middle" />
      </div>
    </div>
  ),
};

export const VerticalDivider: Story = {
  render: () => (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        gap: '12px',
      }}
    >
      <span>Item 1</span>
      <Divider orientation="vertical" />
      <span>Item 2</span>
      <Divider orientation="vertical" />
      <span>Item 3</span>
    </div>
  ),
};

export const VerticalFlexItem: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Chip label="Chip 1" />
      <Divider orientation="vertical" flexItem />
      <Chip label="Chip 2" />
      <Divider orientation="vertical" flexItem />
      <Chip label="Chip 3" />
    </div>
  ),
};

export const VerticalWithVariants: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', gap: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '80px', gap: '12px' }}>
        <span>Full</span>
        <Divider orientation="vertical" flexItem />
        <span>Width</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', height: '80px', gap: '12px' }}>
        <span>Middle</span>
        <Divider orientation="vertical" variant="middle" flexItem />
        <span>Variant</span>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <p style={{ lineHeight: 1.6, color: '#666' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
      </p>
      <Divider>OR</Divider>
      <p style={{ lineHeight: 1.6, color: '#666' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
      </p>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div>
        <p style={{ lineHeight: 1.6, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Divider textAlign="center">CENTER</Divider>
        <p style={{ lineHeight: 1.6, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div>
        <p style={{ lineHeight: 1.6, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Divider textAlign="left">LEFT</Divider>
        <p style={{ lineHeight: 1.6, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div>
        <p style={{ lineHeight: 1.6, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Divider textAlign="right">RIGHT</Divider>
        <p style={{ lineHeight: 1.6, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  ),
};

export const WithChip: Story = {
  render: () => (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <p style={{ lineHeight: 1.6, color: '#666' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
      </p>
      <Divider>
        <Chip label="SECTION" size="small" />
      </Divider>
      <p style={{ lineHeight: 1.6, color: '#666' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
      </p>
    </div>
  ),
};

export const WithChipAligned: Story = {
  render: () => (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div>
        <Divider textAlign="left">
          <Chip label="Start" size="small" />
        </Divider>
      </div>
      <div>
        <Divider textAlign="center">
          <Chip label="Center" size="small" />
        </Divider>
      </div>
      <div>
        <Divider textAlign="right">
          <Chip label="End" size="small" />
        </Divider>
      </div>
    </div>
  ),
};

export const LightVariant: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <p>Regular divider</p>
      <Divider />
      <p>Light divider</p>
      <Divider light />
      <p>Content below</p>
    </div>
  ),
};

export const ListWithDividers: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Alice Johnson" />
            <div>
              <div style={{ fontWeight: 600 }}>Alice Johnson</div>
              <div style={{ fontSize: '14px', color: '#666' }}>alice@example.com</div>
            </div>
          </div>
        </li>
        <Divider component="li" />
        <li style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Bob Smith" />
            <div>
              <div style={{ fontWeight: 600 }}>Bob Smith</div>
              <div style={{ fontSize: '14px', color: '#666' }}>bob@example.com</div>
            </div>
          </div>
        </li>
        <Divider component="li" />
        <li style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Charlie Davis" />
            <div>
              <div style={{ fontWeight: 600 }}>Charlie Davis</div>
              <div style={{ fontSize: '14px', color: '#666' }}>carol@example.com</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  ),
};

export const InsetList: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Alice Johnson" />
            <span>Alice Johnson</span>
          </div>
        </li>
        <Divider component="li" variant="inset" />
        <li style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Bob Smith" />
            <span>Bob Smith</span>
          </div>
        </li>
        <Divider component="li" variant="inset" />
        <li style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar name="Carol Williams" />
            <span>Carol Williams</span>
          </div>
        </li>
      </ul>
    </div>
  ),
};

export const IconToolbar: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          width: 'fit-content',
        }}
      >
        <button style={{ padding: '8px', border: 'none', background: 'none', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3h14v2H3V3zm0 6h14v2H3V9zm0 6h14v2H3v-2z" />
          </svg>
        </button>
        <Divider orientation="vertical" flexItem />
        <button style={{ padding: '8px', border: 'none', background: 'none', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3h14v2H3V3zm4 6h10v2H7V9zm-4 6h14v2H3v-2z" />
          </svg>
        </button>
        <Divider orientation="vertical" flexItem />
        <button style={{ padding: '8px', border: 'none', background: 'none', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3h14v2H3V3zm7 6h7v2h-7V9zm-7 6h14v2H3v-2z" />
          </svg>
        </button>
      </div>
    </div>
  ),
};

export const FormSections: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ margin: '0 0 12px 0' }}>Personal Information</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="text"
            placeholder="First Name"
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
      </div>

      <Divider>
        <Chip label="Contact Details" size="small" />
      </Divider>

      <div style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <input
            type="tel"
            placeholder="Phone"
            style={{
              padding: '8px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
      </div>
    </div>
  ),
};

export const AllOrientationsAndVariants: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h4 style={{ margin: '0 0 16px 0' }}>Horizontal Variants</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <small style={{ color: '#666' }}>Full Width</small>
            <Divider />
          </div>
          <div>
            <small style={{ color: '#666' }}>Inset</small>
            <Divider variant="inset" />
          </div>
          <div>
            <small style={{ color: '#666' }}>Middle</small>
            <Divider variant="middle" />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0' }}>Vertical Variants</h4>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '12px' }}>
            <small style={{ color: '#666' }}>Full</small>
            <Divider orientation="vertical" flexItem />
            <small style={{ color: '#666' }}>Height</small>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '12px' }}>
            <small style={{ color: '#666' }}>Middle</small>
            <Divider orientation="vertical" variant="middle" flexItem />
            <small style={{ color: '#666' }}>Variant</small>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ padding: '16px', background: '#f5f5f5' }}>
          <h3 style={{ margin: 0 }}>Shopping Cart</h3>
        </div>

        <Divider />

        {/* Items */}
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span>Product 1</span>
            <span>$29.99</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span>Product 2</span>
            <span>$49.99</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Product 3</span>
            <span>$19.99</span>
          </div>
        </div>

        <Divider />

        {/* Subtotal */}
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Subtotal</span>
            <span>$99.97</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
        </div>

        <Divider>
          <Chip label="TOTAL" size="small" variant="filled" />
        </Divider>

        {/* Total */}
        <div style={{ padding: '16px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            <span>Total</span>
            <span>$104.97</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Primary Blue Divider</h4>
        <style>{`
          .blue-divider {
            --vtx-divider-color: #1976d2;
            --vtx-divider-text-color: #0d47a1;
          }
        `}</style>
        <p>Content above</p>
        <Divider className="blue-divider">SECTION</Divider>
        <p>Content below</p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Success Green Divider</h4>
        <style>{`
          .green-divider {
            --vtx-divider-color: #4caf50;
            --vtx-divider-text-color: #2e7d32;
            --vtx-divider-text-weight: 600;
          }
        `}</style>
        <p>Content above</p>
        <Divider className="green-divider">SUCCESS</Divider>
        <p>Content below</p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Pink Divider with Large Text</h4>
        <style>{`
          .pink-divider {
            --vtx-divider-color: #e91e63;
            --vtx-divider-text-color: #c2185b;
            --vtx-divider-text-size: 16px;
            --vtx-divider-text-weight: 700;
          }
        `}</style>
        <p>Content above</p>
        <Divider className="pink-divider">PREMIUM</Divider>
        <p>Content below</p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Custom Light Variant</h4>
        <style>{`
          .custom-light-divider {
            --vtx-divider-color: #ff9800;
            --vtx-divider-color-light: #fff3e0;
            --vtx-divider-text-color: #e65100;
            --vtx-divider-text-color-light: #fb8c00;
          }
        `}</style>
        <p>Regular divider</p>
        <Divider className="custom-light-divider">DEFAULT</Divider>
        <p>Light divider</p>
        <Divider className="custom-light-divider" light>
          LIGHT
        </Divider>
        <p>Content below</p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0' }}>Vertical Custom Colors</h4>
        <style>{`
          .purple-divider {
            --vtx-divider-color: #9c27b0;
          }
        `}</style>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Chip label="Item 1" />
          <Divider className="purple-divider" orientation="vertical" flexItem />
          <Chip label="Item 2" />
          <Divider className="purple-divider" orientation="vertical" flexItem />
          <Chip label="Item 3" />
        </div>
      </div>
    </div>
  ),
};
