import React, { Component } from 'react';
import connect from '../connect';
import * as ownActions from './actions';

class Example11 extends Component {
  state = {
    todoVal: '',
    goalVal: ''
  }

  componentDidMount() {
    // const { dispatch } = this.props;
    setTimeout(() => {
      this.props.actions.loadData();
    }, 1000);
  }

  render() {
    const {goalVal} = this.state;
    const {goals: { data, loaded }, actions} = this.props;

    console.log('dd', this.props)

    return (
      <div className="App">
        <h2>My own Redux + connect</h2>
        <div>
        <div>
          <input type="text" value={goalVal} onChange={(e) => this.setState({goalVal: e.target.value})} />
          <button onClick={() => actions.addGoals(goalVal)}> addGoal </button>
          <ol>
            {!loaded && (<div> Loading... </div>)}
            {data?.map((el) => (
              <ul onClick={() => actions.deleteGoal(el)} key={el.id}>
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
  goals: state.goals11,
  all: state
});

const combineActions = (actions, dispatch) => {
  let obj = {};
  Object.keys(actions).forEach(el => {
    obj[el] = (data) => dispatch(ownActions[el](data))
  })
  return obj;
}

const mapDispatchToProps = (dispatch) => ({
  actions: combineActions(ownActions, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(Example11);