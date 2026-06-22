/**
 * Why choose us section styles for Layana page
 */

export const whyChooseUsStyles = {
  section: {
    container: 'py-16 md:py-20 bg-gray-50',
  },
  container: {
    wrapper: 'max-w-6xl mx-auto px-4 md:px-6',
  },
  header: {
    container: 'text-center mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4',
    description: 'text-base md:text-lg text-gray-600 max-w-2xl mx-auto',
  },
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
  },
  card: {
    container: 'bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow',
    iconWrapper: 'w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4',
    icon: 'w-6 h-6 text-green-600',
    title: 'text-lg font-semibold text-gray-900 mb-2',
    description: 'text-sm text-gray-600',
  },
} as const;

export type WhyChooseUsStyles = typeof whyChooseUsStyles;
