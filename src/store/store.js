import {combineReducers, createStore} from 'redux';
import {todoReducer} from "./todoReduser";
import {statisticsReducer} from "./statisticsReduser";

const rootReducer = combineReducers({
  todoReducer,
  statisticsReducer,
})

export const store = createStore(rootReducer);
