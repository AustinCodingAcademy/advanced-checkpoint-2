import { connect } from "react-redux";
import CreateStock from "../components/CreateStock";
import { createStock, updateStock, loadStocks } from "../actions";

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createStock(stock) {
      dispatch(createStock(stock));
    },
    updateStock(stock) {
      dispatch(updateStock(stock));
    },
    loadStocks() {
      dispatch(loadStocks());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStock);
