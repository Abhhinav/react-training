import React, {useState} from 'react';
import { useDocumentTitle } from '../hooks/use-document-title';

export default function MultipleStateUpdate() {
  useDocumentTitle("State Multiple")
  const [counter, setCounter] = useState(0); 
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdating] = useState(false);

  const incr = () => {
    if (error.trim() !== "") {
      setError("");
    }

    //setIsLoading(true);
    setIsLoading((prevValue) => true);


    setTimeout(() => {
      // NOT guaranteed to WORK
      // setCounter(counter + 1);  
      // setCounter(counter + 1);        
      // setCounter(counter + 1);  

       setCounter((prevState) => prevState + 1);

       setIsLoading((_) => false);
       setIsUpdating((_) => true);

    }, 3000);
  }

  const decr = () => {
    if (counter === 0) {
      setError("Counter should not be Negative!");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2>Counter Multiple State</h2>
      <h6>Counter is updated after 3 seconds!
      </h6>
      {
        error.length > 0 && <div className="error">{error}</div>
      }

      <h2>{counter}</h2>

      {isLoading && <h4>Loading....</h4>}
      {isUpdated && <h4>Counter successfully updated!!</h4>}

      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>
    </div>
  )
}