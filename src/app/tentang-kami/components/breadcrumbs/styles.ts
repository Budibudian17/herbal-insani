/**
 * Breadcrumbs styles for Tentang Kami page
 */

export const breadcrumbsStyles = {
  container: 'bg-gray-50 dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-800',
  wrapper: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  list: 'flex items-center gap-2 text-sm',
  item: 'flex items-center gap-2',
  link: 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors',
  separator: 'text-gray-400 dark:text-gray-600',
  current: 'text-green-600 dark:text-green-400 font-medium',
} as const;

export type BreadcrumbsStyles = typeof breadcrumbsStyles;
