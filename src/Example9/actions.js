// export function addTodo(todo) {
//   return {
//     type: 'ADD_TODO',
//     todo
//   }
//
import {baseReducer} from '../reducers/todos'

const consts = {
  ADD_GOAL: 'ADD_GOAL'
}

export function addGoal(goal) {
  return {
    type: consts.ADD_GOAL,
    goal
  }
}


// shorter
const PREFIX = 'TODO';

const set = baseReducer(PREFIX);

export function addTodo(todo) {
  return (dispatch, getState) => {
    console.log('object', getState())
    dispatch(set(todo))
  }
}

// export function addTodo(id) {
//   return (dispatch, getState) => {
//     console.log('object', getState())
//     // dispatch(set(todo))
//   }
// }