import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: ${props => props.display};
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  
  & form {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    border: 1px solid darkgrey;
    background: lightgray;
    font-size: 18px;
    border-radius: 5px;
    
    & label>span {
      margin-left: 10px;
      font-size: 0.7rem;
      color: crimson;
    }
    & select, input, textarea {
      margin: 10px 0 20px 0;
    }

    & textarea {
      min-height: 100px;
    }
  }
`;
