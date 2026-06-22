/**
 * Services section styles for Layana page
 */

export const servicesStyles = {
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
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
  },
  card: {
    container: 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer',
    imageWrapper: 'relative h-48 overflow-hidden',
    image: 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500',
    iconOverlay: 'absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300',
    icon: 'w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300',
    name: 'text-lg font-semibold text-gray-900 mb-2 p-4 pt-4 group-hover:text-green-600 transition-colors duration-300',
    description: 'text-sm text-gray-600 px-4 pb-4',
  },
} as const;

export type ServicesStyles = typeof servicesStyles;
