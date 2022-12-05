import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
    console.log("countUp");
  };

  const countDown = () => {
    setCount(count - 1);
    console.log("down");
  };

  const reSet = () => {
    setCount(0);
    console.log("reset");
  };

  return (
    <div className="center">
      <h1>
        Counter
        <span> {count} </span>
        <br />
        <button onClick={countUp}>+</button>
        <br />
        <button onClick={countDown}>-</button>
        <br />
        <button onClick={reSet}>Reset</button>
      </h1>
    </div>
  );
}

export default App;
