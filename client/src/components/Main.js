import React from "react";
import MovieIdeasContainer from "../containers/MovieIdeasContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Movie Ideas </h1>
        <MovieIdeasContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
export default Main;
