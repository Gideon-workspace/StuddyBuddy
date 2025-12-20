# Frontend Structure Guide

This document outlines the recommended file structure and organization conventions for the StuddyBuddy React frontend application.

## Current Structure

```
frontend/
├── public/                 # Static assets
│   └── vite.svg           # Public favicon/icons
├── src/                   # Source code
│   ├── assets/            # Static assets (images, fonts, etc.)
│   │   └── react.svg
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components (routes)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions and helpers
│   ├── services/          # API calls and external services
│   ├── context/           # React Context providers
│   ├── styles/            # Global styles and theme files
│   ├── App.jsx            # Main App component
│   ├── App.css            # App-specific styles
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   └── firebase.js        # Firebase configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## Recommended Organization

### 📁 `/src/components/`
Place reusable UI components here. Organize by feature or component type:

```
components/
├── ui/                    # Basic UI components
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── index.js       # Export file
│   ├── Input/
│   ├── Modal/
│   └── Card/
├── layout/                # Layout components
│   ├── Header/
│   ├── Sidebar/
│   ├── Footer/
│   └── Layout/
└── features/              # Feature-specific components
    ├── StudySession/
    ├── UserProfile/
    └── Dashboard/
```

### 📁 `/src/pages/`
Page-level components that represent routes:

```
pages/
├── Home/
│   ├── Home.jsx
│   ├── Home.module.css
│   └── index.js
├── Login/
├── Dashboard/
├── Profile/
├── StudySession/
└── NotFound/
```

### 📁 `/src/hooks/`
Custom React hooks for shared logic:

```
hooks/
├── useAuth.js             # Authentication logic
├── useLocalStorage.js     # Local storage operations
├── useApi.js              # API calls
└── useStudySession.js     # Study session management
```

### 📁 `/src/services/`
API calls and external service integrations:

```
services/
├── api.js                 # Base API configuration
├── authService.js         # Authentication API calls
├── userService.js         # User-related API calls
├── studyService.js        # Study session API calls
└── firebaseService.js     # Firebase operations
```

### 📁 `/src/context/`
React Context providers for global state:

```
context/
├── AuthContext.jsx        # User authentication state
├── ThemeContext.jsx       # App theme/dark mode
└── StudyContext.jsx       # Study session state
```

### 📁 `/src/utils/`
Utility functions and helper methods:

```
utils/
├── constants.js           # App constants
├── helpers.js             # General helper functions
├── validators.js          # Form validation functions
└── formatters.js          # Data formatting utilities
```

### 📁 `/src/styles/`
Global styles and theme configuration:

```
styles/
├── globals.css            # Global CSS reset and base styles
├── variables.css          # CSS custom properties
├── themes.css             # Theme definitions
└── components.css         # Shared component styles
```

## Naming Conventions

### Files and Folders
- **Components**: Use PascalCase (e.g., `UserProfile.jsx`, `StudyCard.jsx`)
- **Pages**: Use PascalCase (e.g., `Home.jsx`, `Dashboard.jsx`)
- **Hooks**: Use camelCase with "use" prefix (e.g., `useAuth.js`, `useLocalStorage.js`)
- **Utilities**: Use camelCase (e.g., `apiHelpers.js`, `dateUtils.js`)
- **Folders**: Use PascalCase for components, camelCase for others

### Components
- **React Components**: PascalCase (e.g., `const UserProfile = () => {}`)
- **Props**: camelCase (e.g., `userName`, `isActive`)
- **State Variables**: camelCase (e.g., `isLoading`, `userData`)

## File Organization Best Practices

### 1. Component Structure
Each component should have its own folder with:
```
ComponentName/
├── ComponentName.jsx      # Main component file
├── ComponentName.module.css # Component styles
├── ComponentName.test.jsx # Unit tests
└── index.js              # Export file for clean imports
```

### 2. Index Files
Use `index.js` files for cleaner imports:
```javascript
// components/ui/Button/index.js
export { default } from './Button';

// Usage
import Button from 'components/ui/Button'; // Clean!
// Instead of: import Button from 'components/ui/Button/Button';
```

### 3. Absolute Imports
Configure path aliases in `vite.config.js` for cleaner imports:
```javascript
// vite.config.js
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
});
```

### 4. Import Order
Organize imports in this order:
```javascript
// 1. External libraries
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// 2. Internal utilities and services
import { apiCall } from '@/services/api';
import { formatDate } from '@/utils/helpers';

// 3. Components
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

// 4. Relative imports
import './Component.module.css';
```

## Getting Started

1. **Create the folder structure**:
   ```bash
   mkdir -p src/{components/{ui,layout,features},pages,hooks,services,context,utils,styles}
   ```

2. **Move existing files** to appropriate directories

3. **Set up path aliases** in `vite.config.js`

4. **Create index files** for clean imports

5. **Follow naming conventions** consistently

## Additional Tips

- **Keep components small** and focused on a single responsibility
- **Use TypeScript** for better type safety (consider migrating to `.tsx`)
- **Implement error boundaries** for better error handling
- **Use CSS modules** or styled-components for component-scoped styles
- **Add Storybook** for component documentation and testing
- **Set up testing** with Jest and React Testing Library

This structure will help maintain a clean, scalable, and organized React application as StuddyBuddy grows!