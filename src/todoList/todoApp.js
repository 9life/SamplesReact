import React, { useState } from "react";
import ReactDOM from "react-dom";
//import "./todoApp.css";
import TodoForm from './TodoForm';
import { Typography } from "@material-ui/core";
import TodoList from './TodoList';


const TodoApp =() => {
    const [todos, setTodos] = useState([]);

    return(
        <div>
            <Typography component="h5" variant="h6">
            Todos
            </Typography>
           <TodoForm saveTodo={(todoText) => {
               const trimmedText = todoText.trim();

               if (trimmedText.length > 0) { setTodos([...todos, trimmedText]);}
           }}/>
           <TodoList todos={todos} deleteTodos={(todoIndex) => {
               const newTodos = todos.filter((_, index) => index !== todoIndex);
               setTodos(newTodos);
           }} />
        </div>
    );
}

export default TodoApp;