/**
 * Vision section styles for Tentang Kami page
 */

export const visionStyles = {
  section: {
    container: 'relative bg-white dark:bg-gray-900',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full py-16 md:py-20',
  },
  grid: {
    container: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center',
  },
  image: {
    container: 'order-2 lg:order-2 block lg:hidden w-full flex justify-center mx-auto -mt-10',
    image: 'w-full h-auto max-w-md object-contain',
  },
  imageDesktop: {
    container: 'order-2 lg:order-2 hidden lg:block w-full lg:w-auto ml-auto flex justify-end',
    image: 'w-auto max-w-none h-[600px] object-right object-contain',
  },

  header: {
    container: 'order-1 lg:order-1 text-center lg:text-left mt-8',
    title: 'text-sm md:text-base lg:text-lg font-semibold text-green-600 dark:text-green-400 mb-2',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-700 dark:text-green-500 mb-4',
    brandSpan: 'text-green-600 dark:text-green-400 transition-all duration-300 hover:scale-105 inline-block',
    contrastSpan: 'text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 inline-block',
    highlightSpan: 'text-green-600 dark:text-green-400 font-semibold transition-all duration-300 hover:scale-105 inline-block',
    description: 'text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-6',
    points: {
      container: 'grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6',
      item: 'flex items-baseline gap-2',
      bullet: 'text-green-600 dark:text-green-400 flex-shrink-0 leading-none',
      text: 'text-xs md:text-sm text-gray-700 dark:text-gray-300',
    },
  },
} as const;

export type VisionStyles = typeof visionStyles;
