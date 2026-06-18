export const footerStyles = {
  footer: {
    container: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 md:py-20',
  },
  container: {
    wrapper: 'max-w-7xl mx-auto px-6 md:px-8',
  },
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16', 
  },
  left: {
    container: 'space-y-5 md:col-span-2 pr-0 md:pr-8', 
    logo: {
      container: 'mb-4',
      image: 'h-10 md:h-12 w-auto',
    },
    description: 'text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm',
    social: {
      container: 'flex gap-3 mt-6',
      icon: 'w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 hover:text-green-600 hover:border-green-600 transition-colors text-sm',
      svg: 'w-full h-full',
    },
  },
  middle: {
    container: 'space-y-4 md:col-span-2',
    title: 'text-base font-bold mb-5 text-gray-900 dark:text-white tracking-wide',
    location: {
      container: 'space-y-4',
      item: 'space-y-1',
      name: 'font-semibold text-gray-900 dark:text-white text-sm block mb-1',
      address: 'text-sm text-gray-500 dark:text-gray-400 leading-relaxed',
    },
  },
  right: {
    container: 'space-y-4 md:col-span-1',
    title: 'text-base font-bold mb-5 text-gray-900 dark:text-white tracking-wide',
    links: {
      container: 'space-y-3',
      link: 'text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors block',
    },
  },
  bottom: {
    container: 'border-t border-gray-100 dark:border-gray-800 mt-16 pt-8 text-center sm:text-left',
    text: 'text-xs text-gray-400 dark:text-gray-500',
  },
} as const;

export type FooterStyles = typeof footerStyles;
