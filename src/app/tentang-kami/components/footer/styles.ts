/**
 * Footer styles for Tentang Kami page
 */

export const footerStyles = {
  footer: {
    container: 'relative bg-cover bg-center bg-no-repeat',
    style: 'background-image: url("/img/footer-bg.webp");',
  },
  overlay: {
    container: 'absolute inset-0 bg-green-900/90',
  },
  container: {
    wrapper: 'relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16',
  },
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12',
  },
  left: {
    container: 'flex flex-col gap-4',
    logo: {
      container: 'w-32 md:w-40',
      image: 'w-full h-auto',
    },
    description: 'text-sm md:text-base text-gray-100 leading-relaxed',
    social: {
      container: 'flex gap-4',
      icon: 'w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors',
      svg: 'w-4 h-4 md:w-5 md:h-5 text-white',
    },
  },
  middle: {
    container: 'flex flex-col gap-4',
    title: 'text-lg md:text-xl font-bold text-white mb-2',
    location: {
      container: 'flex flex-col gap-3',
      item: 'flex flex-col gap-1',
      name: 'text-sm md:text-base font-semibold text-white',
      address: 'text-xs md:text-sm text-gray-200',
    },
  },
  right: {
    container: 'flex flex-col gap-4',
    title: 'text-lg md:text-xl font-bold text-white mb-2',
    emergency: {
      container: 'flex flex-col gap-2',
      phone: 'text-xl md:text-2xl font-bold text-green-300',
      description: 'text-sm md:text-base text-gray-200 leading-relaxed',
      email: 'text-sm md:text-base text-gray-200',
    },
  },
  bottom: {
    container: 'mt-8 pt-8 border-t border-white/20',
    text: 'text-xs md:text-sm text-gray-300 text-left',
  },
} as const;

export type FooterStyles = typeof footerStyles;
