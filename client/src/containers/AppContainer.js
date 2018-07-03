import { connect } from "react-redux";
import App from "../App";
import {fetchUsers} from "../actions/index.js";


const mapDispatchToProps = { fetchUsers: fetchUsers };

export default connect(null, mapDispatchToProps)(App);  