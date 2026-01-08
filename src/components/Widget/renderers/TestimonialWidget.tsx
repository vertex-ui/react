"use client";

import React, { useState, useCallback } from 'react';
import { Avatar } from '../../Avatar';
import { Text } from '../../Text';
import { Flex } from '../../Flex';
import { useTheme } from '../../../hooks/useTheme';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/IconComponents';
import type { TestimonialWidgetData } from '../types';
import './TestimonialWidget.css';

export interface TestimonialWidgetProps {
  data: TestimonialWidgetData;
  className?: string;
  theme?: 'minimal' | 'card' | 'gradient' | 'modern' | 'professional' | 'glassmorphism';
  style?: React.CSSProperties;
  autoplay?: boolean;
  autoplayDelay?: number;
  borderRadius?: boolean;
  authorPosition?: 'top' | 'bottom';
}

const TestimonialWidget: React.FC<TestimonialWidgetProps> = ({
  data,
  className = '',
  theme = 'card',
  style,
  autoplay = false,
  autoplayDelay = 5000,
  borderRadius = true,
  authorPosition = 'top',
}) => {
  const { tokens } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { testimonials, showNavigation = true, showDots = true } = data;

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, testimonials.length]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return (
      <Flex justify="center" align="center" style={{ padding: '48px 24px' }}>
        <Text variant="body1" textColor={tokens?.colors?.neutral?.[500] || '#666'}>
          No testimonials available
        </Text>
      </Flex>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  // Render stars for rating
  const renderStars = (rating: number) => {
    return (
      <Flex gap="4px" justify={theme === 'minimal' ? 'start' : 'center'}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={star <= rating ? '#fbbf24' : '#e5e7eb'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </Flex>
    );
  };

  const getContainerClassName = () => {
    return [
      'vtx-testimonial-widget',
      borderRadius && 'vtx-testimonial-widget--rounded',
      `vtx-testimonial-widget--${theme}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  };

  const getTextColor = (): string => {
    if (theme === 'gradient' || theme === 'modern') return '#ffffff';
    if (theme === 'glassmorphism') return '#1f2937';
    return tokens?.colors?.neutral?.[900] || '#111827';
  };

  const getSecondaryTextColor = (): string => {
    if (theme === 'gradient' || theme === 'modern') return 'rgba(255, 255, 255, 0.8)';
    if (theme === 'glassmorphism') return '#4b5563';
    return tokens?.colors?.neutral?.[600] || '#4b5563';
  };

  const containerClassName = getContainerClassName();
  const textColor = getTextColor();
  const secondaryTextColor = getSecondaryTextColor();

  // Author section component
  const renderAuthor = () => (
    <Flex direction="column" align="center" gap="8px">
      {/* Avatar */}
      {currentTestimonial.author.avatar && (
        <Avatar
          src={currentTestimonial.author.avatar}
          alt={currentTestimonial.author.name}
          size="lg"
          style={{
            width: '80px',
            height: '80px',
            border: theme === 'gradient' || theme === 'modern' 
              ? '3px solid rgba(255, 255, 255, 0.2)' 
              : `3px solid ${tokens?.colors?.neutral?.[200] || '#e5e7eb'}`,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      )}

      {/* Author Name */}
      <Text
        variant="h4"
        weight="bold"
        textColor={textColor}
        align="center"
        style={{ fontSize: '20px', margin: 0, lineHeight: 1.3 }}
      >
        {currentTestimonial.author.name}
      </Text>

      {/* Role & Company */}
      <Flex direction="column" align="center" gap="2px">
        {currentTestimonial.author.role && (
          <Text
            variant="body2"
            textColor={secondaryTextColor}
            align="center"
            style={{ fontSize: '14px', lineHeight: 1.4 }}
          >
            {currentTestimonial.author.role}
          </Text>
        )}
        {currentTestimonial.author.company && (
          <Text
            variant="body2"
            weight="medium"
            textColor={secondaryTextColor}
            align="center"
            style={{ fontSize: '14px', lineHeight: 1.4 }}
          >
            {currentTestimonial.author.company}
          </Text>
        )}
      </Flex>

      {/* Date */}
      {currentTestimonial.date && (
        <Text
          variant="caption"
          textColor={secondaryTextColor}
          align="center"
          style={{ fontSize: '13px', opacity: 0.7 }}
        >
          {currentTestimonial.date}
        </Text>
      )}
    </Flex>
  );

  return (
    <div className={containerClassName} style={style}>
      {/* Content Container */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="32px"
        className="vtx-testimonial-widget-content"
      >
        {/* Author at Top */}
        {authorPosition === 'top' && renderAuthor()}

        {/* Quote Icon */}
        <div
          className={`vtx-testimonial-quote-icon ${
            theme === 'gradient' || theme === 'modern'
              ? 'vtx-testimonial-quote-icon--light'
              : 'vtx-testimonial-quote-icon--dark'
          }`}
        >
          "
        </div>

        {/* Testimonial Content */}
        {currentTestimonial.content && (
          <Text
            variant="body1"
            textColor={textColor}
            align="center"
            className="vtx-testimonial-text"
          >
            {currentTestimonial.content}
          </Text>
        )}

        {/* Rating */}
        {currentTestimonial.rating && (
          <div style={{ marginTop: '-8px' }}>
            {renderStars(currentTestimonial.rating)}
          </div>
        )}

        {/* Author at Bottom */}
        {authorPosition === 'bottom' && (
          <div style={{ marginTop: '8px' }}>
            {renderAuthor()}
          </div>
        )}
      </Flex>

      {/* Navigation Buttons */}
      {testimonials.length > 1 && showNavigation && (
        <>
          <button
            onClick={prevTestimonial}
            className={`vtx-testimonial-nav-button vtx-testimonial-nav-button--prev ${
              theme === 'gradient' || theme === 'modern'
                ? 'vtx-testimonial-nav-button--light'
                : 'vtx-testimonial-nav-button--dark'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className={`vtx-testimonial-nav-button vtx-testimonial-nav-button--next ${
              theme === 'gradient' || theme === 'modern'
                ? 'vtx-testimonial-nav-button--light'
                : 'vtx-testimonial-nav-button--dark'
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {testimonials.length > 1 && showDots && (
        <Flex
          justify="center"
          gap="12px"
          className="vtx-testimonial-dots-container"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className="vtx-testimonial-dot"
              style={{
                width: currentIndex === index ? '40px' : '12px',
                height: '12px',
                borderRadius: currentIndex === index ? '6px' : '50%',
                border: 'none',
                backgroundColor:
                  currentIndex === index
                    ? theme === 'gradient' || theme === 'modern'
                      ? '#ffffff'
                      : tokens?.colors?.primary?.[600] || '#2563eb'
                    : theme === 'gradient' || theme === 'modern'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : tokens?.colors?.neutral?.[300] || '#d1d5db',
                boxShadow: currentIndex === index ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </Flex>
      )}
    </div>
  );
};

export default TestimonialWidget;
