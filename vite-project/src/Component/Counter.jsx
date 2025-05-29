import { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(2);
  const [incrementBy, setIncrementBy] = useState(1);
  const increment = () => {
    setCount(Count + incrementBy);
  };
  const decrement = () => {
    setCount(Count - incrementBy);
  };
  const increaseIncrement = () => {
    setIncrementBy(incrementBy + 1);
  };
  const decreaseIncrement = () => {
    setIncrementBy(incrementBy - 1);
  };
  return (
    <>
      <div>
        <h1>count value is:{Count} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>We are incrementing the value by {incrementBy}</h1>
        <button onClick={increaseIncrement}>Increase increment</button>
        <button onClick={decreaseIncrement}>decrease increment</button>
      </div>
    </>
  );
};
export default Counter;
