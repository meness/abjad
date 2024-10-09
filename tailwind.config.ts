import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './node_modules/@nextui-org/theme/dist/components/(avatar|badge|button|card|checkbox|chip|divider|dropdown|image|input|link|listbox|menu|modal|navbar|pagination|popover|progress|radio|select|skeleton|slider|snippet|spinner|toggle|table|tabs|ripple|scroll-shadow|spacer).js'
  ],
  plugins: [
    nextui({
      defaultTheme: 'light',
    })

  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'var(--montserrat)',
        'neue-haas': 'var(--neue-haas)'
      },
      fontSize: {
        '4.5xl': ['42px', '1'],
        '6.5xl': ['68px', '1'],
        '2.5xl': ['28px', '2rem']
      }
    }
  }
} satisfies Config;
