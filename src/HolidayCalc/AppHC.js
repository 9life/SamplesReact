import React, { useState } from 'react';

import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Calc from '../Calc';
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

export default function AppHC() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <MenuList>
                  <MenuItem component={Link} to="/calc">Calc</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Paper>
              </div>
    )
}