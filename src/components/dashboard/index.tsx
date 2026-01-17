import React from "react";
import useSSE from "../../hooks/useSSE";

function Dashboard() {
  const { count, haertBeat } = useSSE();

  return (
    <React.Fragment>
      <h1 className="flex justify-center font-bold text-5xl">
        Counter:{count}
      </h1>
      <h1 className="flex justify-center font-bold text-5xl mt-10">
        Heart:{haertBeat}
      </h1>
    </React.Fragment>
  );
}

export default Dashboard;
