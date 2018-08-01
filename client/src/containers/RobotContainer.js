import { connect } from "react-redux";
import { fetchRobot, deleteRobot } from '../actions';
import Robot from "../components/Robot";

function mapStateToProps(state) {
  console.log('map state to props for Robot', state.robot);
  const r = state.robot.robot;

  return {
    id: r._id,
    name: r.name,
    movie: r.movie,
    friends: r.friends,
    enemies: r.enemies,
    movement: r.movement,
    notes: r.notes,

  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchRobot: function(robot){
      var action = fetchRobot(robot);
      dispatch(action);
    },
    deleteRobot: function(id){
      var action = deleteRobot(id);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Robot);
