import { connect } from "react-redux";
import UserDetail from "../components/Users";

const mapStateToProps = state => ({ users: state.users });

export default connect(mapStateToProps)(UserDetail);

