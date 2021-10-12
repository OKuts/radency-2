export const CHANGE_IS_SHOW_ALL = 'CHANGE_IS_SHOW_ALL';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const ARCHIVE_TODO = 'ARCHIVE_TODO';

export const DELETE_STATISTICS = 'DELETE_STATISTICS';
export const CHANGE_STATISTICS = 'CHANGE_STATISTICS';

export const SET_CURRENT_TODO_NUM = 'SET_CURRENT_TODO_NUM';
export const CLEAN_CURRENT_TODO = 'CLEAN_CURRENT_TODO';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const CHANGE_CURRENT_CATEGORY_ID = 'CHANGE_CURRENT_CATEGORY_ID';
export const CHANGE_CURRENT_NAME = 'CHANGE_CURRENT_NAME';
export const CHANGE_CURRENT_CONTENT = 'CHANGE_CURRENT_CONTENT';

export const changeIsShowAll = () => ({type: CHANGE_IS_SHOW_ALL});
export const deleteAllTodos = () => ({type: DELETE_ALL_TODOS});
export const deleteTodo = (payload) => ({type: DELETE_TODO, payload});
export const archiveTodo = (payload) => ({type: ARCHIVE_TODO, payload});


export const deleteStatistics = () => ({type: DELETE_STATISTICS});
export const changeStatistics = (payload) => ({type: DELETE_STATISTICS, payload});

export const setCurrentTodoNum = (payload) => ({type: SET_CURRENT_TODO_NUM, payload});
export const cleanCurrentTodo = () => ({type: CLEAN_CURRENT_TODO});
export const addNewTodo = () => ({type: ADD_NEW_TODO});
export const changeCurrentCategoryId = (payload) => ({type: CHANGE_CURRENT_CATEGORY_ID, payload});
export const changeCurrentName = (payload) => ({type: CHANGE_CURRENT_NAME, payload});
export const changeCurrentContent = (payload) => ({type: CHANGE_CURRENT_CONTENT, payload});
