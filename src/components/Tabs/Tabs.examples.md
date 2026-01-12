# Tabs Examples

## Basic Usage

Switch between views.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'src/components/Tabs';

const BasicExample = () => (
  <Tabs defaultValue="one">
    <TabList>
      <Tab value="one">Tab One</Tab>
      <Tab value="two">Tab Two</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="one">Content One</TabPanel>
      <TabPanel value="two">Content Two</TabPanel>
    </TabPanels>
  </Tabs>
);
```

## Customization Examples

### Variants

Different styles like `enclosed` or `soft-rounded`.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'src/components/Tabs';

const VariantExample = () => (
  <Tabs variant="enclosed">
    <TabList>
      <Tab value="settings">Settings</Tab>
      <Tab value="profile">Profile</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="settings">Settings...</TabPanel>
      <TabPanel value="profile">Profile...</TabPanel>
    </TabPanels>
  </Tabs>
);
```

## Enterprise Scenarios

### Lazy Loading Panels

Load content only when tab is active.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'src/components/Tabs';

const LazyTabs = () => (
  <Tabs isLazy>
    <TabList>
      <Tab value="dashboard">Dashboard</Tab>
      <Tab value="analytics">Analytics</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="dashboard"><Dashboard /></TabPanel>
      <TabPanel value="analytics"><HeavyAnalyticsComponent /></TabPanel>
    </TabPanels>
  </Tabs>
);
```

## Accessibility Example

Implements `tablist`, `tab`, and `tabpanel` roles.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'src/components/Tabs';

const A11yExample = () => (
  <Tabs>
    <TabList aria-label="Account Settings">
      <Tab value="general">General</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="general">General Settings</TabPanel>
    </TabPanels>
  </Tabs>
);
```
