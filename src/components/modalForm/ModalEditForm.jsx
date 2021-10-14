import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {categories} from '../../data/data';

import {ModalWrapper} from './ModalWrapper.styles';
import {ButtonWrapper} from '../ButtonWrapper.styles';

import {
  addNewTodo, changeCurrentCategoryId, changeCurrentContent, changeCurrentName, cleanCurrentTodo, editTodo,
} from '../../toolkitStore/todosSlice';
import {changeStatistics} from '../../toolkitStore/statisticsSlice';


export const ModalEditForm = ({data}) => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(state => state.todosSlice.currentTodo);

  const [isNameValid, setIsNameValid] = useState(!(currentTodo.id === '0') );
  const [isContentValid, setIsContentValid] = useState(!(currentTodo.id === '0'));

  const submitForm = (e, categoryId) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentTodo.id !== '0') {
      dispatch(editTodo(currentTodo.id));
    } else {
      dispatch(changeStatistics({categoryId, active: 1, total: 1}));
      dispatch(addNewTodo());
    }
    dispatch(cleanCurrentTodo());
  }

  const changeForm = (el) => {
    switch (el.id) {
      case 'name':
        dispatch(changeCurrentName(el.value));
        setIsNameValid(el.value.length > 4 );
        break;
      case 'content':
        dispatch(changeCurrentContent(el.value));
        setIsContentValid(el.value.length > 10 );
        break;
      case 'category':
        dispatch(changeCurrentCategoryId(el.value));
        break;
      default:
    }
  }

  useEffect(() => {
    const flag = currentTodo.id === '0';
    setIsNameValid(!flag);
    setIsContentValid(!flag);
  }, [currentTodo.id]);

  return (
    <ModalWrapper
      display={currentTodo.id >= 0 ? 'flex' : 'none'}
      onClick={() => dispatch(cleanCurrentTodo())}>
      <form onClick={(e) => e.stopPropagation()}>
        <label htmlFor="category">Select category</label>
        <select
          id="category"
          onChange={(e) => changeForm(e.target)}
          value={currentTodo.categoryId}>
          {Object.keys(categories).map(item => <option key={item} value={item}>{categories[item].name}</option>)}
        </select>

        <label htmlFor='name'>Todo's name
          {!isNameValid && <span> * No valid</span>}
        </label>
        <input
          id='name'
          onChange={(e) => changeForm(e.target)}
          value={currentTodo.name}/>
        <label htmlFor='content'>Content
          {!isContentValid && <span> * No valid</span>}
        </label>
        <textarea
          onChange={(e) => changeForm(e.target)}
          value={currentTodo.content}
          id='content'>
        </textarea>
        <ButtonWrapper>
          <button
            disabled={!isNameValid || !isContentValid}
            onClick={(e) => submitForm(e, currentTodo.categoryId)}>
            {currentTodo.id !== '0' ? 'Update todo' : 'Add todo'}
          </button>
        </ButtonWrapper>
      </form>
    </ModalWrapper>
  );
};
