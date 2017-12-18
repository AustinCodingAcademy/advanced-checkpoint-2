import React, { Component } from 'react';

class CreateThings extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      married: '',
      sex: '',
      job: ''
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Save User: </h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (this.props.createUser) {
                this.props.createUser(this.state.user);
              }
              this.state = {
                user: {
                  name: '',
                  age: '',
                  married: '',
                  sex: '',
                  job: ''
                }
              };
              e.target.reset();
            }}
          >
            <div>
              Name:{' '}
              <input
                onChange={e => {
                  const user = { name: e.target.value };
                  this.setState({
                    user: Object.assign(this.state.user, user)
                  });
                }}
              />
            </div>
            <div>
              Age:{' '}
              <input
                onChange={e => {
                  const user = { age: e.target.value };
                  this.setState({
                    user: Object.assign(this.state.user, user)
                  });
                }}
              />
            </div>
            <div>
              Sex:{' '}
              <input
                onChange={e => {
                  const user = { sex: e.target.value };
                  this.setState({
                    user: Object.assign(this.state.user, user)
                  });
                }}
              />
            </div>
            <div>
              Job:{' '}
              <input
                onChange={e => {
                  const user = { job: e.target.value };
                  this.setState({
                    user: Object.assign(this.state.user, user)
                  });
                }}
              />
            </div>
            <div>
              Married:{' '}
              <input
                onChange={e => {
                  const user = { married: e.target.value };
                  this.setState({
                    user: Object.assign(this.state.user, user)
                  });
                }}
              />
            </div>
            <button type="submit" name="action">
              <i>save</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateThings;
