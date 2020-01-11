import React, { Component } from 'react';
import Empty from './Empty';
import UserList from './UserList';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class Example2 extends Component {
  // FROM BEST SOLUTION
  //   constructor(props) {
  //   super(props);
  //   this.usersByMovie = {};

  //   profiles.forEach(profile => {
  //     const movieID = profile.favoriteMovieID;

  //     if (this.usersByMovie[movieID]) {
  //       this.usersByMovie[movieID].push(profile.userID);
  //     } else {
  //       this.usersByMovie[movieID] = [profile.userID];
  //     }
  //   });
  // }


  // MY SECOND SOLUTION
  // state = {
  //   likedByUsers: {}
  // }

  // componentDidMount() {
  //   let likedByUsers = {};
  //   for (const el of profiles) {
  //     const movieID = el.favoriteMovieID;
  //     if (likedByUsers[movieID]) {
  //       likedByUsers[movieID].push(el.userID);
  //     } else {
  //       likedByUsers[movieID] = [el.userID];
  //     }
  //   }
  //   this.setState({likedByUsers})
  // }


  render() {
    // MY SECOND SOLUTION
    // const { likedByUsers } = this.state;

    return (
      <div className="App">
        <h2>How Popular is Your Favorite Movie?</h2>
        {Object.keys(movies).map((movie) => {
          const likedBy = profiles.filter(prof => prof.favoriteMovieID === movie);
          if (!likedBy.length) {
            return <Empty key={movie} name={movies[movie].name} />
          }
          return <UserList key={movie} name={movies[movie].name} list={likedBy} users={users}/>
        })}


        {/* MY SECOND SOLUTION */}
        {/* {!!Object.keys(likedByUsers).length && (
          Object.keys(movies).map((movie) => {
            const likedBy = likedByUsers[movie];
            if (!likedBy) {
              return <Empty key={movie} name={movies[movie].name} />
            }
            return <UserList key={movie} name={movies[movie].name} list={likedBy} users={users}/>
          })
        )} */}
      </div>
    );
  }
}

export default Example2;
