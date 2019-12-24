import React, { useState } from "react";
import ReactDOM from "react-dom";
//import "./todoApp.css";
import TodoForm from './TodoForm';
import { Typography, Paper } from "@material-ui/core";
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import TodoDoneApp from "./exampleDone/TodoDoneApp";


const TodoApp =() => {
    const dataTodo = [
        "buy milk", "give disks", "cleane room"
    ]
    
    
    //const [todos, setTodos] = useState([]);
    const {todos, addTodo, deleteTodo} = useTodoState(dataTodo);

    var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

    return(
        <>
        <Paper>
            <Typography component="h5" variant="h6">
            Todos
            </Typography>
           <TodoForm saveTodo={(todoText) => {
               const trimmedText = todoText.trim();

               if (trimmedText.length > 0) { 
                   //setTodos([...todos, trimmedText]);
                   addTodo(trimmedText);
                }
           }}/>
           <TodoList todos={todos} deleteTodos={deleteTodo}
        //    {(todoIndex) => {
        //        const newTodos = todos.filter((_, index) => index !== todoIndex);
        //        setTodos(newTodos);
        //    }} 
           />
         {/* //  <TodoAppDone initItems={todoItems}/> */}
        </Paper>
        <Paper>
            <TodoDoneApp/>
        </Paper>
        </>
    );
}

export default TodoApp;