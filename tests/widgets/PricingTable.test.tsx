import React from 'react';
import { render, screen, fireEvent } from '../../tests/test-utils';
import { PricingTable } from '../../src/widgets/PricingTable';
import { PricingTableWidgetData } from '../../src/components/Widget/types';
import PricingTableWidget from '../../src/components/Widget/renderers/PricingTableWidget';

// Mock the icons
jest.mock('../../src/icons/IconComponents', () => ({
  CheckIcon: () => <span data-testid="check-icon">✓</span>,
  CloseSmallIcon: () => <span data-testid="close-icon">✗</span>,
}));

describe('PricingTable', () => {
  const mockTiers = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      currency: '$',
      period: 'mo',
      features: [
        { text: 'Feature 1', included: true },
        { text: 'Feature 2', included: false },
      ],
      buttonText: 'Get Started',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 59,
      currency: '$',
      period: 'mo',
      popular: true,
      features: [
        { text: 'Feature 1', included: true },
        { text: 'Feature 2', included: true },
      ],
      buttonText: 'Upgrade',
    },
  ];

  it('renders correctly', () => {
    render(<PricingTable tiers={mockTiers} />);
    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('renders feature icons correctly', () => {
    render(<PricingTable tiers={mockTiers} />);
    const checks = screen.getAllByTestId('check-icon');
    const crosses = screen.getAllByTestId('close-icon');

    // 1 Check in Basic, 2 Checks in Pro = 3 total
    expect(checks).toHaveLength(3);
    // 1 Cross in Basic, 0 Crosses in Pro = 1 total
    expect(crosses).toHaveLength(1);
  });

  it('calls onButtonClick when button is clicked', () => {
    const handleClick = jest.fn();
    const tiersWithAction = [
      {
        ...mockTiers[0],
        onButtonClick: handleClick,
      }
    ];
    render(<PricingTable tiers={tiersWithAction} />);
    fireEvent.click(screen.getByText('Get Started'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('PricingTableWidget', () => {
  const mockData: PricingTableWidgetData = {
    tiers: [
      {
        id: 'tier1',
        name: 'Starter',
        price: 'Free',
        features: [],
        buttonText: 'Sign Up'
      }
    ]
  };

  it('renders through widget renderer', () => {
    render(<PricingTableWidget data={mockData} />);
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Free')).toBeInTheDocument();
  });
});
