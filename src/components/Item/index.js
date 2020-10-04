import React from 'react';
import "./styles.css"

function Item() {
    return (
        <div className="container-item">
            <div className={"container-checkbox-item"}>
                <label className={'checkbox-item'}>
                    Lorem ipsum.
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                <div className="checkbox-item-actions">
                    <i className="action">edit</i>
                    <i className="action action--edit">delete</i>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Item;
