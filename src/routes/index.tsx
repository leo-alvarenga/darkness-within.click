import { Routes, Route, BrowserRouter } from "react-router-dom";

import { paths } from "../common";
import { Chmod, Home, NotFound, Tools } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />

        {/* Tools */}
        <Route path={paths.TOOLS.root} element={<Tools />} />
        <Route path={paths.TOOLS.CHMOD} element={<Chmod />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
