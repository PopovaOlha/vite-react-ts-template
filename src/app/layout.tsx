'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';
import { ThemeProvider } from '../context/ThemeContext';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <Head>
              <title>nextjs-ssr-app-router-api</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <link
                rel="icon"
                type="image/png"
                href="/images/favicon-16x16.png"
              />
            </Head>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {children}
            </ErrorBoundary>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
