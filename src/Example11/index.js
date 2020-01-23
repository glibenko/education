import React, { Component } from 'react';
import connect from '../connect';
import * as ownActions from './actions';

const combineActions = (actions) => {
  let obj = {};
  Object.keys(actions).forEach(el => {
    obj[el] = (dispatch, data) => dispatch(ownActions[el](data))
  })
  return obj;
}

const actions = combineActions(ownActions);


class Example11 extends Component {
  state = {
    todoVal: '',
    goalVal: ''
  }

  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(() => {
      actions.loadData(dispatch);
    }, 1000);
  }

  render() {
    const {goalVal} = this.state;
    const { dispatch, goals: { data, loaded } } = this.props;

    return (
      <div className="App">
        <h2>My own Redux + connect</h2>
        <div>
        <div>
          <input type="text" value={goalVal} onChange={(e) => this.setState({goalVal: e.target.value})} />
          <button onClick={() => actions.addGoals(dispatch, goalVal)}> addGoal </button>
          <ol>
            {!loaded && (<div> Loading... </div>)}
            {data?.map((el) => (
              <ul onClick={() => actions.deleteGoal(dispatch, el)} key={el.id}>
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

// const mapDispatchToProps = (dispatch) => ({
//   let obj = {};
//   Object.keys(actions).forEach(el => {
//     obj[el] = (dispatch, data) => dispatch(ownActions[el](data))
//   })
//   return obj;
// });

export default connect(mapStateToProps)(Example11);