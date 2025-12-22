import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../../components/Link';
import {
  DownloadIcon,
  ShareIcon,
  ChevronRightIcon,
  HomeIcon,
} from '../../icons/IconComponents';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'small'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'inherit'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Click here to learn more',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" variant="h1">Heading 1 Link</Link>
      <Link href="#" variant="h2">Heading 2 Link</Link>
      <Link href="#" variant="h3">Heading 3 Link</Link>
      <Link href="#" variant="h4">Heading 4 Link</Link>
      <Link href="#" variant="h5">Heading 5 Link</Link>
      <Link href="#" variant="h6">Heading 6 Link</Link>
      <Link href="#" variant="body1">Body 1 Link (default)</Link>
      <Link href="#" variant="body2">Body 2 Link</Link>
      <Link href="#" variant="caption">Caption Link</Link>
      <Link href="#" variant="small">Small Link</Link>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" color="primary">Primary Link</Link>
      <Link href="#" color="secondary">Secondary Link</Link>
      <Link href="#" color="neutral">Neutral Link</Link>
      <div style={{ background: '#1a1a1a', padding: '16px', borderRadius: '8px' }}>
        <Link href="#" color="inherit" style={{ color: 'white' }}>Inherit Color Link</Link>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" leftIcon={<HomeIcon size={18} />}>
        Go to Home
      </Link>
      <Link href="#" leftIcon={<DownloadIcon size={18} />}>
        Download File
      </Link>
      <Link href="#" rightIcon={<ChevronRightIcon size={18} />}>
        Continue Reading
      </Link>
      <Link 
        href="#" 
        leftIcon={<ShareIcon size={18} />}
        rightIcon={<ChevronRightIcon size={18} />}
      >
        Share with Icons
      </Link>
    </div>
  ),
};

export const NoUnderline: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" noUnderline>
        Link without underline
      </Link>
      <Link href="#" noUnderline variant="h5">
        Large link no underline
      </Link>
      <Link href="#" noUnderline leftIcon={<HomeIcon size={18} />}>
        No underline with icon
      </Link>
    </div>
  ),
};

export const External: Story = {
  args: {
    href: 'https://github.com',
    external: true,
    children: 'Visit GitHub (opens in new tab)',
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" disabled>
        Disabled Link
      </Link>
      <Link href="#" disabled color="secondary">
        Disabled Secondary Link
      </Link>
      <Link href="#" disabled leftIcon={<DownloadIcon size={18} />}>
        Disabled with Icon
      </Link>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', lineHeight: '1.6' }}>
      <p style={{ fontSize: '16px', color: '#374151' }}>
        Lorem ipsum dolor sit amet, <Link href="#">consectetur adipiscing elit</Link>, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, <Link href="#" color="secondary">quis nostrud exercitation</Link> ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
        <Link href="#" noUnderline>Duis aute irure dolor</Link> in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  ),
};

export const CustomComponent: Story = {
  render: () => {
    // Mock router link component
    const MockRouterLink = ({ to, children, ...props }: any) => (
      <a href={to} {...props}>
        {children} (using custom component)
      </a>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Link 
          component={MockRouterLink}
          componentProps={{ to: '/dashboard' }}
        >
          Dashboard (Custom Router Link)
        </Link>
        <Link 
          component={MockRouterLink}
          componentProps={{ to: '/profile' }}
          leftIcon={<HomeIcon size={18} />}
        >
          Profile (with Icon)
        </Link>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', color: '#6b7280' }}>Primary Color</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link href="#" variant="h4" color="primary">Large Primary Link</Link>
          <Link href="#" variant="body1" color="primary">Regular Primary Link</Link>
          <Link href="#" variant="small" color="primary">Small Primary Link</Link>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', color: '#6b7280' }}>With Icons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link href="#" variant="h5" leftIcon={<DownloadIcon size={20} />}>
            Download Resources
          </Link>
          <Link href="#" variant="body1" leftIcon={<ShareIcon size={18} />}>
            Share This Page
          </Link>
          <Link href="#" variant="body2" rightIcon={<ChevronRightIcon size={16} />}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  ),
};
