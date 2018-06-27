import { connect } from "react-redux";
import Users from "../components/Users";

const mapStateToProps = state => ({ users: state.users })

const mapDispatchToProps = { deleteUser: deleteUser }

export default connect(mapStateToProps, mapDispatchToProps)(Users);