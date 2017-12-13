import { connect } from "react-redux";
import Courses from "../components/Courses";
import {
  removeCourse
} from "../actions";


function mapStateToProps(state) {
  return {
    courses: state.courses,
    searchFilter: state.searchText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCourse: function (id) {
      dispatch(removeCourse(id));
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses);
