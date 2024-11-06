import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
//import { Table } from '../components/Table';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="src\pages\Home\index.jsx" element={< Home />} />
      <Route path="src\components\Table\index.jsx" element={< Table />} />
    </Routes>
  );
}