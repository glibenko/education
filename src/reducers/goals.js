export default function goals(state = [], action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return [
        ...state,
        action.goal
      ]
    case 'REMOVE_GOAL':
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
}