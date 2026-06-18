/**
 * Video section styles for Tentang Kami page
 */

export const videoStyles = {
  section: {
    container: 'relative bg-[#F8F9FB]',
  },
  container: {
    wrapper: 'relative z-10',
    content: 'max-w-6xl mx-auto px-4 md:px-6 w-full py-16 md:py-20',
  },
  grid: {
    container: 'grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-start',
  },
  video: {
    container: 'order-1 lg:order-1 w-full',
    thumbnail: 'w-full h-auto aspect-video rounded-lg shadow-md cursor-pointer relative overflow-hidden group',
    thumbnailImage: 'w-full h-full object-cover',
    playButton: 'absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors duration-300',
    playIcon: 'w-16 h-16 text-white',
  },
  modal: {
    overlay: 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4',
    container: 'relative max-w-4xl w-full',
    closeButton: 'absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors',
    closeIcon: 'w-8 h-8',
    video: 'w-full aspect-video rounded-lg',
  },
  header: {
    container: 'order-2 lg:order-2 text-left mt-8',
    title: 'text-sm md:text-base lg:text-lg font-semibold text-green-600 dark:text-green-400 mb-2',
    subtitle: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-700 dark:text-green-500 mb-4',
    points: {
      container: 'mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4',
      item: 'flex items-baseline gap-2',
      bullet: 'text-green-600 dark:text-green-400 flex-shrink-0 leading-none',
      text: 'text-xs md:text-sm text-gray-600 dark:text-gray-300',
    },
  },
} as const;

export type VideoStyles = typeof videoStyles;
