import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  //   const [counter, setCounter] = useState(0); // counter est une variablet, setCounter est une fonction

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <input
        type="number"
        value={counter}
        onChange={event =>
          dispatch({ type: "MODIFY", modifier: event.target.value })
        }
      />
      <p>{counter}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;

/*patate() {
    this.setState({ counter: this.state.counter + 1 });
  } */
