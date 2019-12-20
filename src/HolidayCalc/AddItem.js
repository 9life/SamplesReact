import React, { useState, useEffect } from 'react'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const StyleTextField = withStyles({
  root: {
    height: 50,
    // margin: '10px 0px 10px 0px',
    // padding: '10px 0px 10px 0px',

    width: 120
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    //   padding: theme.spacing(3, 1 ),
    "& > *": {
      margin: theme.spacing(1)
      //   width: 150
    }
  },
  paper: {
    padding: theme.spacing(2, 1)
  }
}));



const AddItem = (props) => {
  const classes = useStyles();

  const initialState = {
    id: null,
    name: '',
    salary: '',
    allWorkDays: '',
    holDays: '',
    holMoney: 0,
    workDays: '',
    wokrMoney: 0,
    middleSalary: 0,
    result: '',
  };

  const [state, setState] = useState(initialState);

  const handleInputChange = event => {
    const { name, value } = event.target
    event.preventDefault();
    setState({ ...state, [name]: value })
    console.log(state);
  }

  let middleSalary = null;
  let holMoney = null;
  let workMoney = null;
  let result = null;

  const executeTotal = () => {
    let salary = state.salary;
    let holDays = state.holDays;
    let allWorkDays = state.allWorkDays;
    let workDays = state.workDays;

    middleSalary = salary / 29.3;
    middleSalary = Math.round(middleSalary);

    holMoney = middleSalary * holDays;
    workMoney = Math.round(salary / allWorkDays * workDays);
    result = Math.round(holMoney) + Math.round(workMoney);
  }

  const onClick =() =>{
    executeTotal();
    props.addRow(state, middleSalary, holMoney, workMoney, result);
  }

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} >
        <StyleTextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
        <StyleTextField
          id="standard-basic"
          label="Salary"
          variant="outlined"
          name="salary"
          value={state.salary}
          onChange={handleInputChange}
        />
        <StyleTextField
          id="standard-basic"
          label="All work days"
          variant="outlined"
          name="allWorkDays"
          value={state.allWorkDays}
          onChange={handleInputChange}
        />
        <StyleTextField
          id="standard-basic"
          label="Holiday days"
          variant="outlined"
          name="holDays"
          value={state.holDays}
          onChange={handleInputChange}
        />
        <StyleTextField
          id="standard-basic"
          label="Work days"
          variant="outlined"
          name="workDays"
          value={state.workDays}
          onChange={handleInputChange}
        />
        <Fab color="primary" aria-label="add" onClick={onClick}>
          <AddIcon />
        </Fab>
        {/* <StyleTextField
          id="standard-basic"
          label="Result"
          variant="outlined"
          name="result"
          value={state.result}
        /> */}
      </form>
    </Paper>
  );
}

export default AddItem;