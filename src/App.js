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

function App() {
  return (
    <div className="container">
      <Router>
        <Layout />
        
          <div className="container-fluid">
            <Switch>
              <Route path="/" exact>
                <h1>Hello React</h1>
              </Route>
              <Route path="/counter" >
                <Counter />
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
