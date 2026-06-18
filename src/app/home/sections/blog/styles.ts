export const blogStyles = {
  section: {
    container: 'py-16 md:py-24',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  },
  header: {
    container: 'text-center mb-12',
    title: 'text-sm md:text-base lg:text-lg font-semibold text-green-600 dark:text-green-400 mb-2',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4',
    description: 'text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300',
  },
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
  },
  button: {
    container: 'flex justify-center mt-8 md:mt-12',
    button: 'bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300',
  },
  card: {
    container: 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300',
    image: 'w-full h-48 md:h-56 object-cover',
    content: 'p-4 md:p-6',
    title: 'text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2',
    meta: 'flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3',
    description: 'text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-3',
  },
} as const;

export type BlogStyles = typeof blogStyles;
