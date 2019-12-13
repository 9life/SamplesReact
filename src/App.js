import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Table from "react-bootstrap/Table";
import FirePlace from './FirePlace';
// import DateTime from './DateTime';
import Calc from './Calc';
// import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Layout from './Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import TableHol from "./TableHol";

export default function App() {
  return (
   <>

<Router>
    <Layout>

      <Switch>
        <Route exact path="/" component={TableHol}/>
        <Route path="/calc" component={Calc}/> 
        <Route path="/fire" component={FirePlace}/>
        <Route render={function() {
          return <p>Not Found</p>}
        }/>
      </Switch>

    </Layout>
      </Router>
</>
  );
}