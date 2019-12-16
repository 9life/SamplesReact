import React from "react";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Link ,
  } from "react-router-dom";

export default function NavMenu() {
 return (
   <>
 <Nav
     variant="tabs"
     sticky="top"
     defaultActiveKey="/"
     className="flex-column"
   >
     <Nav.Link as={Link} to="/">Home</Nav.Link>
     <Nav.Link as={Link} to="/calc" >Calc</Nav.Link>
     <Nav.Link as={Link} to="/fire">Fire</Nav.Link>
     <Nav.Link as={Link} to="/table">Table</Nav.Link>
     <Nav.Link as={Link} eventKey="disabled" disabled>
       Disabled
     </Nav.Link>
   </Nav>
   </>
 );
}