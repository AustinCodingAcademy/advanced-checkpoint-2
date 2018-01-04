import React, {Component} from "react";
import {Link} from "react-router-dom";
import movieGenres from "../movieGenres";

class CreateMovieListing extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        image: "",
        title: "",
        date: "",
        format: "",
        genre: "",
        plot: "",
        keywords: "",
        movieGenres,
      },
    };
  }

  render() {
    const formatOptions = ["theater", "redbox", "netflix", "blockbuster", "I own it!", "other"];
    const emotionsArray = ["happy", "sad", "regretful", "inspired", "uncomfortable"];

    const formatOptionDisplay = formatOptions.map((f,i) => (
      <option value={f} key={i}>{f}</option>
    ));

    const movieGenreDisplay = movieGenres.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // "happy", "sad", "regretful", "inspired", "uncomfortable"
    const emotionDisplay = emotionsArray.map((g,i) => (
      <option value={g} key={i}>{g}</option>
    ));

    // BONUS - dropdowns used for viewing format and movie genres
    //       - format dropdown pulls from local variable array
    //       - grenres dropdown utilizes movieGenres.js exported array

    return (
      <div>
        <div>
          <h1>Create a movie listing:</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMovie) {
              this.props.createMovie(this.state.movie);
            }
          }}>
            <div>
            Movie Poster or Image URL (please enter a URL or leave empty, not required):
          <input onChange={(e) => {
            const movie = {image: e.target.value || ""};
            this.setState({
              movie: Object.assign(this.state.movie,movie)
            });
          }} />
            </div>
            <div>
              Movie Title: <input onChange={(e) => {
                const movie = {title: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Date watched: <input onChange={(e) => {
                const movie = {date: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Viewing Format(theater, redbox, netflix, etc.):
              <select onChange={(e) => {
                const movie = {format: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {formatOptionDisplay}
              </select>
            </div>
            <div>
              Genre: <select onChange={(e) => {
                const movie = {genre: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} >
                {movieGenreDisplay}
              </select>
            </div>
            <div>
              Plot Summary: <input onChange={(e) => {
                const movie = {plot: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <div>
              Emotions: <select multiple
                onChange={(e) => {
                //  const movie = {emotions: e.target.value};
                  const movieEmotions = [];
                  movieEmotions.push(e.target.value);
                  console.log("movieEmotions: " + movieEmotions);
                  const movie = {emotions: movieEmotions};
                  // console.log("movieEmotions: " + movieEmotions);
                  console.log("movie: " + movie);
                  this.setState({
                    movie: Object.assign(this.state.movie,movie)
                  });
                }} >
                {emotionDisplay}
              </select>
            </div>
            <div>
              Keywords: <input onChange={(e) => {
                const movie = {keywords: e.target.value};
                this.setState({
                  movie: Object.assign(this.state.movie,movie)
                });
              }} />
            </div>
            <button>Create Movie!</button>
          </form>
        </div>
        <li><Link to={"/"}> return to movie list </Link></li>
      </div>

    );
  }
}
export default CreateMovieListing;
