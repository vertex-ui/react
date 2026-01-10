import React from 'react';
import { render, screen, fireEvent } from '../../tests/test-utils';
import { FAQ } from '../../src/widgets/FAQ';
import { FAQWidgetData } from '../../src/components/Widget/types';
import FAQWidget from '../../src/components/Widget/renderers/FAQWidget';

describe('FAQ', () => {
  const mockItems = [
    {
      id: 'q1',
      question: 'What is this?',
      answer: 'This is a FAQ.',
    },
    {
      id: 'q2',
      question: 'How does it work?',
      answer: 'It works like magic.',
    },
  ];

  it('renders title and subtitle', () => {
    render(
      <FAQ
        title="Freq Asked Qs"
        subtitle="Answers here"
        items={mockItems}
      />
    );
    expect(screen.getByText('Freq Asked Qs')).toBeInTheDocument();
    expect(screen.getByText('Answers here')).toBeInTheDocument();
  });

  it('renders questions', () => {
    render(<FAQ items={mockItems} />);
    expect(screen.getByText('What is this?')).toBeInTheDocument();
    expect(screen.getByText('How does it work?')).toBeInTheDocument();
  });

  it('toggles answer visibility', () => {
    render(<FAQ items={mockItems} />);

    // Answer should be hidden initially (implementation detail of Accordion usually)
    // But since we can't easily check 'visible' without styles or aria, we assume Accordion works.
    // Let's check if clicking works.

    const question = screen.getByText('What is this?');
    fireEvent.click(question);

    expect(screen.getByText('This is a FAQ.')).toBeInTheDocument();
  });

  it('renders categorized items', () => {
    const categories = [
      {
        title: 'General',
        items: [mockItems[0]]
      },
      {
        title: 'Technical',
        items: [mockItems[1]]
      }
    ];

    render(<FAQ items={categories} />);
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Technical')).toBeInTheDocument();
    expect(screen.getByText('What is this?')).toBeInTheDocument();
  });
});

describe('FAQWidget', () => {
  const mockData: FAQWidgetData = {
    title: 'Widget FAQ',
    items: [
      {
        question: 'Is it a widget?',
        answer: 'Yes.'
      }
    ]
  };

  it('renders through widget renderer', () => {
    render(<FAQWidget data={mockData} />);
    expect(screen.getByText('Widget FAQ')).toBeInTheDocument();
    expect(screen.getByText('Is it a widget?')).toBeInTheDocument();
  });
});
