import {todos} from '../data/data';
import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',

    initialState: {
      todos: todos || [],
      isShowAllTodos: false,
      currentTodo: {
        categoryId: 0,
        num: -1,
        name: '',
        content: ''
      }
    },

    reducers: {
      addNewTodo: state => {
        const current = {...state.currentTodo};
        delete current['num'];
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
        state.currentTodo = {categoryId: 0, num: -1, name: '', content: ''}
      },
      setCurrentTodoNum: (state, action) => {
        state.currentTodo = {
          num: action.payload,
          categoryId: action.payload >= 0 ? state.todos[action.payload].categoryId : 0,
          name: action.payload >= 0 ? state.todos[action.payload].name : '',
          content: action.payload >= 0 ? state.todos[action.payload].content : '',
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
        state.todos = state.todos.filter((_, i) => i !== action.payload.num);
      },
      archiveTodo: (state, action) => {
        state.todos = state.todos.map((item, i) => {
          if (i === action.payload.num) item.active = !item.active;
          return item
        })
      },
      editTodo: (state, action) => {
        state.todos = state.todos.map((item, i) => {
          if (i !== action.payload) return item;
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
  setCurrentTodoNum,
  changeIsShowAll,
  deleteAllTodos,
  deleteTodo,
  archiveTodo,
  editTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
