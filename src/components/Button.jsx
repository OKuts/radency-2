import React from 'react';
import {useDispatch} from "react-redux";

import {ButtonWrapper} from "./ButtonWrapper.styles";
import {setCurrentTodoId} from "../toolkitStore/todosSlice";

export const Button = (props) => {
  const dispatch = useDispatch();

  const onButton = (e) => {
    e.preventDefault();
    dispatch(setCurrentTodoId('0' ));
  }

  return (
    <ButtonWrapper>
      <button onClick={onButton}>
        {props.children}
      </button>
    </ButtonWrapper>
  );
};
