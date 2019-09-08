import { connect } from "react-redux";
import Question from "../components/Question";
import {getQuestion} from "../actions";

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

function mapDispatchToProps(dispatch){
    return {
      getQuestion:function(question){
            let action = getQuestion(question);
            dispatch(action);
          },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Question);
