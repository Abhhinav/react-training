import React, {useState, useContext} from 'react';
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
import Context from './context/context';

const DATA = {
  theme: "Dark",
  language: "English"
};

function App() {
  const [global_data, setGlobalData] = useState(DATA);
  const GlobalData = useContext(GlobalContext);
  return (
    <div className="container-fluid">
      <Context.Provider value={{ global_data, setGlobalData }}>
      {GlobalData.language} - {GlobalData.theme}
      --------
      {global_data.language} - {global_data.theme}
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
              <Route path="/counter-multiple" >
                <MultipleStateUpdate />
              </Route>
              <Route path="/counter-multiple-props" >
                <MultipleStatePropsUpdate />
              </Route>
            </Switch>
          </div>
      </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
