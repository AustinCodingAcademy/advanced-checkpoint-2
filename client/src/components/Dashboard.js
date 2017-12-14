import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="fixed-action-btn">
      <div className="dashBtn">
        <Link to="/games/" className="btn-floating btn-large yellow">
          <i className="large material-icons">view_list</i>
        </Link>
        <Link to="/games/" />
      </div>
      <div className="dashBtn">
        <Link to="creategame" className="btn-floating btn-large green">
          <i className="large material-icons">add</i>
        </Link>
        <Link to="creategame" />
      </div>
    </div>
  );
}
export default Dashboard;
