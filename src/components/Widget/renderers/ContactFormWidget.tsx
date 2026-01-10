import React from 'react';
import { ContactFormWidgetData, ContactFormWidgetSettings } from '../types';
import { ContactForm } from '../../../widgets/ContactForm';

interface ContactFormWidgetProps {
  data: ContactFormWidgetData;
  settings?: ContactFormWidgetSettings;
}

const ContactFormWidget: React.FC<ContactFormWidgetProps> = ({ data, settings = {} }) => {
  return (
    <ContactForm
      title={data.title as string}
      description={data.description as string}
      submitLabel={data.submitLabel}
      successMessage={data.successMessage}
      fields={data.fields}
      onSubmit={data.onSubmit}
      className={settings.className}
      style={settings.style}
      variant={settings.card ? 'card' : 'minimal'}
    />
  );
};

export default ContactFormWidget;
