import React from 'react';
import { render, screen } from '../test-utils';
import { InfoListCard } from '../../src/widgets/InfoListCard/InfoListCard';

describe('InfoListCard', () => {
  const mockItems = [
    { label: 'Label 1', value: 'Value 1' },
    { label: 'Label 2', value: 'Value 2' },
    { label: 'Label 3', value: 'Value 3', hidden: true }
  ];

  it('renders heading when provided', () => {
    render(<InfoListCard items={mockItems} heading="Test Heading" />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders visible items', () => {
    render(<InfoListCard items={mockItems} />);
    expect(screen.getByText('Label 1')).toBeInTheDocument();
    expect(screen.getByText('Value 1')).toBeInTheDocument();
    expect(screen.getByText('Label 2')).toBeInTheDocument();
    expect(screen.getByText('Value 2')).toBeInTheDocument();
  });

  it('does not render hidden items', () => {
    render(<InfoListCard items={mockItems} />);
    expect(screen.queryByText('Label 3')).not.toBeInTheDocument();
    expect(screen.queryByText('Value 3')).not.toBeInTheDocument();
  });

  it('renders custom ReactNode for label and value', () => {
    const customItems = [
      {
        label: <span data-testid="custom-label">Custom Label</span>,
        value: <button>Action</button>
      }
    ];
    render(<InfoListCard items={customItems} />);
    expect(screen.getByTestId('custom-label')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('applies compact class', () => {
    const { container } = render(<InfoListCard items={mockItems} compact />);
    expect(container.querySelector('.info-list-card--compact')).toBeInTheDocument();
  });

  it('renders dividers when showDividers is true', () => {
    const { container } = render(<InfoListCard items={mockItems} showDividers />);
    // Divider usually renders an HR or a div with specific class
    expect(container.querySelectorAll('.vtx-divider')).toHaveLength(1); // Between 2 visible items
  });
});
