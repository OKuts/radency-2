import {combineReducers, createStore} from 'redux';
import {todoReducer} from './todoReducer';
import {statisticsReducer} from './statisticsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todoReducer,
  statisticsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
