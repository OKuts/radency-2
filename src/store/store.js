import {combineReducers, createStore} from 'redux';
import {todoReducer} from './todoReduser';
import {statisticsReducer} from './statisticsReduser';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todoReducer,
  statisticsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
