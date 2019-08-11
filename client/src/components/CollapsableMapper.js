import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CollapsableMapper extends Component {
  handleDelete(user) {
    if (this.props.deleteuser) {
      this.props.deleteuser(user._id);
    }
  }
  constructor() {
    super();
    this.state = { visible: true };
  }
  render() {
    let buttonText = 'Hide';
    let userDivs = '';
    if (this.state.visible) {
      buttonText = 'Hide';
      userDivs = this.props.data.map((user, i) => {
        return (
          <div key={i}>
            {user.title}
            <Link to={'/' + this.props.path + '/' + user._id}> View </Link>
            <button onClick={() => this.handleDelete(user)}>Delete</button>
          </div>
        );
      });
    } else {
      buttonText = 'Show';
      userDivs = '';
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
        {userDivs}
      </div>
    );
  }
}

export default CollapsableMapper;
