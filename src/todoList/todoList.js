import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({todos, deleteTodos}) => {
    return(
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()}>
                <Checkbox tabIndex={-1} />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => {deleteTodos(index);}}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
    )
};
export default TodoList;
