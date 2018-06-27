import { connect } from "react-redux";
import App from "../components/App";


const mapDispatchToProps = { fetchUsers: fetchUsers }

export default connect(null, mapDispatchToProps)(App);  