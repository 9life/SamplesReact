import React, {useState} from 'react';

const todoList = () => {
   // const [item, setItem] = useState('');

    // const addItem= (e) => {
    //     if (_inputElement.value !== "") {
    //         let newItem = {
    //             text: _inputElement.value,
    //             key: Date.now(),
    //         }
    //         setItem( (prevState) => {
    //             item: prevState.item.concat(newItem)
    //         })
    //     }
    // }
    //onSubmit={addItem}
    //ref={(a) => _inputElement = a}
    return (
        <div className="todoListMain">
            <div className="header">
                <form >
                    <input 
                    placeholder="enter task">
                    </input>
                    <button type="submit">+</button>
                </form>
            </div>
        </div>
    )
}
export default todoList;