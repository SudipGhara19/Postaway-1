import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './src/features/users/user.routes.js';
import HandleError from './src/error-handler/handleError.js';
import postsRouter from './src/features/posts/posts.routes.js';
import jwtAuth from './src/middlewares/jwt.middlleware.js';
import commentsRouter from './src/features/comments/comments.routes.js';
import likesRouter from './src/features/likes/likes.routes.js';


const server = express();
const port = 5800;

// to post data in {JSON}
server.use(bodyParser.json());

// for Register & SignIn redirected to user.routes.js
server.use('/api', userRouter);
//for post related APIs redirected to posts.routes.js
server.use('/api/posts', jwtAuth, postsRouter);
//for Comment APIs
server.use('/api/comments', jwtAuth, commentsRouter);
//for Likes APIs
server.use('/api/likes', jwtAuth, likesRouter);


// Handle errors of Application level and User level
server.use((err, req, res, next) => {
    console.log(err);
    if(err instanceof HandleError){
        res.status(err.code).send(err.message);
    }

    res.status(500).send("Oops! Something went wrong, please try again later.");
})



server.listen(port, ()=> {
    console.log(`Server is up & running on PORT: ${port}`);
})