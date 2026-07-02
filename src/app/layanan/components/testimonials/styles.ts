/**
 * Testimonials section styles for Layana page
 */

export const testimonialsStyles = {
  section: {
    container: 'relative py-12 md:py-16 lg:py-20 bg-white',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  header: {
    container: 'text-center mb-8 md:mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-2 md:mb-3',
    description: 'text-sm md:text-base lg:text-lg text-gray-600',
  },
  grid: {
    container: 'relative overflow-hidden',
  },
  slider: {
    container: 'flex transition-transform duration-500 ease-in-out',
    item: 'w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4',
  },
  card: {
    container: 'bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center min-h-[400px] md:min-h-[450px] lg:min-h-[480px]',
    rating: 'flex items-center gap-1 mb-4',
    photo: 'w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 border-4 border-green-100',
    text: 'text-sm md:text-base text-gray-700 mb-4',
    service: 'text-xs md:text-sm font-semibold text-green-600 mb-2',
    name: 'text-sm md:text-base font-semibold text-gray-900',
  },
} as const;

export type TestimonialsStyles = typeof testimonialsStyles;
