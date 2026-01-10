import React from 'react';
import { Accordion } from '../../components/Accordion';
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

  const getAccordionVariant = (v: string): 'default' | 'bordered' | 'separated' | 'flush' => {
    if (v === 'boxed') return 'default';
    if (v === 'minimal') return 'flush';
    return 'default';
  };

  const renderAccordionSafe = (faqItems: FAQItem[]) => {
    const accordionItems = faqItems.map((item, idx) => ({
      id: item.id || `faq-${idx}`,
      header: item.question,
      children: <div className="vtx-faq-answer">{item.answer}</div>
    }));

    return (
      <Accordion
        items={accordionItems}
        allowMultiple={allowMultiple}
        variant={getAccordionVariant(variant)}
        className={`vtx-faq-accordion ${variant === 'boxed' ? '' : 'accordion--divider'}`}
      />
    );
  };

  return (
    <div className={`vtx-faq-wrapper ${className}`} style={style}>
      {title && <h2 className="vtx-faq-title">{title}</h2>}
      {subtitle && <p className="vtx-faq-subtitle">{subtitle}</p>}

      {isCategories(items) ? (
        items.map((cat, idx) => (
          <div key={idx} className="vtx-faq-category">
            {cat.title && <h3 className="vtx-faq-category-title">{cat.title}</h3>}
            {renderAccordionSafe(cat.items)}
          </div>
        ))
      ) : (
        renderAccordionSafe(items as FAQItem[])
      )}
    </div>
  );
};

export default FAQ;
