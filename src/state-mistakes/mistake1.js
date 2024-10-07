import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    const nextCounter = counter + 1;
    setCounter(nextCounter);
    alert(`This will be the next counter value: ${nextCounter}`);
  };

  return (
    <div className="App">
      <span className="counter">{counter}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
