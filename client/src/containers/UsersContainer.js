import { connect } from "react-redux";
import Users from "../components/Users";
import {deleteUser} from "../actions/index";

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = { deleteUser: deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(Users);