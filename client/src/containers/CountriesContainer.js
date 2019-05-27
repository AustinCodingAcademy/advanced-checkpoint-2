import { connect } from "react-redux";
import Countries from "../components/Countries";
import { deleteCountry } from "../actions";

function mapStateToProps(state) {

    return {
        countries: state.countries
    };
}

function mapDispatchToProps (dispatch) {
    return {
        deleteCountry: function (id) {
            dispatch(deleteCountry(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);