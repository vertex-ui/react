import React from 'react';
import { Accordion, AccordionItem } from '../../components/Accordion';
import './FAQ.css';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
  id?: string;
}

export interface FAQCategory {
  title?: string;
  items: FAQItem[];
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[] | FAQCategory[]; // Support flat list or categories
  allowMultiple?: boolean;
  variant?: 'default' | 'boxed' | 'minimal';
  className?: string;
  style?: React.CSSProperties;
}

const FAQ: React.FC<FAQProps> = ({
  title,
  subtitle,
  items,
  allowMultiple = false,
  variant = 'default',
  className = '',
  style,
}) => {
  // Helper to determine if items is a flat list or categories
  const isCategories = (items: FAQItem[] | FAQCategory[]): items is FAQCategory[] => {
    return items.length > 0 && 'items' in items[0];
  };

  const renderAccordion = (faqItems: FAQItem[]) => (
    <Accordion
      allowMultiple={allowMultiple}
      variant={variant === 'boxed' ? 'default' : 'minimal'} // Map widget variant to accordion variant
      className={`vtx-faq-accordion ${variant === 'boxed' ? '' : 'accordion--divider'}`}
    >
      {faqItems.map((item, idx) => (
        <AccordionItem
          key={item.id || idx}
          id={item.id || `faq-${idx}`}
          header={item.question}
        >
          <div className="vtx-faq-answer">
            {item.answer}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className={`vtx-faq-wrapper ${className}`} style={style}>
      {title && <h2 className="vtx-faq-title">{title}</h2>}
      {subtitle && <p className="vtx-faq-subtitle">{subtitle}</p>}

      {isCategories(items) ? (
        items.map((cat, idx) => (
          <div key={idx} className="vtx-faq-category">
            {cat.title && <h3 className="vtx-faq-category-title">{cat.title}</h3>}
            {renderAccordion(cat.items)}
          </div>
        ))
      ) : (
        renderAccordion(items as FAQItem[])
      )}
    </div>
  );
};

export default FAQ;
