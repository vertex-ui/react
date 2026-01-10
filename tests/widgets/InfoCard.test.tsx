import React from 'react';
import { render, screen } from '../test-utils';
import { InfoCard } from '../../src/widgets/InfoCard/InfoCard';

describe('InfoCard', () => {
  describe('InfoCard.Base', () => {
    it('renders icon, text and subText', () => {
      const Icon = () => <span data-testid="test-icon">icon</span>;
      render(
        <InfoCard.Base
          icon={<Icon />}
          text="Main Text"
          subText="Sub Text"
        />
      );

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Main Text')).toBeInTheDocument();
      expect(screen.getByText('Sub Text')).toBeInTheDocument();
    });

    it('applies icon variant class', () => {
      const Icon = () => <span>icon</span>;
      const { container } = render(
        <InfoCard.Base
          icon={<Icon />}
          text="Text"
          iconVariant="success"
        />
      );

      expect(container.querySelector('.infocard-icon--success')).toBeInTheDocument();
    });
  });

  describe('InfoCard.Metric', () => {
    it('renders value and label', () => {
      render(
        <InfoCard.Metric
          value="100"
          label="Total"
        />
      );

      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.getByText('Total')).toBeInTheDocument();
    });

    it('renders with custom class name', () => {
      const { container } = render(
        <InfoCard.Metric
          value="100"
          className="custom-metric"
        />
      );

      // Card renders the class on the root element, but it might be wrapped by withParsedClasses
      // We look for the class in the container
      const card = container.querySelector('.custom-metric');
      expect(card).toBeInTheDocument();
    });
  });
});
