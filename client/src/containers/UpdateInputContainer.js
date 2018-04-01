import { connect } from "react-redux";
import { updateEntry } from "../actions/index";
import UpdateInput from "../components/UpdateInput";

function mapStateToProps(state) {
    return {
        entry: state.entry
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateEntry: function(id, entry) {
            dispatch(updateEntry(id, entry));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInput);