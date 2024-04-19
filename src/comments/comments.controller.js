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
}