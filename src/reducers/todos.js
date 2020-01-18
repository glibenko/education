// export default function todos (state = [], action) {
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

// export function addTodo(todo) {
//   return {
//     type: 'ADD_TODO',
//     todo
//   }
// }

export const baseReducer = (prefix) => (model) => {
  return {
    type: 'SET_' + prefix,
    model
  }
}

export default function todos (state = [], action) {
  switch (action.type) {
    case 'SET_TODO':
      return [
        ...state,
        action.model
      ]
    default:
      return state;
  }
}