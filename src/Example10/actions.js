import {baseReducer} from '../reducers/todos';
const PREFIX = 'TODO';
const set = baseReducer(PREFIX);

function API() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('_async');
    }, 1000);
  });
}

export function addTodo(val) {
  return async (dispatch, getState) => {
    let checkAsync = '_sync';
    checkAsync = await API();
    const state = getState();
    let data = {
      id: 1,
      name: val + checkAsync,
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