/**
 * Registration form styles for cleaner code organization
 */

export const registrationFormStyles = {
  section: {
    container: 'py-12 md:py-16 bg-gray-50',
  },
  container: {
    wrapper: 'max-w-4xl mx-auto px-4 md:px-6',
  },
  progress: {
    container: 'flex items-center justify-between mb-12 relative',
    step: 'flex flex-col items-center flex-1 relative',
    circleWrapper: 'relative',
    circle: 'w-12 h-12 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center mb-2 transition-all duration-300',
    circleActive: 'bg-green-600 text-white',
    circleCompleted: 'bg-green-600 text-white',
    percentage: 'absolute -top-1 -right-1 w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-semibold',
    label: 'text-sm text-gray-500 text-center',
    labelActive: 'text-green-600 font-semibold',
    progressBar: 'w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden',
    progressFill: 'h-full bg-green-600 transition-all duration-300',
    line: 'absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 -z-10',
    lineActive: 'bg-green-600',
  },
  form: {
    container: 'bg-white rounded-lg shadow-md p-6 md:p-8',
    group: 'mb-6',
    label: 'block text-sm font-semibold text-gray-700 mb-2',
    input: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all',
    textarea: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none',
    select: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white',
    hint: 'text-sm text-gray-500 mb-2',
  },
  step: {
    container: '',
    title: 'text-2xl font-bold text-gray-900 mb-6',
  },
  gender: {
    container: 'grid grid-cols-2 gap-4',
    card: 'flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-lg hover:border-green-500 transition-all duration-300 cursor-pointer hover:scale-105',
    cardActive: 'border-green-600 bg-green-50 scale-105',
    icon: 'w-8 h-8 mb-2',
  },
  service: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    card: 'flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-lg hover:border-green-500 transition-all duration-300 cursor-pointer text-center hover:scale-105',
    cardActive: 'border-green-600 bg-green-50 scale-105',
    icon: 'w-10 h-10 mb-3 text-green-600',
    name: 'font-semibold text-gray-900 mb-2',
    description: 'text-sm text-gray-600',
  },
  doctor: {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    card: 'relative h-48 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2 border-gray-300 hover:border-green-500 hover:scale-105',
    cardActive: 'border-green-600 scale-105',
    backgroundImage: 'absolute inset-0 bg-cover bg-center',
    overlay: 'absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent',
    content: 'absolute inset-0 flex flex-col items-center justify-center p-4',
    name: 'text-white font-bold text-lg text-center',
    specialty: 'text-white/90 text-sm text-center',
    gender: 'text-white/80 text-xs text-center mt-1',
  },
  branch: {
    container: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    card: 'flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-lg hover:border-green-500 transition-all duration-300 cursor-pointer text-center hover:scale-105',
    cardActive: 'border-green-600 bg-green-50 scale-105',
    name: 'font-semibold text-gray-900 mb-2',
    address: 'text-sm text-gray-600',
  },
  summary: {
    container: 'mt-8 p-6 bg-green-50 rounded-lg border border-green-200',
    title: 'text-lg font-semibold text-gray-900 mb-4',
    content: 'space-y-3',
    item: 'flex justify-between',
    label: 'text-sm text-gray-600',
    value: 'text-sm font-semibold text-gray-900',
  },
  navigation: {
    container: 'flex justify-end mt-8 gap-4',
    buttonPrimary: 'flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors',
    buttonSecondary: 'flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors',
  },
} as const;

export type RegistrationFormStyles = typeof registrationFormStyles;
