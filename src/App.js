import React from 'react';
import "./styles.css"

import Input from "./components/Input"
import List from "./components/List";

function App() {
    return (
        <div className="App">
            <h2>Todo List</h2>
            <Input />
            <List/>
        </div>
    );
}

export default App;
