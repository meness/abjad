import 'reflect-metadata';

import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { type ReactElement } from 'react';
import '~assets/css/theme.css';
import { GlobalErrorBoundary } from '~components';
import { ThemeProvider } from '~providers';

const AppPage = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <DefaultSeo
        title="Abjad"
        titleTemplate="%s - Abjad"
        description="Calculate"
        openGraph={{
          locale: 'en-US',
          title: 'Abjad',
          description: 'Calculate',
          images: []
        }}
      />
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

const AppPageWrapper = (props: AppPropsWithLayout) => {
  return (
    <GlobalErrorBoundary>
      <ThemeProvider>
        <AppPage {...props} />
      </ThemeProvider>
    </GlobalErrorBoundary>
  );
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default AppPageWrapper;
