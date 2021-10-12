import {ModalWrapper} from "./ModalWrapper.styles";
import {useDispatch, useSelector} from "react-redux";
import {categories} from "../data/data";
import {ButtonWrapper} from "./ButtonWrapper.styles";
import {
  addNewTodo, changeCurrentCategoryId, changeCurrentContent, changeCurrentName, changeStatistics, cleanCurrentTodo,
} from '../store/actions';


export const ModalEditForm = ({data}) => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(state => state.todoReducer.currentTodo);

  const submitForm = (e, categoryId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addNewTodo());
    dispatch(cleanCurrentTodo());
    dispatch(changeStatistics({id: categoryId, active: 1, total: 1}));
  }

  const changeForm = (el) => {
    switch (el.id) {
      case 'name':
        dispatch(changeCurrentName(el.value));
        break;
      case 'content':
        dispatch(changeCurrentContent(el.value));
        break;
      case 'category':
        dispatch(changeCurrentCategoryId(el.value));
        break;
      default:
    }

  }

  return (
    <ModalWrapper
      display={currentTodo.num >= 0 || currentTodo.num === -2 ? 'flex' : 'none'}
      onClick={() => dispatch(cleanCurrentTodo())}>
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
            {currentTodo.num >=0 ? 'Update todo' : 'Add todo'}
          </button>
        </ButtonWrapper>
      </form>
    </ModalWrapper>
  );
};
