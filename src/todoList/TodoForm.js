import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from './useInputState';


const TodoForm = ({ saveTodo }) => {
  //const [value, setValue] = useState("");
  const {value, reset, onChange} = useInputState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        //setValue('');
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        // {event => { setValue(event.target.value); }}
        value={value}
      />
    </form>
  );
};
export default TodoForm;
