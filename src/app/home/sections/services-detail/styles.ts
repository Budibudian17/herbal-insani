/**
 * Services Detail section styles for cleaner code organization
 */

export const servicesDetailStyles = {
  section: {
    container: 'relative bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  },
  tabs: {
    container: 'grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 mb-8 md:mb-12',
    item: 'flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 hover:border-green-600 dark:hover:border-green-400',
    itemActive: 'flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg border-2 border-green-600 dark:border-green-400 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 cursor-pointer transition-all duration-300',
    text: 'text-xs md:text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300',
    textActive: 'text-xs md:text-sm lg:text-base font-semibold text-white dark:text-gray-900',
    icon: 'w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6',
  },
  content: {
    container: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center',
  },
  image: {
    container: 'order-1 lg:order-2',
    image: 'w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg shadow-lg',
  },
  header: {
    container: 'order-2 lg:order-1',
    title: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4',
    description: 'text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6',
    points: {
      container: 'space-y-3 mb-6',
      item: 'flex items-start gap-3',
      bullet: 'text-green-600 dark:text-green-400 flex-shrink-0 mt-1',
      text: 'text-sm md:text-base text-gray-700 dark:text-gray-300',
    },
    button: 'inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300',
  },
} as const;

export type ServicesDetailStyles = typeof servicesDetailStyles;
