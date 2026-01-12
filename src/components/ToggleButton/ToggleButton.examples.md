# ToggleButton Examples

## Basic Usage

A binary switch.

```tsx
import { ToggleButton } from 'src/components/ToggleButton';

const BasicExample = () => (
  <ToggleButton label="Airplane Mode" />
);
```

## Customization Examples

### With Icons

Visual cues for on/off state.

```tsx
import { ToggleButton } from 'src/components/ToggleButton';
import { MoonIcon, SunIcon } from 'src/icons';

const ThemeSwitch = () => (
  <ToggleButton
    icon={<SunIcon />}
    checkedIcon={<MoonIcon />}
    label="Dark Mode"
  />
);
```

## Enterprise Scenarios

### Controlled Setting

Update app preferences.

```tsx
import { ToggleButton } from 'src/components/ToggleButton';

const FeatureToggle = ({ enabled, setEnabled }) => (
  <ToggleButton
    checked={enabled}
    onChange={(e) => setEnabled(e.target.checked)}
    label="Enable Beta Features"
    helperText="Access experimental tools."
  />
);
```

## Accessibility Example

Uses `role="switch"` and `aria-checked`.

```tsx
import { ToggleButton } from 'src/components/ToggleButton';

const A11yExample = () => (
  <ToggleButton
    label="Sound"
    aria-label="Toggle Sound"
  />
);
```
