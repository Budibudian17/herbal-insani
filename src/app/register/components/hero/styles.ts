/**
 * Hero section styles for registration page
 */

export const heroStyles = {
  section: {
    container: 'relative bg-fixed bg-center bg-cover py-16 md:py-20',
    backgroundImage: "url('/img/pelayananramah.webp')",
    overlay: 'absolute inset-0 bg-green-600/80',
  },
  container: {
    wrapper: 'relative z-10 max-w-6xl mx-auto px-4 md:px-6',
  },
  content: {
    container: 'text-center',
    title: 'text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4',
    description: 'text-base md:text-lg text-white/90 max-w-2xl mx-auto',
  },
} as const;

export type HeroStyles = typeof heroStyles;
