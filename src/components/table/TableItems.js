import React from 'react';
import {categories} from "../../data/data";
import {extractDates} from "../../helpers/extractDates";
import {dateFormat} from "../../helpers/dateFormat";

const TableDataJsx = ({data, bodyType}) => {

  return data.map((item, i) =>
    bodyType === 'todos'
    ? <tr key={item.created}>
        <td>{item.name}</td>
        <td>{dateFormat(item.created)}</td>
        <td>{categories[item.categoryId].name}</td>
        <td>{item.content}</td>
        <td>{extractDates(item.content)}</td>
      </tr>
    : <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.active}</td>
        <td>{item.total - item.active}</td>
      </tr>
  )
};

export const TableItems = ({bodyData, bodyType}) => {
  console.log(bodyData, bodyType)
  const outData = bodyType === 'todos'
    ? [...bodyData]
    : Object.keys(bodyData).reduce((out, item) => [...out, bodyData[item]], [])

  return (
    <tbody>
      <TableDataJsx data = {outData} bodyType={bodyType}/>
    </tbody>
  );
};
