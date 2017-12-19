import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {
  createApplication
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createApplication: function (application) {
      dispatch(createApplication(application));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);