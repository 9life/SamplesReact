import React from "react";
import ReactDOM from "react-dom";
//import "./todoApp.css";
import todoList from './todoList';

var destination = document.querySelector("#container");

const todoApp =() => {
    return(
        <div>
           <todoList/>
        </div>//,
       // destination
    );
}

export default todoApp;