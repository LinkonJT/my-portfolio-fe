import { createTheme } from 'flowbite-react';

export const customTheme = createTheme({
  // Customizing Navbar
   Navbar: {
    root: {
      base: "bg-violet-500 dark:bg-violet-700",  // Ensure background color for navbar
    },
    link: {
      base: "text-white",  // Text color for navbar links
      active: {
        on: "bg-violet-600 text-white",  // Active link color
        off: "text-white hover:bg-violet-600",  // Hover link color
      },
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
      primary: 'bg-violet-500 hover:bg-violet-600',  // Primary button color
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
