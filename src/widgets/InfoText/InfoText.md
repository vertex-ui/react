# InfoText

## 1. Overview
The **InfoText** widget displays text paired with an icon in various layouts (Stat, Feature, Compact). It is lighter than a Card, meant for inline use.

## 2. Installation & Import
```bash
npm install @your-company/widgets
```

```tsx
import { InfoText } from '@/widgets/InfoText';
```

## 3. Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode` | `undefined` | Icon element to display |
| `iconVariant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | Visual variant for icon styling |
| `iconCircle` | `boolean` | `true` | Display icon in a circle |
| `heading` | `React.ReactNode` | `undefined` | Main heading text |
| `subText` | `React.ReactNode` | `undefined` | Optional secondary text |
| `className` | `string` | `undefined` |   |
| `style` | `React.CSSProperties` | `undefined` |   |
| `value` | `React.ReactNode` | `undefined` | Metric/stat value |
| `label` | `React.ReactNode` | `undefined` | Label for the stat |
| `title` | `React.ReactNode` | `undefined` | Feature title |
| `description` | `React.ReactNode` | `undefined` | Feature description |
| `badge` | `React.ReactNode` | `undefined` | Optional badge element |
| `text` | `React.ReactNode` | `undefined` | Text content |
| `Base` | `InfoTextBaseWithParsedClasses as React.FC<InfoTextBaseProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` | InfoText.Vertical - Vertical icon with text Displays an icon above heading and optional subtext in a vertical centered layout |
| `Stat` | `InfoTextStatWithParsedClasses as React.FC<InfoTextStatProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |
| `Feature` | `InfoTextFeatureWithParsedClasses as React.FC<InfoTextFeatureProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |
| `Compact` | `InfoTextCompactWithParsedClasses as React.FC<InfoTextCompactProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |
| `Vertical` | `InfoTextVerticalWithParsedClasses as React.FC<InfoTextVerticalProps & React.RefAttributes<HTMLDivElement>>,` | `undefined` |   |

## 4. Accessibility
- **Text**: Standard typography.

## 5. Best Practices
- **Layout**: Use `Vertical` for empty states or centered landing page features.
- **Consistency**: Stick to one variant per section.

## 6. Integration Notes
- Pure presentation component.

## 7. Do’s and Don’ts
- **Do** use `iconCircle` for emphasis.
- **Don't** use for main navigation.

## 8. Versioning & Maintenance
- **Stability**: Stable API.
