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

const useStyles = makeStyles({
    table: {
      minWidth: 300
      //  maxWidth: 750,
    }
  });

const DataTable = props => {
    const classes = useStyles();
return(
    <Paper>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">allWorkDays</TableCell>
                <TableCell align="right">holDays</TableCell>
                <TableCell align="right">holMoney</TableCell>
                <TableCell align="right">workDays</TableCell>
                <TableCell align="right">workMoney</TableCell>
                <TableCell align="right">total</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.allWorkDays}</TableCell>
                  <TableCell align="right">{row.holDays}</TableCell>
                  <TableCell align="right">{row.holMoney}</TableCell>
                  <TableCell align="right">{row.workDays}</TableCell>
                  <TableCell align="right">{row.workMoney}</TableCell>
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