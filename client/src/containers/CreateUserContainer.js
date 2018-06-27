import { connect } from "react-redux";
import CreateUser from "../components/CreateUser";


const mapDispatchToProps = { createUser: createUser }

export default connect(null, mapDispatchToProps)(CreateUser);