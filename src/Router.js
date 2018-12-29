import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from 'views/Login';
import BlogPosts from 'views/BlogPosts';
import CreatePost from 'views/CreatePost';

import NavBar from 'containers/NavBar';

const Router = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/posts" component={BlogPosts} />
        <Route exact path="/post/create" component={CreatePost} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
