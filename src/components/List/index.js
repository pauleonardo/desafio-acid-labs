import React from 'react';
import "./styles.css"
import Item from "../Item";

function List() {
    return (
        <div className={"list-items-container"}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}

export default List
