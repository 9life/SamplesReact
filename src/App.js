import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FirePlace from './FirePlace';
import DateTime from './DateTime';

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
          defaultActiveKey="/home"
          className="flex-column"
        >
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </nav>

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
        <form className="form-inline">
          <div className="input-group">
            <InputGroup className="mb-3 inputbox">
              <div className="form-group">
                <FormControl
                  placeholder="number one"
                  aria-label="num1"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="form-group">
                <FormControl
                  placeholder="number two"
                  aria-label="num2"
                  aria-describedby="basic-addon1"
                />
              </div>

            <div className="input-group-btn">
              <Button variant="success">Success</Button>
            </div>
            <div className="form-group">
                <FormControl
                  placeholder="sum"
                  aria-label="sum"
                  aria-describedby="basic-addon1"
                />
              </div>
              </InputGroup>
          </div>
        </form>

        <div>
          <p>example</p>
          <FirePlace />
        </div>
      </body>

      <footer className="grid-item footer">footer</footer>
    </div>
  );
}

export default App;
