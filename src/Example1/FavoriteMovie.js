import React from 'react';

export default function FavoriteMovie({
  users, movies, profiles
}) {
  return (
    <ol>
      {profiles.map((user) => (
          <li key={user.id}>
            {users[user.userID].name}'s favorite movie is {movies[user.favoriteMovieID].name}
          </li>
      ))}
    </ol>
  );
}