import {todos} from '../data/data';
import {
  ADD_NEW_TODO,
  ARCHIVE_TODO, CHANGE_CURRENT_CATEGORY_ID, CHANGE_CURRENT_CONTENT, CHANGE_CURRENT_NAME,
  CHANGE_IS_SHOW_ALL, CLEAN_CURRENT_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  SET_CURRENT_TODO,
  SET_CURRENT_TODO_NUM
} from './actions';

const initialState = {
  todos: todos || [],
  isShowAllTodos: false,
  currentTodo: {
    categoryId: 0,
    num: -1,
    name: '',
    content: ''
  }
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type){

    case ADD_NEW_TODO:
      const current = {...state.currentTodo};
      delete current['num'];
      current.created = Date.now();
      current.active = true;
      return {...state,todos: [...state.todos, current]}

    case CHANGE_CURRENT_CONTENT:
      return { ...state, currentTodo: {...state.currentTodo, content: action.payload}};

    case CHANGE_CURRENT_NAME:
      return { ...state, currentTodo: {...state.currentTodo, name: action.payload}};

    case CHANGE_CURRENT_CATEGORY_ID:
      return { ...state, currentTodo: {...state.currentTodo, categoryId: action.payload}};


    case CLEAN_CURRENT_TODO:
      return {
        ...state,
        currentTodo: {
          categoryId: 0,
          num: -1,
          name: '',
          content: ''
        },
      };

    case SET_CURRENT_TODO_NUM:
      console.log(action.payload);
      return {
        ...state,
        currentTodo: {
          num: action.payload,
          categoryId: action.payload >= 0 ? state.todos[action.payload].categoryId: 0,
          name: action.payload >= 0 ? state.todos[action.payload].name: '',
          content: action.payload >= 0 ? state.todos[action.payload].content: '',
        }};

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
