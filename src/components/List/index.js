import React, {useState, useEffect} from 'react';
import "./styles.css"
import Item from "../Item";
import {useQuery, useMutation} from "@apollo/client";
import {GET_TODOS} from "../../services/todo/queries.js";
import {DELETE_TODO, ADD_TODO} from "../../services/todo/mutations.js";
import Input from "../Input"

function List() {
    const [todos, setTodos] = useState([]);
    const [deleteTodo] = useMutation(DELETE_TODO);
    const [addTodo] = useMutation(ADD_TODO);
    const {data, loading, error} = useQuery(GET_TODOS);

    useEffect(() => {
        if (loading === false && data) {
            setTodos(data.todos.data)
        }
    }, [loading, data]);

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        deleteTodo({variables: {id}})
    };

    const addTodoHandle = (text) => {
        const newTodo = {
            title: text,
            completed: false,
            id: '' + Math.floor(Math.random() * 1000) + 1,
        };
        setTodos([newTodo, ...todos]);
        addTodo({
            variables: {
                input: {
                    title: newTodo.title,
                    completed: newTodo.completed
                }
            }
        })
    };

    return (
        <div className="container-todos-form">
            <h2>Todo List</h2>
            <Input addTodo={addTodoHandle}/>
            <div className={"list-items-container"}>
                {
                    (!error) && (
                        todos.map((todo) => (
                            <Item key={`${todo.id}`} {...todo}
                                  handleDelete={handleDelete}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default List
