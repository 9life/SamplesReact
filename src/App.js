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
import Weather from './weather/Wapp';
import Wthr2App from './weather/wthr2/Wthr2App';
import Photos from './FechExmpl/Photos';
import Game from './TicTacToe/Game';

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
        <Route path="/weather" component={Weather}/>
        <Route path="/weather2" component={Wthr2App}/>
        <Route path="/tictactoe" component={Game}/>
        <Route path="/fetch" component={Photos}/>
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