import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { availableTools, paths, toolMap } from '../common';
import { Home, NotFound, Tools } from '../pages';
import WorkspacePage from '../pages/Tools/WorkspacePage';
import { Page } from '../components';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />

        {/* Tools */}
        <Route path={paths.TOOLS.root} element={<Tools />} />

        {availableTools.map((t) => {
          if (t.code === 'workspace') {
            return <Route path={t.path} element={<WorkspacePage />} />;
          }

          return (
            <Route
              path={t.path}
              element={
                <Page
                  info={{
                    title: t.name,
                    path: t.path,
                  }}
                >
                  {toolMap[t.code]}
                </Page>
              }
            />
          );
        })}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
