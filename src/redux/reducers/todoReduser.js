import {categories, todos} from '../../data/data';
import {initStatistics} from "../../data/initStatistics";

const initialState = {
  todos: todos || [],
  statistics: initStatistics(todos, categories),
}


export const todoReducer = (state = initialState, action) => {

  return state;
}
