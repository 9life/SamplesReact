import React, { useState } from 'react'
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

    width: 150
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
    name: "",
    salary: '',
    allWorkDays: '',
    holDays: '',
    holMoney: 0,
    workDays: '',
    wokrMoney: 0,
    middleSalary: 0,
    result: ''
  };

  const [state, setState] = useState(initialState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setState({ ...state, [name]: value })
  }

  const executeTotal = () => {
    let salaryMiddle = null;
    let salary = state.salary;
    let holDays = state.holDays;
    let allWorkDays = state.allWorkDays;
    let workDays = state.workDays;

    salaryMiddle = salary / 29.3;
    console.log("salary middle = ", {salaryMiddle});
    salaryMiddle = Math.round(salaryMiddle);
    let moneyHol = salaryMiddle * holDays;
    console.log("money holiday = ", {moneyHol});
    console.log("all work days = ", {allWorkDays});
    console.log("work days = ", {workDays});
    let moneyWork = salary / allWorkDays * workDays;
    console.log("money work = ", {moneyWork});

    let total = Math.round(moneyHol) + Math.round(moneyWork);
    console.log("total = ", {total});

    setState({ ...state, holMoney: moneyHol, wokrMoney: moneyWork, result: total });
    console.log("state after calculation = ", state);
    props.addRow(state);
    console.log("add row: ", state);

    setState(initialState);
  }



  return (
    //console.log("state after calculation = ", state);
    <Paper className={classes.paper}>

    <form
      className={classes.root}
      // onSubmit={event => {
      // event.preventDefault()
      // if (!state.name) return
      // props.addRow(state)
      //  setState(initialState)
      //   }}
      >
      
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
        <Fab color="primary" aria-label="add" onClick={executeTotal}>
          {/* onClick={executeTotal} */}
          <AddIcon />
        </Fab>
        <StyleTextField
          id="standard-basic"
          label="Result"
          variant="outlined"
          name="result"
          value={state.result}
        />
            </form>

    </Paper>

  );
}

export default AddItem;