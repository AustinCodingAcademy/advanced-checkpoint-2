import { connect } from "react-redux";
import Questions from "../components/Questions";
import {
  removeQuestion
} from "../actions";


function mapStateToProps(state) {
  return {
    questions: state.questions,
    searchFilter: state.searchText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeQuestion: function (id) {
      dispatch(removeQuestion(id));
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Questions);
