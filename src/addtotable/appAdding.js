
import React, { useState, useEffect } from "react";
import AddForm from './AddForm';
import DataTable from './DataTable';

const AppExmpl = () => {

    const dataNums = [
      {id:1, num1: 2, num2: 3, result: 50},
      {id:2, num1: 1, num2: 4, result: 51},
    ];
  
    const [rows, setRows] = useState(dataNums);
  
    const addRow = (row, r) => {
      row.id = rows.length + 1;
      row.result = r;
     setRows([ ...rows, row]);
      console.log(rows);
    };
  
    useEffect(() => {

    },[rows]);
    
    return (
      <>
        <AddForm addRow={addRow} />
        <DataTable rows={rows} />
      </>
    );
  };
  export default AppExmpl;