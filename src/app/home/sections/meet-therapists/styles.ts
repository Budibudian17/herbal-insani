/**
 * Meet Our Therapists section styles for cleaner code organization
 */

export const meetTherapistsStyles = {
  section: {
    container: 'relative py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  header: {
    container: 'text-center mb-8 md:mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 md:mb-3',
    subtitle: 'text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300',
  },
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
  },
  item: {
    container: 'relative group overflow-hidden rounded-lg',
    image: 'w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110',
    overlay: 'absolute inset-0 bg-green-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center',
    button: 'bg-white text-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors duration-300',
  },
  content: {
    container: 'text-center mt-4',
    name: 'text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1',
    position: 'text-sm text-green-600 dark:text-green-400 font-medium',
  },
  viewAll: {
    container: 'text-center mt-8',
    button: 'inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300',
  },
} as const;

export type MeetTherapistsStyles = typeof meetTherapistsStyles;
