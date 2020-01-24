import React from 'react';
import { Context } from './context';

const connect = (mapStateToProps, mapDispatchToPtops) => (Component) => {
  class Receiver extends React.Component {
    componentDidMount() {
      const { store } = this.props;
      this.store = store.subscribe(() => {
        this.forceUpdate();
      });
    }

    componentWillUnmount() {
      this.store();
    }

    render() {
      const {dispatch, getState} = this.props.store;
      const state = getState();
      const stateNeeded = mapStateToProps(state);
      const actions = mapDispatchToPtops(dispatch);

      console.log('actions', actions);

      return <Component {...stateNeeded} {...actions} dispatch={dispatch} />
    }
  }

  const Connected = () => (
    <Context.Consumer>
      {(store) => (
        <Receiver store={store}/>
      )}
    </Context.Consumer>
  );

  return Connected;
}

export default connect;