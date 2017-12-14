import React, { Component } from "react";

class Game extends Component {
  componentDidMount() {
    const myId = this.props.match.params.id;
    this.props.getGame(myId);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m7">
            <div className="card blue-grey">
              <div className="card-image">
                <img src={this.props.game.image} alt="Game avatar" />
              </div>
              <div className="card-content black-text">
                <span className="card-title" style={{ textDecoration: "underline" }}>
                  {this.props.game.title}
                </span>
                <div>Genre: {this.props.game.genre}</div>
                <div>Year: {this.props.game.year}</div>
                <div>Console: {this.props.game.console}</div>
              </div>
              <div className="card-action">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Game;
