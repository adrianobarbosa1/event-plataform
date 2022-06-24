import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t1ieup2tc201wbhtj05mb4/master',
    cache: new InMemoryCache()
})