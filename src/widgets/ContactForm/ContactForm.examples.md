# ContactForm Widget Examples

## Basic Usage

Render a contact form using the `Widget` component.

```tsx
import { Widget } from 'src/components/Widget';

const BasicExample = () => (
  <Widget
    config={{
      type: 'contact-form',
      data: {
        title: 'Contact Us',
        description: 'We would love to hear from you.',
        submitLabel: 'Send Message',
        fields: {
          nameLabel: 'Full Name',
          emailLabel: 'Email Address',
          messageLabel: 'Your Message'
        },
        onSubmit: async (data) => {
          console.log('Form submitted:', data);
        }
      }
    }}
  />
);
```

## Customization Examples

### Card Variant with Extra Fields

Wrap the form in a card and show additional fields.

```tsx
import { Widget } from 'src/components/Widget';

const CustomExample = () => (
  <Widget
    config={{
      type: 'contact-form',
      data: {
        title: 'Sales Inquiry',
        fields: {
          showCompany: true,
          showPhone: true,
          companyLabel: 'Organization',
          phoneLabel: 'Contact Number'
        }
      },
      settings: {
        card: true,
        variant: 'primary'
      }
    }}
  />
);
```

## Enterprise Scenarios

### API Integration

Handle submission with backend integration.

```tsx
import { Widget } from 'src/components/Widget';

const EnterpriseExample = () => {
  const handleSubmit = async (data) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Submission failed');
    } catch (err) {
      console.error(err);
      throw err; // Widget handles error state
    }
  };

  return (
    <Widget
      config={{
        type: 'contact-form',
        data: {
          title: 'Request Demo',
          successMessage: 'Thanks! A representative will contact you shortly.',
          onSubmit: handleSubmit
        },
        settings: {
          theme: 'professional',
          card: true
        }
      }}
    />
  );
};
```

## Accessibility Example

The widget manages form labels and ARIA attributes automatically.

```tsx
import { Widget } from 'src/components/Widget';

const A11yExample = () => (
  <section aria-label="Support Form">
    <Widget
      config={{
        type: 'contact-form',
        data: {
          title: 'Support',
          fields: {
            nameLabel: 'Name (Required)',
            emailLabel: 'Email (Required)'
          }
        }
      }}
    />
  </section>
);
```
