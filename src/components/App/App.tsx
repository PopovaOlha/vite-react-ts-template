import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Details from '../Details/Details';
import NotFound from '../../pages/NotFound/NotFound';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="details/:id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
