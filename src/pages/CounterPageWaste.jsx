import { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  const increase = (step) => {
    setCounter(counter + step);
  };
  const decrease = (step) => {
    setCounter(counter - step);
  };
  return (
    <div className="text-center">
      <h1>CounterPage {counter}</h1>
      <button className="btn btn-danger me-3" onClick={() => decrease(3)}>
        -
      </button>
      <button className="btn btn-success" onClick={() => increase(2)}>
        +
      </button>
    </div>
  );
};

export default CounterPage;
