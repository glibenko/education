export default function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(el => el !== listener);
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => {listener()});
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}


// function todos (state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         action.todo
//       ]
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.id);
//     case 'TOGGLE_TODO':
//       return (
//         state.map((todo) => todo.id !== action.id
//           ? todo
//           : {...todo, complete: !todo.complete}
//         )
//       )
//     default:
//       return state;
//   }
// }

// function goals (state = [], action) {
//   switch (action.type) {
//     case 'ADD_GOAL':
//       return [
//         ...state,
//         action.todo
//       ]
//     case 'REMOVE_GOAL':
//       return state.filter(todo => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// const combineReducers = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     goals: todos(state.goals, action),
//   }
// } 

// const store = createStore(combineReducers);

// store.subscribe(() => {
//   console.log('the new state is', store.getState());
// });

// store.dispatch({
//   type: 'ADD_TODO',
//   todo: {
//     id: 0,
//     name: 'first try',
//     complete: false
//   }
// })

// function addTodo (todo) {
//   return {
//     type: 'ADD_TODO',
//     todo
//   }
// }

// const set = (prefix) => (model) => {
//   return {
//     type: 'SET_' + prefix,
//     model
//   }
// }

// store.dispatch(addTodo({
//     id: 0,
//     name: 'first try',
//     complete: false
// }));



// const unsubscribe = store.subscribe(() => {
//   console.log('the store changed', store.getState());
// });

// unsubscribe();