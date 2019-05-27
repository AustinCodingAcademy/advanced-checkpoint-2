import { connect } from "react-redux";
import CreateCountries from "../components/CreateCountries";
import { addCountry } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        addCountry: function (country) {
            dispatch(addCountry(country));
        }
    };
}

export default connect(null,mapDispatchToProps)(CreateCountries);

