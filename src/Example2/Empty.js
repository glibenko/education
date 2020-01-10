import React from 'react';

export default function Empty({ name }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>None of the current users liked this movie</p>
    </div>
  )
}