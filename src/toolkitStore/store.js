import {combineReducers, configureStore} from '@reduxjs/toolkit';
import statisticsSlice from './statisticsSlice';
import todosSlice from './todosSlice';

const rootReducer = combineReducers({
  todosSlice,
  statisticsSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
