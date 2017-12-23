import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import { createGame } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createGame(game) {
      dispatch(createGame(game));
    }
  };
}

export default connect(null, mapDispatchToProps)(CreateThings);
