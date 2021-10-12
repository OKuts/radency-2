import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  
  & button {
    padding: 4px 20px;
    font-size: 16px;
    background: darkgrey;
    border-radius: 8px;
    border: none;
    color: lightgray;
    
    &:hover {
      background: #888;
      cursor: pointer;
      color: #555;
    }

  }
`;
