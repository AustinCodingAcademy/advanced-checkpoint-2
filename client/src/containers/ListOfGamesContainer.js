import { connect } from "react-redux";
import ListOfGames from "../components/ListOfGames";


function mapStateToProps(state){
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const ListOfGamesContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfGames);
export default ListOfGamesContainer;
