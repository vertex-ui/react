import React from 'react';
import { render, screen } from '../test-utils';
import { InfoText } from '../../src/widgets/InfoText/InfoText';

describe('InfoText', () => {
  it('renders title and description (Base)', () => {
    // InfoText.Base uses 'heading' and 'subText' props, not 'title' and 'description'
    // Icon is required.
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
        icon={<svg data-testid="icon"><path d="M10 10" /></svg>}
      />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders stats variant', () => {
    // InfoText.Stat uses 'value' and 'label'. 'trend' is not supported props?
    // Using subText for trend or secondary info.
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

  it('renders feature variant', () => {
    render(
      <InfoText.Feature
        icon={<span>Icon</span>}
        title="Feature Title"
        description="Feature Desc"
        badge="New"
      />
    );
    expect(screen.getByText('Feature Title')).toBeInTheDocument();
    expect(screen.getByText('Feature Desc')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders compact variant', () => {
    render(
      <InfoText.Compact
        icon={<span>Icon</span>}
        text="Compact Text"
      />
    );
    expect(screen.getByText('Compact Text')).toBeInTheDocument();
  });

  it('renders vertical variant', () => {
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
});
