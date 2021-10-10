import React from 'react';
import {TableCont} from './Table.styles';
import {Header} from './Header';
import {TableItems} from "./TableItems";
import {useSelector} from "react-redux";

export const Table = ({headerData, bodyType}) => {
  const bodyData = useSelector(state => state[bodyType]);
  // console.log(bodyType, bodyData)
  return (
    <TableCont>
      <Header headerData={headerData}/>
      <TableItems bodyData={bodyData} bodyType={bodyType}/>
    </TableCont>

  );
};
