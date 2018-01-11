import { connect } from "react-redux";
import Country from "../components/Country";
import { getCountry } from "../actions";

function mapStateToProps(state) {

    return {
        country: state.country
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getCountry: function (id) {
            dispatch(getCountry(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);