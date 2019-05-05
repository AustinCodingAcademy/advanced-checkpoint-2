import {connect} from "react-redux";
import NewMovie from "../components/NewMovie";


function mapDispatchToProps(dispatch){
  return {
    makeMovie: function(movie){

    }
   }
}

export default connect(null,mapDispatchToProps)(NewMovie);
