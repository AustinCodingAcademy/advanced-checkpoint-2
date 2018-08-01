import { connect } from "react-redux";
import { fetchRobot, deleteRobot } from '../actions';
import EditRobot from "../components/EditRobot";

function mapStateToProps(state) {

  // const r = state.robot.robot;

  return state.robot;

  // return {
  //   id: r._id,
  //   name: r.name,
  //   movie: r.movie,
  //   friends: r.friends,
  //   enemies: r.enemies,
  //   movement: r.movement,
  //   notes: r.notes,
  // };
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

export default connect(mapStateToProps,mapDispatchToProps)(EditRobot);
