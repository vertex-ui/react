# Tabs Component

A component for organizing content into separate views where only one view is visible at a time. It provides a modular architecture with Tabs, TabList, Tab, TabPanels, and TabPanel components.

## Features

- **Variants**: Line, Enclosed, Soft Rounded, Solid Rounded, Segmented.
- **Orientation**: Horizontal or Vertical layout.
- **Scrollable**: Automatic scroll buttons for overflowing horizontal tabs.
- **Lazy Loading**: Option to defer rendering of hidden panels (`isLazy`).
- **Controlled/Uncontrolled**: Manage state externally or internally.
- **Accessibility**: Full keyboard navigation (Arrow keys) and ARIA roles.

## Installation

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Tabs defaultValue="account">
  <TabList>
    <Tab value="account">Account</Tab>
    <Tab value="password">Password</Tab>
  </TabList>

  <TabPanels>
    <TabPanel value="account">Account Settings Content</TabPanel>
    <TabPanel value="password">Password Settings Content</TabPanel>
  </TabPanels>
</Tabs>
```

## Variants

Change the visual style using the `variant` prop.

```tsx
<Tabs variant="enclosed">...</Tabs>
<Tabs variant="soft-rounded">...</Tabs>
<Tabs variant="solid-rounded">...</Tabs>
<Tabs variant="segmented">...</Tabs>
```

## Orientation

Switch to a vertical layout.

```tsx
<Tabs orientation="vertical">
  <TabList>
    <Tab value="1">Tab 1</Tab>
    <Tab value="2">Tab 2</Tab>
  </TabList>
  <TabPanels>
    {/* panels */}
  </TabPanels>
</Tabs>
```

## Scrollable Tabs

When tabs exceed the container width, enable scroll controls.

```tsx
<Tabs>
  <TabList showScrollControls>
    {/* Many tabs... */}
  </TabList>
</Tabs>
```

## Icons

Add icons to tabs.

```tsx
<Tab value="settings" icon={<SettingsIcon />}>
  Settings
</Tab>
```

## Lazy Loading

Improve performance by only rendering the active panel.

```tsx
<Tabs isLazy>
  {/* Content in hidden panels won't be in the DOM until selected */}
</Tabs>
```

## API Reference

### Tabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | - | Initial tab |
| `value` | `string` | - | Controlled tab |
| `onChange` | `(value) => void` | - | Change handler |
| `variant` | `'line' \| 'enclosed' \| ...` | `'line'` | Visual style |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout axis |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |
| `isLazy` | `boolean` | `false` | Defer rendering |

### TabList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showScrollControls` | `boolean` | `false` | Enable scroll arrows |

### Tab

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Unique identifier |
| `icon` | `ReactNode` | Leading icon |
| `disabled` | `boolean` | Disable interaction |

### TabPanel

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | ID matching a Tab |

## Accessibility

- `role="tablist"` wrapper.
- `role="tab"` with `aria-selected` and `aria-controls`.
- `role="tabpanel"` with `aria-labelledby`.
- Keyboard support: Arrow keys move focus between tabs; Enter/Space activates a tab.
