// import Header from './Header';
// import Footer from './Footer';
import NavMenu from "./NavMenu";
import React from "react";
import DateTime from "./DateTime";
// import TableHol from './TableHol';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Layout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <DateTime />
          </Paper>
        </Grid>
        {/* <header className="grid-item header">
                                <DateTime />
                </header> */}
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <NavMenu />
          </Paper>
        </Grid>
        {/* <nav className="grid-item nav">
                    <NavMenu />
                </nav> */}
        <Grid item xs={10}>
          <Paper className={classes.paper}>{props.children}</Paper>
        </Grid>
        {/* <main className="grid-item main">
                    {/* <TableHol/> */}
        {/* {props.children}
                </main> */} 
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p>footer</p>
          </Paper>
        </Grid>
        {/* <footer className="grid-item footer">
                    <p>footer</p>
                </footer> */}
      </Grid>
    </div>
  );
}
