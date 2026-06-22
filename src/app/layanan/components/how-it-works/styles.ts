/**
 * How it works section styles for Layana page
 */

export const howItWorksStyles = {
  section: {
    container: 'py-16 md:py-20 bg-white',
  },
  container: {
    wrapper: 'max-w-6xl mx-auto px-4 md:px-6',
  },
  header: {
    container: 'text-center mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4',
    description: 'text-base md:text-lg text-gray-600 max-w-2xl mx-auto',
  },
  steps: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
  },
  step: {
    container: 'relative bg-gray-50 rounded-lg p-6 text-center',
    number: 'absolute -top-3 -left-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold',
    iconWrapper: 'w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4',
    icon: 'w-6 h-6 text-green-600',
    title: 'text-lg font-semibold text-gray-900 mb-2',
    description: 'text-sm text-gray-600',
  },
} as const;

export type HowItWorksStyles = typeof howItWorksStyles;
