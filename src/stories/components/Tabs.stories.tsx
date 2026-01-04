import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../../components/Tabs';
import { UserIcon, SettingsIcon, BellIcon } from '../../icons';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'enclosed', 'soft-rounded', 'solid-rounded', 'segmented'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    isLazy: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;
// ...removed duplicate Basic story...

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Line (Default)</h3>
        <Tabs variant="line" defaultValue="1">
          <TabList>
            <Tab value="1">Tab 1</Tab>
            <Tab value="2">Tab 2</Tab>
            <Tab value="3">Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">Content 1</TabPanel>
            <TabPanel value="2">Content 2</TabPanel>
            <TabPanel value="3">Content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Enclosed</h3>
        <Tabs variant="enclosed" defaultValue="1">
          <TabList>
            <Tab value="1">Tab 1</Tab>
            <Tab value="2">Tab 2</Tab>
            <Tab value="3">Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">Content 1</TabPanel>
            <TabPanel value="2">Content 2</TabPanel>
            <TabPanel value="3">Content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Soft Rounded</h3>
        <Tabs variant="soft-rounded" defaultValue="1">
          <TabList>
            <Tab value="1">Tab 1</Tab>
            <Tab value="2">Tab 2</Tab>
            <Tab value="3">Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">Content 1</TabPanel>
            <TabPanel value="2">Content 2</TabPanel>
            <TabPanel value="3">Content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Solid Rounded</h3>
        <Tabs variant="solid-rounded" defaultValue="1">
          <TabList>
            <Tab value="1">Tab 1</Tab>
            <Tab value="2">Tab 2</Tab>
            <Tab value="3">Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">Content 1</TabPanel>
            <TabPanel value="2">Content 2</TabPanel>
            <TabPanel value="3">Content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Segmented (Professional)</h3>
        <Tabs variant="segmented" defaultValue="1">
          <TabList>
            <Tab value="1">All Orders</Tab>
            <Tab value="2">Completed</Tab>
            <Tab value="3">In progress</Tab>
            <Tab value="4">Canceled</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="1">All Orders Content</TabPanel>
            <TabPanel value="2">Completed Orders Content</TabPanel>
            <TabPanel value="3">In Progress Orders Content</TabPanel>
            <TabPanel value="4">Canceled Orders Content</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  ),
};
   
export const WithIcons: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="profile">
      <TabList>
        <Tab value="profile" icon={<UserIcon />}>Profile</Tab>
        <Tab value="settings" icon={<SettingsIcon />}>Settings</Tab>
        <Tab value="notifications" icon={<BellIcon />}>Notifications</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="profile">Profile Content</TabPanel>
        <TabPanel value="settings">Settings Content</TabPanel>
        <TabPanel value="notifications">Notifications Content</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <Tabs {...args} orientation="vertical" defaultValue="1" style={{ height: '300px' }}>
      <TabList>
        <Tab value="1">Account</Tab>
        <Tab value="2">Password</Tab>
        <Tab value="3">Preferences</Tab>
        <Tab value="4">Notifications</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="1">Account Settings</TabPanel>
        <TabPanel value="2">Password Settings</TabPanel>
        <TabPanel value="3">Preferences Settings</TabPanel>
        <TabPanel value="4">Notifications Settings</TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

export const Scrollable: Story = {
  render: (args) => (
    <div style={{ maxWidth: '400px', border: '1px solid #eee', padding: '20px' }}>
      <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
        Resize the container or view on mobile to see scrolling.
      </p>
      <Tabs {...args} defaultValue="1">
        <TabList>
          {Array.from({ length: 15 }).map((_, i) => (
            <Tab key={i} value={`${i + 1}`}>
              Tab {i + 1}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Array.from({ length: 15 }).map((_, i) => (
            <TabPanel key={i} value={`${i + 1}`}>
              Content for Tab {i + 1}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  ),
};

export const WithScrollControls: Story = {
  render: (args) => (
    <div style={{ maxWidth: '500px', border: '1px solid #eee', padding: '20px' }}>
      <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
        Scroll controls appear when tabs overflow.
      </p>
      <Tabs {...args} defaultValue="1">
        <TabList showScrollControls>
          {Array.from({ length: 15 }).map((_, i) => (
            <Tab key={i} value={`${i + 1}`}>
              Long Tab Name {i + 1}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Array.from({ length: 15 }).map((_, i) => (
            <TabPanel key={i} value={`${i + 1}`}>
              Content for Tab {i + 1}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  ),
};
