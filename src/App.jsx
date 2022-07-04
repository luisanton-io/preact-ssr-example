import { useState } from "preact/hooks";
import { h } from "preact"

export default function App() {
  const [times, setTimes] = useState(0);

  return (
    <div>
      <h1>Hello world{times}</h1>
      <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
      <h2>Times is {times % 2 === 0 ? "even" : "odd"}</h2>
    </div>
  );
}
