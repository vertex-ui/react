import React from 'react';
import { render, screen } from '../test-utils';
import { DashboardCard } from '../../src/widgets/DashboardCard/DashboardCard';

describe('DashboardCard', () => {
  describe('StatCard', () => {
    const mockData = {
      label: 'Total Revenue',
      value: '$50,000',
      subtitle: 'vs last month',
      trend: { value: 12, label: 'increase', isPositive: true }
    };

    it('renders label and value', () => {
      render(<DashboardCard type="stat" data={mockData} />);
      expect(screen.getByText('Total Revenue')).toBeInTheDocument();
      expect(screen.getByText('$50,000')).toBeInTheDocument();
      expect(screen.getByText('vs last month')).toBeInTheDocument();
    });

    it('renders trend indicator', () => {
      render(<DashboardCard type="stat" data={mockData} />);
      expect(screen.getByText('12%')).toBeInTheDocument();
      expect(screen.getByText('increase')).toBeInTheDocument();
      expect(screen.getByLabelText('Up')).toBeInTheDocument();
    });

    it('renders negative trend', () => {
      const negativeData = { ...mockData, trend: { value: 5, label: 'decrease', isPositive: false } };
      render(<DashboardCard type="stat" data={negativeData} />);
      expect(screen.getByLabelText('Down')).toBeInTheDocument();
    });

    it('applies theme and variant classes', () => {
      const { container } = render(
        <DashboardCard
          type="stat"
          data={mockData}
          settings={{ theme: 'success', variant: 'filled' }}
        />
      );
      const card = container.querySelector('.dashboard-card');
      expect(card).toHaveClass('dashboard-card--success');
      expect(card).toHaveClass('dashboard-card--filled');
    });
  });

  describe('ProgressCard', () => {
    const mockData = {
      label: 'Project Status',
      current: 75,
      target: 100,
      unit: 'tasks',
      subtitle: 'In progress'
    };

    it('renders label and subtitle', () => {
      render(<DashboardCard type="progress" data={mockData} />);
      expect(screen.getByText('Project Status')).toBeInTheDocument();
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('renders values and percentage', () => {
      render(<DashboardCard type="progress" data={mockData} />);
      expect(screen.getByText('75 tasks / 100 tasks')).toBeInTheDocument();
      expect(screen.getByText('75%')).toBeInTheDocument();
    });

    it('renders status badge when provided', () => {
      render(
        <DashboardCard
          type="progress"
          data={mockData}
          settings={{ status: 'on-track' }}
        />
      );
      expect(screen.getByText('on-track')).toBeInTheDocument();
    });
  });

  describe('ComparisonCard', () => {
    const mockData = {
      label: 'Sales vs Target',
      items: [
        { label: 'Sales', value: '$12,000' },
        { label: 'Target', value: '$10,000' }
      ]
    };

    it('renders main label', () => {
      render(<DashboardCard type="comparison" data={mockData} />);
      expect(screen.getByText('Sales vs Target')).toBeInTheDocument();
    });

    it('renders comparison items', () => {
      render(<DashboardCard type="comparison" data={mockData} />);
      expect(screen.getByText('Sales')).toBeInTheDocument();
      expect(screen.getByText('$12,000')).toBeInTheDocument();
      expect(screen.getByText('Target')).toBeInTheDocument();
      expect(screen.getByText('$10,000')).toBeInTheDocument();
    });

    it('renders vertical layout', () => {
      const { container } = render(
        <DashboardCard
          type="comparison"
          data={mockData}
          settings={{ layout: 'vertical' }}
        />
      );
      expect(container.querySelector('.dashboard-card--vertical')).toBeInTheDocument();
    });
  });

  describe('Common Props', () => {
    it('handles loading state', () => {
      render(<DashboardCard type="stat" data={{ label: '', value: '' }} loading />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('handles onClick', () => {
      const handleClick = jest.fn();
      render(
        <DashboardCard
          type="stat"
          data={{ label: 'Test', value: '1' }}
          onClick={handleClick}
        />
      );
      screen.getByText('Test').closest('.dashboard-card')?.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
