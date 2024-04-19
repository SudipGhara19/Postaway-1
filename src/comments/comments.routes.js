
import express from 'express';
import CommentController from './comments.controller.js';

const commentsRouter = express.Router();
const commentController = new CommentController();

commentsRouter.get('/:id', commentController.getComments);


export default commentsRouter;