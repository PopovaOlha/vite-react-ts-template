import React from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import '../index.css';
import { ThemeProvider } from '../context/ThemeContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>App State Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-16x16.png"
        />{' '}
        {/* Correct usage */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
