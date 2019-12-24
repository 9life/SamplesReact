import React, { useState, useEffect } from "react";
//import localforage from "localforage";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";
import { Typography, Paper, TextField, List } from "@material-ui/core";
import './style.css';


const TodoDoneApp = () => {
    const initTodo = [
        {id: 1, name: "buy milk", status: false},
        {id: 2, name: "give disks", status: false},
        {id: 3, name: "cleane room", status: true},
    ]

    const [todos, setTodos] = useState(initTodo);

    const [value, setValue] = useState("");

    //   useEffect(() => {
    //     localforage.setItem("todos", todos);
    //   }, [todos]);

    //   useEffect(() => {
    //     localforage.getItem("todos", (_, value) => {
    //       if (value) setTodos(value);
    //     });
    //   }, []);

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

    return (
        <div>
            <p>Todos with completed action</p>
            <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onValueChange}
                onKeyDown={handleKeyPress}
                // {event => { setValue(event.target.value); }}
                value={value}
            />
            <p>active todos</p>
            <List id="incomplete-tasks">
                {todos
                    .filter(todo => !todo.status)
                    .map(todo => (
                        <TodoItem
                            todo={todo}
                            handleCheckboxChange={handleCheckboxChange}
                            deleteTodo={deleteTodo}
                        />
                    ))}
            </List>
            <p>inactive todos</p>
            <List id="completed-tasks">
                {todos
                    .filter(todo => todo.status)
                    .map(todo => (
                        <TodoItem
                            todo={todo}
                            handleCheckboxChange={handleCheckboxChange}
                            deleteTodo={deleteTodo}
                        />
                    ))}
            </List>

        </div>
    )
}
export default TodoDoneApp;