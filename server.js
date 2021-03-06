const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    
    await apolloServer.start();
    
    apolloServer.applyMiddleware({app:app});
    
    app.use((req,res)=>{
        res.send('Hello from express apollo server');
    });
    
    app.listen(3000,()=>console.log("Server in running on port 3000"));
}

startServer();