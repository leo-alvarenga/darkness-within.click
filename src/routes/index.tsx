import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Home, NotFound } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
