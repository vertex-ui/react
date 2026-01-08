// =============================
// Vertex UI React – Main Exports
// =============================

// --- Form Controls ---
export { Autocomplete } from './components/Autocomplete';
export type { AutocompleteOption, AutocompleteProps } from './components/Autocomplete';
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';
export { Checkbox } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';
export { CheckboxGroup } from './components/CheckboxGroup';
export type { CheckboxGroupProps } from './components/CheckboxGroup';
export { FormControl } from './components/FormControl';
export type { FormControlProps } from './components/FormControl';
export { Input } from './components/Input';
export type { InputProps } from './components/Input';
export { MultiSelect } from './components/MultiSelect';
export type { MultiSelectOption, MultiSelectProps } from './components/MultiSelect';
export { Radio } from './components/Radio';
export type { RadioProps } from './components/Radio';
export { RadioGroup } from './components/RadioGroup';
export type { RadioGroupProps } from './components/RadioGroup';
export { Rating } from './components/Rating';
export type { RatingProps } from './components/Rating';
export { RichTextEditor } from './components/RichTextEditor';
export type { RichTextEditorProps, ToolbarButton } from './components/RichTextEditor';
export { Select } from './components/Select';
export type { SelectOption, SelectProps } from './components/Select';
export { Skeleton, SkeletonTheme } from './components/Skeleton';
export type { SkeletonProps, SkeletonThemeProps } from './components/Skeleton';
export { Textarea } from './components/Textarea';
export type { TextareaProps } from './components/Textarea';
export { DatePicker, DateRangePicker, Calendar } from './components/DatePicker';
export type { DatePickerProps, DateRangePickerProps, DateRange, CalendarProps } from './components/DatePicker';

// --- Interactive & Feedback ---
export { Accordion, AccordionItem } from './components/Accordion';
export type { AccordionItemProps, AccordionProps } from './components/Accordion/types';
export { ActionMenu } from './components/Menu/ActionMenu';
export type { ActionMenuProps } from './components/Menu/ActionMenu';
export { Alert } from './components/Alert';
export type { AlertProps } from './components/Alert';
export { Chip } from './components/Chip';
export type { ChipProps } from './components/Chip';
export { Menu, MenuItem } from './components/Menu';
export type { MenuItemProps, MenuProps } from './components/Menu';
export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';
export { Toast, toast, ToastContainer, useToast } from './components/Toast';
export type { ToastContainerProps, ToastOptions, ToastProps, ToastVariant, ToastPosition, ToastInstance } from './components/Toast/types';
export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';
export { Tabs, TabList, Tab, TabPanels, TabPanel } from './components/Tabs';
export type { TabsProps, TabListProps, TabProps, TabPanelsProps, TabPanelProps, TabsVariant, TabsOrientation } from './components/Tabs';

// --- Widget System ---
export { Widget } from './components/Widget';
export type { 
  WidgetProps,
  WidgetConfig,
  WidgetTheme,
  WidgetVariant,
  MetricWidgetData,
  MetricWidgetSettings,
  InfoWidgetData,
  ProductWidgetData,
  ProductWidgetSettings,
  OrderWidgetData,
  ListWidgetData,
  TextWidgetData,
  HeaderWidgetData,
  GridWidgetData,
  IntelligentGridProps
} from './components/Widget';

