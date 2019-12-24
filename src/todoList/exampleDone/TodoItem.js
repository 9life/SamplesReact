import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({ todo, handleCheckboxChange, deleteTodo }) => (
    <>
    <ListItem key={todo.id}>
        <Checkbox checked={todo.status} onChange={() => handleCheckboxChange(todo.id)} />
        <ListItemText primary={todo.name} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => { deleteTodo(todo.id); }}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    </>
);

export default TodoItem;