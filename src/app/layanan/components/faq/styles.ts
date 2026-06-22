/**
 * FAQ section styles for Layana page
 */

export const faqStyles = {
  section: {
    container: 'py-16 md:py-20 bg-white',
  },
  container: {
    wrapper: 'max-w-4xl mx-auto px-4 md:px-6',
  },
  header: {
    container: 'text-center mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4',
    description: 'text-base md:text-lg text-gray-600 max-w-2xl mx-auto',
  },
  list: {
    container: 'space-y-4',
  },
  item: {
    container: 'border border-gray-200 rounded-lg overflow-hidden',
    button: 'w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors',
    question: 'font-semibold text-gray-900',
    icon: 'w-5 h-5 text-gray-500',
    answer: 'p-4 pt-0 text-gray-600 leading-relaxed',
  },
} as const;

export type FAQStyles = typeof faqStyles;
