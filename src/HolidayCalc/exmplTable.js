import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DelIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

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

const AppExmpl = () => {

  const dataNums = [
    {id:1, num1: 2, num2: 3, result: 50},
    {id:2, num1: 1, num2: 4, result: 51},
  ];

  const [rows, setRows] = useState(dataNums);

  const addRow = row => {
   // row.id = nums.id + 1;
   setRows({ ...row});
    console.log(row);
  };

  return (
    <>
      <AddItem addRow={addRow} />
      <AppTable rows={rows} />
    </>
  );
};
export default AppExmpl;

const AddItem = props => {
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
    // console.log(state);
  };

  const func = () => {
    let num1 = state.num1;
    let num2 = state.num2;
    let num3 = num1 * 2;

    let result = num2 + num3;
    result = num2 + num1;
    //console.log(state);
    //setNums({...nums, num3: num3});
    setState({ ...state, result: result });
    //console.log(state);
  };

  const onClick = event => {
    event.preventDefault();
    func();
    props.addRow(state);
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

const AppTable = (props) => {
  const classes = useStyles();

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>num1</TableCell>
              <TableCell align="right">num2</TableCell>
              <TableCell align="right">result</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.num1}
                </TableCell>
                <TableCell align="right">{row.num2}</TableCell>
                <TableCell align="right">{row.result}</TableCell>
                <TableCell align="right">
                  <Fab color="primary" size="small" aria-label="edit">
                    <EditIcon />
                  </Fab>
                  <Fab color="secondary" size="small" aria-label="delete">
                    {/* onClick={() => props.deleteRow(row.id)} */}
                    <DelIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
