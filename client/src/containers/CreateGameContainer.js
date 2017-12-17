import { connect } from "react-redux";
import CreateGame from "../components/CreateGame";


function mapStateToProps(state){
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveGame: function(game){
      // call action we haven't made yet
    }
  }
}

const CreateGameContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGame);
export default CreateGameContainer;
