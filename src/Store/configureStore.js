import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducer/';

const logger = store => next => action => {
    console.log('dispatching', action);
    next(action);
    console.log('next state', store.getState());
  };

const store = createStore(reducer, applyMiddleware(thunk));
export default store;