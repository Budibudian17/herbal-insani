/**
 * Service details section styles for Layana page
 */

export const serviceDetailsStyles = {
  section: {
    container: 'py-16 md:py-20 bg-white',
  },
  container: {
    wrapper: 'max-w-6xl mx-auto px-4 md:px-6',
  },
  header: {
    container: 'text-center mb-12',
    title: 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4',
    description: 'text-base md:text-lg text-gray-600 max-w-2xl mx-auto',
  },
  content: {
    container: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
  },
  tabs: {
    container: 'lg:col-span-1 space-y-2',
  },
  tab: {
    button: 'w-full flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-left',
    buttonActive: 'border-green-500 bg-green-50',
    icon: 'w-5 h-5 text-gray-600',
    name: 'font-medium text-gray-900',
  },
  mobileCarousel: {
    container: 'flex items-center justify-between gap-4 mb-6',
    arrowButton: 'w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors',
    arrowIcon: 'w-6 h-6',
    widget: 'flex-1 bg-green-50 rounded-lg p-4 border-2 border-green-500',
    widgetContent: 'flex items-center gap-3',
    widgetIcon: 'w-8 h-8 text-green-600',
    widgetName: 'font-semibold text-gray-900',
  },
  details: {
    container: 'lg:col-span-2 bg-gray-50 rounded-lg p-6 md:p-8',
    imageWrapper: 'relative h-64 rounded-lg overflow-hidden mb-6',
    image: 'w-full h-full object-cover',
    iconOverlay: 'absolute inset-0 bg-black/40 flex items-center justify-center',
    icon: 'w-16 h-16 text-white',
    content: 'space-y-6',
    name: 'text-2xl font-bold text-gray-900 mb-2',
    description: 'text-gray-600 leading-relaxed',
    info: 'flex flex-wrap gap-6',
    infoItem: 'flex flex-col',
    infoLabel: 'text-sm font-semibold text-gray-700 mb-1',
    infoValue: 'text-sm text-gray-600',
    benefits: 'space-y-3',
    benefitsTitle: 'text-lg font-semibold text-gray-900 mb-3',
    benefitsList: 'space-y-2',
    benefitItem: 'flex items-start gap-2 text-sm text-gray-600',
  },
} as const;

export type ServiceDetailsStyles = typeof serviceDetailsStyles;
