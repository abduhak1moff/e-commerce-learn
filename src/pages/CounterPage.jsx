import { useReducer } from "react";

const initialState = { counter: 0 };

const reducer = (state, { type, payload }) => {
  const { counter } = state;
  switch (type) {
    case "increment":
      return { ...state, counter: counter + payload };
    case "decrement":
      return { ...state, counter: counter - payload };
  }
  return state;
};

const CounterPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { counter } = state;

  return (
    <div className="text-center">
      <h1>CounterPage {counter}</h1>
      <button
        className="btn btn-danger me-3"
        onClick={() => dispatch({ type: "decrement", payload: 3 })}
      >
        -
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "increment", payload: 2 })}
      >
        +
      </button>
    </div>
  );
};

export default CounterPage;
