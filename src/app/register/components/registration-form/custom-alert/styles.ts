/**
 * Custom alert styles for registration form
 */

export const alertStyles = {
  overlay: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4',
  container: 'bg-white rounded-lg shadow-xl max-w-md w-full',
  header: 'flex items-center gap-3 p-4 border-b border-gray-200',
  icon: 'w-6 h-6 text-red-500',
  title: 'text-lg font-semibold text-gray-900 flex-1',
  closeButton: 'p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-500',
  content: 'p-4',
  message: 'text-gray-700',
  footer: 'p-4 border-t border-gray-200 flex justify-end',
  button: 'px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors',
} as const;

export type AlertStyles = typeof alertStyles;
