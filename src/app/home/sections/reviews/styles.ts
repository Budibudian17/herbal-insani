/**
 * Reviews section styles for cleaner code organization
 */

export const reviewsStyles = {
  section: {
    container: 'relative py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  header: {
    container: 'text-center mb-8 md:mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 md:mb-3',
    subtitle: 'text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300',
  },
  grid: {
    container: 'relative overflow-hidden',
  },
  slider: {
    container: 'flex transition-transform duration-500 ease-in-out',
    item: 'w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4',
  },
  card: {
    container: 'bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center min-h-[400px] md:min-h-[450px] lg:min-h-[480px]',
    rating: 'flex items-center gap-1 mb-4',
    photo: 'w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 border-4 border-green-100 dark:border-green-900',
    text: 'text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4',
    service: 'text-xs md:text-sm font-semibold text-green-600 dark:text-green-400 mb-2',
    name: 'text-sm md:text-base font-semibold text-gray-900 dark:text-white',
  },
  controls: {
    container: 'flex justify-center gap-4 mt-8',
    button: 'w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
  },
} as const;

export type ReviewsStyles = typeof reviewsStyles;
