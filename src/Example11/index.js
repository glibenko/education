import React, { Component } from 'react';
import connect from '../connect';


const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';


class Example11 extends Component {
  state = {
    todoVal: '',
    goalVal: ''
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
    const { goals, dispatch } = this.props;
    let data = {
      id: 1,
      name: this.state.goalVal,
    }
    if (goals?.length) {
      const goalsId = goals.map(el => el.id);
      data.id = Math.max(...goalsId) + 1;
      dispatch(this.addGoalAction(data))
    } else {
      dispatch(this.addGoalAction(data))
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
    const { dispatch } = this.props;
    // console.log('this.addGoalAction(id)', this.deleteGoalAction(id))
    // store.dispatch(this.deleteGoalAction(id))
    dispatch(this.handleDelete(id))
  }
  
  render() {
    const {goalVal} = this.state;
    // const {goals} = this.props.store.getState();
  // const goals = undefined;

    return (
      <div className="App">
        <h2>My own Redux + connect</h2>
        <div>
        <div>
          <input type="text" value={goalVal} onChange={(e) => this.setState({goalVal: e.target.value})} />
          <button onClick={this.addGoal}> addGoal </button>
          <ol>
            {this.props.goals?.map((el) => (
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

const mapStateToProps = (state) => ({
  goals: state.goals
});

export default connect(mapStateToProps)(Example11);