import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchParts from "../Components/SearchParts";


function mapDispatchToProps(dispatch){
  return {
    set: function (txt) {
      const action = setSearchText(txt);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchParts);
