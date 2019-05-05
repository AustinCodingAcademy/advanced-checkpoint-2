import React from "react";
import {Link} from "react-router-dom";

function MovieList(props){
  let myMovie = "";
  if (props.movies){
  myMovie = props.movies.map(function(movie,i){
    return (<div key={i}>
              <ul className="list-group">
                <li className="list-group-item">{movie.name}<button><Link to={"/movie/" + movie.id}>View Details</Link></button></li>
              </ul>
            </div>);
  });
}
  return (<div>
            {myMovie}
            <button><Link to="/create/">Click to add a new film</Link></button>
          </div>);
}


export default MovieList;
