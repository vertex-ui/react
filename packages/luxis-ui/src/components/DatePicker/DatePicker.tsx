"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '../Input';
import { Calendar } from './Calendar';
import { CalendarIcon } from '../../icons/IconComponents';
import { Size } from '../../theme';
import './DatePicker.css';
import type { DatePickerProps } from './DatePicker.types';



const formatDate = (date: Date | null, format: string = 'MM/DD/YYYY'): string => {
  if (!date) return '';
  
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  
  return format
    .replace('MM', month)
    .replace('DD', day)
    .replace('YYYY', year)
    .replace('M', (date.getMonth() + 1).toString())
    .replace('D', date.getDate().toString())
    .replace('YY', year.slice(-2));
};

const parseDate = (value: string): Date | null => {
  if (!value) return null;
  
  try {
    // Simple parsing for MM/DD/YYYY format
    const parts = value.split('/');
    if (parts.length === 3) {
      const month = parseInt(parts[0], 10) - 1;
      const day = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      
      const date = new Date(year, month, day);
      if (date.getMonth() === month && date.getDate() === day && date.getFullYear() === year) {
        return date;
      }
    }
    return null;
  } catch {
    return null;
  }
};

/**
 * DatePicker component - A professional date picker with calendar dropdown
 *
 * Features:
 * - Calendar view with month navigation
 * - Keyboard navigation support
 * - Customizable date ranges and disabled dates
 * - Professional design following modern UI patterns
 * - Accessibility support
 *
 * @example
 * Basic usage
 * ```tsx
 * <DatePicker
 *   label="Birth Date"
 *   value={birthDate}
 *   onChange={setBirthDate}
 *   placeholder="Select date"
 * />
 * ```
 *
 * @example
 * With constraints
 * ```tsx
 * <DatePicker
 *   label="Appointment Date"
 *   value={appointmentDate}
 *   onChange={setAppointmentDate}
 *   minDate={new Date()}
 *   maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
 * />
 * ```
 */
const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value = null,
      onChange,
      label,
      placeholder = 'Select date',
      helperText,
      error,
      success,
      size,
      fullWidth = false,
      disabled = false,
      required = false,
      minDate,
      maxDate,
      disabledDates,
      isDateDisabled,
      format = 'MM/DD/YYYY',
      showToday = true,
      className = '',
      inputClassName = '',
      dropdownClassName = '',
      clearable = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(() => formatDate(value, format));
    const [currentMonth, setCurrentMonth] = useState(() => value || new Date());
    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setInputValue(formatDate(value, format));
      if (value) {
        setCurrentMonth(value);
      }
    }, [value, format]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen]);

    const handleInputClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      
      const parsedDate = parseDate(newValue);
      if (parsedDate) {
        onChange?.(parsedDate);
        setCurrentMonth(parsedDate);
      }
    };

    const handleInputBlur = () => {
      // Validate and format the input value
      const parsedDate = parseDate(inputValue);
      if (parsedDate) {
        setInputValue(formatDate(parsedDate, format));
      } else if (inputValue && !parsedDate) {
        // Invalid date entered, reset to previous valid value
        setInputValue(formatDate(value, format));
      }
    };

    const handleDateSelect = (date: Date) => {
      onChange?.(date);
      setInputValue(formatDate(date, format));
      setIsOpen(false);
    };

    const handleTodayClick = () => {
      const today = new Date();
      handleDateSelect(today);
    };

    const handleClear = () => {
      onChange?.(null);
      setInputValue('');
      setIsOpen(false);
    };

    return (
      <div
        ref={containerRef}
        className={`lxs-datepicker ${className}`.trim()}
      >
        <Input
          ref={ref}
          label={label}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onClick={handleInputClick}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
          success={success}
          size={size}
          fullWidth={fullWidth}
          disabled={disabled}
          required={required}
          readOnly={false}
          rightIcon={<CalendarIcon size={16} />}
          className={`lxs-datepicker__input ${inputClassName}`.trim()}
          clearable={clearable}
          onClear={handleClear}
          {...props}
        />
        
        {isOpen && (
          <div
            ref={dropdownRef}
            className={`lxs-datepicker__dropdown ${dropdownClassName}`.trim()}
          >
            <Calendar
              value={value}
              onChange={handleDateSelect}
              currentMonth={currentMonth}
              onMonthChange={setCurrentMonth}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
              isDateDisabled={isDateDisabled}
            />
            
            {showToday && (
              <div className="lxs-datepicker__footer">
                <button
                  type="button"
                  className="lxs-datepicker__today-button"
                  onClick={handleTodayClick}
                >
                  Today
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };