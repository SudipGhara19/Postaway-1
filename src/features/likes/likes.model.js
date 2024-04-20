import HandleError from "../../error-handler/handleError.js";
import PostModel from "../posts/posts.model.js";

export default class LikesModel{
    constructor(postId, userId, id){
        this.postId = postId;
        this.userId = userId;
        this.id = id;
    }
    // get likes by postId
    static getLikes(postId){
        // Validating post is availabe or not
        const posts = PostModel.getAll();
        const post = posts.find((i) => i.id == postId);
        if(!post){
            throw new HandleError(400, "Post not found.")
        }else{
            //if post available then retrive the likes
            const postLikes = likes.filter((i) => i.postId == postId);
            if(postLikes <= 0){
                throw new HandleError(400, "No likes found at this post.");
            }
            return postLikes;
        }
    }


    // toggle like method
    static toggle(postId, userId){
        // Validating post is availabe or not
        const posts = PostModel.getAll();
        const post = posts.find((i) => i.id == postId);
        if(!post){
            throw new HandleError(400, "Post not found.")
        }else{

            const existingLikeIndex = likes.findIndex((i) => i.postId == postId && i.userId == userId);

            if(existingLikeIndex !== -1){
                // if user already liked thepost, remove the like
                likes.splice(existingLikeIndex, 1);
                return "Like removed from post.";
            }else{
                // add a new like
                likes.push(new LikesModel(postId, userId, likes.length + 1));
                return "Liked the post.";
            }
        }
    }


    
}

let likes = [
    new LikesModel(
        1,
        1,
        1
    ),
    new LikesModel(
        1,
        2,
        2
    ),
    new LikesModel(
        1,
        3,
        3
    )
]