import { connect } from "react-redux";
import MovieIdeas from "../components/MovieIdeas";
import {loadMovieIdeas} from "../actions";

function mapStateToProps(state) {
  return {
    movieIdeas: state.movieIdeas
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovieIdeas: function () {
      dispatch(loadMovieIdeas()); //this might need to go on a different Container
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieIdeas);
