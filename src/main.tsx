import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
