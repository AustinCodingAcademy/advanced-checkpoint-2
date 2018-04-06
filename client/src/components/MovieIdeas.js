import React, { Component } from "react";
//import CollapsableMapper from "./CollapsableMapper";
import {Link} from "react-router-dom";

class MovieIdeas extends Component {
  componentDidMount() {
    this.props.loadMovieIdeas();
    this.props.movieIdeas;
  }

  render(){
    console.log("MovieIdeas component props.movieIdeas:", this.props.movieIdeas[0]);

    let movieDivs = "";

    movieDivs = "TEST"/*props.movieIdeas.map((d,i) => {
      return (
        <div key={i}>
          {props.movieIdeas[d].title}
          <Link to={"/" + props.path + "/" + d._id}> View </Link>
        </div>
      );
    });*/


    return (
      <div>
        {movieDivs}
      </div>
    );
  }
}

export default MovieIdeas;

/*
//this goes in the div
<CollapsableMapper data={props.movieIdeas} path="movieIdea" field="title" />
*/
