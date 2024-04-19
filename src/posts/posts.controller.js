
import PostModel from "./posts.model.js";
import HandleError from "../error-handler/handleError.js";

export default class PostController{

    // retrive All posts
    getAllPosts(req, res){
        const posts = PostModel.getAll();
        res.status(200).send(posts);
    }

    // retrive post based on post id
    getById(req, res){
        const id = req.params.id;
        const post = PostModel.getById(id);
        if(!post){
            throw new HandleError(404, "Post not found.");
        }else{
            res.status(200).send(post);
        }
    }

    // retrive posts based on user credentials
    getByUserCred(req, res){
        const userId = req.userId;
        const posts = PostModel.getByUserCredentials(userId);

        if(!posts){
            throw new HandleError(404, "User has no posts.\n POST YOUR THOUGHTS NOW!!!!");
        }else{
            res.status(200).send(posts);
        }
    }

    // create a new post
    addPost(req, res){
        const userId = req.userId;
        const caption = req.body;
        const imageUrl = req.file.filename;

        const post = PostModel.add(userId, caption, imageUrl);
        res.status(200).send(post);
    }
}