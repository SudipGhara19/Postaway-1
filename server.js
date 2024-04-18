import express from 'express';

const server = express();
const port = 5800;

server.listen(port, ()=> {
    console.log(`Server is up & running on PORT: ${port}`);
})