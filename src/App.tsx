import React from "react";
import useSSE from "./hooks/useSSE";

function App() {
  const { count, haertBeat } = useSSE();
  console.log(haertBeat, "/heart");

  return (
    <React.Fragment>
      <h1 className="flex justify-center font-bold text-5xl">
        Counter:${count}
      </h1>
      <h1 className="flex justify-center font-bold text-5xl">
        Heart:${haertBeat}
      </h1>
    </React.Fragment>
  );
}

export default App;
