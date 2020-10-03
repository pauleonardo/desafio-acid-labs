import {gql} from '@apollo/client';

const GET_TODOS = gql`
    query GetTodos{
        todos{
            data{
                id,
                title,
                completed,
                user{
                    id,
                    name
                }
            }
        }
    }
`;

export {
    GET_TODOS,
}
