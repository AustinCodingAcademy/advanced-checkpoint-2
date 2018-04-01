import { connect } from "react-redux";
import { createEntry } from "../actions/index";
import TextInput from "../components/TextInput";

function mapDispatchToProps(dispatch) {
    return {
        createEntry: function(entry) {
            dispatch(createEntry(entry));
        }
    }
}

export default connect(null, mapDispatchToProps)(TextInput);