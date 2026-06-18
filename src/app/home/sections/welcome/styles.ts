/**
 * Welcome section styles for cleaner code organization
 */

export const welcomeStyles = {
  section: {
    container: 'relative bg-[#F8F9FB]',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  },
  grid: {
    container: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center',
  },
  image: {
    container: 'order-2 lg:order-1',
    image: 'w-full h-auto',
  },
  header: {
    container: 'order-1 lg:order-2 text-center mt-8',
    title: 'text-sm md:text-base lg:text-lg font-semibold text-green-600 dark:text-green-400 mb-2',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-700 dark:text-green-500 mb-4',
    brandSpan: 'text-green-600 dark:text-green-400 transition-all duration-300 hover:scale-105 inline-block',
    contrastSpan: 'text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 inline-block',
    highlightSpan: 'text-green-600 dark:text-green-400 font-semibold transition-all duration-300 hover:scale-105 inline-block',
    description: 'text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-6',
    ceo: 'mt-6 md:mt-8 flex flex-col items-center text-center w-full',
    ceoName: 'text-base md:text-lg lg:text-xl font-semibold text-green-600 dark:text-green-400',
    signature: 'mt-4 h-12 md:h-16 w-auto block',
  },
} as const;

export type WelcomeStyles = typeof welcomeStyles;
