/**
 * About section styles for cleaner code organization
 */

export const aboutStyles = {
  section: {
    container: 'relative bg-green-600 dark:bg-green-700 py-6 md:py-8 lg:py-12',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  },
  grid: {
    container: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center',
  },
  image: {
    container: 'order-2 lg:order-1 max-w-md lg:max-w-lg hidden lg:block',
    image: 'w-full h-auto',
  },
  header: {
    container: 'order-1 lg:order-2 text-center lg:text-left mt-8',
    title: 'text-sm md:text-base lg:text-lg font-semibold text-green-200 dark:text-green-300 mb-2',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white dark:text-white mb-4',
    brandSpan: 'text-green-200 dark:text-green-300 transition-all duration-300 hover:scale-105 inline-block',
    contrastSpan: 'text-white dark:text-white transition-all duration-300 hover:scale-105 inline-block',
    highlightSpan: 'text-green-200 dark:text-green-300 font-semibold transition-all duration-300 hover:scale-105 inline-block',
    description: 'text-xs md:text-sm lg:text-base text-green-100 dark:text-green-200 mb-6',
    button: 'inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-green-800 hover:border-green-800 transition-colors duration-300',
  },
} as const;

export type AboutStyles = typeof aboutStyles;
