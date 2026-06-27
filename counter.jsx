import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px",
        width: "250px"
      }}
    >
      <h2>{props.title}</h2>

      <h3>Count: {count}</h3>

      <h3>Square: {count * count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;