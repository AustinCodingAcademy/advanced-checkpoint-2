import {connect} from "react-redux";
import MovieList from "../components/MovieList";

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return {
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
