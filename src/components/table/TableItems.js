import React from 'react';
import {categories} from "../../data/data";
import {extractDates} from "../../helpers/extractDates";
import {dateFormat} from "../../helpers/dateFormat";
import {useDispatch} from "react-redux";
import {ARCHIVE_TODO, DELETE_TODO, EXTRACT_TODO} from "../../redux/reducers/actions";

const TableDataJsx = ({data, bodyType, isShowAllTodos}) => {
  const dispatch = useDispatch();

  const bodyHandler = (num, iconType) => {
    switch (iconType) {
      case 'edit':
        console.log(num, iconType);
        break;
      case 'archive':
        dispatch({type: ARCHIVE_TODO, payload: num});
        break;
      case 'delete':
        dispatch({type: DELETE_TODO, payload: num});
        break;
      case 'extract':
        dispatch({type: EXTRACT_TODO, payload: num});
        break;
    }
  }

  const getIcons = (flag, num) => {
    return flag
      ? <>
        <i onClick={() => bodyHandler(num, 'edit')} className="fas fa-pen click_icons"></i>
        <i onClick={() => bodyHandler(num, 'archive')} className="far fa-file-archive click_icons"></i>
        <i onClick={() => bodyHandler(num, 'delete')} className="far fa-trash-alt click_icons"></i>
      </>
      : <i onClick={() => bodyHandler(num, 'extract')} className="fas fa-upload click_icons"></i>
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
              {getIcons(item.active, i)}
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
