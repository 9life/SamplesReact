import React from 'react';

const todoList = () => {
    return (
        <div className="todoListMain">
            <div className="header">
                <form>
                    <input placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
        </div>
    )
}
export default todoList;