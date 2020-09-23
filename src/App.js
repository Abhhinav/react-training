import React, {useContext} from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from './pages/layout.js';
import '@fortawesome/fontawesome-free/css/all.css';
import Todo from './pages/todo';
import GlobalContext from './context/global-context';

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
import UseReducerDemo from './pages/usereducer-demo';
import { useDocumentTitle } from './hooks/use-document-title';

function App() {
  useDocumentTitle("Hello React")
  const GlobalData = useContext(GlobalContext);
  return (
    <div className="container-fluid">
      {GlobalData.language} - {GlobalData.theme}
      <Router>
        <Layout />
        
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <h1>Hello React</h1>
              </Route>
              <Route path ="/todo">
                <Todo />
              </Route>
              <Route path="/counter" >
                <Counter />
              </Route>
              <Route path="/usereducer">
              <UseReducerDemo />
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
