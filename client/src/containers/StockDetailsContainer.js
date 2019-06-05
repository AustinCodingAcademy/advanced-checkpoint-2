import { connect } from "react-redux";
import StockDetails from "../components/StockDetails";

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    prices: state.prices
  };
}

export default connect(
  mapStateToProps,
  null
)(StockDetails);
