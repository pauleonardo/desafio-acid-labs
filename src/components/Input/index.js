import React, {useState} from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

function Input(props) {
    const [text, setText] = useState('');
    const {addTodo} = props;
    const handleCreateTodo = () => {
        addTodo(text)
    };
    return (
        <div className={"input-box"}>
            <input
                type="text"
                placeholder="Todo field..."
                onChange={(event) => setText(event.target.value)}
            />
            <button onClick={handleCreateTodo}> Add todo</button>
        </div>
    );
}

Input.propTypes = {
    addTodo: PropTypes.func
};

export default Input;
