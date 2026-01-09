import React from 'react';
import { render, screen } from '../../../test-utils';
import TextWidget from '../../../../src/components/Widget/renderers/TextWidget';
import { TextWidgetData } from '../../../../src/components/Widget/types';

describe('TextWidget', () => {
  const defaultData: TextWidgetData = {
    title: 'Text Widget Title',
    content: 'This is the content of the text widget.',
    caption: 'Optional caption',
  };

  it('renders title, content and caption', () => {
    render(<TextWidget data={defaultData} />);
    expect(screen.getByText('Text Widget Title')).toBeInTheDocument();
    expect(screen.getByText('This is the content of the text widget.')).toBeInTheDocument();
    expect(screen.getByText('Optional caption')).toBeInTheDocument();
  });

  it('renders actions', () => {
    const dataWithActions: TextWidgetData = {
      ...defaultData,
      actions: [
        { label: 'Action 1', type: 'button', onClick: jest.fn() },
        { label: 'Action 2', type: 'link', href: '/link' }
      ]
    };
    render(<TextWidget data={dataWithActions} />);
    expect(screen.getByText('Action 1')).toBeInTheDocument();
    expect(screen.getByText('Action 2')).toBeInTheDocument();
  });

  it('renders with InfoText.Stat when theme is minimal and icon provided', () => {
    const dataWithIcon: TextWidgetData = {
      ...defaultData,
      icon: <span>Icon</span>
    };
    render(
      <TextWidget
        data={dataWithIcon}
        settings={{ theme: 'minimal' }}
      />
    );
    // InfoText.Stat renders value (title) and label (caption)
    expect(screen.getByText('Text Widget Title')).toBeInTheDocument();
    expect(screen.getByText('Optional caption')).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('applies custom styling settings', () => {
    const { container } = render(
      <TextWidget
        data={defaultData}
        settings={{
          alignment: 'center',
          backgroundColor: 'red'
        }}
      />
    );
    const card = container.querySelector('.vtx-text-widget');
    expect(card).toHaveStyle({ textAlign: 'center' });
    expect(card).toHaveStyle({ backgroundColor: 'red' });
  });

  it('adapts variants based on size', () => {
    const { rerender } = render(
        <TextWidget data={defaultData} settings={{ size: 'sm' }} />
    );
    expect(screen.getByText('Text Widget Title').tagName).toMatch(/H[3-6]/);

    rerender(<TextWidget data={defaultData} settings={{ size: 'lg' }} />);
    expect(screen.getByText('Text Widget Title').tagName).toMatch(/H[1-4]/);
  });
});
