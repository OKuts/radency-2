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
    text-align: left;
    
    &:last-child {
      //text-align: right;
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
      cursor: pointer;
    }
    
    &.circle:hover {
      transform: none;
      cursor: inherit;
    }
  }
  
  & tr {
    background: lightgray;
  }
  
  & td {
    padding: 10px 0;
    
    & i {
      color: darkgrey;
    }
    
    &:first-child {
      display: flex;
      align-items: center;

      & i {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        color: white;
        margin: 0 5px;
        background: darkgray;
      }
    }
    
    &:last-child {
      white-space: nowrap;
    }
  }
`;
