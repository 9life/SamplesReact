import React from 'react';
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

  const DataTable = props => {
    const classes = useStyles();
return(
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
                    <Fab color="secondary" size="small" aria-label="delete" onClick={() => props.deleteRow(row.id)}>
                      <DelIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
)}

export default DataTable;