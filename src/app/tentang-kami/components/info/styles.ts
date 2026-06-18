/**
 * Information section styles for Tentang Kami page
 */

export const infoStyles = {
  section: {
    container: 'py-8 md:py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-800',
  },
  grid: {
    container: 'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8',
  },
  features: {
    container: 'lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',
    card: 'bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex items-start gap-4 transition-all duration-300 hover:scale-105',
    icon: 'w-12 h-12 md:w-14 md:h-14 text-green-600 dark:text-green-400 flex-shrink-0',
    content: 'flex-1',
    title: 'text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2',
    description: 'text-sm md:text-base text-gray-600 dark:text-gray-300',
  },
  workingHours: {
    container: 'bg-green-600 dark:bg-green-700 rounded-lg shadow-md p-5 md:p-6',
    title: 'text-xl md:text-2xl font-bold text-white mb-2',
    subtitle: 'text-sm md:text-base text-green-50 dark:text-green-100 mb-4',
    table: 'w-full',
    row: 'border-b border-green-500 dark:border-green-400 last:border-0',
    day: 'py-3 text-sm md:text-base text-white font-medium',
    hours: 'py-3 text-sm md:text-base text-green-50 dark:text-green-100 text-right',
    closed: 'py-3 text-sm md:text-base text-red-200 dark:text-red-100 text-right font-medium',
    description: 'text-xs md:text-sm text-green-50 dark:text-green-100 mt-4 leading-relaxed',
  },
} as const;

export type InfoStyles = typeof infoStyles;
