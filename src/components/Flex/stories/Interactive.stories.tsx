import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Flex } from '..';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BoxItem = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: '16px',
    background: '#e3f2fd',
    border: '1px solid #2196f3',
    borderRadius: '4px',
    textAlign: 'center',
  }}>
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Flex gap={16}>
      <BoxItem>Item 1</BoxItem>
      <BoxItem>Item 2</BoxItem>
      <BoxItem>Item 3</BoxItem>
    </Flex>
  ),
};

