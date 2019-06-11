import { connect } from "react-redux";
import CreateRobot from "../components/CreateRobot";
import { createRobot } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createRobot: function (robot) {
      dispatch(createRobot(robot));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateRobot);
