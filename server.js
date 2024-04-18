import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './src/users/user.routes.js';


const server = express();
const port = 5800;

// to post data in {JSON}
server.use(bodyParser.json());

// for Register & SignIn 
server.use('/api/users', userRouter);

server.listen(port, ()=> {
    console.log(`Server is up & running on PORT: ${port}`);
})