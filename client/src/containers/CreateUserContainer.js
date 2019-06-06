import { connect } from "react-redux";
import CreateUser from "../components/CreateUser";
import {createUser} from "../actions/index.js";


const mapDispatchToProps = { createUser: createUser };

export default connect(null, mapDispatchToProps)(CreateUser);