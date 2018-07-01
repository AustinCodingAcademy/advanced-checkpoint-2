import { connect } from "react-redux";
import StockList from "../components/StockList";

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

export default connect(
  mapStateToProps,
  null
)(StockList);
