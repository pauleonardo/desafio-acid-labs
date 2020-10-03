import {ApolloClient, InMemoryCache} from '@apollo/client';

let client;

function assignClient() {
    if(!!client) return client;
    client = new ApolloClient({
        uri: process.env.REACT_APP_GRAPHQL_URL,
        cache: new InMemoryCache()
    });
    return client;
}

export default assignClient()
