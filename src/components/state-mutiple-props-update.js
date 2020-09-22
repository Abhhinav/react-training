import React, {useState} from 'react';

export default function MultipleStatePropsUpdate() {
  const [appState, setState] = useState({
    isLoading:false,
    isUpdated: false,
    error: "",
    counter: 0
  })

  const incr = () => {
    
    setState({
      ...appState,
      isLoading: true
    });

    setTimeout(() => {
      // OBject syntax
      //  setState({
      //    ...appState,
      //    counter: appState.counter + 1,
      //    isLoading: false,
      //    isUpdated: true
      //  });

       // Function parameter  syntax to state update
       setState((prevState) => {
         return {
          ...prevState,
          counter: prevState.counter + 1,
          isLoading: false,
          isUpdated: true
         }
       });

    }, 3000);

    if (appState.error.trim() !== "") {
        setState({
          ...appState,  // Get old properties
          error: ""     // Overwrite new ones
        })
      }


  }

  const decr = () => {
    if (appState.counter === 0) {
      setState({
        ...appState,
        error: "Counter should not be Negative!"
      })
      return;
    }
    setState({
      ...appState,
      counter: appState.counter - 1
    })

  }

  return (
    <div>
      <h2>Counter Multiple Props State</h2>
      <h6>Counter is updated after 3 seconds!
      </h6>
      {
        appState.error.length > 0 && <div className="error">{appState.error}</div>
      }

      <h2>{appState.counter}</h2>

      {appState.isLoading && <h4>Loading....</h4>}
      {appState.isUpdated && <h4>Counter successfully updated!!</h4>}

      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>
    </div>
  )
}
