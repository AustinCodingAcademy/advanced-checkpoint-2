import React, { Component } from "react";
import { Link } from "react-router-dom";

class CollapsableMapper extends Component {
  handleDelete(game) {
    if (this.props.deleteGame) {
      this.props.deleteGame(game._id);
    }
  }
  constructor() {
    super();
    this.state = { visible: true };
  }
  render() {
    let buttonText = "Hide";
    let gameDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      gameDivs = this.props.data.map((game, i) => {
        return (
          <div key={i}>
            {game.title}
            <Link to={"/" + this.props.path + "/" + game._id}> View </Link>
            <button onClick={() => this.handleDelete(game)}>Delete</button>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      gameDivs = "";
    }
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              visible: !this.state.visible
            });
          }}
        >
          {buttonText}
        </button>
        {gameDivs}
      </div>
    );
  }
}

export default CollapsableMapper;
