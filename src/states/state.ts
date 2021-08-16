import * as reducers from './reducers';
import thunk from 'redux-thunk';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

export default createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);