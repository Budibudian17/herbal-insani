/**
 * Theme configuration for Herbal Insani application
 * Centralized style constants for consistent UI across the application
 */

export const theme = {
  gradients: {
    primary: 'from-green-50 to-emerald-100',
    primaryDark: 'from-gray-900 to-gray-800',
  },
  cards: {
    default: 'bg-white dark:bg-gray-800 rounded-lg shadow',
    elevated: 'bg-white dark:bg-gray-800 rounded-2xl shadow-xl',
    hover: 'hover:shadow-xl transition-all',
  },
  buttons: {
    primary: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border-2 border-transparent hover:border-green-500 dark:hover:border-green-400',
  },
  text: {
    heading: 'text-4xl font-bold text-gray-900 dark:text-white',
    subheading: 'text-2xl font-semibold text-gray-900 dark:text-white',
    body: 'text-gray-600 dark:text-gray-400',
    muted: 'text-sm text-gray-500 dark:text-gray-500',
  },
  spacing: {
    page: 'p-8',
    card: 'p-6',
    section: 'py-8',
  },
  layout: {
    container: 'container mx-auto px-4',
    centered: 'flex flex-col items-center justify-center',
    gap: 'gap-8',
  },
  colors: {
    green: {
      50: 'bg-green-50 dark:bg-gray-700',
      100: 'hover:bg-green-100 dark:hover:bg-gray-600',
      500: 'text-green-600 dark:text-green-400',
      600: 'text-green-600 dark:text-green-400',
    },
    blue: {
      50: 'bg-blue-50 dark:bg-gray-700',
      100: 'hover:bg-blue-100 dark:hover:bg-gray-600',
      500: 'text-blue-600 dark:text-blue-400',
      600: 'text-blue-600 dark:text-blue-400',
    },
    purple: {
      50: 'bg-purple-50 dark:bg-gray-700',
      100: 'hover:bg-purple-100 dark:hover:bg-gray-600',
      500: 'text-purple-600 dark:text-purple-400',
      600: 'text-purple-600 dark:text-purple-400',
    },
  },
  animations: {
    transition: 'transition-colors',
    groupHover: 'group-hover:text-green-600 dark:group-hover:text-green-400',
  },
} as const;

export type Theme = typeof theme;
