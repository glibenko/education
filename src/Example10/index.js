import React, { Component } from 'react';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

export default class Example9 extends Component {
  state = {
    todoVal: '',
    goalVal: ''
  }
  componentDidMount() {
    this.store = this.props.store.subscribe(() => {
      this.forceUpdate();
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

  API = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('_async');
      }, 1000);
    });
  }

  addGoal = () => {
    const { store } = this.props;
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

  handleDelete = (id) => {
    return async (dispatch) => {
      // this.deleteGoalAction(id);

      const api = await this.API();
      
      console.log('api', api);

      dispatch(this.deleteGoalAction(id));

    }
  }

  deleteGoal = (id) => {
    const { store } = this.props;
    // console.log('this.addGoalAction(id)', this.deleteGoalAction(id))
    // store.dispatch(this.deleteGoalAction(id))
    store.dispatch(this.handleDelete(id))
  }
  
  render() {
    const {goalVal} = this.state;
    const {goals} = this.props.store.getState();

    return (
      <div className="App">
        <h2>My own Redux</h2>
        <div>
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
