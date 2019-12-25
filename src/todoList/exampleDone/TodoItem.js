import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

//{ todo, handleCheckboxChange, deleteTodo }
const TodoItem = (props) => {
    let todo = props.todo;
    return (
        <>
            <ListItem key={todo.id}>
                <Checkbox checked={todo.status} onChange={() => props.handleCheckboxChange(todo.id)} />
                <ListItemText primary={todo.name} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => props.deleteTodo(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
};

export default TodoItem;