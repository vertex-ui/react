import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Grid } from '../../components/Grid';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: '16px',
    background: '#e8f5e8',
    border: '1px solid #4caf50',
    borderRadius: '4px',
    textAlign: 'center',
  }}>
    {children}
  </div>
);

export const BasicGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <GridItem>xs=12</GridItem>
      </Grid>
      <Grid item xs={6}>
        <GridItem>xs=6</GridItem>
      </Grid>
      <Grid item xs={6}>
        <GridItem>xs=6</GridItem>
      </Grid>
      <Grid item xs={4}>
        <GridItem>xs=4</GridItem>
      </Grid>
      <Grid item xs={4}>
        <GridItem>xs=4</GridItem>
      </Grid>
      <Grid item xs={4}>
        <GridItem>xs=4</GridItem>
      </Grid>
    </Grid>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>Responsive Item 1</GridItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>Responsive Item 2</GridItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>Responsive Item 3</GridItem>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <GridItem>Responsive Item 4</GridItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GridItem>Responsive Item 5</GridItem>
      </Grid>
    </Grid>
  ),
};

export const AutoGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs="auto">
        <GridItem>Auto width</GridItem>
      </Grid>
      <Grid item xs="auto">
        <GridItem>Auto width with longer content</GridItem>
      </Grid>
      <Grid item xs="auto">
        <GridItem>Auto</GridItem>
      </Grid>
    </Grid>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <GridItem>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div style={{ background: '#fff3e0', padding: '8px', borderRadius: '4px' }}>
                Nested 1
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ background: '#fff3e0', padding: '8px', borderRadius: '4px' }}>
                Nested 2
              </div>
            </Grid>
          </Grid>
        </GridItem>
      </Grid>
      <Grid item xs={6}>
        <GridItem>Regular Item</GridItem>
      </Grid>
    </Grid>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <div>
      <h4>Spacing = 0</h4>
      <Grid container spacing={0} style={{ marginBottom: '24px' }}>
        <Grid item xs={4}><GridItem>No spacing</GridItem></Grid>
        <Grid item xs={4}><GridItem>No spacing</GridItem></Grid>
        <Grid item xs={4}><GridItem>No spacing</GridItem></Grid>
      </Grid>
      
      <h4>Spacing = 2</h4>
      <Grid container spacing={2} style={{ marginBottom: '24px' }}>
        <Grid item xs={4}><GridItem>Small spacing</GridItem></Grid>
        <Grid item xs={4}><GridItem>Small spacing</GridItem></Grid>
        <Grid item xs={4}><GridItem>Small spacing</GridItem></Grid>
      </Grid>
      
      <h4>Spacing = 4</h4>
      <Grid container spacing={4}>
        <Grid item xs={4}><GridItem>Large spacing</GridItem></Grid>
        <Grid item xs={4}><GridItem>Large spacing</GridItem></Grid>
        <Grid item xs={4}><GridItem>Large spacing</GridItem></Grid>
      </Grid>
    </div>
  ),
};

export const CustomBreakpoints: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
        <GridItem>Custom breakpoint behavior</GridItem>
      </Grid>
      <Grid item xs={12} sm={4} md={6} lg={8} xl={9}>
        <GridItem>Complementary sizing</GridItem>
      </Grid>
    </Grid>
  ),
};