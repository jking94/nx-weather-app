// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// The above utility import will not work if you are using Next.js' --turbo.
// Instead you will have to manually add the dependent paths to be included.
// For example
// ../libs/buttons/**/*.{ts,tsx,js,jsx,html}',                 <--- Adding a shared lib
// !../libs/buttons/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', <--- Skip adding spec/stories files from shared lib

// If you are **not** using `--turbo` you can uncomment both lines 1 & 19.
// A discussion of the issue can be found: https://github.com/nrwl/nx/issues/26510

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    //     ...createGlobPatternsForDependencies(__dirname)
    // "/src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: "var(--color-primary)",
        lightGrey: "var(--color-light-grey)",
        grey: "var(--color-grey)"
      },
      backgroundImage: {
        'grey-gradient-right': 'var(--color-grey-gradient-right)',
        'grey-gradient-down': 'var(--color-grey-gradient-down)',
        'grey-gradient-up': 'var(--color-grey-gradient-up)'
      },
      fontFamily: {
        "sans": ['Helvetica', 'sans-serif']
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
        fontSize: {
        'sm': '14px',
        'md': '16px',
        'lg': '24px', 
        'xl': '48px'
      },
      spacing: {
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '36': '36px'
      },
      height: {
        '32': '32px'
      },
      maxWidth: {
        'card': '255px',
      },
      borderWidth: {
        '2px': '2px',
        DEFAULT: '1px'
      },
      borderRadius: {
        'xl': '1rem',         
        '2xl': '1.5rem',
        'custom': '0.75rem', 
      },
    },
  },
  plugins: [],
};
