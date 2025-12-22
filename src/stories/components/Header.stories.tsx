import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Avatar } from '../../components/Avatar';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Application Name',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'My Dashboard',
    userSubtitle: 'Welcome back, John!',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Project Manager',
    actions: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button variant="ghost" size="sm">Help</Button>
        <Button variant="outline" size="sm">Settings</Button>
        <Avatar size="sm" fallback="JD" />
      </div>
    ),
  },
};

export const WithLogo: Story = {
  args: {
    logo: (
      <div style={{ 
        width: '32px', 
        height: '32px', 
        backgroundColor: '#4f46e5', 
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        V
      </div>
    ),
    title: 'Vertex UI',
    userSubtitle: 'Component Library',
  },
};

export const WithNavigation: Story = {
  args: {
    title: 'Admin Panel',
    actions: (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button variant="ghost" size="sm">🔔</Button>
        <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: 'Simple Header',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Header',
    userSubtitle: 'With shadow effect',
  },
};

export const Sticky: Story = {
  args: {
    title: 'Sticky Header',
    userSubtitle: 'Sticks to top when scrolling',
  },
  render: (args) => (
    <div>
      <Header {...args} />
      <div style={{ height: '2000px', padding: '20px', background: '#f5f5f5' }}>
        <h2>Scroll down to see the sticky header behavior</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>This is paragraph {i + 1}. Keep scrolling to see more content and notice how the header sticks to the top.</p>
        ))}
      </div>
    </div>
  ),
};

export const FullFeatured: Story = {
  args: {
    logo: (
      <div style={{ 
        width: '40px', 
        height: '40px', 
        backgroundColor: '#10b981', 
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px'
      }}>
        A
      </div>
    ),
    title: 'Acme Corporation',
    userSubtitle: 'Employee Portal',
    actions: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button variant="ghost" size="sm">🔍</Button>
        <Button variant="ghost" size="sm">🔔</Button>
        <Button variant="ghost" size="sm">💬</Button>
        <div style={{ width: '1px', height: '24px', backgroundColor: '#e5e7eb', margin: '0 8px' }} />
        <Avatar 
          size="sm" 
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" 
          alt="Sarah Johnson"
        />
      </div>
    ),
  },
};