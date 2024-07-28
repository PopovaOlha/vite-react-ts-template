import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { DEFAULT_THEME, DARK_THEME } from './themeUtils';
import { Theme, ThemeContextType } from '../types/interfaces';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === DEFAULT_THEME ? DARK_THEME : DEFAULT_THEME,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
