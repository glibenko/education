import React from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';

export default class Example6 extends React.Component {
  state = {
    users: [],
    showGames: true,
  };

  addUser = (user) => {
    this.setState(prevState => ({
      users: [...prevState.users, {...user, games: 0}]
    }))
  }

  change = () => {
    this.setState(prevState => ({
      showGames: !prevState.showGames
    }))
  }

  render() {
    const { users, showGames } = this.state;
    return (
      <div className="App">
        <h2>Game table</h2>
        <AddUser
          onSubmit={this.addUser}
          users={users}
        />
        <button onClick={this.change}> change view </button>
        <UsersList users={users} showGames={showGames}/>
      </div>
    );
  }
}

