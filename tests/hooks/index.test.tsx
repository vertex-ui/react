import { renderHook, act, waitFor } from '@testing-library/react';
import {
  useClickOutside,
  useFocusTrap,
  useEscapeKey,
  useBodyScrollLock,
  useId,
  useDebounce,
} from '../../src/hooks';
import { useRef } from 'react';

describe('useClickOutside', () => {
  it('calls handler when clicking outside element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, handler));

    // Click outside
    const outsideClick = new MouseEvent('mousedown', { bubbles: true });
    document.body.dispatchEvent(outsideClick);

    expect(handler).toHaveBeenCalledTimes(1);

    document.body.removeChild(ref.current);
  });

  it('does not call handler when clicking inside element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, handler));

    // Click inside
    const insideClick = new MouseEvent('mousedown', { bubbles: true });
    ref.current.dispatchEvent(insideClick);

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });
});

describe('useFocusTrap', () => {
  it('traps focus within container', () => {
    const container = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    container.appendChild(button1);
    container.appendChild(button2);
    document.body.appendChild(container);

    const ref = { current: container };
    renderHook(() => useFocusTrap(ref, true));

    // First element should be focused
    expect(document.activeElement).toBe(button1);

    document.body.removeChild(container);
  });

  it('does not trap focus when inactive', () => {
    const container = document.createElement('div');
    const button = document.createElement('button');
    container.appendChild(button);
    document.body.appendChild(container);

    const ref = { current: container };
    renderHook(() => useFocusTrap(ref, false));

    expect(document.activeElement).not.toBe(button);

    document.body.removeChild(container);
  });
});

describe('useEscapeKey', () => {
  it('calls handler when escape key is pressed', () => {
    const handler = jest.fn();
    renderHook(() => useEscapeKey(handler));

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not call handler for other keys', () => {
    const handler = jest.fn();
    renderHook(() => useEscapeKey(handler));

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    document.dispatchEvent(enterEvent);

    expect(handler).not.toHaveBeenCalled();
  });
});

describe('useBodyScrollLock', () => {
  it('locks body scroll when active', () => {
    const originalOverflow = document.body.style.overflow;

    renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.overflow).toBe('hidden');

    // Cleanup
    document.body.style.overflow = originalOverflow;
  });

  it('does not lock scroll when inactive', () => {
    const originalOverflow = document.body.style.overflow;

    renderHook(() => useBodyScrollLock(false));

    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it('restores original overflow on unmount', () => {
    const originalOverflow = 'auto';
    document.body.style.overflow = originalOverflow;

    const { unmount } = renderHook(() => useBodyScrollLock(true));

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe(originalOverflow);
  });
});

describe('useId', () => {
  it('generates unique IDs', () => {
    const { result: result1 } = renderHook(() => useId());
    const { result: result2 } = renderHook(() => useId());

    expect(result1.current).not.toBe(result2.current);
  });

  it('uses custom prefix', () => {
    const { result } = renderHook(() => useId('custom'));

    expect(result.current).toMatch(/^custom-\d+$/);
  });

  it('returns stable ID across rerenders', () => {
    const { result, rerender } = renderHook(() => useId());
    const firstId = result.current;

    rerender();

    expect(result.current).toBe(firstId);
  });
});

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('debounces value changes', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    expect(result.current).toBe('initial');

    // Change value
    rerender({ value: 'updated', delay: 500 });

    // Value should not update immediately
    expect(result.current).toBe('initial');

    // Fast forward time
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Now it should update
    expect(result.current).toBe('updated');
  });

  it('cancels previous timeout on rapid changes', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'first', delay: 500 },
    });

    rerender({ value: 'second', delay: 500 });

    act(() => {
      jest.advanceTimersByTime(250);
    });

    rerender({ value: 'third', delay: 500 });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    // Should have the last value
    expect(result.current).toBe('third');
  });
});
