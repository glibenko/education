export default function todos (state = [], action) {
  switch (action.type) {
    case 'SET_TODO':
      return action.model
    default:
      return state;
  }
}

export const baseReducer = (prefix) => (model, dispatch) => {
  dispatch({
    type: 'SET_' + prefix,
    model
  })
};