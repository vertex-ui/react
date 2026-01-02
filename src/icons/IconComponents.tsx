import {
    FiX,
    FiBell,
    FiChevronDown,
    FiChevronUp,
    FiChevronLeft,
    FiChevronRight,
    FiMenu,
    FiMinus,
    FiPlus,
    FiAlertCircle,
    FiAlertTriangle,
    FiCheckCircle,
    FiCornerUpLeft,
    FiCreditCard,
    FiDownload,
    FiEye,
    FiInfo,
    FiMapPin,
    FiMessageCircle,
    FiMinusCircle,
    FiPackage,
    FiPhone,
    FiRefreshCw,
    FiShare2,
    FiShoppingBag,
    FiStar,
    FiTruck,
    FiCheck,
    FiSearch,
    FiUser,
    FiHome,
    FiShoppingCart,
    FiHeart,
    FiSettings,
    FiHelpCircle,
    FiLogOut,
    FiTrendingUp,
    FiLayers,
    FiServer,
    FiCode,
    FiZap,
    FiBarChart2,
    FiMail,
    FiFileText,
    FiArrowUp,
    FiArrowDown,
    FiFilter,
    FiChevronsLeft,
    FiChevronsRight,
    FiCalendar,
    FiBriefcase,
    FiDollarSign,
    FiActivity
} from 'react-icons/fi';

export const SpinnerIcon = (props: { size?: number }) => (
    <svg
        className="vtx-multiselect-icon-spinner"
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 16 16"
        fill="none"
    >
        <circle
            className="vtx-multiselect-icon-spinner-track"
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            className="vtx-multiselect-icon-spinner-path"
            fill="currentColor"
            d="M8 2C4.686 2 2 4.686 2 8h2c0-2.21 1.79-4 4-4V2z"
        />
    </svg>
);

export const CheckIcon = FiCheck;

export const CloseSmallIcon = (props: { size?: number }) => (
    <svg
        width={props.size || 16}
        height={props.size || 16}
        viewBox="0 0 16 16"
        fill="none"
        className="vtx-icon-close"
    >
        <path
            d="M12 4L4 12M4 4L12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const CalendarIcon = FiCalendar;
export const ChevronDownIcon = FiChevronDown;
export const PlusIcon = FiPlus;
export const MinusIcon = FiMinus;
export const BellIcon = FiBell;
export const MenuIcon = FiMenu;
export const ChevronUpIcon = FiChevronUp;
export const ChevronLeftIcon = FiChevronLeft;
export const ChevronRightIcon = FiChevronRight;
export const CheckCircleIcon = FiCheckCircle;
export const ErrorIcon = FiAlertCircle;
export const WarningIcon = FiAlertTriangle;
export const InfoIcon = FiInfo;
export const NeutralIcon = FiMinusCircle;
export const DownloadIcon = FiDownload;
export const PackageIcon = FiPackage;
export const ShoppingBagIcon = FiShoppingBag;
export const ShareIcon = FiShare2;
export const EyeIcon = FiEye;
export const CreditCardIcon = FiCreditCard;
export const MessageIcon = FiMessageCircle;
export const MapPinIcon = FiMapPin;
export const PhoneIcon = FiPhone;
export const TruckIcon = FiTruck;
export const CloseIcon = FiX;
export const ReturnIcon = FiCornerUpLeft;
export const RefreshIcon = FiRefreshCw;
export const StarIcon = FiStar;
export const SearchIcon = FiSearch;
export const UserIcon = FiUser;
export const HomeIcon = FiHome;
export const ShoppingCartIcon = FiShoppingCart;
export const HeartIcon = FiHeart;
export const SettingsIcon = FiSettings;
export const HelpCircleIcon = FiHelpCircle;
export const LogOutIcon = FiLogOut;
export const TrendingUpIcon = FiTrendingUp;
export const LayersIcon = FiLayers;
export const ServerIcon = FiServer;
export const CodeIcon = FiCode;
export const ZapIcon = FiZap;
export const ChartBarIcon = FiBarChart2;
export const InboxIcon = FiMail;
export const DocumentIcon = FiFileText;
export const ArrowUpIcon = FiArrowUp;
export const ArrowDownIcon = FiArrowDown;
export const FilterIcon = FiFilter;
export const ChevronsLeftIcon = FiChevronsLeft;
export const ChevronsRightIcon = FiChevronsRight;
export const BuildingIcon = FiBriefcase;
export const DollarSignIcon = FiDollarSign;
export const ActivityIcon = FiActivity;
