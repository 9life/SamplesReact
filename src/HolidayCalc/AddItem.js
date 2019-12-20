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
    name: '',
    salary: '',
    allWorkDays: '',
    holDays: '',
    //holMoney: 0,
    workDays: '',
    //wokrMoney: 0,
    //middleSalary: 0,
    result: '',
  };

  const [state, setState] = useState(initialState);

  const handleInputChange = event => {
    const { name, value } = event.target
    event.preventDefault();
    setState({ ...state, [name]: value })
    console.log(state);
  }

  const dataNum = {
    num1: 0,
    num2: 0,
    num3: 0,
    result: 0,
  }

  const [nums, setNums] = useState(dataNum);

  const handleChange = event => {
    const { name, value } = event.target

    setNums({ ...nums, [name]: value })
    console.log(nums);
  }

  const func = () => {
    let num1 = nums.num1;
    let num2 = nums.num2;
    let num3 = num1*2;

    let result = num2 + num3;
    result = num2+num1;
    console.log(nums);
    //setNums({...nums, num3: num3});
    setNums({...nums, result: result, num3: num3});
    console.log(nums);
  }



  const withPrevState = () => {
    // setState((prevState) => ({
    //   ...prevState,
    //   result: 'not empty',
    // }));
    let t = 55;
    setState({ result: t });
    //setState({result:888});
    console.log(state);
    setState({ state });
    console.log(state);
    console.log("result", state.result)
  }

  const executeTotal = () => {
    let middleSalary = null;
    let salary = state.salary;
    let holDays = state.holDays;
    let allWorkDays = state.allWorkDays;
    let workDays = state.workDays;

    middleSalary = salary / 29.3;

    console.log("salary middle = ", { middleSalary });
    middleSalary = Math.round(middleSalary);

    console.log("state.middleSalary", state.middleSalary);
    let holMoney = middleSalary * holDays;
    console.log("money holiday = ", { holMoney });
    console.log("all work days = ", { allWorkDays });
    console.log("work days = ", { workDays });
    let workMoney = salary / allWorkDays * workDays;
    console.log("money work = ", { workMoney });

    let result = Math.round(holMoney) + Math.round(workMoney);
    console.log("total = ", result);
    setState({ ...state, middleSalary: middleSalary, holMoney: holMoney, workMoney: workMoney, result: result });
    console.log(state);
  }

  // useEffect (() => {
  //   setState(state.result);
  // })

  const onClick =(event) =>{
    event.preventDefault();
    executeTotal();
    //setState({ ...prevState, fixtion: ''});
    props.addRow(state);
//   setState(initialState)
  }
  const inputRef = React.useRef(null)

  const handleSubbmit = (event) => {
    event.preventDefault();
    props.addRow(state);
  }

  return (
    <Paper className={classes.paper}>
      <form className={classes.root}

      // onSubmit={event => {
      //   event.preventDefault()
      //   if (!state.name || !state.salary) return
      //   props.addRow(state)
      //   setState(initialState)
      // }}
      >
{/* <div>
<StyleTextField
          id="standard-basic"
          label="Num1"
          variant="outlined"
          name="num1"
          value={nums.num1}
          onChange={handleChange}
        />
        <StyleTextField
          id="standard-basic"
          label="Num2"
          variant="outlined"
          name="num2"
          value={nums.num2}
          onChange={handleChange}
        />
        <StyleTextField
          id="standard-basic"
          label="result"
          variant="outlined"
          name="result"
          value={nums.result}
        />
        <Fab color="primary" aria-label="add" onClick={func}>
          <AddIcon />
        </Fab>
</div> */}
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
        <Fab color="primary" aria-label="add" onClick={onClick} ref={inputRef}>
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