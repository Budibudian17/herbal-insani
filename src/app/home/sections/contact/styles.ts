export const contactStyles = {
  section: {
    container: 'relative bg-center bg-cover py-16 md:py-24',
    backgroundImage: "url('/img/backfaq.webp')",
    overlay: 'absolute inset-0 bg-black/80 dark:bg-black/80',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-4xl mx-auto px-4 md:px-6 w-full',
  },
  content: {
    container: 'text-center',
    icon: 'w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-white',
    title: 'text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4',
    subtitle: 'text-lg md:text-xl lg:text-2xl font-semibold text-white mb-6',
    phone: 'text-2xl md:text-3xl lg:text-4xl font-bold text-white',
  },
} as const;

export type ContactStyles = typeof contactStyles;
