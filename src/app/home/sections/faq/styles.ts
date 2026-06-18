/**
 * FAQ section styles for cleaner code organization
 */

export const faqStyles = {
  section: {
    container: 'relative bg-fixed bg-center bg-cover',
    backgroundImage: "url('/img/backfaq.webp')",
    overlay: 'absolute inset-0 bg-white/60 dark:bg-gray-600/40',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full pt-12 md:pt-16',
  },
  grid: {
    container: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center',
  },
  image: {
    container: 'order-2 lg:order-1',
    image: 'w-full h-auto',
  },
  header: {
    container: 'order-1 lg:order-2 text-center lg:text-left',
    title: 'text-sm md:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4',
    description: 'text-xs md:text-sm lg:text-base text-gray-800 dark:text-gray-200 mb-6',
  },
  faq: {
    container: 'space-y-3',
    item: 'bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700',
    question: 'text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-1 md:mb-2',
    answer: 'text-xs md:text-sm text-gray-600 dark:text-gray-300',
  },
} as const;

export type FaqStyles = typeof faqStyles;
