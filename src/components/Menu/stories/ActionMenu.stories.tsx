import type { Meta, StoryObj } from '@storybook/react';
import ActionMenu from '../ActionMenu';
import {
  DownloadIcon,
  SettingsIcon,
  ShareIcon,
  UserIcon,
  CloseIcon,
  CodeIcon,
  MenuIcon,
  DocumentIcon,
} from '../../../icons/IconComponents';

const meta: Meta<typeof ActionMenu> = {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  {
    label: 'Edit',
    icon: <CodeIcon size={16} />,
    onClick: () => alert('Edit clicked'),
  },
  {
    label: 'Copy',
    icon: <DocumentIcon size={16} />,
    onClick: () => alert('Copy clicked'),
  },
  {
    label: 'Share',
    icon: <ShareIcon size={16} />,
    onClick: () => alert('Share clicked'),
  },
  {
    label: 'Download',
    icon: <DownloadIcon size={16} />,
    onClick: () => alert('Download clicked'),
  },
  {
    label: 'Delete',
    icon: <CloseIcon size={16} />,
    onClick: () => alert('Delete clicked'),
    variant: 'danger' as const,
  },
];

export const Default: Story = {
  args: {
    triggerLabel: 'Actions',
    items: basicItems,
  },
};

export const WithIcon: Story = {
  args: {
    triggerLabel: 'More',
    triggerIcon: <MenuIcon size={16} />,
    items: basicItems,
  },
};

export const IconOnly: Story = {
  args: {
    trigger: (
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          padding: '4px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          background: 'white',
          cursor: 'pointer',
        }}
      >
        <MenuIcon size={18} />
      </button>
    ),
    items: basicItems,
  },
};

export const BottomEnd: Story = {
  args: {
    triggerLabel: 'Actions',
    items: basicItems,
    position: 'bottom-end',
  },
};

export const TopStart: Story = {
  args: {
    triggerLabel: 'Actions',
    items: basicItems,
    position: 'top-start',
  },
};

export const WithDividers: Story = {
  args: {
    triggerLabel: 'User Menu',
    triggerIcon: <UserIcon size={16} />,
    items: [
      {
        label: 'Profile',
        icon: <UserIcon size={16} />,
        onClick: () => alert('Profile'),
      },
      {
        label: 'Settings',
        icon: <SettingsIcon size={16} />,
        onClick: () => alert('Settings'),
        divider: true,
      },
      {
        label: 'Logout',
        onClick: () => alert('Logout'),
        variant: 'danger' as const,
      },
    ],
  },
};

export const WithShortcuts: Story = {
  args: {
    triggerLabel: 'File',
    items: [
      {
        label: 'Copy',
        icon: <DocumentIcon size={16} />,
        shortcut: '⌘C',
        onClick: () => alert('Copy'),
      },
      {
        label: 'Share',
        icon: <ShareIcon size={16} />,
        shortcut: '⌘S',
        onClick: () => alert('Share'),
      },
      {
        label: 'Download',
        icon: <DownloadIcon size={16} />,
        shortcut: '⌘D',
        onClick: () => alert('Download'),
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    triggerLabel: 'Actions',
    items: basicItems,
    disabled: true,
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <button
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        Open Menu ▼
      </button>
    ),
    items: basicItems,
  },
};

export const CustomTriggerWithFunction: Story = {
  args: {
    trigger: ({ isOpen, toggle, disabled }) => (
      <button
        onClick={toggle}
        disabled={disabled}
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '2px solid #3b82f6',
          background: isOpen ? '#3b82f6' : 'white',
          color: isOpen ? 'white' : '#3b82f6',
          fontWeight: '600',
          fontSize: '14px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {isOpen ? 'Close Menu ▲' : 'Open Menu ▼'}
      </button>
    ),
    items: basicItems,
  },
};

export const InTable: Story = {
  render: () => (
    <div
      style={{
        width: '600px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f9fafb' }}>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Email</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Role</th>
            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
            { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
            { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
          ].map((user, idx) => (
            <tr key={idx} style={{ borderTop: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px' }}>{user.name}</td>
              <td style={{ padding: '12px' }}>{user.email}</td>
              <td style={{ padding: '12px' }}>{user.role}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>
                <ActionMenu
                  trigger={
                    <button
                      style={{
                        padding: '4px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <MenuIcon size={18} />
                    </button>
                  }
                  position="bottom-end"
                  items={[
                    {
                      label: 'View',
                      onClick: () => alert(`View ${user.name}`),
                    },
                    {
                      label: 'Edit',
                      icon: <CodeIcon size={16} />,
                      onClick: () => alert(`Edit ${user.name}`),
                    },
                    {
                      label: 'Delete',
                      icon: <CloseIcon size={16} />,
                      onClick: () => alert(`Delete ${user.name}`),
                      variant: 'danger',
                    },
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

export const WithActiveState: Story = {
  args: {
    triggerLabel: 'Status',
    items: [
      {
        label: 'Active',
        active: true,
        onClick: () => alert('Active selected'),
      },
      {
        label: 'Inactive',
        onClick: () => alert('Inactive selected'),
      },
      {
        label: 'Pending',
        onClick: () => alert('Pending selected'),
      },
    ],
  },
};
