import {categories, todos} from '../../data/data';
import {initStatistics} from '../../data/initStatistics';
import {ARCHIVE_TODO, CHANGE_IS_SHOW_ALL, DELETE_ALL_TODOS, DELETE_TODO, EXTRACT_TODO} from './actions';

const initialState = {
  todos: todos || [],
  isShowAllTodos: false,
  statistics: initStatistics(todos, categories),
}


export const todoReducer = (state = initialState, action) => {
  switch (action.type){

    case CHANGE_IS_SHOW_ALL:
      return {...state, isShowAllTodos: !state.isShowAllTodos};

    case DELETE_ALL_TODOS:
      return {
        ...state,
        isShowAllTodos: false,
        todos: [],
        statistics: initStatistics([], categories),
      };

    case DELETE_TODO: {
      const temp = {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      }
      return {...temp, statistics: initStatistics(temp.todos, categories)};
    }

    case ARCHIVE_TODO: {
      const temp = {
        ...state, todos: state.todos.map((item, i) => {
          if (i === action.payload) item.active = false;
          return item
        })
      }
      return {...temp, statistics: initStatistics(temp.todos, categories)};
    }

    case EXTRACT_TODO: {
      console.log(8888)
      const temp = {
        ...state, todos: state.todos.map((item, i) => {
          if (i === action.payload) item.active = true;
          return item
        })
      }
      return {...temp, statistics: initStatistics(temp.todos, categories)};
    }

    default: return state;
  }
}
