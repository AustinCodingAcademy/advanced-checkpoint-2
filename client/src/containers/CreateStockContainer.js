import { connect } from "react-redux";
import CreateStock from "../components/CreateStock";

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

export default connect(
  mapStateToProps,
  null
)(CreateStock);
