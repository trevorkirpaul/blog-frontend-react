import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from 'views/Login';

import NavBar from 'containers/NavBar';

const Router = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
