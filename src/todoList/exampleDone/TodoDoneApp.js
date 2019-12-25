import React, { useState, useEffect } from "react";
//import localforage from "localforage";
import ReactDOM from "react-dom";
import { Typography, Paper, TextField, List } from "@material-ui/core";
import './style.css';
import TodoInputForm from './TodoInputForm';
import TodoList from './TodoList';


const TodoDoneApp = () => {
    const initTodo = [
        {id: 1, name: "buy milk", status: false},
        {id: 2, name: "give disks", status: false},
        {id: 3, name: "cleane room", status: true},
    ]

    const [todos, setTodos] = useState(initTodo);

    const [value, setValue] = useState("");

    const onValueChange = ({ target: { value } }) => {
        setValue(value);
    };

    const addTodo = () => {
        if (value !== "") {
            setTodos([
                ...todos,
                {
                    name: value,
                    status: false,
                    id: Date.now() + Math.random(),
                }
            ]);
            setValue("");
        }
    };

    const handleKeyPress = ({ key }) => {
        if (key === "Enter") {
            addTodo();
        }
    };

    const handleCheckboxChange = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) return { ...todo, status: !todo.status };
                return todo;
            })
        );
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const listActive = todos.filter(todo => !todo.status);
    const listInactive = todos.filter(todo => todo.status);
    
    return (
        <div>
            <p>Todos with completed action</p>
            <TodoInputForm value={value} onValueChange={onValueChange} handleKeyPress={handleKeyPress}/>
            <p>active todos</p>
            <TodoList handleCheckboxChange={handleCheckboxChange} deleteTodo={deleteTodo} list={listActive}/>
            <p>inactive todos</p>
            <TodoList id="completed-tasks" handleCheckboxChange={handleCheckboxChange} deleteTodo={deleteTodo} list={listInactive}/>
            {/* <TodoCompletedList todos={todos} handleCheckboxChange={handleCheckboxChange} deleteTodo={deleteTodo} status={true}/> */}
        </div>
    )
}
export default TodoDoneApp;