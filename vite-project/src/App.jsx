import { useState } from "react";
import Hello from "./Component/Hello";
import Fruits from "./Component/Fruits";
const name = "world";
function App() {
  const [count, setCount] = useState(0);

  const person = {
    name: "caps",
    message: "hi there",
    seatNumber: [1, 2, 6],
  };
  return (
    <>
      <div>hello world{name}</div>
      <Hello person={person} />
      <Fruits />
    </>
  );
}

export default App;
