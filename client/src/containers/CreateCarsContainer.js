import { connect } from "react-redux";
import CreateCars from "../components/CreateCars";
import { addCar } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        addCar: function (car) {
            dispatch(addCar(car));
        }
    };
}

export default connect(null,mapDispatchToProps)(CreateCars);