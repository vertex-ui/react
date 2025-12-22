import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Flex } from '../../components/Flex';

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

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap={16}>
      <BoxItem>Item 1</BoxItem>
      <BoxItem>Item 2</BoxItem>
      <BoxItem>Item 3</BoxItem>
    </Flex>
  ),
};

export const Center: Story = {
  render: () => (
    <Flex justify="center" align="center" style={{ height: '200px', border: '1px dashed #ccc' }}>
      <BoxItem>Centered Content</BoxItem>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Flex justify="between" align="center" style={{ width: '100%' }}>
      <BoxItem>Left</BoxItem>
      <BoxItem>Center</BoxItem>
      <BoxItem>Right</BoxItem>
    </Flex>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Flex wrap="wrap" gap={16} style={{ width: '300px' }}>
      <BoxItem>Item 1</BoxItem>
      <BoxItem>Item 2</BoxItem>
      <BoxItem>Item 3</BoxItem>
      <BoxItem>Item 4</BoxItem>
      <BoxItem>Item 5</BoxItem>
      <BoxItem>Item 6</BoxItem>
    </Flex>
  ),
};

export const ColumnReverse: Story = {
  render: () => (
    <Flex direction="column-reverse" gap={16}>
      <BoxItem>First (displayed last)</BoxItem>
      <BoxItem>Second</BoxItem>
      <BoxItem>Third (displayed first)</BoxItem>
    </Flex>
  ),
};

export const AlignStretch: Story = {
  render: () => (
    <Flex align="stretch" gap={16} style={{ height: '150px' }}>
      <BoxItem>Item 1</BoxItem>
      <BoxItem>Item 2<br />Multiple<br />Lines</BoxItem>
      <BoxItem>Item 3</BoxItem>
    </Flex>
  ),
};

export const GapVariations: Story = {
  render: () => (
    <div>
      <h4>Gap 8px</h4>
      <Flex gap={8} style={{ marginBottom: '24px' }}>
        <BoxItem>Item 1</BoxItem>
        <BoxItem>Item 2</BoxItem>
        <BoxItem>Item 3</BoxItem>
      </Flex>
      
      <h4>Gap 24px</h4>
      <Flex gap={24} style={{ marginBottom: '24px' }}>
        <BoxItem>Item 1</BoxItem>
        <BoxItem>Item 2</BoxItem>
        <BoxItem>Item 3</BoxItem>
      </Flex>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div>
      <span>This is inline text </span>
      <Flex inline gap={8}>
        <BoxItem>Inline</BoxItem>
        <BoxItem>Flex</BoxItem>
      </Flex>
      <span> and more inline text.</span>
    </div>
  ),
};