import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      movieIdea: {
        body: "",
        genre: ""
      }
    };
  }
  render() {
    return (
      <div>
          <h1>Movie Ideas</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMovieIdea) {
              this.props.createMovieIdea(this.state.movieIdea);
            }
          }}>
            <div>
              Body: <input onChange={(e) => {
                const movieIdea = {body: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <div>
              Genre: <input onChange={(e) => {
                const movieIdea = {genre: e.target.value};
                this.setState({
                  movieIdea: Object.assign(this.state.movieIdea,movieIdea)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
      </div>
    );
  }
}
export default CreateThings;
