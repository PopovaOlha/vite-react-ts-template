'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { ThemeProvider } from '../../context/ThemeContext';

const LayoutClient: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default LayoutClient;
