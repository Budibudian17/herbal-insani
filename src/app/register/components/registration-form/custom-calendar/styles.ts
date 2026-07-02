/**
 * Custom calendar styles for registration form
 */

export const calendarStyles = {
  container: 'relative',
  input: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-left bg-white',
  popup: 'absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 w-full',
  header: 'flex items-center justify-between mb-4',
  selectors: 'flex items-center gap-2 flex-1',
  monthSelect: 'px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white text-sm',
  yearSelect: 'px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white text-sm w-24',
  monthYear: 'text-lg font-semibold text-gray-900',
  navButton: 'p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600',
  daysHeader: 'grid grid-cols-7 gap-2 mb-2',
  dayName: 'text-center text-sm font-semibold text-gray-500',
  daysGrid: 'grid grid-cols-7 gap-2',
  day: {
    empty: '',
    button: 'w-10 h-10 flex items-center justify-center rounded-lg hover:bg-green-100 transition-colors text-gray-700',
    selected: 'bg-green-600 text-white hover:bg-green-700',
    today: 'font-bold border-2 border-green-600',
    disabled: 'text-gray-300 cursor-not-allowed hover:bg-transparent',
  },
} as const;

export type CalendarStyles = typeof calendarStyles;
