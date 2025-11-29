# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-XX-XX

### Added

#### Components
- Button component with variants (primary, secondary, outline, ghost, danger)
- Input component with label, validation, and icon support
- Select component with customizable options
- Table component with custom rendering and sorting
- Modal component with focus trap and scroll lock
- Tooltip component with multiple placements
- Avatar component with image and fallback support
- Badge component with semantic variants

#### Theme System
- Comprehensive design token system
- CSS variable-based theming
- ThemeProvider with light/dark mode support
- Token documentation in Storybook

#### Hooks
- useTheme - Access theme tokens and utilities
- useClickOutside - Detect clicks outside elements
- useFocusTrap - Trap focus within components
- useEscapeKey - Handle escape key presses
- useBodyScrollLock - Lock body scroll
- useId - Generate unique IDs
- useDebounce - Debounce values

#### Development
- TypeScript strict mode configuration
- ESLint and Prettier setup
- Jest and React Testing Library
- Accessibility testing with jest-axe
- Storybook with interactive documentation
- Vite build configuration for library mode

### Build System
- ESM and CommonJS output formats
- Tree-shakable exports
- TypeScript declaration files
- Source maps for debugging

### Documentation
- Comprehensive README
- Component API documentation
- Storybook stories for all components
- Design token documentation
- Contributing guidelines

---

## Release Notes Template

### [Unreleased]

#### Added
- New features

#### Changed
- Changes in existing functionality

#### Deprecated
- Soon-to-be removed features

#### Removed
- Removed features

#### Fixed
- Bug fixes

#### Security
- Security updates
