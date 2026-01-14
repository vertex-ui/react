import React from 'react';
import { render, screen } from '../test-utils';
import { InfoText } from '../../src/widgets/InfoText/InfoText';

describe('InfoText', () => {
  describe('InfoText.Base', () => {
    it('renders with heading and subText', () => {
      render(
        <InfoText.Base
          icon={<span>Icon</span>}
          heading="Info Title"
          subText="Info Description"
        />
      );
      expect(screen.getByText('Info Title')).toBeInTheDocument();
      expect(screen.getByText('Info Description')).toBeInTheDocument();
    });

    it('renders with icon', () => {
      render(
        <InfoText.Base
          heading="With Icon"
          icon={<span data-testid="icon">★</span>}
        />
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('applies icon variant classes', () => {
      const { container } = render(
        <InfoText.Base
          heading="Success"
          icon={<span>✓</span>}
          iconVariant="success"
        />
      );
      expect(container.querySelector('.infotext-icon--success')).toBeInTheDocument();
    });

    it('renders plain icon when iconCircle is false', () => {
      const { container } = render(
        <InfoText.Base
          heading="Plain"
          icon={<span>★</span>}
          iconCircle={false}
        />
      );
      expect(container.querySelector('.infotext-icon-plain')).toBeInTheDocument();
      expect(container.querySelector('.infotext-icon')).not.toBeInTheDocument();
    });
  });

  describe('InfoText.Stat', () => {
    it('renders stat value and label', () => {
      render(
        <InfoText.Stat
          label="Total Users"
          value="1,234"
          subText="+12%"
        />
      );
      expect(screen.getByText('Total Users')).toBeInTheDocument();
      expect(screen.getByText('1,234')).toBeInTheDocument();
      expect(screen.getByText('+12%')).toBeInTheDocument();
    });

    it('renders optional icon', () => {
      render(
        <InfoText.Stat
          label="Stats"
          value="100"
          icon={<span data-testid="stat-icon">📊</span>}
        />
      );
      expect(screen.getByTestId('stat-icon')).toBeInTheDocument();
    });

    it('does not render icon wrapper if icon missing', () => {
      const { container } = render(
        <InfoText.Stat label="Stats" value="100" />
      );
      expect(container.querySelector('.infotext-icon-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('InfoText.Feature', () => {
    it('renders title, description and badge', () => {
      render(
        <InfoText.Feature
          icon={<span>Icon</span>}
          title="Feature Title"
          description="Feature Desc"
          badge={<span data-testid="badge">New</span>}
        />
      );
      expect(screen.getByText('Feature Title')).toBeInTheDocument();
      expect(screen.getByText('Feature Desc')).toBeInTheDocument();
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    });

    it('renders without badge', () => {
      const { container } = render(
        <InfoText.Feature
          icon={<span>Icon</span>}
          title="Feature"
          description="Desc"
        />
      );
      expect(container.querySelector('.infotext-badge')).not.toBeInTheDocument();
    });
  });

  describe('InfoText.Compact', () => {
    it('renders compact text', () => {
      render(
        <InfoText.Compact
          icon={<span>Icon</span>}
          text="Compact Text"
        />
      );
      expect(screen.getByText('Compact Text')).toBeInTheDocument();
    });

    it('renders small icon variant', () => {
      const { container } = render(
        <InfoText.Compact
          icon={<span>Icon</span>}
          text="Text"
          iconVariant="warning"
        />
      );
      expect(container.querySelector('.infotext-icon-small--warning')).toBeInTheDocument();
    });

    it('renders plain small icon', () => {
      const { container } = render(
        <InfoText.Compact
          icon={<span>Icon</span>}
          text="Text"
          iconCircle={false}
        />
      );
      expect(container.querySelector('.infotext-icon-small-plain')).toBeInTheDocument();
    });
  });

  describe('InfoText.Vertical', () => {
    it('renders vertical content', () => {
      render(
        <InfoText.Vertical
          icon={<span>Icon</span>}
          heading="Vertical Heading"
          subText="Vertical Sub"
        />
      );
      expect(screen.getByText('Vertical Heading')).toBeInTheDocument();
      expect(screen.getByText('Vertical Sub')).toBeInTheDocument();
    });

    it('renders without subText', () => {
      render(
        <InfoText.Vertical
          icon={<span>Icon</span>}
          heading="Heading Only"
        />
      );
      expect(screen.getByText('Heading Only')).toBeInTheDocument();
    });
  });
});
