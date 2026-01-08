"use client";

import { CloseSmallIcon } from '../../icons/IconComponents';
import React, { useEffect, useRef, useState } from 'react';
import { useId } from '../../hooks';
import { Size, useThemeContext } from '../../theme';
import './RichTextEditor.css';

export interface RichTextEditorProps {
  /**
   * Label text displayed above the editor
   */
  label?: string;
  /**
   * Helper text displayed below the editor
   * Provides additional context or instructions
   */
  helperText?: string;
  /**
   * Error message - when provided, editor is shown in error state
   * Takes precedence over helperText when both are present
   */
  error?: string;
  /**
   * Success message - when provided, editor is shown in success state
   */
  success?: string;
  /**
   * Size of the editor
   * @default theme.defaultSize
   */
  size?: Size;
  /**
   * If true, editor will take full width of its container
   * @default true
   */
  fullWidth?: boolean;
  /**
   * If true, shows a clear button when editor has content
   * @default false
   */
  clearable?: boolean;
  /**
   * Callback fired when clear button is clicked
   */
  onClear?: () => void;
  /**
   * If true, shows a character counter below the editor
   * @default false
   */
  showCount?: boolean;
  /**
   * Maximum character length
   */
  maxLength?: number;
  /**
   * Custom class name for the wrapper element
   */
  wrapperClassName?: string;
  /**
   * Custom class name for the label element
   */
  labelClassName?: string;
  /**
   * Custom class name for the editor element itself
   */
  editorClassName?: string;
  /**
   * Custom class name for the toolbar
   */
  toolbarClassName?: string;
  /**
   * If true, the field is required
   */
  required?: boolean;
  /**
   * If true, the editor is disabled
   */
  disabled?: boolean;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * HTML content of the editor
   */
  value?: string;
  /**
   * Default HTML content
   */
  defaultValue?: string;
  /**
   * Callback fired when content changes
   */
  onChange?: (html: string, text: string) => void;
  /**
   * Minimum height of the editor area in pixels
   * @default 200
   */
  minHeight?: number;
  /**
   * Custom id for the editor
   */
  id?: string;
  /**
   * If true, hides the toolbar
   * @default false
   */
  hideToolbar?: boolean;
  /**
   * Custom toolbar buttons to show
   * @default all buttons
   */
  toolbarButtons?: ToolbarButton[];
}

export type ToolbarButton =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'orderedList'
  | 'unorderedList'
  | 'link'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'code'
  | 'clearFormat'
  | 'undo'
  | 'redo';

const defaultToolbarButtons: ToolbarButton[] = [
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'h1',
  'h2',
  'h3',
  'orderedList',
  'unorderedList',
  'link',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'code',
  'clearFormat',
  'undo',
  'redo',
];

/**
 * RichTextEditor component - A WYSIWYG text editor with formatting toolbar
 *
 * A comprehensive rich text editor with support for text formatting, lists, links,
 * alignment, and character counting.
 *
 * @example
 * Basic usage
 * ```tsx
 * <RichTextEditor
 *   label="Article Content"
 *   placeholder="Start writing..."
 *   onChange={(html, text) => setContent(html)}
 * />
 * ```
 *
 * @example
 * With character limit
 * ```tsx
 * <RichTextEditor
 *   label="Description"
 *   maxLength={500}
 *   showCount
 *   value={description}
 *   onChange={(html, text) => setDescription(html)}
 * />
 * ```
 *
 * @example
 * With validation
 * ```tsx
 * <RichTextEditor
 *   label="Comment"
 *   required
 *   error={error}
 *   value={comment}
 *   onChange={(html, text) => handleChange(html, text)}
 * />
 * ```
 */
