/**
 * Services section styles for cleaner code organization
 */

export const servicesStyles = {
  section: {
    container: 'relative py-6 md:py-8 lg:py-12 bg-white dark:bg-gray-900',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  header: {
    container: 'text-center mb-6 md:mb-8 lg:mb-10',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3',
    subtitle: 'text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300',
  },
  grid: {
    container: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6',
  },
  card: {
    container: 'bg-white dark:bg-gray-800 rounded-lg hover:shadow-xl transition-all duration-500 ease-in-out h-40 md:h-48 lg:h-56 flex flex-col items-center justify-center text-center cursor-pointer group border border-black dark:border-gray-600',
    icon: 'text-green-600 dark:text-green-400 mb-1 md:mb-2 lg:mb-3 transition-all duration-500 ease-in-out group-hover:translate-y-4 md:group-hover:translate-y-5 lg:group-hover:translate-y-6',
    title: 'text-xs md:text-sm lg:text-lg font-semibold text-green-900 dark:text-white mb-1 md:mb-2 transition-all duration-500 ease-in-out group-hover:-translate-y-12 md:group-hover:-translate-y-14 lg:group-hover:-translate-y-16 group-hover:mb-0',
  },
} as const;
