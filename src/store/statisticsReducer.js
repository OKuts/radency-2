import {categories, todos} from '../data/data';
import {initStatistics} from '../helpers/initStatistics';
import { CHANGE_STATISTICS,  DELETE_STATISTICS } from './actions';

const initialState = {
  statistics: initStatistics(todos, categories),
}

export const statisticsReducer = (state = initialState, action) => {

  switch (action.type){
    case DELETE_STATISTICS: {
      const statisticsCopy = {...state.statistics};
      Object.keys(statisticsCopy).forEach(item => {
        statisticsCopy[item].active = 0;
        statisticsCopy[item].total = 0;
      })
      return {...state, statistics: statisticsCopy};
    }

    case CHANGE_STATISTICS: {
      const statisticsCopy = {...state.statistics};
      Object.keys(statisticsCopy).forEach(item => {
        if (action.payload.id === item) {
          statisticsCopy[item].active += action.payload.active;
          statisticsCopy[item].total += action.payload.total;
        }

      })
      return {...state, statistics: statisticsCopy};
    }

      default: return state;
  }
}
