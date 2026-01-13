import { FaEnvelope, FaUsers, FaRocket, FaCheck, FaMobileAlt, FaChartLine, FaGlobe, FaBox, FaUndo } from 'react-icons/fa';
import { Widget } from '../../../components/Widget';
import { Grid } from '../../../components/Grid';
import { Divider } from '../../../components/Divider';
import { within, expect } from '@storybook/test';

export default {
  title: 'Widgets/InfoText',
  component: Widget,
};

export const Base = {
  render: () => (
    <Widget
      config={{
        type: 'info',
        data: {
          icon: <FaEnvelope />,
          title: 'Email Notifications',
          text: 'Receive updates about your account activity',
        },
        settings: { theme: 'modern', variant: 'primary' },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Email Notifications')).toBeInTheDocument();
    await expect(canvas.getByText('Receive updates about your account activity')).toBeInTheDocument();
  }
};

export const Stat = {
  render: () => (
    <Widget
      config={{
        type: 'metric',
        data: { value: '1,234', label: 'Active Users', trend: { direction: 'up', value: 12 } },
        settings: { theme: 'modern', variant: 'primary', size: 'md', showTrend: true },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Active Users')).toBeInTheDocument();
    await expect(canvas.getByText('1,234')).toBeInTheDocument();
  }
};

export const Feature = {
  render: () => (
    <Widget
      config={{
        type: 'info',
        data: {
          icon: <FaRocket />,
          title: 'Fast Performance',
          text: 'Lightning-fast load times with optimized rendering and efficient code splitting.',
          badge: { text: 'New', variant: 'primary' },
        },
        settings: { theme: 'modern', variant: 'primary' },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Fast Performance')).toBeInTheDocument();
    await expect(canvas.getByText('New')).toBeInTheDocument();
  }
};

export const Compact = {
  render: () => (
    <Widget
      config={{
        type: 'info',
        data: { icon: <FaCheck />, title: 'Payment successful' },
        settings: { theme: 'compact', variant: 'success', size: 'sm' },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Payment successful')).toBeInTheDocument();
  }
};

export const MixedUsage = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '640px' }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Dashboard Statistics</h3>
        <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
          <Widget config={{ type: 'metric', data: { value: '24,531', label: 'Page Views' }, settings: { variant: 'primary' } }} />
          <Widget config={{ type: 'metric', data: { value: '2m 34s', label: 'Avg. Session' }, settings: { variant: 'info' } }} />
        </div>
      </div>

      <Divider />

      <div>
        <h3 style={{ marginBottom: 12 }}>Quick Info</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Widget config={{ type: 'info', data: { icon: <FaGlobe />, title: 'Available in 12 languages' } }} />
          <Widget config={{ type: 'info', data: { icon: <FaBox />, title: 'Free shipping on orders over $50' }, settings: { variant: 'success' } }} />
          <Widget config={{ type: 'info', data: { icon: <FaUndo />, title: '30-day money-back guarantee' }, settings: { variant: 'info' } }} />
        </div>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Dashboard Statistics')).toBeInTheDocument();
    await expect(canvas.getByText('24,531')).toBeInTheDocument();
    await expect(canvas.getByText('Available in 12 languages')).toBeInTheDocument();
  }
};

export const GridLayout = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Widget config={{ type: 'metric', data: { value: '1,234', label: 'Active Users' }, settings: { variant: 'primary' } }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget config={{ type: 'metric', data: { value: '$45,678', label: 'Total Revenue' }, settings: { variant: 'success' } }} />
      </Grid>
    </Grid>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Active Users')).toBeInTheDocument();
    await expect(canvas.getByText('Total Revenue')).toBeInTheDocument();
  }
};

// ==================== Feature Grid Example ====================

export const FeatureGrid = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Widget config={{ type: 'info', data: { icon: <FaMobileAlt />, title: 'Mobile Ready', subText: 'Responsive design' } }} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Widget config={{ type: 'info', data: { icon: <FaUsers />, title: 'Community Support', subText: '24/7 access' } }} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Widget config={{ type: 'info', data: { icon: <FaChartLine />, title: 'Completion Rate', subText: '89% - Above target' } }} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Widget config={{ type: 'metric', data: { value: '2m 34s', label: 'Avg. Response Time' }, settings: { variant: 'warning' } }} />
      </Grid>
    </Grid>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Mobile Ready')).toBeInTheDocument();
    await expect(canvas.getByText('Community Support')).toBeInTheDocument();
  }
};
