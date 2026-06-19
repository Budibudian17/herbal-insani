/**
 * Branches section styles for Layanan page
 */

export const branchesStyles = {
  section: {
    container: 'py-12 md:py-16 bg-white dark:bg-gray-900',
  },
  container: {
    wrapper: 'max-w-6xl mx-auto px-4 md:px-6',
    content: 'w-full',
  },
  header: {
    container: 'text-center mb-12',
    title: 'text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4',
    description: 'text-gray-600 dark:text-gray-300 max-w-2xl mx-auto',
  },
  grid: {
    container: 'grid grid-cols-1 md:grid-cols-2 gap-6',
  },
  card: {
    container: 'bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow',
    mapContainer: 'w-full h-48',
    map: 'w-full h-full',
    body: 'p-6 space-y-4',
    name: 'text-lg font-bold text-gray-900 dark:text-white mb-2',
    description: 'text-sm text-gray-600 dark:text-gray-400 mb-4',
    info: 'flex flex-col',
    label: 'text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1',
    value: 'text-sm text-gray-600 dark:text-gray-400',
    contactRow: 'flex flex-col md:flex-row gap-4 md:gap-6',
    contactItem: 'flex flex-col',
    whatsapp: 'flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors',
    whatsappIcon: 'w-4 h-4',
    hours: 'flex flex-col',
    hoursList: 'space-y-2',
    hoursItem: 'flex justify-between text-sm',
    hoursDay: 'text-gray-700 dark:text-gray-300',
    hoursTime: 'text-gray-600 dark:text-gray-400',
  },
} as const;

export type BranchesStyles = typeof branchesStyles;
