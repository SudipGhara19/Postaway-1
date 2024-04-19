
import express from 'express';
import LikesController from './likes.controller.js';

const likesRouter = express.Router();
const likesController = new LikesController();

likesRouter.get('/:id', likesController.getLikes);

export default likesRouter;