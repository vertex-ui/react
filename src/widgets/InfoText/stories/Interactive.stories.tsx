import { FaEnvelope, FaUsers, FaRocket, FaCheck, FaMobileAlt, FaChartLine, FaGlobe, FaBox, FaUndo } from 'react-icons/fa';
import { Widget } from '../../../components/Widget';
import { Grid } from '../../../components/Grid';
import { Divider } from '../../../components/Divider';

export default {
  title: 'Widgets/InfoText',
  component: Widget,
};

export const Base = () => (
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
);

export const Stat = () => (
  <Widget
    config={{
      type: 'metric',
      data: { value: '1,234', label: 'Active Users', trend: { direction: 'up', value: 12 } },
      settings: { theme: 'modern', variant: 'primary', size: 'md', showTrend: true },
    }}
  />
);

export const Feature = () => (
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
);

export const Compact = () => (
  <Widget
    config={{
      type: 'info',
      data: { icon: <FaCheck />, title: 'Payment successful' },
      settings: { theme: 'compact', variant: 'success', size: 'sm' },
    }}
  />
);

export const MixedUsage = () => (
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
);

export const GridLayout = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Widget config={{ type: 'metric', data: { value: '1,234', label: 'Active Users' }, settings: { variant: 'primary' } }} />
    </Grid>
    <Grid item xs={12} md={6}>
      <Widget config={{ type: 'metric', data: { value: '$45,678', label: 'Total Revenue' }, settings: { variant: 'success' } }} />
    </Grid>
  </Grid>
);

// ==================== Feature Grid Example ====================

export const FeatureGrid = () => (
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
);
