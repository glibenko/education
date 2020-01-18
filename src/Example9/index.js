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

export default class Example9 extends Component {
  state = {
    todos: [],
    goals: [],
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log('the new state is')
      this.setState(store.getState())
    });
  }

  addGoal = () => {
    store.dispatch(actions.addGoal({
      id: 0,
      name: 'first try'
    }));
  }

    add = () => {
      const data = {
        id: 0,
        name: 'first try',
        complete: false
      }
      actions.addTodo(data)
    }
  

  render() {

    console.log('this.state', this.state)
    return (
      <div className="App">
        <h2>Redux</h2>
        <button onClick={this.add}> add </button>
        <button onClick={this.addGoal}> add </button>
      </div>
    )
  }
}
