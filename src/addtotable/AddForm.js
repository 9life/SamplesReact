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

const AddForm = props => {
    const classes = useStyles();
  
    const initState = {
      id: null,
      num1: 0,
      num2: 0,
      result: 0
    };
  
    const [state, setState] = useState(initState);
  
    const handleChange = event => {
      const { name, value } = event.target;
      setState({ ...state, [name]: value });
      console.log("after handleChange()",state);
    };


    let res = null
    const func = () => {
      let num1 = state.num1;
      let num2 = state.num2;
      let num3 = num1 * 2;
  
      let result = num2 + num3;
      result = num2 + num1;
      res = result;
      //console.log("state.result",state.result);
    };
  
    const onClick = () => {
      func();
      props.addRow(state,res);
      console.log(state);
    };
    return (
      <Paper className={classes.paper}>
        <form
          className={classes.root}
  
          // onSubmit={event => {
          //   event.preventDefault()
          //   if (!state.name || !state.salary) return
          //   props.addRow(state)
          //   setState(initialState)
          // }}
        >
          <StyleTextField
            id="standard-basic"
            label="Num1"
            variant="outlined"
            name="num1"
            value={state.num1}
            onChange={handleChange}
          />
          <StyleTextField
            id="standard-basic"
            label="Num2"
            variant="outlined"
            name="num2"
            value={state.num2}
            onChange={handleChange}
          />
          <StyleTextField
            id="standard-basic"
            label="result"
            variant="outlined"
            name="result"
            value={state.result}
          />
          <Fab color="primary" aria-label="add" onClick={onClick}>
            <AddIcon />
          </Fab>
        </form>
      </Paper>
    );
  };

  export default AddForm;