import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import Main from './pages/MainPage';
import About from './pages/AboutPage';
import history from './history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export const makeMainRoutes = () => {
  return (
    <MuiThemeProvider>
    <Router history={history}>
        <div>
          <Route path="/main" render={(props) => <Main {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/callback" render={(props) => {
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>
      </MuiThemeProvider>
  );
}
