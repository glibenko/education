import {baseReducer} from '../reducers/todos';
import consts from './consts';

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

const goalLoadingAction = () => {
  return {
    type: consts.LOADING_GOAL,
  }
}

const goalLoadedAction = (data) => {
  return {
    type: consts.LOADED_GOAL,
    data
  }
}

export function loadData() {
  return async (dispatch, getState) => {
    dispatch(goalLoadingAction());
    const data = await window.API.fetchGoals();
    dispatch(goalLoadedAction(data));
  }

}

const addGoalAction = goal => {
  return {
    type: consts.ADD_GOAL,
    goal
  }
}

const deleteGoalAction = id => {
    return {
      type: consts.REMOVE_GOAL,
      id
    }
  }

export function addGoals(val) {
  return async (dispatch, getState) => {
    window.API.saveGoal(val)
      .then(goal => dispatch(addGoalAction(goal)))
    
  }
}

export function deleteGoal(el) {
  return async (dispatch) => {
    dispatch(deleteGoalAction(el.id));

    window.API.deleteGoal(el.id)
      .catch(() => {
        dispatch(addGoalAction(el)) 
        })

  }
}