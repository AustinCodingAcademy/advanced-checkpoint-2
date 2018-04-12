import { connect } from "react-redux";
import CreateQuestion from "../components/CreateQuestion";
import {
  createQuestion,
} from "../actions";

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createQuestion: function (question) {
      dispatch(createQuestion(question));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateQuestion);