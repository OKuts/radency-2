import React from 'react';
import {useDispatch} from 'react-redux';
import {CHANGE_IS_SHOW_ALL, DELETE_ALL_TODOS, DELETE_STATISTICS} from '../../redux/reducers/actions';

export const Header = ({headerData}) => {
  const dispatch = useDispatch();


  const headerHandler = (iconType) => {
    if (iconType === 'showAll') {
      dispatch({type: CHANGE_IS_SHOW_ALL})
    } else {
      dispatch({type: DELETE_ALL_TODOS});
      dispatch({type: DELETE_STATISTICS});
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
