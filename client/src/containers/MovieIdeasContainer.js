import { connect } from "react-redux";
import MovieIdeas from "../components/MovieIdeas";

function mapStateToProps(state) {
  return {
    movieIdeas: state.movieIdeas
  };
}

export default connect(mapStateToProps)(MovieIdeas);
