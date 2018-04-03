import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function MovieIdeas(props) {
  console.log("MovieIdeas component props.movieIdeas:", props.movieIdeas);
  return (
    <CollapsableMapper data={props.movieIdeas} path="movieIdea" field="body" />
  );
}
export default MovieIdeas;
