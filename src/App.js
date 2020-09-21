import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from './pages/layout.js';

import {
Link,
NavLink,
BrowserRouter as Router,
Switch,
Route
 } from 'react-router-dom';

import Counter from './components/counter.js'
import MultipleStatePropsUpdate from './components/state-mutiple-props-update';
import MultipleStateUpdate from './components/stateupdate-multiple';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Layout />
        
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <h1>Hello React</h1>
              </Route>
              <Route path="/counter" >
                <Counter />
              </Route>
              <Route path="/counter-multiple" >
                <MultipleStateUpdate />
              </Route>
              <Route path="/counter-multiple-props" >
                <MultipleStatePropsUpdate />
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
