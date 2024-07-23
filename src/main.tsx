import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import App from './components/App/App';
import './index.css';

const Root: React.FC = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);

  return <App />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
