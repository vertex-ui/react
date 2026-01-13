import { parseClass, initGlobalStyles, cleanupGlobalStyles } from '../../src/utils/parseClass';

describe('parseClass', () => {
  beforeEach(() => {
    // Clear style tag and cache before each test if possible
    // Since parseClass uses global state, we might need to reset it.
    // The implementation creates a style tag with ID 'dynamic-styles'
    const styleTag = document.getElementById('dynamic-styles');
    if (styleTag) {
        styleTag.innerHTML = '';
    }
    cleanupGlobalStyles();
  });

  afterEach(() => {
    cleanupGlobalStyles();
  });

  it('returns original class if not recognized', () => {
    expect(parseClass('custom-class')).toBe('custom-class');
    expect(parseClass('btn')).toBe('btn');
  });

  it('parses standard scale values', () => {
    expect(parseClass('m-4')).toBe('m-4');
    expect(parseClass('p-2')).toBe('p-2');

    // Check if style rule was injected
    const styleTag = document.getElementById('dynamic-styles');
    expect(styleTag?.textContent).toContain('.m-4 { margin: 1rem; }');
    expect(styleTag?.textContent).toContain('.p-2 { padding: 0.5rem; }');
  });

  it('parses arbitrary values', () => {
    expect(parseClass('mt-[10px]')).toBe('mt-10px');
    expect(parseClass('w-[50%]')).toBe('w-50'); // non-alphanumeric chars removed in class name

    const styleTag = document.getElementById('dynamic-styles');
    expect(styleTag?.textContent).toContain('.mt-10px { margin-top: 10px; }');
    expect(styleTag?.textContent).toContain('.w-50 { width: 50%; }');
  });

  it('handles x/y axis properties (mx, my, px, py)', () => {
    parseClass('mx-4');
    parseClass('py-[20px]');

    const styleTag = document.getElementById('dynamic-styles');
    expect(styleTag?.textContent).toContain('.mx-4 { margin-left: 1rem; margin-right: 1rem; }');
    expect(styleTag?.textContent).toContain('.py-20px { padding-top: 20px; padding-bottom: 20px; }');
  });

  it('handles all mapped properties', () => {
    const props = ['m', 'mt', 'mr', 'mb', 'ml', 'p', 'pt', 'pr', 'pb', 'pl', 'w', 'h', 'fs', 'lh', 'ls', 'gap', 'rounded'];
    props.forEach(prop => {
        parseClass(`${prop}-1`);
    });

    const styleTag = document.getElementById('dynamic-styles');
    expect(styleTag?.textContent).toContain('margin:');
    expect(styleTag?.textContent).toContain('padding:');
    expect(styleTag?.textContent).toContain('width:');
    expect(styleTag?.textContent).toContain('height:');
    expect(styleTag?.textContent).toContain('font-size:');
    expect(styleTag?.textContent).toContain('gap:');
    expect(styleTag?.textContent).toContain('border-radius:');
  });

  it('initializes global observer', () => {
    // Mock MutationObserver
    const observeMock = jest.fn();
    const disconnectMock = jest.fn();
    window.MutationObserver = jest.fn().mockImplementation(() => ({
      observe: observeMock,
      disconnect: disconnectMock,
    }));

    initGlobalStyles();
    expect(observeMock).toHaveBeenCalled();

    cleanupGlobalStyles();
    expect(disconnectMock).toHaveBeenCalled();
  });

  it('processes existing elements on init', () => {
    // Reset global state
    cleanupGlobalStyles();
    // Create new div
    const div = document.createElement('div');
    div.className = 'm-8'; // Use different class to avoid cache
    document.body.appendChild(div);

    initGlobalStyles();

    const styleTag = document.getElementById('dynamic-styles');
    expect(styleTag?.textContent).toContain('.m-8 { margin: 2rem; }');

    document.body.removeChild(div);
  });
});
