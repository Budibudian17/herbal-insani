/**
 * Doctors section styles for Tentang Kami page
 */

export const doctorsStyles = {
  section: {
    container: 'px-4 md:px-6 bg-white dark:bg-gray-900',
  },
  content: {
    container: 'max-w-4xl mx-auto text-center mt-12',
  },
  title: {
    text: 'text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 dark:text-white mb-4',
  },
  description: {
    text: 'text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed',
  },
  image: {
    container: 'w-full',
    img: 'w-full h-auto',
  },
} as const;

export type DoctorsStyles = typeof doctorsStyles;
