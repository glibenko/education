import todos from './todos';
import goals from './goals';

const combineReducers = (state = {}, action) => ({
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
});

export default combineReducers;
