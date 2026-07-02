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
    container: 'relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
  },
  step: {
    container: 'relative text-center',
    numberWrapper: 'relative mx-auto mb-4',
    number: 'w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg',
    iconWrapper: 'absolute inset-0 bg-green-700 rounded-full flex items-center justify-center',
    icon: 'w-8 h-8 text-white',
    title: 'text-lg font-semibold text-gray-900 mb-2',
    description: 'text-sm text-gray-600 leading-relaxed',
    connector: 'hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200',
    connectorDashed: 'hidden lg:block absolute top-8 left-full w-full h-0.5 border-t-2 border-dashed border-green-300',
  },
} as const;

export type HowItWorksStyles = typeof howItWorksStyles;
