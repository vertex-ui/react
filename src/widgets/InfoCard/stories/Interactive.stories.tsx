import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Widget } from '../../../components/Widget';

export default {
  title: 'Widgets/InfoCard',
  component: Widget,
};

export const Base = () => (
  <Widget
    config={{
      type: 'info',
      data: {
        icon: <FaInfoCircle />,
        text: 'Information',
        subText: 'This is an info card.',
      },
      settings: { theme: 'modern', variant: 'primary' },
    }}
  />
);

export const BaseVariants = () => (
  <>
    <Widget
      config={{
        type: 'info',
        data: { icon: <FaInfoCircle />, text: 'Primary Info', subText: 'Primary variant.' },
        settings: { theme: 'modern', variant: 'primary' },
      }}
    />
    <div style={{ marginTop: 16 }} />
    <Widget
      config={{
        type: 'info',
        data: { icon: <FaCheckCircle />, text: 'Success Info', subText: 'Success variant.' },
        settings: { theme: 'modern', variant: 'success' },
      }}
    />
    <div style={{ marginTop: 16 }} />
    <Widget
      config={{
        type: 'info',
        data: { icon: <FaExclamationTriangle />, text: 'Warning Info', subText: 'Warning variant.' },
        settings: { theme: 'modern', variant: 'warning' },
      }}
    />
  </>
);

export const Metric = () => (
  <Widget
    config={{
      type: 'metric',
      data: { value: 42, label: 'Active Users' },
      settings: { theme: 'modern', variant: 'primary', size: 'md' },
    }}
  />
);

export const MetricCustom = () => (
  <Widget
    config={{
      type: 'metric',
      data: { value: '99.9%', label: 'Uptime' },
      settings: { theme: 'modern', variant: 'info', size: 'md' },
    }}
  />
);
