import React from 'react';
import {categories} from "../../data/data";
import {extractDates} from "../../helpers/extractDates";
import {dateFormat} from "../../helpers/dateFormat";
import {useDispatch} from "react-redux";
import {
  ARCHIVE_TODO, CHANGE_STATISTICS, DELETE_TODO
} from "../../redux/reducers/actions";

const TableDataJsx = ({data, bodyType, isShowAllTodos}) => {
  const dispatch = useDispatch();

  const bodyHandler = (num, id,  iconType) => {
    switch (iconType) {

      case 'edit':
        break;

      case 'archive':
        dispatch({type: ARCHIVE_TODO, payload: { num, id }});
        dispatch({type: CHANGE_STATISTICS, payload: { id, active: -1, total: 0 }});
        break;

      case 'delete':
        dispatch({type: DELETE_TODO, payload: { num, id }});
        dispatch({type: CHANGE_STATISTICS, payload: { id, active: -1, total: -1 }});
        break;

      case 'extract':
        dispatch({type: ARCHIVE_TODO, payload: {num, id }});
        dispatch({type: CHANGE_STATISTICS, payload: { id, active: 1, total: 0 }});
        break;
      default:
    }
  }

  const getIcons = (flag, num, id) => {

    return flag
      ? <>
        <i onClick={() => bodyHandler(num, id,'edit')} className="fas fa-pen click_icons"></i>
        <i onClick={() => bodyHandler(num, id,'archive')} className="far fa-file-archive click_icons"></i>
        <i onClick={() => bodyHandler(num, id,'delete')} className="far fa-trash-alt click_icons"></i>
      </>
      : <i onClick={() => bodyHandler(num, id,'extract')} className="fas fa-upload click_icons"></i>
  }

  return data.map((item, i) =>
    bodyType === 'todos'
      ? (isShowAllTodos || item.active) &&
          <tr key={item.created}>
            <td><i className={categories[item.categoryId].icon + ' circle'}></i>{item.name}</td>
            <td>{dateFormat(item.created)}</td>
            <td>{categories[item.categoryId].name}</td>
            <td>{item.content}</td>
            <td>{extractDates(item.content)}</td>
            <td className='icons'>
              {getIcons(item.active, i, item.categoryId)}
            </td>
          </tr>
      : item.total > 0
          && <tr key={item.name}>
            <td><i className={categories[i].icon + ' circle'}></i>{item.name}</td>
            <td>{item.active}</td>
            <td>{item.total - item.active}</td>
          </tr>
  )
};

export const TableItems = ({bodyData, bodyType, isShowAllTodos}) => {
  const outData = bodyType === 'todos'
    ? [...bodyData]
    : Object.keys(bodyData).reduce((out, item) => [...out, bodyData[item]], [])

  return (
    <tbody>
      <TableDataJsx data = {outData} bodyType={bodyType} isShowAllTodos={isShowAllTodos}/>
    </tbody>
  );
};
