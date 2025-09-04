import { createTheme } from 'flowbite-react';

export const customTheme = createTheme({
  // Customizing Navbar
   navbar: {
    root: {
      base: "dark:bg-sky-900 bg-sky-700",  // Ensure background color for navbar
    },
   link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-gray-500 text-white md:bg-transparent dark:text-white",
      off: "border-b border-gray-100 text-gray-300 hover:text-gray-800 md:border-0 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
    },
    disabled: {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
    toggle: {
      base: "text-white hover:bg-violet-600 dark:hover:bg-violet-800",  // Toggle button styles
    },
    collapse: {
      base: "w-full md:block md:w-auto",  // Collapse menu styles
    },
  },

  // Customizing Button
  button: {
    color: {
      primary: 'bg-sky-500 hover:bg-violet-600',  // Primary button color
      secondary: 'bg-gray-600 hover:bg-gray-700',  // Secondary button color
    },
    size: {
      lg: 'px-6 py-3 text-lg',  // Large button size
      sm: 'px-4 py-2 text-sm',  // Small button size
    },
  },

  // Customizing Card
  card: {
    color: 'bg-white',  // Card background color
    borderColor: 'border-gray-300',  // Card border color
    shadow: 'shadow-md',  // Card shadow
  },

  // Customizing Footer
  footer: {
    color: 'bg-violet-900',  // Footer background color
    textColor: 'text-white',  // Footer text color
  },

  // Customize other components as needed (e.g., Input, Modal, etc.)
});
