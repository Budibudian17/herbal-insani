/**
 * Documentation section styles for cleaner code organization
 */

export const documentationStyles = {
  section: {
    container: 'relative bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'w-full px-4 md:px-6',
  },
  header: {
    container: 'text-center mb-8 md:mb-12',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600 dark:text-green-400 mb-4',
    description: 'text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto',
  },
  gallery: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
    item: 'relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group',
    image: 'w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110',
    overlay: 'absolute inset-0 bg-green-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center',
    icon: 'text-white w-12 h-12',
  },
  lightbox: {
    container: 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4',
    image: 'max-w-full max-h-full object-contain',
    close: 'absolute top-4 right-4 text-white text-4xl cursor-pointer hover:text-gray-300 transition-colors',
  },
} as const;

export type DocumentationStyles = typeof documentationStyles;
