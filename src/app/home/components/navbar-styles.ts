/**
 * Navbar-specific styles for cleaner code organization
 */

export const navbarStyles = {
  topBar: {
    container: 'bg-green-600 dark:bg-green-700 py-2 hidden md:block',
    content: 'flex items-center gap-2 text-white text-sm',
    icon: 'w-4 h-4',
  },
  navbar: {
    container: 'bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-all duration-300',
    content: 'flex items-center justify-center gap-80 hidden md:flex',
    mobileContent: 'flex items-center justify-between gap-4 md:hidden',
  },
  logo: {
    container: 'flex items-center transition-transform duration-300 hover:scale-105',
    image: 'h-16 w-auto',
    mobileImage: 'h-12 w-auto',
  },
  nav: {
    container: 'hidden md:flex items-center gap-8',
    link: 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 ease-in-out hover:scale-105 relative group',
    linkActive: 'text-green-600 dark:text-green-400',
    underline: 'absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300 group-hover:w-full',
    underlineActive: 'w-full',
    button: 'bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg',
  },
  mobile: {
    button: 'md:hidden p-2 transition-all duration-300 hover:scale-110',
    icon: 'w-6 h-6 text-gray-900 dark:text-white transition-transform duration-300',
    menu: 'md:hidden mt-4 pb-4 text-center animate-in fade-in slide-in-from-top-2 duration-300',
    link: 'block py-3 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 ease-in-out hover:scale-105 border-b border-gray-200 dark:border-gray-700 last:border-0',
    linkActive: 'text-green-600 dark:text-green-400 font-semibold',
    buttonWrapper: 'mt-4 pt-4',
  },
} as const;

export type NavbarStyles = typeof navbarStyles;
