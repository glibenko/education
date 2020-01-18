import {baseReducer} from '../reducers/todos';
const PREFIX = 'TODO';
const set = baseReducer(PREFIX);

export function addTodo(val) {
  return (dispatch, getState) => {
    const state = getState();
    let data = {
      id: 1,
      name: val,
      complete: false
    }
    if (state?.todos?.length) {
      const todos = state.todos.map(el => el.id);
      data.id = Math.max(...todos) + 1;
      set([...state.todos, data], dispatch)
    } else {
      set([data], dispatch)
    }
  }
}

export function deleteTodo(id) {
  return (dispatch, getState) => {
    const state = getState();
    const newTodos = state.todos.filter(el => el.id !== id);
    set(newTodos, dispatch)
  }
}