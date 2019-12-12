import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import FirePlace from './FirePlace';
import DateTime from './DateTime';
import Calc from './Calc';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App grid">
      <header className="grid-item header">
        {" "}
        <DateTime />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <nav className="grid-item nav">
      <Nav
          variant="tabs"
          sticky="top"
          defaultActiveKey="/"
          className="flex-column"
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link eventKey="/calc" href="/calc" >Calc</Nav.Link>
          <Nav.Link eventKey="/fire" href="/fire">Fire</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </nav>
      
      <Router>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/calc"><Calc/></Route>
        <Route path="/fire"><FirePlace/></Route>
      </Switch>
      </Router>



      <body className="grid-item main">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        {/* <Calc/> */}

        <div>
          <p>example</p>
          {/* <FirePlace /> */}
        </div>
      </body>

      <footer className="grid-item footer">footer</footer>
    </div>
  );
}

export default App;
