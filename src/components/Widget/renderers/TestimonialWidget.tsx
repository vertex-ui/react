"use client";

import React, { useState, useCallback } from 'react';
import { Avatar } from '../../Avatar';
import { Typography } from '../../Typography';
import { Flex } from '../../Flex';
import { useTheme } from '../../../hooks/useTheme';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/IconComponents';
import type { TestimonialWidgetData } from '../types';

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
        <Typography variant="body1" textColor={tokens?.colors?.neutral?.[500] || '#666'}>
          No testimonials available
        </Typography>
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

  // Theme-specific styles
  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      padding: '48px 32px',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...(borderRadius && { borderRadius: tokens?.borderRadius?.xl || '16px' }),
      transition: 'all 0.3s ease',
      ...style,
    };

    switch (theme) {
      case 'minimal':
        return {
          ...baseStyles,
          background: 'transparent',
          padding: '48px 24px',
        };

      case 'card':
        return {
          ...baseStyles,
          background: '#ffffff',
          border: `1px solid ${tokens?.colors?.neutral?.[200] || '#e5e7eb'}`,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        };

      case 'gradient':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.25)',
        };

      case 'modern':
        return {
          ...baseStyles,
          background: tokens?.colors?.neutral?.[900] || '#111827',
          color: '#ffffff',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)',
        };

      case 'professional':
        return {
          ...baseStyles,
          background: '#ffffff',
          border: `1px solid ${tokens?.colors?.neutral?.[200] || '#e5e7eb'}`,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        };

      case 'glassmorphism':
        return {
          ...baseStyles,
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        };

      default:
        return baseStyles;
    }
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

  const containerStyles = getContainerStyles();
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
      <Typography
        variant="h4"
        weight="bold"
        textColor={textColor}
        align="center"
        style={{ fontSize: '20px', margin: 0, lineHeight: 1.3 }}
      >
        {currentTestimonial.author.name}
      </Typography>

      {/* Role & Company */}
      <Flex direction="column" align="center" gap="2px">
        {currentTestimonial.author.role && (
          <Typography
            variant="body2"
            textColor={secondaryTextColor}
            align="center"
            style={{ fontSize: '14px', lineHeight: 1.4 }}
          >
            {currentTestimonial.author.role}
          </Typography>
        )}
        {currentTestimonial.author.company && (
          <Typography
            variant="body2"
            weight="medium"
            textColor={secondaryTextColor}
            align="center"
            style={{ fontSize: '14px', lineHeight: 1.4 }}
          >
            {currentTestimonial.author.company}
          </Typography>
        )}
      </Flex>

      {/* Date */}
      {currentTestimonial.date && (
        <Typography
          variant="caption"
          textColor={secondaryTextColor}
          align="center"
          style={{ fontSize: '13px', opacity: 0.7 }}
        >
          {currentTestimonial.date}
        </Typography>
      )}
    </Flex>
  );

  return (
    <div className={className} style={containerStyles}>
      {/* Content Container */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="32px"
        style={{
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Author at Top */}
        {authorPosition === 'top' && renderAuthor()}

        {/* Quote Icon */}
        <div
          style={{
            fontSize: '48px',
            lineHeight: 1,
            color: theme === 'gradient' || theme === 'modern' 
              ? 'rgba(255, 255, 255, 0.2)' 
              : tokens?.colors?.neutral?.[300] || '#d1d5db',
            fontFamily: 'Georgia, serif',
            marginBottom: '-16px',
          }}
        >
          "
        </div>

        {/* Testimonial Content */}
        {currentTestimonial.content && (
          <Typography
            variant="body1"
            textColor={textColor}
            align="center"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: '700px',
            }}
          >
            {currentTestimonial.content}
          </Typography>
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
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: theme === 'gradient' || theme === 'modern' ? 'rgba(255, 255, 255, 0.15)' : '#ffffff',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              border: theme === 'gradient' || theme === 'modern' ? 'none' : `2px solid ${tokens?.colors?.neutral?.[200] || '#e5e7eb'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme === 'gradient' || theme === 'modern' ? '#ffffff' : tokens?.colors?.neutral?.[700] || '#374151',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Previous testimonial"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
            }}
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: theme === 'gradient' || theme === 'modern' ? 'rgba(255, 255, 255, 0.15)' : '#ffffff',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              border: theme === 'gradient' || theme === 'modern' ? 'none' : `2px solid ${tokens?.colors?.neutral?.[200] || '#e5e7eb'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme === 'gradient' || theme === 'modern' ? '#ffffff' : tokens?.colors?.neutral?.[700] || '#374151',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Next testimonial"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
            }}
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
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
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
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: currentIndex === index ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              onMouseEnter={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          ))}
        </Flex>
      )}
    </div>
  );
};

export default TestimonialWidget;
