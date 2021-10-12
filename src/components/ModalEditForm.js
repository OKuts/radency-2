import React, {useEffect, useRef, useState} from 'react';
import {ModalWrapper} from "./ModalWrapper.styles";
import {useDispatch, useSelector} from "react-redux";
import {categories} from "../data/data";
import {ButtonWrapper} from "./ButtonWrapper.styles";
import {
  ADD_NEW_TODO,
  CHANGE_CURRENT_CATEGORY_ID,
  CHANGE_CURRENT_CONTENT,
  CHANGE_CURRENT_NAME, CHANGE_STATISTICS, CLEAN_CURRENT_TODO,
  SET_CURRENT_TODO
} from "../store/actions";


export const ModalEditForm = ({data}) => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(state => state.todoReducer.currentTodo);

  const submitForm = (e, categoryId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({type:ADD_NEW_TODO});
    dispatch({type:CLEAN_CURRENT_TODO});
    dispatch({type:CHANGE_STATISTICS, payload: {id: categoryId, active: 1, total: 1}});
  }

  const changeForm = (el) => {
    console.log(el.id)
    switch (el.id) {
      case 'name':
        dispatch({type:CHANGE_CURRENT_NAME, payload: el.value});
        break;
      case 'content':
        dispatch({type:CHANGE_CURRENT_CONTENT, payload: el.value});
        break;
      case 'category':
        dispatch({type:CHANGE_CURRENT_CATEGORY_ID, payload: el.value});
        break;
      default:
    }

  }

  return (
    <ModalWrapper
      display={currentTodo.num >= 0 || currentTodo.num === -2 ? 'flex' : 'none'}
      onClick={() => dispatch({type: SET_CURRENT_TODO, payload: -1})}>
      <form onClick={(e) => e.stopPropagation()}>
        <label htmlFor="category">Select category</label>
        <select
          id="category"
          onChange={(e) => changeForm(e.target)}
          value={currentTodo.categoryId}>
          {Object.keys(categories).map(item => <option key={item} value={item}>{categories[item].name}</option>)}
        </select>

        <label htmlFor="name">Todo's name</label>
        <input
          id="name"
          onChange={(e) => changeForm(e.target)}
          value={currentTodo.name}/>
        <label htmlFor="content">Content</label>
        <textarea
          onChange={(e) => changeForm(e.target)}
          value={currentTodo.content}
          id="content">

        </textarea>
        <ButtonWrapper>
          <button onClick={(e) =>submitForm(e, currentTodo.categoryId)}>
            Add todo
          </button>
        </ButtonWrapper>
      </form>
    </ModalWrapper>
  );
};
