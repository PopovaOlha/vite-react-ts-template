import * as React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import '../index.css';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
