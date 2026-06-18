/**
 * Hero section-specific styles for cleaner code organization
 */

export const heroStyles = {
  section: {
    container: 'relative min-h-[76vh]',
  },
  background: {
    container: 'absolute inset-0',
    image: 'w-full h-full object-cover',
    overlay: 'absolute inset-0 bg-black/20',
  },
  content: {
    container: 'relative z-10 min-h-[76vh] flex items-center',
    wrapper: 'flex justify-center md:justify-end pr-0 md:pr-30',
    textContainer: 'max-w-xl text-center md:text-right',
  },
  heading: {
  container: 'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 space-x-3',
  brandSpan: 'text-green-600 dark:text-green-400 transition-all duration-300 hover:scale-105 inline-block',
  contrastSpan: 'text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 inline-block',
},

  paragraph: {
    container: 'text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl mb-6 text-gray-900 dark:text-white',
    highlightSpan: 'text-green-600 dark:text-green-400 font-semibold transition-all duration-300 hover:scale-105 inline-block',
  },
  button: {
    container: 'bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-lg',
  },
} as const;

export type HeroStyles = typeof heroStyles;
