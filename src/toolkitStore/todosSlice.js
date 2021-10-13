import {todos} from '../data/data';
import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',

    initialState: {
      todos: todos || [],
      isShowAllTodos: false,
      currentTodo: {
        categoryId: '0',
        id: -1,
        name: '',
        content: ''
      }
    },

    reducers: {
      addNewTodo: state => {
        const current = state.currentTodo;
        current.id = state.todos.length + 1;
        current.created = Date.now();
        current.active = true;
        state.todos.push(current)
      },
      changeCurrentContent: (state, action) => {
        state.currentTodo.content = action.payload;
      },
      changeCurrentName: (state, action) => {
        state.currentTodo.name = action.payload;
      },
      changeCurrentCategoryId: (state, action) => {
        state.currentTodo.categoryId = action.payload;
      },
      cleanCurrentTodo: state => {
        state.currentTodo = {categoryId: '0', num: -1, name: '', content: ''}
      },
      setCurrentTodoId: (state, action) => {
        const el = action.payload ? state.todos.filter(todo => todo.id === action.payload)[0] : null;
        state.currentTodo = {
          id: el ? action.payload :  0,
          categoryId: el ? el.categoryId : '0',
          name: el ? el.name : '',
          content: el ? el.content : '',
        }
      },
      changeIsShowAll: state => {
        state.isShowAllTodos = !state.isShowAllTodos;
      },
      deleteAllTodos: state => {
        state.isShowAllTodos = false;
        state.todos = [];
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
      archiveTodo: (state, action) => {
        state.todos = state.todos.map(item => {
          if (item.id === action.payload) item.active = !item.active;
          return item
        })
      },
      editTodo: (state, action) => {
        state.todos = state.todos.map(item => {
          if (item.id !== action.payload) return item;
          item.name = state.currentTodo.name;
          item.categoryId = state.currentTodo.categoryId;
          item.content = state.currentTodo.content;
          return item
        })
      }
    },
  }
)

export const {
  addNewTodo,
  changeCurrentContent,
  changeCurrentName,
  changeCurrentCategoryId,
  cleanCurrentTodo,
  setCurrentTodoId,
  changeIsShowAll,
  deleteAllTodos,
  deleteTodo,
  archiveTodo,
  editTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
