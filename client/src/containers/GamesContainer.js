import { connect } from "react-redux";
import Games from "../components/Games";
import { deleteGame } from "../actions";

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteGame(game) {
      dispatch(deleteGame(game));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
