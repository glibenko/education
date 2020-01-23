import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,  applyMiddleware, combineReducers} from 'redux';
import todos from './reducers/todos';
import goals from './reducers/goals';
import { goals11 } from './Example11/reducers';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Provider from './context';
// import createStore from './store';
// import combineReducers from './reducers';

const logger = store => next => action => {
  console.group(action.type);
  console.log('action: ', action);
  const result = next(action);
  console.log('next state: ', store.getState() );
  console.groupEnd();
  return result;
}

const thunk = store => next => action => {
  if (typeof action === 'function') {
    console.log('function');
    return action(store.dispatch, store.getState);
  }
    console.log('not function');
  return next(action)
}

// const store = createStore(combineReducers);
const store = createStore(combineReducers({todos, goals, goals11}), applyMiddleware(thunk, logger));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
