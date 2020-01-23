import consts from './consts';

export function goals11(state = {}, action) {
  switch (action.type) {
    case consts.LOADING_GOAL:
      return {
        ...state,
        loading: true
      }
    case consts.LOADED_GOAL:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data
      }
    case consts.ADD_GOAL:
      return {
        ...state,
        data: [...state.data, action.goal]
      }
    case consts.REMOVE_GOAL:
      return {
        ...state,
        data: state.data.filter(goal => goal.id !== action.id)
      }
    default:
      return state;
  }
}

