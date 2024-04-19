import express from 'express';
import PostController from './posts.controller.js';

const postsRouter = express.Router();
const postController = new PostController();

postsRouter.get('/all', postController.getAllPosts);
postsRouter.get('/:id', postController.getById);

export default postsRouter;