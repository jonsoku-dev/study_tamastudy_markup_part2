import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Notice } from './Notice';
import { Post, PostSingle } from './Post';
import { Board } from './Board';
import { Contact } from './Contact';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/notice" component={Notice}></Route>
    <Route exact path="/post" component={Post}></Route>
    <Route exact path="/post/:postId" component={PostSingle} />
    <Route exact path="/board" component={Board}></Route>
    <Route exact path="/contact" component={Contact}></Route>
  </Switch>
);
export default AppRouter;
