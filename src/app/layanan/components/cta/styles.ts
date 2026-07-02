/**
 * CTA section styles for Layana page
 */

export const ctaStyles = {
  section: {
    container: 'relative bg-fixed bg-center bg-cover py-16 md:py-20',
    backgroundImage: "url('/img/footerbg.webp')",
    overlay: 'absolute inset-0 bg-green-600/80',
  },
  container: {
    wrapper: 'relative z-10 max-w-6xl mx-auto px-4 md:px-6',
  },
  content: {
    container: 'text-center',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4',
    description: 'text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8',
  },
  actions: {
    container: 'flex flex-col sm:flex-row gap-4 justify-center items-center',
  },
  button: {
    primary: 'flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors',
    secondary: 'flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors',
    icon: 'w-5 h-5',
  },
} as const;

export type CTAStyles = typeof ctaStyles;
