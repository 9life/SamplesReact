import React from "react";

import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Link ,
  } from "react-router-dom";

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));

export default function NavMenu() {
  const classes = useStyles();

 return (
<div className={classes.root}>
              <Paper className={classes.paper}>
                <MenuList>
                  <MenuItem component={Link} to="/">Home</MenuItem>
                  <MenuItem component={Link} to="/calc" >Calc</MenuItem>
                  <MenuItem component={Link} to="/fire">Fire</MenuItem>
                  <MenuItem component={Link} to="/todo">Todo list</MenuItem>
                  <MenuItem component={Link} to="/weather">Weather</MenuItem>
                  <MenuItem component={Link} to="/weather2">Weather2</MenuItem>
                  <MenuItem component={Link} to="/fetch">Fetch example</MenuItem>
                  <MenuItem component={Link} to="/holcalc">Holiday calc</MenuItem>
                  <MenuItem component={Link} to="/crud">CRUD exmpl</MenuItem>
                  <MenuItem component={Link} to="/productlistexmpl">shop exmpl</MenuItem>
                  <MenuItem component={Link} to="/shop">shop</MenuItem>
                </MenuList>
              </Paper>
              </div>
//  <Nav
//      variant="tabs"
//      sticky="top"
//      defaultActiveKey="/"
//      className="flex-column"
//    >
//      <Nav.Link as={Link} to="/">Home</Nav.Link>
//      <Nav.Link as={Link} to="/calc" >Calc</Nav.Link>
//      <Nav.Link as={Link} to="/fire">Fire</Nav.Link>
//      <Nav.Link as={Link} to="/holcalc">Hol calc</Nav.Link>
//      <Nav.Link as={Link} to="/crud">CRUD exmpl</Nav.Link>
//      <Nav.Link as={Link} eventKey="disabled" disabled>
//        Disabled
//      </Nav.Link>
//    </Nav>
//    </>
 );
}