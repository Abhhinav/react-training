import React,{useState} from 'react';
import { useDocumentTitle } from '../hooks/use-document-title';

export default function Counter() {
  useDocumentTitle("Counter")
    //alert("Function called!");
    // const counterResult = useState(0);
    // const counter = counterResult[0];
    // const setCounter = counterResult[1];
    
    const [counter, setCounter ] = useState(0) ; // [stateValue, updaterFunction]
    const [error, setError] = useState("");

    function onIncrement () {
      //counter = counter + 1;   // WILL NOT WORK
      if(counter === 0){
          setError("");
      }
      setCounter(counter + 1);
    }
    
     function onDecrement () {
      //counter = counter + 1;   // WILL NOT WORK
      if (counter === 0){
        setError("Counter can't be Negative!");
        return;
      }
      setCounter(counter - 1);
    }
    
    return (
      <div className="container">
        <h1>Counter</h1>
        <div className="bg-danger">
            {error}
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={onDecrement} className="btn btn-primary">-</button>
          {counter}
          <button onClick={onIncrement} className="btn btn-secondary">+</button>
        </div>
      </div>
    )
  }
  
  
  //const root  = document.querySelector("#root");
  //ReactDOM.render(<Counter/>, root);