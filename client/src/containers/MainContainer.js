import Main from "../components/Main";
import { connect } from "react-redux";
import {loadQuestions} from "../actions";



function mapDispatchToProps(dispatch) {
  return {
    loadQuestions: function () {
      dispatch(loadQuestions());
    },
  };
}

export default connect(null,mapDispatchToProps)(Main);