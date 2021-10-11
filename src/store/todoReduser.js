import {todos} from '../data/data';
import {ARCHIVE_TODO, CHANGE_IS_SHOW_ALL, DELETE_ALL_TODOS, DELETE_TODO, SET_CURRENT_TODO} from './actions';

const initialState = {
  todos: todos || [],
  isShowAllTodos: false,
  currentTodo: -1,
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type){

    case SET_CURRENT_TODO:
      return {...state, currentTodo: action.payload};

    case CHANGE_IS_SHOW_ALL:
      return {...state, isShowAllTodos: !state.isShowAllTodos};

    case DELETE_ALL_TODOS:
      return {
        ...state,
        isShowAllTodos: false,
        todos: [],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload.num),
      }

    case ARCHIVE_TODO:
      return { ...state, todos: state.todos.map((item, i) => {
          if (i === action.payload.num) item.active = !item.active;
          return item
        })
      }

    default: return state;
  }
}
