import { Switch, Route } from "react-router-dom";

import { MobX } from './mobx';
import { Reflux } from './reflux';
import { Home } from './Home';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/reflux">
        <Reflux />
      </Route>
      <Route path="/mobx">
        <MobX />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
