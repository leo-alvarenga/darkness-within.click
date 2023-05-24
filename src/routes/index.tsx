import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { paths } from '../common';
import { ChmodPage, Home, NotFound, Tools, WorkspacePage } from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />

        {/* Tools */}
        <Route path={paths.TOOLS.root} element={<Tools />} />
        <Route path={paths.TOOLS.CHMOD} element={<ChmodPage />} />
        <Route path={paths.TOOLS.WORKSPACE} element={<WorkspacePage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
