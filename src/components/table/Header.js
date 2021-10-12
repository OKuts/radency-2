import React from 'react';
import {useDispatch} from 'react-redux';
import {
  changeIsShowAll,
  DELETE_ALL_TODOS,
  DELETE_STATISTICS,
  deleteAllTodos,
  deleteStatistics
} from '../../store/actions';

export const Header = ({headerData}) => {
  const dispatch = useDispatch();


  const headerHandler = (iconType) => {
    if (iconType === 'showAll') {
      dispatch(changeIsShowAll());
    } else {
      dispatch(deleteAllTodos());
      dispatch(deleteStatistics());
    }
  }

  return (
    <thead>
      <tr>
        {headerData.headers.map((header, i) => <th key={i}>{header}</th>)}
        {headerData.icons
          && <th >
              {headerData.icons.map(icon =>
                <i
                  onClick={() => headerHandler(icon.action)}
                  className={icon.iconClass}
                  key={icon.action}>
                </i> )}
              </th>}
      </tr>
    </thead>
  );
};