// --- Data Display ---
export { AdminHeader } from './components/AdminHeader';
export type { AdminHeaderProps, NotificationItem as AdminNotificationItem, UserMenuItem, QuickAction, SearchSuggestion } from './components/AdminHeader';
export { Avatar } from './components/Avatar';
export type { AvatarProps } from './components/Avatar';
export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';
export { Breadcrumb } from './components/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb';
export { Card } from './components/Card';
export type { CardProps } from './components/Card';
export { DataGrid } from './components/DataGrid';
export type {
  DataGridColumn,
  DataGridProps,
  GridFilterItem,
  GridFilterModel,
  GridFilterOperator,
  GridRowSelectionModel,
} from './components/DataGrid';
export { Divider } from './components/Divider';
export type { DividerProps } from './components/Divider';
export { Link } from './components/Link';
export type { LinkProps } from './components/Link';
export { SideMenu } from './components/SideMenu';
export type { SideMenuItemProps, SideMenuProps } from './components/SideMenu';
export { SideMenuItem } from './components/SideMenu';
export { Table } from './components/Table';
export type { TableColumn, TableProps } from './components/Table';
export { Text } from './components/Text';
export type { TextProps } from './components/Text';
export { Timeline } from './components/Timeline';
export type { TimelineProps, TimelineStep } from './components/Timeline';

// --- Layout ---
export { Box } from './components/Box';
export type { BoxProps, BoxAs, BoxDisplay, BoxPosition, BoxOverflow } from './components/Box';
export { Container } from './components/Container';
export type { ContainerProps } from './components/Container';
export { Flex } from './components/Flex';
export type { FlexProps } from './components/Flex';
export { Grid } from './components/Grid';
export type { GridProps } from './components/Grid';

// --- Theme System ---
export { ThemeProvider, useThemeContext } from './theme';
export type { Theme, ThemeProviderProps, Size } from './theme';
export { tokens, generateCSSVariables, injectCSSVariables, createCustomTokens, generateColorShades, normalizeColors } from './theme';
export type { Tokens, ColorScale, ColorShade, CustomTokens, CustomColors, ColorPalette } from './theme';

// --- Hooks ---
export {
  useBodyScrollLock,
  useClickOutside,
  useDebounce,
  useEscapeKey,
  useFocusTrap,
  useId,
} from './hooks';

// --- Widgets ---
export { InfoCard } from './widgets/InfoCard';
export type { InfoCardBaseProps, InfoCardMetricProps } from './widgets/InfoCard';
export { InfoText } from './widgets/InfoText';
export type {
  InfoTextBaseProps,
  InfoTextStatProps,
  InfoTextFeatureProps,
  InfoTextCompactProps,
  InfoTextVerticalProps,
} from './widgets/InfoText';
export { ProductCard } from './widgets/ProductCard';
export type { ProductCardProps, ProductCardWideProps } from './widgets/ProductCard';
export { OrderCard } from './widgets/OrderCard';
export type { OrderItem } from './widgets/OrderCard';
export { InfoListCard } from './widgets/InfoListCard';
export type { InfoListCardProps, InfoListItem } from './widgets/InfoListCard';
export { OrderConfirmation } from './widgets/OrderConfirmation';
export type { OrderConfirmationProps, OrderConfirmationItem, OrderConfirmationAddress } from './widgets/OrderConfirmation';
export { OrderDetails } from './widgets/OrderDetails';
export type { OrderDetailsProps, OrderDetailsItem, OrderDetailsAddress } from './widgets/OrderDetails';

// --- DashboardCard ---
export { DashboardCard } from './widgets/DashboardCard';
export type {
  DashboardCardProps,
  DashboardCardTheme,
  DashboardCardSize,
  StatCardProps,
  StatCardData,
  StatCardSettings,
  ProgressCardProps,
  ProgressCardData,
  ProgressCardSettings,
  ComparisonCardProps,
  ComparisonCardData,
  ComparisonCardSettings,
} from './widgets/DashboardCard';

// --- Navigation Bar ---
export { Navbar } from './components/Navbar';
export type { 
  NavigationItem,
  MegaMenuColumn,
  TopBarConfig, 
  NavbarDesktopProps, 
  NavbarMobileProps, 
  NavbarResponsiveProps 
} from './components/Navbar';

// Backward compatibility - Header alias for Navbar
export { Navbar as Header } from './components/Navbar';
export type { 
  NavbarDesktopProps as HeaderDesktopProps,
  NavbarMobileProps as HeaderMobileProps,
  NavbarResponsiveProps as HeaderResponsiveProps
} from './components/Navbar';