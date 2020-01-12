import React from 'react';

export default function UsersList({ users, showGames }) {

  if (!users.length) {
    return null;
  }

  return (
    <div>
      <p className="items">Users</p>
      <ol className="item-list">
        {users.map((el) => {
          if (showGames) {
            return <li key={el.user_name}>{el.user_name}: {el.games}</li>
          }
          return <li key={el.user_name}>{el.user_name}</li>
        })}
      </ol>
    </div>
  )
}