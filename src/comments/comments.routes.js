
import express from 'express';
import CommentController from './comments.controller.js';

const commentsRouter = express.Router();
const commentController = new CommentController();

commentsRouter.get('/:id', commentController.getComments);
commentsRouter.post('/:id', commentController.addComment);


export default commentsRouter;