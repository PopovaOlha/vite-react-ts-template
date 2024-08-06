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
        <title>nextjs-ssr-app-router-api</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-16x16.png"
        />{' '}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
