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
import AppUsers from "./crud/AppUsers";
import Home from './Home';
import HolCalc from './HolidayCalc/AppHC';
import ProductList from './ShopingCartExmpl/ShopApp';
import Shop from './shoppingCart/ShoppingApp';
import TodoApp from './todoList/TodoApp';

export default function App() {
  return (
   <>

<Router>
    <Layout>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/calc" component={Calc}/> 
        <Route path="/fire" component={FirePlace}/>
        <Route path="/todo" component={TodoApp}/>
        <Route path="/holcalc" component={HolCalc}/>
        <Route path="/crud" component={AppUsers}/>
        <Route path="/productlistexmpl" component={ProductList}/>
        <Route path="/shop" component={Shop}/>
        <Route render={function() {
          return <p>Not Found</p>}
        }/>
      </Switch>

    </Layout>
      </Router>
</>
  );
}