const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      size,
      fullWidth = true,
      clearable = false,
      onClear,
      showCount = false,
      maxLength,
      wrapperClassName = '',
      labelClassName = '',
      editorClassName = '',
      toolbarClassName = '',
      required = false,
      disabled = false,
      placeholder = 'Start typing...',
      value,
      defaultValue,
      onChange,
      minHeight = 200,
      id: providedId,
      hideToolbar = false,
      toolbarButtons = defaultToolbarButtons,
    },
    ref
  ) => {
    const { theme } = useThemeContext();
    const editorSize = size || theme.defaultSize;

    const generatedId = useId('richtext');
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const successId = `${id}-success`;

    const editorRef = useRef<HTMLDivElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [currentLength, setCurrentLength] = useState(0);

    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;
    const showClearButton = clearable && currentLength > 0 && !disabled;

    const describedBy = [
      helperText && !error && !success && helperId,
      error && errorId,
      success && successId,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClassNames = [
      'vtx-richtext-wrapper',
      !fullWidth && 'vtx-richtext-wrapper--inline',
      wrapperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClassNames = [
      'vtx-richtext-container',
      `vtx-richtext-container--${editorSize}`,
      hasError && 'vtx-richtext-container--error',
      hasSuccess && 'vtx-richtext-container--success',
      disabled && 'vtx-richtext-container--disabled',
      isFocused && 'vtx-richtext-container--focused',
    ]
      .filter(Boolean)
      .join(' ');

    const editorClasses = [
      'vtx-richtext-editor',
      editorClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const toolbarClasses = [
      'vtx-richtext-toolbar',
      toolbarClassName,
    ]
      .filter(Boolean)
      .join(' ');

    // Initialize content
    useEffect(() => {
      if (editorRef.current && !editorRef.current.innerHTML) {
        const initialContent = value || defaultValue || '';
        editorRef.current.innerHTML = initialContent;
        updateLength();
      }
    }, []);

    // Update content when value changes
    useEffect(() => {
      if (value !== undefined && editorRef.current) {
        const currentHtml = editorRef.current.innerHTML;
        if (currentHtml !== value) {
          editorRef.current.innerHTML = value;
          updateLength();
        }
      }
    }, [value]);

    const updateLength = () => {
      if (editorRef.current) {
        const text = editorRef.current.innerText || '';
        setCurrentLength(text.length);
      }
    };

    const handleInput = () => {
      if (!editorRef.current) return;

      const html = editorRef.current.innerHTML;
      const text = editorRef.current.innerText || '';

      // Enforce max length
      if (maxLength && text.length > maxLength) {
        // Restore previous content
        return;
      }

      updateLength();
      onChange?.(html, text);
    };

    const handleClear = () => {
      if (editorRef.current) {
        editorRef.current.innerHTML = '';
        updateLength();
        onChange?.('', '');
      }
      onClear?.();
      editorRef.current?.focus();
    };

    const execCommand = (command: string, value: string | undefined = undefined) => {
      document.execCommand(command, false, value);
      editorRef.current?.focus();
    };

    const handleToolbarAction = (action: ToolbarButton) => {
      if (disabled) return;

      switch (action) {
        case 'bold':
          execCommand('bold');
          break;
        case 'italic':
          execCommand('italic');
          break;
        case 'underline':
          execCommand('underline');
          break;
        case 'strikethrough':
          execCommand('strikeThrough');
          break;
        case 'h1':
          execCommand('formatBlock', '<h1>');
          break;
        case 'h2':
          execCommand('formatBlock', '<h2>');
          break;
        case 'h3':
          execCommand('formatBlock', '<h3>');
          break;
        case 'orderedList':
          execCommand('insertOrderedList');
          break;
        case 'unorderedList':
          execCommand('insertUnorderedList');
          break;
        case 'link':
          const url = prompt('Enter URL:');
          if (url) execCommand('createLink', url);
          break;
        case 'alignLeft':
          execCommand('justifyLeft');
          break;
        case 'alignCenter':
          execCommand('justifyCenter');
          break;
        case 'alignRight':
          execCommand('justifyRight');
          break;
        case 'code':
          execCommand('formatBlock', '<pre>');
          break;
        case 'clearFormat':
          execCommand('removeFormat');
          break;
        case 'undo':
          execCommand('undo');
          break;
        case 'redo':
          execCommand('redo');
          break;
      }
      handleInput();
    };

    const handleRef = (node: HTMLDivElement | null) => {
      editorRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const showCounter = (showCount || maxLength) && maxLength !== undefined;
    const isNearLimit = maxLength && currentLength >= maxLength * 0.9;
    const isAtLimit = maxLength && currentLength >= maxLength;

    const getButtonIcon = (button: ToolbarButton): string => {
      const icons: Record<ToolbarButton, string> = {
        bold: 'B',
        italic: 'I',
        underline: 'U',
        strikethrough: 'S',
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        orderedList: '1.',
        unorderedList: '•',
        link: '🔗',
        alignLeft: '⬅',
        alignCenter: '⬌',
        alignRight: '➡',
        code: '<>',
        clearFormat: '✕',
        undo: '↶',
        redo: '↷',
      };
      return icons[button];
    };

    const getButtonTitle = (button: ToolbarButton): string => {
      const titles: Record<ToolbarButton, string> = {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strikethrough: 'Strikethrough',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        orderedList: 'Ordered List',
        unorderedList: 'Unordered List',
        link: 'Insert Link',
        alignLeft: 'Align Left',
        alignCenter: 'Align Center',
        alignRight: 'Align Right',
        code: 'Code Block',
        clearFormat: 'Clear Formatting',
        undo: 'Undo',
        redo: 'Redo',
      };
      return titles[button];
    };

    return (
      <div className={wrapperClassNames}>
        {label && (
          <label htmlFor={id} className={`vtx-richtext-label ${labelClassName}`.trim()}>
            {label}
            {required && (
              <span className="vtx-richtext-label__required" aria-label="required">
                {' '}
                *
              </span>
            )}
          </label>
        )}
        <div className={containerClassNames}>
          {!hideToolbar && (
            <div className={toolbarClasses} role="toolbar" aria-label="Text formatting toolbar">
              {toolbarButtons.map((button) => (
                <button
                  key={button}
                  type="button"
                  className="vtx-richtext-toolbar-button"
                  onClick={() => handleToolbarAction(button)}
                  disabled={disabled}
                  title={getButtonTitle(button)}
                  aria-label={getButtonTitle(button)}
                  tabIndex={-1}
                >
                  {getButtonIcon(button)}
                </button>
              ))}
              {showClearButton && (
                <button
                  type="button"
                  className="vtx-richtext-toolbar-clear"
                  onClick={handleClear}
                  disabled={disabled}
                  title="Clear all content"
                  aria-label="Clear all content"
                  tabIndex={-1}
                >
                  <CloseSmallIcon size={14} />
                </button>
              )}
            </div>
          )}
          <div
            ref={handleRef}
            id={id}
            className={editorClasses}
            contentEditable={!disabled}
            onInput={handleInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            role="textbox"
            aria-multiline="true"
            aria-invalid={hasError}
            aria-describedby={describedBy || undefined}
            aria-required={required}
            data-placeholder={placeholder}
            style={{ minHeight: `${minHeight}px` }}
            suppressContentEditableWarning
          />
        </div>
        <div className="vtx-richtext-footer">
          <div className="vtx-richtext-footer-left">
            {helperText && !error && !success && (
              <p id={helperId} className="vtx-richtext-helper">
                {helperText}
              </p>
            )}
            {error && (
              <p id={errorId} className="vtx-richtext-error" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p id={successId} className="vtx-richtext-success" role="status">
                {success}
              </p>
            )}
          </div>
          {showCounter && (
            <p
              className={`vtx-richtext-counter ${
                isAtLimit
                  ? 'vtx-richtext-counter--at-limit'
                  : isNearLimit
                  ? 'vtx-richtext-counter--near-limit'
                  : ''
              }`.trim()}
              aria-live="polite"
            >
              {currentLength} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor as React.FC<RichTextEditorProps & React.RefAttributes<HTMLDivElement>>;
export { RichTextEditor };
