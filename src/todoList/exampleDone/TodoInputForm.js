import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TodoInputForm = ({value, onValueChange, handleKeyPress}) => {
    return(
    <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onValueChange}
        onKeyDown={handleKeyPress}
        value={value}
    />
    )
}
export default TodoInputForm;