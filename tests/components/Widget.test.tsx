import React from 'react';
import { render, screen } from '../test-utils';
import { Widget } from '../../src/components/Widget/Widget';
import { WidgetConfig } from '../../src/components/Widget/types';

describe('Widget', () => {
  const metricConfig: WidgetConfig = {
    type: 'metric',
    data: {
      label: 'Metric Widget',
      value: '100',
      trend: { value: 10, label: 'up' }
    }
  };

  const infoConfig: WidgetConfig = {
    type: 'info',
    data: {
      icon: <span>Icon</span>,
      text: 'Info Widget'
    }
  };

  it('renders single metric widget', () => {
    render(<Widget config={metricConfig} />);
    expect(screen.getByText('Metric Widget')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('renders single info widget', () => {
    render(<Widget config={infoConfig} />);
    expect(screen.getByText('Info Widget')).toBeInTheDocument();
  });

  it('renders grid layout', () => {
    const gridConfig: WidgetConfig = {
      type: 'grid',
      data: {
        widgets: [metricConfig, infoConfig]
      },
      grid: { mobile: 1, tablet: 2, desktop: 2 }
    };

    const { container } = render(<Widget config={gridConfig} />);
    // Check for grid classes
    const grid = container.querySelector('.vtx-widget-grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('mobile-cols-1');
    expect(grid).toHaveClass('desktop-cols-2');

    // Check content
    expect(screen.getByText('Metric Widget')).toBeInTheDocument();
    expect(screen.getByText('Info Widget')).toBeInTheDocument();
  });

  it('renders auto grid for array data', () => {
    // When config.data is an array, it should auto-grid
    const arrayConfig: WidgetConfig = {
      type: 'metric', // Base type for items
      data: [
        { label: 'Metric 1', value: '10' },
        { label: 'Metric 2', value: '20' }
      ]
    };

    const { container } = render(<Widget config={arrayConfig} />);
    expect(container.querySelector('.vtx-widget-grid')).toBeInTheDocument();
    expect(screen.getByText('Metric 1')).toBeInTheDocument();
    expect(screen.getByText('Metric 2')).toBeInTheDocument();
  });

  it('handles unknown widget type safely', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const badConfig: WidgetConfig = {
      type: 'unknown-type' as any,
      data: {}
    };
    const { container } = render(<Widget config={badConfig} />);
    // When using wrapper, container is the ThemeProvider wrapper, so it's not empty.
    // We should check that it contains no significant content or check innerHTML
    // Or check if it only contains the toast container if that's part of ThemeProvider
    // The safest is checking if it doesn't contain any widget-specific classes or elements
    expect(container.querySelector('.vtx-card')).not.toBeInTheDocument();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('Unknown widget type'));
    spy.mockRestore();
  });
});
