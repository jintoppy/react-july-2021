import { useState, useRef } from "react";


const AddUser = () => {
    const [user, setUser] = useState('');
    const [inputVal, setInputVal] = useState('');
    const inputRef = useRef(); 

    const onNameChange = (e) => {
        setUser(inputVal);
    };

    const onInputChange = (e) => {
        const val = e.target.value;
        setInputVal(val.replace('d', ''));
    };

    return (
        <div>
            <input value={inputVal} onChange={onInputChange} />
            <button onClick={onNameChange}>Add</button>
            <h1>{user}</h1>
            
        </div>
    )
};

export default AddUser;