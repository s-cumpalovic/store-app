import { Route, Switch } from "react-router-dom";
import React from "react";
import AppCustomers from './pages/AppCustomers';
import AppProducts from './pages/AppProducts';

export default function Router() {
  return (
    <Switch>
      <Route path="/customers">
        <AppCustomers />
      </Route>
      <Route path="/products">
        <AppProducts />
      </Route>
    </Switch>
  );
}
