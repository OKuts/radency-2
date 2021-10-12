import React from 'react';
import {useDispatch} from "react-redux";
import {SET_CURRENT_TODO_NUM} from "../store/actions";
import {ButtonWrapper} from "./ButtonWrapper.styles";



export const Button = (props) => {
  const dispatch = useDispatch();

  const onButton = (e) => {
    e.preventDefault();
    dispatch({type: SET_CURRENT_TODO_NUM, payload: -2 })
  }


  return (
    <ButtonWrapper>
      <button onClick={onButton}>
        {props.children}
      </button>
    </ButtonWrapper>
  );
};
