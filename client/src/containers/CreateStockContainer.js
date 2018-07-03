import { connect } from "react-redux";
import CreateStock from "../components/CreateStock";
import { createStock } from "../actions";

// function mapStateToProps(state) {
//   return {
//     stocks: state.stocks
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    createStock(stock) {
      dispatch(createStock(stock));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateStock);
