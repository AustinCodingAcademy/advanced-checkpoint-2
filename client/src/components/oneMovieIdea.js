import React from "react";

class oneMovieIdea extends React.Component {
  componentDidMount() {
    this.props.getMovieIdea(this.props.match.params.id);
  }

  render() {
    let mov = "";
    console.log("oneMovieIdea this.props:",this.props);
    if(this.props.movieIdea){
      mov = this.props.movieIdea.body;
    }
    console.log("oneMovieIdea this.props.path._id:",this.props.path._id);
    return (
      <div className="oneMovieIdea">
        <h2>Selected Movie Idea: {mov}</h2>
      </div>
    );
  }
}
export default oneMovieIdea;
