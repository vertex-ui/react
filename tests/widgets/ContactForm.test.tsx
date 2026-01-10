import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../tests/test-utils';
import { ContactForm } from '../../src/widgets/ContactForm';
import { ContactFormWidgetData } from '../../src/components/Widget/types';
import ContactFormWidget from '../../src/components/Widget/renderers/ContactFormWidget';

describe('ContactForm', () => {
  it('renders correctly', () => {
    render(<ContactForm title="Contact Us" description="Send a message" />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Send a message')).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();

    // Now that we have a proper label-id association in the component, we can use getByLabelText
    // We match roughly "Message" because of the * which might be in the same label node or separate
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
  });

  it('renders optional fields', () => {
    render(
      <ContactForm
        fields={{
          showPhone: true,
          showCompany: true
        }}
      />
    );
    expect(screen.getByLabelText(/Phone/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/)).toBeInTheDocument();
  });

  it('submits the form', async () => {
    const handleSubmit = jest.fn();
    render(<ContactForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john@example.com' } });

    // Use getByLabelText for message too
    fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'Hello there' } });

    // Use getAllByText and pick the button to be safe, or use role
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });

  it('shows success message after submission', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john@test.com' } });
    fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'Hello there' } });

    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });
  });
});

describe('ContactFormWidget', () => {
  const mockData: ContactFormWidgetData = {
    title: 'Widget Form',
    submitLabel: 'Go',
  };

  it('renders through widget renderer', () => {
    render(<ContactFormWidget data={mockData} />);
    expect(screen.getByText('Widget Form')).toBeInTheDocument();
    // Use role for button to avoid ambiguity if text appears elsewhere
    expect(screen.getByRole('button', { name: 'Go' })).toBeInTheDocument();
  });
});
