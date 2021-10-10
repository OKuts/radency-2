import styled from 'styled-components';

export const TableCont = styled.table`
  border-spacing: 0 11px;
  width: 100%;
  
  th, td {
    padding: 10px;
  }
  
  th {
    background: darkgrey;
    color: aliceblue;
    
    &:last-child {
      text-align: right;
      white-space: nowrap;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    
  }
  & i {
    padding: 0 5px;
    
    &:hover {
      color: black;
      transform: scale(1.5);
    }
  }
  
  & tr {
    background: lightgray;
  }
`;
