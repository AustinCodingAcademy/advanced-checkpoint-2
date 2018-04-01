import { connect } from "react-redux";
import ShowEntry from "../components/ShowEntry"
import { loadEntry, deleteEntry } from "../actions/index";

function mapStateToProps(state) {
    return {
        entry: state.entry
    }
};

function mapDispatchToProps(dispatch) {
    return {
        deleteEntry: function (id) {
            dispatch(deleteEntry(id))
        },
        loadEntry: function (id) {
            dispatch(loadEntry(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEntry);
