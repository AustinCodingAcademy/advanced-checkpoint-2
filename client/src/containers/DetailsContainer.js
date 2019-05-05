import {connect} from "react-redux";
import FakeMovieDetails from "../components/FakeMovieDetails";

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch){
  return {
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(FakeMovieDetails);
