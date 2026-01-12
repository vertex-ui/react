# ContactForm Examples

## Basic Usage

The `ContactForm` widget provides a simple interface for user inquiries.

```tsx
import { ContactForm } from 'src/widgets/ContactForm';

const BasicExample = () => (
  <ContactForm
    title="Contact Us"
    description="We'd love to hear from you."
  />
);
```

## Customization Examples

### Card Variant with Custom Fields

You can wrap the form in a card and customize field labels.

```tsx
import { ContactForm } from 'src/widgets/ContactForm';

const CustomExample = () => (
  <ContactForm
    variant="card"
    title="Sales Inquiry"
    submitLabel="Request Quote"
    fields={{
      nameLabel: "Full Name",
      messageLabel: "Project Details",
      showCompany: true,
      showPhone: true
    }}
  />
);
```

## Enterprise Scenarios

### API Integration

Handle form submissions by integrating with your backend API.

```tsx
import { ContactForm } from 'src/widgets/ContactForm';

const EnterpriseExample = () => {
  const handleSubmit = async (data) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Submission error', error);
      throw error; // Component handles error state if needed
    }
  };

  return (
    <ContactForm
      title="Support Ticket"
      onSubmit={handleSubmit}
      successMessage="Ticket created successfully. ID: #12345"
    />
  );
};
```

### Custom Styling

Apply enterprise branding using custom CSS classes or inline styles.

```tsx
import { ContactForm } from 'src/widgets/ContactForm';

const StyledExample = () => (
  <ContactForm
    style={{ maxWidth: '600px', margin: '0 auto' }}
    className="enterprise-contact-form"
    fields={{
      emailLabel: "Work Email"
    }}
  />
);
```

## Accessibility Example

The component uses semantic HTML and standard inputs. Ensure your environment supports keyboard navigation.

```tsx
import { ContactForm } from 'src/widgets/ContactForm';

const A11yExample = () => (
  <section aria-labelledby="contact-heading">
    <h2 id="contact-heading" className="sr-only">Contact Form</h2>
    <ContactForm
      title="Accessible Form"
      fields={{
        nameLabel: "Name (Required)",
      }}
    />
  </section>
);
```
