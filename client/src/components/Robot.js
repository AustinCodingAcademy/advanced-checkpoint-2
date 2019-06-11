import React, { Component } from "react";
import Header from "./Header";

class Robot extends Component {

  componentDidMount() {
    if (this.props.match) {
      var robotId = this.props.match.params.id;
      this.props.fetchRobot(robotId);
    }
  }

  render() {
    // console.log(this.props);

    return (
      <div>
        <Header />
        <div className="robotDiv">
          <h1 className="robotName">{this.props.name}</h1>
          <div className="robotTableDiv">
            <table className="robotTable">
              <tbody>
                <tr>
                  <td>Appears In:</td>
                  <td>{this.props.movie}</td>
                </tr>
                <tr>
                  <td>Friends:</td>
                  <td>{this.props.friends}</td>
                </tr>
                <tr>
                  <td>Enemies:</td>
                  <td>{this.props.enemies}</td>
                </tr>
                <tr>
                  <td>Movement:</td>
                  <td>{this.props.movement}</td>
                </tr>
                <tr>
                  <td>Notes:</td>
                  <td>{this.props.notes}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="robotActions">
            {/*<a className="robotBtn" href={`/edit/${this.props.id}`}>edit</a>*/}

            <button 
              className="robotBtn robotBtnDelete"
              onClick={(e) => {
                // console.log(this.props.deleteRobot(this.props.id));
                this.props.deleteRobot(this.props.id);
              }}>
                &times; delete
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Robot;