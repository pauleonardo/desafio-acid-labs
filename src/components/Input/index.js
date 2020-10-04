import React from 'react';
import "./styles.css";

function Input() {
    return (
        <div className={"input-box"}>
            <input type="text" placeholder="Todo field..."/>
            <button> Add todo</button>
        </div>
    );
}

export default Input;
