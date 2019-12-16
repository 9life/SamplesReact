import React from "react";
import "./App.css";
import FirePlace from './FirePlace';
import Calc from './Calc';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Layout from './Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import TableHol from "./TableHol";
import Home from './Home';

export default function App() {
  return (
   <>

<Router>
    <Layout>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/calc" component={Calc}/> 
        <Route path="/fire" component={FirePlace}/>
        <Route path="/table" component={TableHol}/>
        <Route render={function() {
          return <p>Not Found</p>}
        }/>
      </Switch>

    </Layout>
      </Router>
</>
  );
}