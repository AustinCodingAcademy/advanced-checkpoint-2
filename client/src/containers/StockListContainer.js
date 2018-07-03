import { connect } from "react-redux";
import StockList from "../components/StockList";
import { deleteStock } from "../actions";
function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    prices: state.prices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteStock(stock) {
      dispatch(deleteStock(stock));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockList);
