import { connect } from "react-redux";
import CreateGoat from "../components/CreateGoat";
import createGoat from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createGoat: function (goat) {
      dispatch(createGoat(goat));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateGoat);
