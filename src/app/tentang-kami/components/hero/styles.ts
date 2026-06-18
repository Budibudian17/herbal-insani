/**
 * Hero section styles for Tentang Kami page
 */

export const heroStyles = {
  section: {
    container: 'relative h-28 md:h-46 lg:h-54 bg-cover bg-center bg-no-repeat',
    overlay: 'absolute inset-0 bg-black/40 dark:bg-black/50',
  },
  container: {
    wrapper: 'relative z-10 h-full',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full h-full flex flex-col justify-center text-center md:text-left',
  },
  breadcrumbs: {
  container: 'w-full',
  list: 'flex items-center justify-center md:justify-start gap-2 text-sm',
  item: 'flex items-center gap-2',
  link: 'text-white/80 hover:text-white transition-colors',
  separator: 'text-white/60',
  current: 'text-white font-medium',
},
  title: {
    container: 'w-full',
    heading: 'text-xl md:text-2xl lg:text-3xl font-bold text-green-400',
  },
} as const;

export type HeroStyles = typeof heroStyles;
