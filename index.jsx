import { useState } from "react";
import { createRoot } from "react-dom/client";
import './styles.css';

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-box">
      <h2>Simple Counter</h2>
      <p className="count">{count}</p>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Counter />);
