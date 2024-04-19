import express from 'express';
import PostController from './posts.controller.js';
import upload from '../middlewares/fileUpload.middleware.js';

const postsRouter = express.Router();
const postController = new PostController();

postsRouter.get('/', postController.getByUserCred);
postsRouter.get('/all', postController.getAllPosts);
postsRouter.get('/:id', postController.getById);
postsRouter.post('/', upload.single('imageUrl'), postController.addPost);

export default postsRouter;