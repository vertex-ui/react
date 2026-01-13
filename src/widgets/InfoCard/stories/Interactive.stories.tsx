import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Widget } from '../../../components/Widget';
import { within, expect } from '@storybook/test';

export default {
  title: 'Widgets/InfoCard',
  component: Widget,
};

export const Base = {
  render: () => (
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
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Information')).toBeInTheDocument();
    await expect(canvas.getByText('This is an info card.')).toBeInTheDocument();
  }
};

export const BaseVariants = {
  render: () => (
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
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Primary Info')).toBeInTheDocument();
    await expect(canvas.getByText('Success Info')).toBeInTheDocument();
    await expect(canvas.getByText('Warning Info')).toBeInTheDocument();
  }
};

export const Metric = {
  render: () => (
    <Widget
      config={{
        type: 'metric',
        data: { value: 42, label: 'Active Users' },
        settings: { theme: 'modern', variant: 'primary', size: 'md' },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Active Users')).toBeInTheDocument();
    await expect(canvas.getByText('42')).toBeInTheDocument();
  }
};

export const MetricCustom = {
  render: () => (
    <Widget
      config={{
        type: 'metric',
        data: { value: '99.9%', label: 'Uptime' },
        settings: { theme: 'modern', variant: 'info', size: 'md' },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Uptime')).toBeInTheDocument();
    await expect(canvas.getByText('99.9%')).toBeInTheDocument();
  }
};
