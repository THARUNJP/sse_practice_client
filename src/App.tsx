import React, { useState } from "react";
import useSSE from "./hooks/useSSE";

function App() {
  const { count } = useSSE();

  return (
    <React.Fragment>
      <h1 className="flex justify-center font-bold text-5xl">Counter:${count}</h1>
    </React.Fragment>
  );
}

export default App;
