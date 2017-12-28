import { connect } from "react-redux";
import Cars from "../components/Cars";
import { deleteCar } from "../actions";

function mapStateToProps(state) {

    return {
        cars: state.cars
    };
}

function mapDispatchToProps (dispatch) {
    return {
        deleteCar: function (id) {
            dispatch(deleteCar(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);