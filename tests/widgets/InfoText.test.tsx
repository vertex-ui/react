import React from 'react';
import { render, screen } from '../test-utils';
import { InfoText } from '../../src/widgets/InfoText/InfoText';

describe('InfoText', () => {
  const Icon = () => <span data-testid="test-icon">Icon</span>;

  describe('InfoText.Base', () => {
    it('renders icon, heading and subtext', () => {
      render(
        <InfoText.Base
          icon={<Icon />}
          heading="Heading"
          subText="Subtext"
        />
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Heading')).toBeInTheDocument();
      expect(screen.getByText('Subtext')).toBeInTheDocument();
    });

    it('renders plain icon when iconCircle is false', () => {
      const { container } = render(
        <InfoText.Base
          icon={<Icon />}
          heading="Heading"
          iconCircle={false}
        />
      );
      expect(container.querySelector('.infotext-icon-plain')).toBeInTheDocument();
    });
  });

  describe('InfoText.Stat', () => {
    it('renders value, label and icon', () => {
      render(
        <InfoText.Stat
          icon={<Icon />}
          value="100"
          label="Total"
          subText="vs last week"
        />
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.getByText('Total')).toBeInTheDocument();
      expect(screen.getByText('vs last week')).toBeInTheDocument();
    });

    it('renders without icon', () => {
      render(<InfoText.Stat value="100" label="Total" />);
      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });
  });

  describe('InfoText.Feature', () => {
    it('renders icon, title, description and badge', () => {
      render(
        <InfoText.Feature
          icon={<Icon />}
          title="Feature Title"
          description="Feature Description"
          badge={<span>New</span>}
        />
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Feature Title')).toBeInTheDocument();
      expect(screen.getByText('Feature Description')).toBeInTheDocument();
      expect(screen.getByText('New')).toBeInTheDocument();
    });
  });

  describe('InfoText.Compact', () => {
    it('renders icon and text', () => {
      render(
        <InfoText.Compact
          icon={<Icon />}
          text="Compact Text"
        />
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Compact Text')).toBeInTheDocument();
    });
  });

  describe('InfoText.Vertical', () => {
    it('renders icon, heading and subtext in vertical layout', () => {
      const { container } = render(
        <InfoText.Vertical
          icon={<Icon />}
          heading="Vertical Heading"
          subText="Vertical Subtext"
        />
      );
      expect(container.querySelector('.infotext-vertical')).toBeInTheDocument();
      expect(screen.getByText('Vertical Heading')).toBeInTheDocument();
      expect(screen.getByText('Vertical Subtext')).toBeInTheDocument();
    });
  });
});
