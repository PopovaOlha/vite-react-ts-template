import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../../pages/NotFound/NotFound';
import Details from '../../components/Details/Details';
import NotFound from '../../pages/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
