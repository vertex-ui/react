"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useId } from '../../hooks';
import { useThemeContext } from '../../theme';
import { SearchIcon, CloseSmallIcon } from '../../icons/IconComponents';
import type { AutocompleteProps } from './Autocomplete.types';
import './Autocomplete.css';

/**
 * Autocomplete component - Text input with dropdown suggestions
 *
 * A comprehensive autocomplete component with support for custom option rendering,
 * validation states, loading states, and rich features like icons and descriptions.
 *
 * @example
 * <Autocomplete
 *   label="Search"
 *   placeholder="Type to search..."
 *   options={searchResults}
 *   onSelectOption={(value, option) => console.log('Selected:', value, option)}
 *   onChange={(value) => fetchResults(value)}
 * />
 */
const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      size,
      fullWidth = false,
      options = [],
      getOptionLabel = 'label',
      getOptionValue = 'value',
      getOptionDisabled = 'disabled',
      getOptionDescription = 'description',
      getOptionIcon = 'icon',
      noOptionsMessage = 'No options',
      loading = false,
      loadingMessage = 'Loading...',
      onChange,
      onSelectOption,
      showSearchIcon = false,
      clearable = false,
      onClear,
      className = '',
      wrapperClassName = '',
      labelClassName = '',
      inputClassName = '',
      dropdownClassName = '',
      renderOption,
      id: providedId,
      disabled = false,
      required = false,
      value: controlledValue,
      openOnFocus = true,
      minSearchLength = 0,
      disableClientFilter = false,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const inputSize = size || theme.defaultSize;

    const generatedId = useId('autocomplete');
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const successId = `${id}-success`;
    const listboxId = `${id}-listbox`;

    const [internalValue, setInternalValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const suppressNextOpenRef = useRef(false);

    const isControlled = controlledValue !== undefined;
    const inputValue = isControlled ? controlledValue : internalValue;
    const activeSearchQuery = isControlled ? controlledValue : searchQuery;

    // Helper to safely extract value from option using string key or function
    const extractValue = useCallback((option: any, getter: any): any => {
      if (typeof getter === 'function') {
        return getter(option);
      }
      return typeof option === 'object' && option !== null ? option[getter] : option;
    }, []);

    const filteredOptions = useMemo(() => {
      return disableClientFilter || !activeSearchQuery
        ? options
        : options.filter((option) => {
            const labelValue = String(extractValue(option, getOptionLabel));
            return labelValue.toLowerCase().includes(activeSearchQuery.toLowerCase());
          });
    }, [disableClientFilter, activeSearchQuery, options, extractValue, getOptionLabel]);

    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;
    const showClearButton = clearable && inputValue && String(inputValue).length > 0 && !disabled;
    const shouldShowDropdown =
      isOpen &&
      isFocused &&
      !disabled &&
      inputValue.length >= minSearchLength;

    const describedBy = [
      helperText && !error && !success && helperId,
      error && errorId,
      success && successId,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClassNames = [
      'lxs-autocomplete-wrapper',
      fullWidth && 'lxs-autocomplete-wrapper--full-width',
      wrapperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const inputContainerClassNames = [
      'lxs-autocomplete-container',
      `lxs-autocomplete-container--${inputSize}`,
      hasError && 'lxs-autocomplete-container--error',
      hasSuccess && 'lxs-autocomplete-container--success',
      disabled && 'lxs-autocomplete-container--disabled',
      isFocused && 'lxs-autocomplete-container--focused',
      shouldShowDropdown && 'lxs-autocomplete-container--open',
      (showSearchIcon || loading) && 'lxs-autocomplete-container--with-left-icon',
      showClearButton && 'lxs-autocomplete-container--with-right-icon',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const dropdownClassNames = [
      'lxs-autocomplete-dropdown',
      shouldShowDropdown && 'lxs-autocomplete-dropdown--open',
      dropdownClassName,
    ]
      .filter(Boolean)
      .join(' ');

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setIsFocused(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Reset highlighted index when filtered options change
    useEffect(() => {
      setHighlightedIndex(-1);
    }, [filteredOptions.length]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
        setSearchQuery(newValue);
      }
      setIsOpen(true);
      setHighlightedIndex(-1);
      onChange?.(newValue);
    }, [isControlled, onChange]);

    const handleInputFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (openOnFocus && !suppressNextOpenRef.current) {
        setIsOpen(true);
      }
      suppressNextOpenRef.current = false;
      onFocus?.(e);
    }, [openOnFocus, onFocus]);

    const handleInputBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      // Delay to allow option click to register
      setTimeout(() => {
        if (!wrapperRef.current?.contains(document.activeElement)) {
          setIsFocused(false);
          setIsOpen(false);
        }
      }, 200);
      onBlur?.(e);
    }, [onBlur]);

    const handleOptionClick = useCallback((option: any) => {
      if (extractValue(option, getOptionDisabled)) {
        return;
      }

      const value = String(extractValue(option, getOptionValue));
      const labelStr = String(extractValue(option, getOptionLabel));

      if (!isControlled) {
        setInternalValue(labelStr);
        setSearchQuery('');
      }
      setIsOpen(false);
      onSelectOption?.(value, option);

      suppressNextOpenRef.current = true;
      inputRef.current?.focus();
    }, [extractValue, getOptionDisabled, getOptionValue, getOptionLabel, isControlled, onSelectOption]);

    const handleClear = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isControlled) {
        setInternalValue('');
        setSearchQuery('');
      }
      setIsOpen(false);
      onClear?.();
      onChange?.('');
      suppressNextOpenRef.current = true;
      inputRef.current?.focus();
    }, [isControlled, onClear, onChange]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!shouldShowDropdown || filteredOptions.length === 0) {
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev < filteredOptions.length - 1 ? prev + 1 : 0;
            if (extractValue(filteredOptions[next], getOptionDisabled)) {
              return next < filteredOptions.length - 1 ? next + 1 : 0;
            }
            return next;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : filteredOptions.length - 1;
            if (extractValue(filteredOptions[next], getOptionDisabled)) {
              return next > 0 ? next - 1 : filteredOptions.length - 1;
            }
            return next;
          });
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleOptionClick(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    }, [shouldShowDropdown, filteredOptions, highlightedIndex, extractValue, getOptionDisabled, handleOptionClick]);

    const renderDefaultOption = useCallback((option: any, index: number) => {
      const labelStr = String(extractValue(option, getOptionLabel));
      const value = String(extractValue(option, getOptionValue));
      const description = extractValue(option, getOptionDescription);
      const iconNode = extractValue(option, getOptionIcon);
      const isDisabled = extractValue(option, getOptionDisabled);
      const isHighlighted = index === highlightedIndex;
      const itemId = `${listboxId}-option-${value || index}`;

      return (
        <div
          key={value || index}
          id={itemId}
          role="option"
          aria-selected={isHighlighted}
          aria-disabled={isDisabled}
          className={[
            'lxs-autocomplete-option',
            isHighlighted && 'lxs-autocomplete-option--highlighted',
            isDisabled && 'lxs-autocomplete-option--disabled',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => handleOptionClick(option)}
          onMouseDown={(e) => {
            e.preventDefault(); // prevent input blur before click registers
            handleOptionClick(option);
          }}
          onMouseEnter={() => !isDisabled && setHighlightedIndex(index)}
        >
          {iconNode && <span className="lxs-autocomplete-option__icon" aria-hidden="true">{iconNode}</span>}
          <div className="lxs-autocomplete-option__content">
            <div className="lxs-autocomplete-option__label">{labelStr}</div>
            {description && (
              <div className="lxs-autocomplete-option__description">{description}</div>
            )}
          </div>
        </div>
      );
    }, [extractValue, getOptionLabel, getOptionValue, getOptionDescription, getOptionIcon, getOptionDisabled, highlightedIndex, handleOptionClick, listboxId]);

    const renderDropdownContent = useCallback(() => {
      if (loading) {
        return (
          <div className="lxs-autocomplete-message lxs-autocomplete-message--loading">
            <svg
              className="lxs-autocomplete-spinner"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="lxs-autocomplete-spinner__track"
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="lxs-autocomplete-spinner__path"
                fill="currentColor"
                d="M10 2C5.582 2 2 5.582 2 10h2c0-3.314 2.686-6 6-6V2z"
              />
            </svg>
            <span>{loadingMessage}</span>
          </div>
        );
      }

      if (filteredOptions.length === 0) {
        return (
          <div className="lxs-autocomplete-message lxs-autocomplete-message--empty">
            {noOptionsMessage}
          </div>
        );
      }

      return (
        <div
          role="listbox"
          id={listboxId}
          className="lxs-autocomplete-options"
          ref={dropdownRef}
        >
          {filteredOptions.map((option, index) =>
            renderOption ? renderOption(option, index) : renderDefaultOption(option, index)
          )}
        </div>
      );
    }, [loading, loadingMessage, filteredOptions, noOptionsMessage, listboxId, renderOption, renderDefaultOption]);

    const activeDescendantId = highlightedIndex >= 0 && filteredOptions.length > highlightedIndex
        ? `${listboxId}-option-${extractValue(filteredOptions[highlightedIndex], getOptionValue) || highlightedIndex}`
        : undefined;

    return (
      <div className={wrapperClassNames} ref={wrapperRef}>
        {label && (
          <label htmlFor={id} className={`lxs-autocomplete-label ${labelClassName}`.trim()}>
            {label}
            {required && (
              <span className="lxs-autocomplete-label__required" aria-label="required">
                {' '}
                *
              </span>
            )}
          </label>
        )}
        <div className={inputContainerClassNames}>
          {showSearchIcon && !loading && (
            <span className="lxs-autocomplete-icon lxs-autocomplete-icon--left" aria-hidden="true">
              <SearchIcon size={16} />
            </span>
          )}
          {loading && (
            <span className="lxs-autocomplete-icon lxs-autocomplete-icon--left" aria-hidden="true">
              <svg
                className="lxs-autocomplete-icon-spinner"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle
                  className="lxs-autocomplete-icon-spinner__track"
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="lxs-autocomplete-icon-spinner__path"
                  fill="currentColor"
                  d="M8 2C4.686 2 2 4.686 2 8h2c0-2.21 1.79-4 4-4V2z"
                />
              </svg>
            </span>
          )}
          <input
            ref={(node) => {
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
              }
              inputRef.current = node;
            }}
            id={id}
            type="text"
            className={`lxs-autocomplete-input ${inputClassName}`.trim()}
            disabled={disabled}
            required={required}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            aria-invalid={hasError}
            aria-describedby={describedBy || undefined}
            aria-autocomplete="list"
            aria-controls={shouldShowDropdown ? listboxId : undefined}
            aria-expanded={shouldShowDropdown}
            aria-activedescendant={shouldShowDropdown ? activeDescendantId : undefined}
            role="combobox"
            autoComplete="off"
            {...props}
          />
          {showClearButton && (
            <button
              type="button"
              className="lxs-autocomplete-clear"
              onClick={handleClear}
              aria-label="Clear input"
              tabIndex={-1}
            >
              <CloseSmallIcon size={16} aria-hidden="true" />
            </button>
          )}
          {shouldShowDropdown && (
            <div className={dropdownClassNames}>{renderDropdownContent()}</div>
          )}
        </div>
        {helperText && !error && !success && (
          <p id={helperId} className="lxs-autocomplete-helper">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="lxs-autocomplete-error" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p id={successId} className="lxs-autocomplete-success" role="status">
            {success}
          </p>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
