import React from 'react';
import User from './User';

export default class Example6 extends React.Component {
  state = {
    message: [],
  };

  onSubmit = (user) => {
    this.setState(prevState => {
      if (!prevState.message.length) {
        user.id = 1;
      } else {
        const getId = prevState.message.map(el => el.id);
        user.id = Math.max(...getId) + 1;
      }

      return { message: [...prevState.message, user]}
    })
  }

  render() {
    const { message } = this.state;
    return (
      <div className="App">
        <h2>Chat room</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <User
            name="Amy"
            message={message}
            onSubmit={this.onSubmit}
          />
          <User
            name="John"
            message={message}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

