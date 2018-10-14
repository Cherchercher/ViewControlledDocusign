import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './pages/MainPage';
import About from './pages/AboutPage';
import Iframe from './pages/Iframe';
import history from './history';

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/iframe" render={(props) => <Iframe {...props} />} />
        </div>
      </Router>
  );
}
