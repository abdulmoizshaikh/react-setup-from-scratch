/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GetHelp from 'containers/GetHelp';
import MySessions from 'containers/MySessions';
import Experts from 'containers/Experts';
import Profile from 'containers/Profile';
import FAQs from 'containers/FAQs';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/help" component={GetHelp} />
        <Route exact path="/sessions" component={MySessions} />
        <Route exact path="/experts" component={Experts} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/FAQs" component={FAQs} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
