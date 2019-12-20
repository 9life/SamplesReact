import React from "react";
import ReactDOM from "react-dom";
//import "./todoApp.css";
import TodoList from './todoList';

var destination = document.querySelector("#container");

const todoApp =() => {
    return(
        <div>
           <TodoList/>
           
        </div>//,
        //destination
    );
}

export default todoApp;