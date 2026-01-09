import React, { useState, useId } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import './ContactForm.css';

export interface ContactFormProps {
  title?: string;
  description?: string;
  submitLabel?: string;
  successMessage?: string;
  fields?: {
    nameLabel?: string;
    emailLabel?: string;
    phoneLabel?: string;
    messageLabel?: string;
    showPhone?: boolean;
    showCompany?: boolean;
    companyLabel?: string;
  };
  onSubmit?: (data: Record<string, any>) => Promise<void> | void;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'card' | 'minimal';
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  description,
  submitLabel = 'Send Message',
  successMessage = 'Thank you for your message. We will get back to you soon!',
  fields = {},
  onSubmit,
  className = '',
  style,
  variant = 'minimal',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const messageId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      // Simulate delay if no onSubmit provided for demo
      if (!onSubmit) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setSuccess(true);
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`vtx-contact-success ${className}`} style={style}>
        <h3>Message Sent!</h3>
        <p>{successMessage}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSuccess(false)}
          style={{ marginTop: '16px' }}
        >
          Send Another
        </Button>
      </div>
    );
  }

  const formContent = (
    <form className="vtx-contact-form" onSubmit={handleSubmit}>
      {(title || description) && (
        <div className="vtx-contact-header">
          {title && <h3 className="vtx-contact-form-title">{title}</h3>}
          {description && <p className="vtx-contact-form-description">{description}</p>}
        </div>
      )}

      <Input
        name="name"
        label={fields.nameLabel || 'Name'}
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />

      <Input
        name="email"
        type="email"
        label={fields.emailLabel || 'Email'}
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />

      {fields.showPhone && (
        <Input
          name="phone"
          type="tel"
          label={fields.phoneLabel || 'Phone'}
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />
      )}

      {fields.showCompany && (
        <Input
          name="company"
          label={fields.companyLabel || 'Company'}
          value={formData.company}
          onChange={handleChange}
          fullWidth
        />
      )}

      <div className="vtx-contact-field">
        <label
          htmlFor={messageId}
          style={{ marginBottom: '4px', fontSize: '0.875rem', fontWeight: 500 }}
        >
          {fields.messageLabel || 'Message'} <span style={{ color: 'red' }}>*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          className="vtx-contact-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" loading={loading} fullWidth>
        {submitLabel}
      </Button>
    </form>
  );

  if (variant === 'card') {
    return (
      <Card className={className} style={style}>
        {formContent}
      </Card>
    );
  }

  return <div className={className} style={style}>{formContent}</div>;
};

export default ContactForm;
