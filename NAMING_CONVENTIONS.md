# Select Component Naming Convention

## Problem Statement

The initial implementation used simple key-based naming (`labelKey`, `valueKey`, `disabledKey`, `groupKey`) which was confusing because:

- "labelKey" could be interpreted as a key FOR labels, not FROM options
- Didn't clearly indicate direction of data flow
- Lacked flexibility for complex transformations

## Solution: Getter-Based Naming

Following industry standards (Material-UI Autocomplete, Ant Design Select), we adopted a `getOption*` pattern:

### New Prop Names

| Old Name      | New Name            | Purpose                            |
| ------------- | ------------------- | ---------------------------------- |
| `labelKey`    | `getOptionLabel`    | Extract display text from option   |
| `valueKey`    | `getOptionValue`    | Extract value from option          |
| `disabledKey` | `getOptionDisabled` | Extract disabled state from option |
| `groupKey`    | `getOptionGroup`    | Extract group name from option     |

### Enhanced Flexibility

All getters support **both string property names AND functions**:

```typescript
// String: Simple property access
<Select
  options={users}
  getOptionLabel="fullName"
  getOptionValue="userId"
/>

// Function: Complex transformations
<Select
  options={users}
  getOptionLabel={(user) => `${user.firstName} ${user.lastName}`}
  getOptionValue={(user) => user.id}
  getOptionDisabled={(user) => !user.isActive}
  getOptionGroup={(user) => user.department}
/>
```

## Benefits

1. **Clarity**: `getOptionLabel` clearly indicates "getting label FROM option"
2. **Direction**: Naming shows data flows FROM option objects TO component
3. **Flexibility**: Supports both simple keys and complex transformations
4. **Industry Standard**: Matches patterns from Material-UI and Ant Design
5. **Future-Proof**: Easy to extend with additional getters

## Migration Guide

If upgrading from the old naming:

```diff
<Select
  options={products}
- labelKey="productName"
- valueKey="productId"
- groupKey="category"
- disabledKey="outOfStock"
+ getOptionLabel="productName"
+ getOptionValue="productId"
+ getOptionGroup="category"
+ getOptionDisabled="outOfStock"
  grouped
/>
```

## Implementation Details

Internal helper function `extractValue`:

```typescript
const extractValue = <T>(option: any, getter: string | ((option: any) => T) | undefined): T => {
  if (!getter) return option as T;
  return typeof getter === 'function' ? getter(option) : option[getter];
};
```

This enables seamless support for both patterns without additional complexity.

## References

- [Material-UI Autocomplete](https://mui.com/material-ui/react-autocomplete/) - Uses `getOptionLabel`
- [Ant Design Select](https://ant.design/components/select) - Similar getter patterns
- [React Hook Form](https://react-hook-form.com/) - Compatible via forwardRef

---

**Updated:** December 2024  
**Status:** ✅ Implemented, Tested, Documented
