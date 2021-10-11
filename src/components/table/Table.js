import React from 'react';
import {TableCont} from './Table.styles';
import {Header} from './Header';
import {TableItems} from './TableItems';
import {useSelector} from 'react-redux';

export const Table = ({headerData, bodyType}) => {
  const bodyData = useSelector(state => bodyType === 'todos'
    ? state.todoReducer.todos : state.statisticsReducer.statistics);
  const isShowAllTodos = useSelector(state => state.todoReducer.isShowAllTodos);

  return (
    <TableCont>
      <Header headerData={headerData}/>
      <TableItems bodyData={bodyData} bodyType={bodyType} isShowAllTodos={isShowAllTodos}/>
    </TableCont>

  );
};
