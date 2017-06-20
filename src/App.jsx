import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import SwapiName from './SwapiName.jsx';

const NoMatch = () => <h2>No match to the route</h2>;

ReactDOM.render(
  (
      <Router history={hashHistory} >
        <Route path="/swapi" component={SwapiName} />
        <Redirect from="/" to="/swapi" />
        <Route path="*" component={NoMatch} />
      </Router>
  ),
  document.getElementById('main')
);
