import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Timeline } from '../../src/components/Timeline/Timeline';

describe('Timeline', () => {
  const defaultSteps = [
    { label: 'Step 1', description: 'Description 1' },
    { label: 'Step 2' },
    { label: 'Step 3' }
  ];

  it('renders string steps correctly', () => {
    const steps = ['Step 1', 'Step 2'];
    render(<Timeline steps={steps} currentStep={0} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('renders object steps with descriptions', () => {
    render(<Timeline steps={defaultSteps} currentStep={0} />);
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  it('indicates current step as active', () => {
    const { container } = render(<Timeline steps={defaultSteps} currentStep={1} />);
    const activeStep = container.querySelector('.timeline-step--active');
    expect(activeStep).toHaveTextContent('Step 2');

    // Step 1 should be completed
    const completedStep = container.querySelector('.timeline-step--completed');
    expect(completedStep).toHaveTextContent('Step 1');
  });

  it('renders checkmark for completed steps', () => {
    const { container } = render(<Timeline steps={defaultSteps} currentStep={1} showCheckmarks={true} />);
    expect(container.querySelector('.timeline-step-checkmark')).toBeInTheDocument();
  });

  it('renders numbers for numbered variant', () => {
    const { container } = render(<Timeline steps={defaultSteps} currentStep={0} variant="numbered" />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders custom icon', () => {
    const steps = [
      { label: 'Step 1', icon: <span data-testid="custom-icon">Icon</span> }
    ];
    render(<Timeline steps={steps} currentStep={0} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('handles step click', () => {
    const handleClick = jest.fn();
    const steps = [
      { label: 'Step 1', onClick: handleClick }
    ];
    render(<Timeline steps={steps} currentStep={0} />);

    fireEvent.click(screen.getByText('Step 1').closest('.timeline-step')!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies styling props', () => {
    // When using custom render, the first child is the ThemeProvider div
    const { container } = render(
      <Timeline
        steps={defaultSteps}
        currentStep={0}
        orientation="vertical"
        color="error"
        size="lg"
      />
    );
    // Query for the timeline element inside the container
    const timeline = container.querySelector('.timeline');
    expect(timeline).toHaveClass('timeline--vertical');
    expect(timeline).toHaveClass('timeline--error');
    expect(timeline).toHaveClass('timeline--lg');
  });

  it('fills connectors correctly', () => {
    const { container } = render(<Timeline steps={defaultSteps} currentStep={2} />);
    // Step 1 and 2 connectors should be filled (indices 0 and 1)
    const connectors = container.querySelectorAll('.timeline-connector--filled');
    expect(connectors).toHaveLength(2);
  });
});
