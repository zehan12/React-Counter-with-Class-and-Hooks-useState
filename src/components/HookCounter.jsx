import { Fragment, useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Fragment>
      <h1>Hook Counter</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>decrement -</button>
      <button onClick={() => setCounter(counter + 1)}>increment +</button>
    </Fragment>
  );
};

export default HookCounter;
