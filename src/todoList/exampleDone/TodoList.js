import React, { useState, useEffect } from "react";
import { Typography, Paper, TextField, List } from "@material-ui/core";
import TodoItem from './TodoItem';

//{ todos, handleCheckboxChange, deleteTodo }
const TodoList = (props) => {
    let handleCheckboxChange = props.handleCheckboxChange;
    let deleteTodo = props.deleteTodo;
    let list = props.list;

    return (
        <>
            <List >
                {list.map(todo => (
                    <TodoItem
                        todo={todo}
                        handleCheckboxChange={handleCheckboxChange}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </List>
        </>
    );
}
export default TodoList;
