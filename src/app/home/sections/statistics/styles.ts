/**
 * Statistics section styles for cleaner code organization
 */

export const statisticsStyles = {
  section: {
    container: 'relative bg-[#F8F9FB] py-12 md:py-16 lg:py-20',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  },
  stats: {
    container: 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8',
    item: 'text-center p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
    icon: 'w-10 h-10 text-green-600 dark:text-green-400 mx-auto mb-3',
    number: 'text-3xl md:text-4xl lg:text-5xl font-bold text-black-900 dark:text-white mb-2',
    label: 'text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300',
  },
} as const;

export type StatisticsStyles = typeof statisticsStyles;
