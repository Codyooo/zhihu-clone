import React, { useState, useEffect, lazy, Suspense, ReactChildren } from 'react';
import { GlobalStyle } from './globalStyle';
import { BrowserRouter as Router, Route, Redirect, RouteProps, Switch } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import HomePage from './pages/Home';
import AuthRoute from './components/Common/AuthRoute'

const App: React.FC = () => {
  return <div>
    <GlobalStyle />
    <Switch>
      <Route exact path='/signin' component={SignInPage} />
      <AuthRoute path='/' component={HomePage} />
    </Switch>
    {/* <Route />
      <Route /> */}
  </div>
}

export default App;
