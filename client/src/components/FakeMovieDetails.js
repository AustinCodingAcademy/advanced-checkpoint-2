import React from "react";

function FakeMovieDetails(props){
  var movieId = props.match.params.id;
  const movie = props.movies.find(u => u.id == movieId) || {};

    return <div>
            <h2>{movie.name}</h2>
              <ol>
                <li>Starring: {movie.actor}</li>
                <li>Awards: {movie.awards}</li>
                <li>Year released: {movie.year}</li>
                <li>Length: {movie.runtime}</li>
              </ol>
            </div>;
};

export default FakeMovieDetails;
