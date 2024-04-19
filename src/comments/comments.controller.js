import HandleError from "../error-handler/handleError.js";
import CommentModel from "./comments.model.js";


export default class CommentController{

    // retrive comments for a specific post
    getComments(req, res){
        const postId = req.params.id;
        const postComments = CommentModel.getAll(postId);

        if(postComments.length <= 0){
            throw new HandleError(400, "No comments in this post.")
        }else{
            res.status(200).send(postComments);
        }
    }

    // add Comment
    addComment(req, res){
        // body -> raw -> JSON -> "content": "anything" ::::::::::: in postman
        const content = req.body.content;
        const userId = req.userId;
        const postId = req.params.id;
        

        const newComment = CommentModel.add(postId, userId, content);
        res.status(200).send(newComment);
    }

    //deleting comment
    deleteComment(req, res){
        const userId = req.userId;
        const commentId = req.params.id;

        CommentModel.delete(commentId, userId);
        res.status(200).send("Comment deleted.")
    }

    //Updating Comment
    updateComment(req, res){
        const userId = req.userId;
        const id = req.params.id;
        // body -> raw -> JSON -> "content": "anything" ::::::::::: in postman
        const content = req.body.content;

        const updatedComment = CommentModel.update(id, userId, content);
        res.status(200).send(updatedComment);
    }
}