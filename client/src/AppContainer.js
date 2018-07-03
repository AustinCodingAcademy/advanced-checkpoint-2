import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadStocks, loadPrices } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadStocks() {
      dispatch(loadStocks());
    },
    loadPrices(tickers) {
      dispatch(loadPrices(tickers));
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
