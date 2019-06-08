import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";

const mapStateToProps = (state) => ({vehicles: state.vehicles});

export default connect(mapStateToProps)(Vehicles);
