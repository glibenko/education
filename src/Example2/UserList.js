import React from 'react';

export default function UserList({ name, list, users }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Liked By:</p>
      <ul>
        {list.map(el =>  (<li key={el.id}>{users[el.userID].name}</li>) )}
        {/* MY SECOND SOLUTION */}
        {/* {list.map(el =>  (<li key={el}>{users[el].name}</li>) )} */}
      </ul>
    </div>
  )
}