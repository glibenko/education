import React, { Component } from 'react';
import createStore from '../store';
import combineReducers from '../reducers';
import * as ownActions from './actions';

const store = createStore(combineReducers);

const combineActions = (actions) => {
  let obj = {};
  Object.keys(actions).forEach(el => {
    obj[el] = (data) => ownActions[el](data)(store.dispatch, store.getState)
  })
  return obj;
}
const actions = combineActions(ownActions);

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

export default class Example9 extends Component {
  state = {
    todos: [],
    goals: [],
    todoVal: '',
    goalVal: ''
  }
  componentDidMount() {
    const dataStore = store.getState();
    if (dataStore) {
      this.setState(prevState => ({...prevState, ...store.getState()}))
    }
    this.store = store.subscribe(() => {
      console.log('the new state is')
      this.setState(prevState => ({...prevState, ...store.getState()}))
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.store()
  }

  addGoalAction = goal => {
    return {
      type: ADD_GOAL,
      goal
    }
  }

  deleteGoalAction = id => {
    return {
      type: REMOVE_GOAL,
      id
    }
  }

  addGoal = () => {
    const state = store.getState();
    let data = {
      id: 1,
      name: this.state.goalVal,
    }
    if (state?.goals?.length) {
      const goals = state.goals.map(el => el.id);
      data.id = Math.max(...goals) + 1;
      store.dispatch(this.addGoalAction(data))
    } else {
      store.dispatch(this.addGoalAction(data))
    }
  }

  deleteGoal = (id) => {
    console.log('this.addGoalAction(id)', this.deleteGoalAction(id))
    store.dispatch(this.deleteGoalAction(id))
  }
  
  render() {
    const {todos, goals, todoVal, goalVal} = this.state;

    return (
      <div className="App">
        <h2>My own Redux</h2>
        <div>
        <div>
          <input type="text" value={todoVal} onChange={(e) => this.setState({todoVal: e.target.value})} />
          <button onClick={() => actions.addTodo(todoVal)}> addTodo </button>
          <ol>
            {todos?.map((el) => (
              <ul onClick={() => actions.deleteTodo(el.id)} key={el.id}>
                {el.name}
              </ul>
            ))}
          </ol>
        </div>
        <div>
          <input type="text" value={goalVal} onChange={(e) => this.setState({goalVal: e.target.value})} />
          <button onClick={this.addGoal}> addGoal </button>
          <ol>
            {goals?.map((el) => (
              <ul onClick={() => this.deleteGoal(el.id)} key={el.id}>
                {el.name}
              </ul>
            ))}
          </ol>
        </div>
        </div>
      </div>
    )
  }
}
