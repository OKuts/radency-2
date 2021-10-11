import React, {useRef, useState} from 'react';
import {ModalWrapper} from "./ModalWrapper.styles";
import {useDispatch, useSelector} from "react-redux";
import {categories} from "../data/data";
import {SET_CURRENT_TODO} from "../store/actions";
import {ButtonWrapper} from "./ButtonWrapper.styles";

const submitForm = (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(8888888)

}

export const ModalEditForm = ({data}) => {
  const dispatch = useDispatch();
  const modal = useRef();
  const currentTodo = useSelector(state => state.todoReducer.currentTodo);
  const todos = useSelector(state => state.todoReducer.todos);
  const [todoName, setTodoName] = useState(currentTodo >= 0 ? todos[currentTodo].name: '');
  const [todoContent, setTodoContent] = useState(currentTodo >= 0 ? todos[currentTodo].content: '');
  // const [todoCategoryId, setTodoCategoryId] = useState(currentTodo >= 0 ? todos[currentTodo].categoryId: '');

  // console.log(currentTodo);
  return (
    <ModalWrapper
      ref={modal}
      display={currentTodo >= 0 || currentTodo === -2 ? 'flex' : 'none'}
      onClick={() => dispatch({type: SET_CURRENT_TODO, payload: -1})}>
      <form onClick={(e) => e.stopPropagation()}>
        <label htmlFor="category">Select category</label>
        <select id="category" name="category">
          {Object.keys(categories).map(item => <option key={item} value={item}>{categories[item].name}</option>)}
        </select>

        <label htmlFor="name">Todo's name</label>
        <input
          id="name"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}/>

        <label htmlFor="content">Content</label>
        <textarea
          onChange={(e) => setTodoContent(e.target.value)}
          value={todoContent}
          id="content"
          name="content"
          type="text">

        </textarea>
        <ButtonWrapper>
          <button onClick={submitForm}>Add todo</button>
        </ButtonWrapper>
      </form>
    </ModalWrapper>
  );
};
