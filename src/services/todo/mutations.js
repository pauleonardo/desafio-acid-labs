import {gql} from "@apollo/client";

const ADD_TODO = gql`
    mutation createTodo($input:  CreateTodoInput!){
        createTodo(input: $input){
            title
            completed
        }
    }
`;

const EDIT_TODO = gql`
    mutation updateTodo($id: ID!, $input:  UpdateTodoInput!){
        updateTodo(input: $input){
            title
            completed
        }
    }
`;

const DELETE_TODO = gql`
    mutation deleteTodo($id: ID!){
        deleteTodo(id: $id)
    }
`;

export {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO
}
