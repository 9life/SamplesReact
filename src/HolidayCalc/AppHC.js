import React, { useState } from "react";
import AddItem from "./AddItem";
import DataTable from './DataTable';
import Example from './example';



/*const usersData = [
  { id: 1, name: 'Tania', username: 'floppydiskette' },
  { id: 2, name: 'Craig', username: 'siliconeidolon' },
  { id: 3, name: 'Ben', username: 'benisphere' },
]

const [users, setUsers] = useState(usersData)

const addUser = user => {
  user.id = users.length + 1
  setUsers([...users, user])
}*/

const AppHC = () => {

  function createData(
    id,
    name,
    allWorkDays,
    holDays,
    holMoney,
    workDays,
    workMoney,
    total
  ) {
    return {id, name, allWorkDays, holDays, holMoney, workDays, workMoney, total };
  };
  
  const rowsData = [
    createData(1, "december 2019 14d", 22, 14, 0, 12, 0, 0),
    createData(2, "january 2020 2d", 17, 2, 0, 15, 0, 0),
    createData(3, "febrary 2020 14d", 19, 17, 0, 9, 0, 0)
  ];
  
  const [rows, setRows] = useState(rowsData);
  
  const addRow = row => {
    row.id= rows.length+1;
    //rows.push(rows.length);
    setRows([...rows, row]);
    console.log("add function: ", row.id);
  }

  const deleteRow = id => {
    setRows(rows.filter(row => row.id !== id))
  }


  return (
    <>
      <AddItem addRow={addRow} />
<br/>
      <DataTable rows={rows} deleteRow={deleteRow} 
/>
      {/* <br/>
      <p>example</p>
      <Example/> */}
    </>
  );
}

export default  AppHC;