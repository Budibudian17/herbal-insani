/**
 * Testimonials section styles for Layana page
 */

export const testimonialsStyles = {
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
    container: 'grid grid-cols-1 md:grid-cols-3 gap-6',
  },
  card: {
    container: 'bg-white rounded-lg p-6 shadow-md',
    rating: 'flex gap-1 mb-4',
    star: 'w-5 h-5 text-yellow-400',
    text: 'text-gray-600 mb-6 leading-relaxed',
    author: 'flex items-center gap-3',
    avatar: 'w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold',
    name: 'font-semibold text-gray-900',
    location: 'text-sm text-gray-500',
  },
} as const;

export type TestimonialsStyles = typeof testimonialsStyles;
