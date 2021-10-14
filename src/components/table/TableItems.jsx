import {categories} from '../../data/data';
import {extractDates} from '../../helpers/extractDates';
import {dateFormat} from '../../helpers/dateFormat';
import {useDispatch} from 'react-redux';
import {archiveTodo, deleteTodo, setCurrentTodoId} from '../../toolkitStore/todosSlice';
import {changeStatistics} from '../../toolkitStore/statisticsSlice';

const TableDataJsx = ({data, bodyType, isShowAllTodos}) => {
  const dispatch = useDispatch();

  const bodyHandler = (id, categoryId,  iconType) => {
    switch (iconType) {

      case 'edit':
        dispatch(setCurrentTodoId(id));
        break;

      case 'archive':
        dispatch(archiveTodo(id));
        dispatch(changeStatistics({ categoryId, active: -1, total: 0 }));
        break;

      case 'delete':
        dispatch(deleteTodo(id));
        dispatch(changeStatistics({ categoryId, active: -1, total: -1 }));
        break;

      case 'extract':
        dispatch(archiveTodo(id));
        dispatch(changeStatistics({ categoryId, active: 1, total: 0 }));
        break;
      default:
    }
  }

  const getIcons = (flag, id, categoryId) => {

    return flag
      ? <>
        <i onClick={() => bodyHandler(id, categoryId,'edit')} className="fas fa-pen click_icons"></i>
        <i onClick={() => bodyHandler(id, categoryId,'archive')} className="far fa-file-archive click_icons"></i>
        <i onClick={() => bodyHandler(id, categoryId,'delete')} className="far fa-trash-alt click_icons"></i>
      </>
      : <i onClick={() => bodyHandler(id, categoryId,'extract')} className="fas fa-upload click_icons"></i>
  }

  return data.map((item, i) =>
    bodyType === 'todos'
      ? (isShowAllTodos || item.active) &&
          <tr key={item.id}>
            <td><i className={categories[item.categoryId].icon + ' circle'}></i>{item.name}</td>
            <td>{dateFormat(item.created)}</td>
            <td>{categories[item.categoryId].name}</td>
            <td>{item.content}</td>
            <td>{extractDates(item.content)}</td>
            <td className='icons'>
              {getIcons(item.active, item.id, item.categoryId)}
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
