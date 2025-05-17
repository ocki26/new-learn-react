import { useState } from "react";
import Hello from "./Component/Hello";
const name = "world";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>hello world{name}</div>
      <Hello name="dog" message="hi there" />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </>
  );
}

export default App;
