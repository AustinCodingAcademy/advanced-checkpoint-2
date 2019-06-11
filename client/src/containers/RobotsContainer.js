import { connect } from "react-redux";
import Robots from "../components/Robots";
import { deleteRobot } from '../actions';

function mapStateToProps(state) {
  return {
    robots: state.robots
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteRobot: function (robot) {
      dispatch(deleteRobot(robot));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Robots);
