import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as ThemeProviderOrg } from 'next-themes';
import { useRouter } from 'next/router';
import { type PropsWithChildren } from 'react';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { push } = useRouter();

  return (
    <NextUIProvider navigate={push}>
      <ThemeProviderOrg
        defaultTheme="light"
        attribute="class"
        enableSystem={false}>
        {children}
      </ThemeProviderOrg>
    </NextUIProvider>
  );
};
