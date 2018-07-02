import { connect } from "react-redux";
import StockDetails from "../components/StockDetails";

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

export default connect(
  mapStateToProps,
  null
)(StockDetails);
