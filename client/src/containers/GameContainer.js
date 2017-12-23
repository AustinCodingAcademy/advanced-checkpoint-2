import { connect } from "react-redux";
import Game from "../components/Game";
import { getGame } from "../actions";

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGame(id) {
      dispatch(getGame(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
