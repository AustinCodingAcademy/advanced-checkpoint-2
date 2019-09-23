import Entries from "../components/Entries";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        entries: state.entries
    };
};

export default connect(mapStateToProps)(Entries);