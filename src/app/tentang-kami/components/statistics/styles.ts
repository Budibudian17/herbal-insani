/**
 * Statistics section styles for Tentang Kami page with parallax background
 */

export const statisticsStyles = {
  section: {
    container: 'relative bg-fixed bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20',
    overlay: 'absolute inset-0 bg-black/50',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full',
  },
  stats: {
    container: 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8',
    item: 'text-center p-4 md:p-6',
    icon: 'w-10 h-10 text-green-400 mx-auto mb-3',
    number: 'text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2',
    label: 'text-xs md:text-sm lg:text-base text-gray-200',
  },
} as const;

export type StatisticsStyles = typeof statisticsStyles;
