# Widget

## 1. Overview
The **Widget** component is a universal container and dispatcher for all dashboard widgets. It takes a configuration object and renders the appropriate specific widget (Metric, Chart, Table, etc.).

## 2. Installation & Import
```bash
npm install @your-company/components
```

```tsx
import { Widget } from '@/components/Widget';
```

## 3. Customization Options

| Prop | Type | Description |
|------|------|-------------|
| `config` | `WidgetConfig` | Configuration object `{ type, data, settings }`. |
| `className` | `string` | Custom class. |

### WidgetConfig
- **type**: String identifier (e.g., 'metric', 'chart').
- **data**: Data payload specific to the widget type.
- **settings**: Visual settings (title, variant, size).

## 4. Accessibility
- **Structure**: Each renderer implements its own accessibility (headings, tables, etc.).
- **Container**: Generally renders a `section` or `article` semantics via the specific widget implementation.

## 5. Best Practices
- **Abstraction**: Use this component instead of importing individual widgets (`MetricWidget`, etc.) to allow for dynamic dashboard generation from JSON.
- **Error Handling**: Gracefully handles unknown types.

## 6. Integration Notes
- Central registry for all dashboard components.
- Supports `Grid` layout via `type: 'grid'`.

## 7. Do’s and Don’ts
- **Do** use for dynamic dashboards.
- **Don't** use for static page layout if you know the component types at build time (though it works, direct imports are more tree-shakeable).

## 8. Versioning & Maintenance
- **Stability**: Stable API.
