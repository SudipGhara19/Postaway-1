
import PostModel from "./posts.model.js";
import HandleError from "../error-handler/handleError.js";

export default class PostController{

    getAllPosts(req, res){
        const posts = PostModel.getAll();
        res.status(200).send(posts);
    }

    getById(req, res){
        const id = req.params.id;
        const post = PostModel.getById(id);
        if(!post){
            throw new HandleError(404, "Post not found.");
        }else{
            res.status(200).send(post);
        }
    }
}