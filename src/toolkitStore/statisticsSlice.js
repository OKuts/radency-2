import {createSlice} from "@reduxjs/toolkit";

import {categories, todos} from '../data/data';
import {initStatistics} from '../data/initStatistics';

export const statisticsSlice = createSlice({
  name: 'statistics',

  initialState: {
    statistics: initStatistics(todos, categories),
  },

  reducers: {
    deleteStatistics(state) {
      const statisticsCopy = {...state.statistics};
      Object.keys(statisticsCopy).forEach(item => {
        statisticsCopy[item].active = 0;
        statisticsCopy[item].total = 0;
      })
      state.statistics = statisticsCopy;
    },

    changeStatistics(state, action) {
      const statisticsCopy = {...state.statistics};
      Object.keys(statisticsCopy).forEach(item => {
        if (action.payload.id === item) {
          statisticsCopy[item].active += action.payload.active;
          statisticsCopy[item].total += action.payload.total;
        }
      });
      state.statistics = statisticsCopy;
    },
  }
});

export const {deleteStatistics, changeStatistics} = statisticsSlice.actions

export default statisticsSlice.reducer;
