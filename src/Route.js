import { Route, Switch } from "react-router-dom";
import React from "react";
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';

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
